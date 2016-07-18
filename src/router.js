
const page = document.getElementById('content');

const AppRouter = Backbone.Router.extend({
    routes: {
        "":"home",
        "signin":"signin",
        "signout":"signout",
        "*actions": "notfound"
    },
    home: function() {
        var token = sessionStorage.getItem("api-access-token");
        console.log(!token);
        if (!token) {
            window.location.href = '/#signin';
        } else {
            ReactDOM.render(rel(Home, {}), page);
        }
    },
    signin: function() {
        ReactDOM.render(rel(Signin, {}), page);
    },
    signout: function() {
        delete sessionStorage["api-access-token"];
        window.location.href = '/#signin';
    },
    notfound: function() {
        page.innerHTML = "Not Found";
    }
});

const _ = new AppRouter();
Backbone.history.start();
