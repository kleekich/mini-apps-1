//import board from 'components/board.js'
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			board: [

			]

		}
	}
	
	render(){
		return(
			<div>
				<h1>This is from react Component!!!</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))