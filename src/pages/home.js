
const Home = React.createClass({
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
