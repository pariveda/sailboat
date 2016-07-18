
const Home = React.createClass({
    getInitialState: function() {
        return {
            data: "hi"
        }
    },
    componentDidMount: function() {
        if (!sessionStorage.getItem("api-access-token")) {
            return;
        }
        $.ajax({
            url: 'https://ihq2uwfqtf.execute-api.us-west-2.amazonaws.com/dev/resources/hello',
            dataType: 'json',
            cache: false,
            crossDomain: true,
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem("api-access-token"));
            },
            success: function(result) {
                console.log(result);
                this.setState({data:JSON.stringify(result)});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(xhr);
                console.log(status);
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
                    rel('p', {}, this.state.data)
                ])
            ])
        );
    }
});
