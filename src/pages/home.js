
const Home = React.createClass({
    getInitialState: function() {
        return {
            data: "Attempting to retrieve data from api..."
        }
    },
    componentDidMount: function() {
        if (!sessionStorage.getItem("api-access-token")) {
            return;
        }
        $.ajax({
            url: 'https://fsapgttgb6.execute-api.us-west-2.amazonaws.com/dev/resources/hello',
            dataType: 'json',
            cache: false,
            crossDomain: true,
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem("api-access-token"));
            },
            success: function(result) {
                this.setState({data:"Successfully retrieved data..."});
                setTimeout(function(){
                    this.setState({data:JSON.stringify(result, undefined, 2)})
                }.bind(this), 1000);
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data:"Error retrieving data."});
                console.log(err);
            }.bind(this)
        });
    },
    render: function (){
        return (
            rel('div', {id:'wrapper'},[
                rel(Navigation, {}),
                rel('div', {id:'page-wrapper'}, [
                    rel('h1', {}, "Hello"),
                    rel('pre', {}, this.state.data)
                ])
            ])
        );
    }
});
