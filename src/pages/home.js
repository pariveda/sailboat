
const Home = React.createClass({
    getInitialState: function() {
        return {
            data: "Attempting to retrieve data from api..."
        }
    },
    componentDidMount: function() {
        this._loadData.bind(this)();
    },
    _loadData: function () {
        if (!sessionStorage.getItem("api-access-token")) {
            this.setState({data:"Error: Not logged in."});
            return;
        }
        var baseurl = document.getElementById("apibaseurl").value;
        console.log(baseurl);
        if (!baseurl) {
            this.setState({data:"Error: Please provide SailboatAPI base url"});
            return;
        }
        $.ajax({
            url: baseurl + "resources/hello",
            dataType: "json",
            cache: false,
            crossDomain: true,
            beforeSend: function(xhr){
                xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem("api-access-token"));
            },
            success: function(result) {
                this.setState({data:"Successfully retrieved data..."});
                setTimeout(function(){
                    this.setState({data:JSON.stringify(result, undefined, 2)})
                }.bind(this), 500);
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data:"Error retrieving data."});
                console.log(err);
            }.bind(this)
        });
    },
    _updateAPIInfo: function(e) {
        e.preventDefault();
        console.log("updateing api info");
        var baseurl = document.getElementById("apibaseurl").value;
        var token = document.getElementById("apitoken").value;
        console.log(baseurl);
        if (!baseurl || !token) {
            this.setState({data:"Error: Please provide valid SailboatAPI base url and jwt token"});
        } else {
            this.setState({data:"Attempting to retrieve data from api..."});
        }
        sessionStorage.setItem("api-base-url", baseurl);
        sessionStorage.setItem("api-access-token", token);
        this._loadData();
    },
    render: function (){
        return (
            rel("div", {id:"wrapper"},[
                rel(Navigation, {}),
                rel("div", {id:"page-wrapper", className:"home-page"}, [
                    rel("h1", {}, "Home Page"),
                    rel("form", {className:"form-inline"}, [
                        rel("label", {for:"apibaseurl"}, "API Base URL:"),
                        rel("input", {id:"apibaseurl", className:"form-control", defaultValue:sessionStorage.getItem("api-base-url")}),
                        rel("label", {for:"apitoken"}, "API JWT Token:"),
                        rel("input", {id:"apitoken", className:"form-control", defaultValue:sessionStorage.getItem("api-access-token")}),
                        rel("button", {className:"btn btn-info", onClick:this._updateAPIInfo.bind(this)}, "Update"),
                        rel("pre", {}, this.state.data)
                    ])
                ])
            ])
        );
    }
});
