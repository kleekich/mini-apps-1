var ReactDOM = require('react-dom');
var React = require('react');

class App extends React.Component{

}

const home = (
	<div>
		<h1>Welcom To Checkout Form!</h1>
		<button>Checkout</button>
	</div>
)

console.log("HI FROM app.jsx");

ReactDOM.render(home, document.getElementById('root'));