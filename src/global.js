
const getCookieValue = function (a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
};

// Convenience function that lets me type 'rel' rather than 'React.createElement'
const rel = function(type, options, content) {
    return React.createElement(type, options, content);
};
