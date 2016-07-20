
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
    _updateBaseURL: function(e) {
        e.preventDefault();
        console.log("updateing api-base-url");
        var baseurl = document.getElementById("apibaseurl").value;
        console.log(baseurl);
        if (!baseurl) {
            this.setState({data:"Error: Please provide SailboatAPI base url"});
        } else {
            this.setState({data:"Attempting to retrieve data from api..."});
        }
        sessionStorage.setItem("api-base-url", baseurl);
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
                        rel("button", {id:"", className:"btn btn-default", onClick:this._updateBaseURL.bind(this)}, "Fetch"),
                        rel("pre", {}, this.state.data)
                    ])
                ])
            ])
        );
    }
});
