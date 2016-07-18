
const Home = React.createClass({
    componentDidMount: function() {
        $.ajax({
            url: 'https://ihq2uwfqtf.execute-api.us-west-2.amazonaws.com/dev/resources/hello',
            dataType: 'json',
            cache: false,
            beforeSend: function(xhr){
                xhr.setRequestHeader('X-Api-Key', getCookieValue('X-Api-Key'));
            },
            success: function(result) {
                console.log(result);
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
            rel('div', {id:'wrapper'},
                rel(Navigation, {}),
                rel('div', {id:'page-wrapper'},
                    "Home"
                )
            )
        );
    }
});
