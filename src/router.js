
const page = document.getElementById("content");

const rout = function(classname, options) {
    var token = sessionStorage.getItem("api-access-token");
    console.log(!token);
    if (!token) {
        window.location.href = "/#signin";
    } else {
        ReactDOM.render(rel(classname, options), page);
    }
};

const AppRouter = Backbone.Router.extend({
    routes: {
        "":"home",
        "data":"data",
        "signin":"signin",
        "signout":"signout",
        "*actions": "notfound"
    },
    home: function() {
        rout(Home, {});
    },
    data: function() {
        rout(Data, {});
    },
    signin: function() {
        ReactDOM.render(rel(Signin, {}), page);
    },
    signout: function() {
        delete sessionStorage["api-access-token"];
        window.location.href = "/#signin";
    },
    notfound: function() {
        page.innerHTML = "Not Found";
    }
});

const _ = new AppRouter();
Backbone.history.start();
