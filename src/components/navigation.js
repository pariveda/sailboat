
const Navigation = React.createClass({
    render: function() {
        return (
            rel('nav', {id:'nav-wrapper', className:'navbar navbar-inverse navbar-fixed-top', role:'navigation'}, [
                rel('div', {id:'top-menu-wrapper'}, [
                    rel('div', {className:'navbar-header'}, rel('span', {}, [
                        rel('a', {className:'navbar-brand', href:'/#'}, 'Sailboat')
                    ])),
                    rel('ul', {id:'top-nav-options', className:'nav navbar-nav'}, [
                        rel('li', {}, rel('a', {href:"#"}, 'Home')),
                        rel('li', {}, rel('a', {href:"#data"}, 'Data Entry'))
                    ]),
                    rel('ul', {id:'top-right-nav-options', className:'nav navbar-top-links navbar-right pull-right'}, [
                            rel('li', {className:'dropdown'}, [
                                rel('a', {className:'dropdown-toggle', 'data-toggle':'dropdown', href:'#'}, [
                                    rel('i', {className:'fa fa-user fa-fw'}),
                                    rel('i', {className:'fa fa-caret-down'})
                                ]),
                                rel('ul', {className:'dropdown-menu dropdown-user pull-right'}, [
                                    rel('li', {}, rel('a', {href:'/#signout'}, [rel('i', {className:'fa fa-sign-out fa-fw'}), 'Sign out']))
                                ])
                            ])
                        ]
                    )
                ])
            ])
        );
    }
});
