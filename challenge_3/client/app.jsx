class App extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			currentPage: undefined,
			name: undefined,
			email: undefined,
			password: undefined,

		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	};

	handleButtonClick(currentPage){
		console.log('button clicked page: ', currentPage)
		//this.setState({currentPage: nextPage})
		switch(currentPage){
			case 0:
				ReactDOM.render(<FormOne />, document.querySelector('#app'))
				break;
			case 1:
				ReactDOM.render(<FormTwo />, document.querySelector('#app'));
			break;
			case 2:
				ReactDOM.render(<FormThree />, document.querySelector('#app'));
				break;
			case 3:
				ReactDOM.render(<ConfirmationPage />, document.querySelector('#app'));
				break;
		}	
	};

	render(){
		return(
			<div>
			 	<h1>Welcom To Checkout Form!</h1>
				<button onClick={()=>{this.handleButtonClick(0)}}>Checkout</button>
			</div>
		)
	}
}

var FormOne = () => (
			<div>
				Name: <input type="text"/>
				Email: <input type="email"/>
				Password: <input type="password"/>
				<button onClick={()=>{handleButtonClick(1)}}>Next</button>
			</div>
		)

var FormTwo = () => (
			<div>
				Address Line1: <input type="text"/>
				Address Line2: <input type="text"/>
				City: <input type="text"/>
				State: <input type="text"/>
				Zip Code: <input type="text"/>
				<button>Next</button>
			</div>

		)

var FormThree = () => (
			<div>
				Credit Card Number: <input type="text"/>
				Expiration Date: <input type="text"/>
				CVV: <input type="text"/>
				Billing Zip Code: <input type="text"/>
				<button>Confirm</button>
			</div>
		)


var ConfirmationPage = () => (
			<div>
				<div>Name: </div>
				<div>Email: </div>
				<div>Password: </div>
				<div>Address Line1: </div>
				<div>Address Line2: </div>
				<div>City: </div>
				<div>State: </div>
				<div>Zip Code: </div>
				<div>Credit Card Number: </div>
				<div>Expiration Date: </div>
				<div>CVV: </div>
				<div>Billing Zip Code: </div>
				

			</div>
		)


ReactDOM.render(<App />, document.querySelector('#app'));