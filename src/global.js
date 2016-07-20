
// Convenience function that lets me type 'rel' rather than 'React.createElement'
const rel = function(type, options, content) {
    return React.createElement(type, options, content);
};

sessionStorage.setItem("api-base-url", "https://fsapgttgb6.execute-api.us-west-2.amazonaws.com/dev/");


