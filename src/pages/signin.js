
const Signin = React.createClass({
    _signin: function(e) {
        e.preventDefault();
        var email = document.getElementById('inputEmail').value;
        var password = document.getElementById('inputPassword').value;
        console.log({username:email, password:password});
        $.ajax({
            type: 'POST',
            url: 'https://ihq2uwfqtf.execute-api.us-west-2.amazonaws.com/dev/authenticate',
            contentType: 'application/json',
            data: JSON.stringify({username:email, password:password}),
            crossDomain: true,
            success: function(result) {
                if (result.token != null) {
                    sessionStorage.setItem("api-access-token", result.token);
                    window.location.href = "/#";
                } else {
                    delete sessionStorage["api-access-token"];
                }
            }.bind(this),
            error: function(xhr, status, err) {
                delete sessionStorage["api-access-token"];
                console.log(err);
            }.bind(this)
        });
        return false;
    },
    render: function (){
        return (
            rel('div', {id:'wrapper'},[
                rel('nav', {id:'nav-wrapper', className:'navbar navbar-inverse navbar-fixed-top', role:'navigation'}, [
                    rel('div', {id:'top-menu-wrapper'}, [
                        rel('div', {className:'navbar-header'}, rel('span', {}, [
                            rel('a', {className:'navbar-brand', href:'/'}, 'Static S3 Web Example')
                        ]))
                    ])
                ]),
                rel('div', {id:'page-wrapper'}, [
                    rel('form', {className:'form-signin'}, [
                        rel('h2', {className:'form-signin-heading'}, 'Please sign in'),
                        rel('label', {for:'inputEmail', className:'sr-only'}, 'Email address'),
                        rel('input', {type:'email', id:'inputEmail', className:'form-control', placeholder:'Email address', required:'true', autofocus:'true'}),
                        rel('label', {for:'inputPassword', className:'sr-only'}, 'Password'),
                        rel('input', {type:'password', id:'inputPassword', className:'form-control', placeholder:'Password', required:'true'}),
                        rel('button', {className:'btn btn-lg btn-default btn-block', onClick:this._signin}, 'Sign in')
                    ])
                ])
            ])
        );
    }
});
