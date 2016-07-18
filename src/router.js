
const page = document.getElementById('content');

var Route = function(className, options) {
    if (!sessionStorage.getItem("isSignedIn")) {
        window.location += '#signin';
    }
    ReactDOM.render(rel(className, options), page);
};

const AppRouter = Backbone.Router.extend({
    routes: {
        "":"home",
        "signin":"signin",
        "*actions": "notfound"
    }
});

const app_router = new AppRouter();
app_router.on('route:signin', function () {
    ReactDOM.render(rel(Signin, {}), page);
});
app_router.on('route:home', function () {
    Route(Home, {})
});
app_router.on('route:notfound', function () {
    page.innerHTML = "Not Found";
});
Backbone.history.start();
