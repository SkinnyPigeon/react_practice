var React = require( 'react' );
var Home = require( './Home.jsx' );
var Link = require( 'react-router' ).Link
var Main = React.createClass({
  render: function(){
    return(
      <div>
        <h4> Main App</h4>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
