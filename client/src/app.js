var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Router = require( 'react-router' ).Router
var Route = require( 'react-router' ).Route
var IndexRoute = require( 'react-router' ).IndexRoute
var hashHistory = require( 'react-router' ).hashHistory

var Home = require( './components/Home.jsx' );
var Main = require( './components/Main.jsx' );
var About = require( './components/About.jsx' );
var Contact = require( './components/Contact.jsx' );

window.onload = function(){
  ReactDOM.render(
    <Router history={ hashHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ Home } />
        <Route path="home" component={ Home } />
        <Route path="about" component={ About } />
        <Route path="contact" component={ Contact } />
      </Route>
    </Router>,
    document.getElementById( 'app' )
  );
}