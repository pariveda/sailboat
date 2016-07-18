
const Signin = React.createClass({
    _signin: function(e) {
        e.preventDefault();
        var email = document.getElementById('inputEmail').value;
        var password = document.getElementById('inputPassword').value;
        $.ajax({
            type: 'POST',
            url: 'https://ihq2uwfqtf.execute-api.us-west-2.amazonaws.com/dev/authenticate',
            contentType: 'application/json',
            data: JSON.stringify({email:email, password:password}),
            success: function(result) {
                console.log(result);
                sessionStorage.setItem("isSignedIn", true);
                window.location = "/";
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
                rel('nav', {id:'nav-wrapper', className:'navbar navbar-inverse navbar-fixed-top', role:'navigation'}, [
                    rel('div', {id:'top-menu-wrapper'}, [
                        rel('div', {className:'navbar-header'}, rel('span', {}, [
                            rel('a', {className:'navbar-brand', href:'/#signin'}, 'Static S3 Web Example')
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
                        rel('button', {className:'btn btn-lg btn-default btn-block', type:'submit', onClick:this._signin}, 'Sign in')
                    ])
                ])
            ])
        );
    }
});
