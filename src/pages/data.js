
const Data = React.createClass({
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
    render: function (){
        return (
            rel("div", {id:"wrapper"},[
                rel(Navigation, {}),
                rel("div", {id:"page-wrapper", className:"data-page"}, [
                    rel("h1", {}, "Data Entry"),
                    rel("form", {className:"form-inline"}, [

                    ])
                ])
            ])
        );
    }
});
