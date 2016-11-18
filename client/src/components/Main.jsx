var React = require( 'react' );
var Link = require( 'react-router' ).Link

var Home = require( './Home.jsx' );
var About = require( './About.jsx' );

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/home"> Home </Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
})

module.exports = Main;
