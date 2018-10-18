class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: undefined,
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	};

	handleButtonClick(currentPage){
		this.setState({currentPage: currentPage});
		console.log('button clicked page: ', currentPage)
		//this.setState({currentPage: nextPage})
		
	};
	render(){
		switch(this.state.currentPage){
			case 0:
				return(<FormOne handleClick = {this.handleButtonClick}/>);
				break;
			case 1:
				return(<FormTwo handleClick = {this.handleButtonClick}/>);
				break;
			case 2:
				return(<FormThree handleClick = {this.handleButtonClick}/>);
				break;
			case 3:
				return(<ConfirmationPage handleClick = {this.handleButtonClick}/>);
				break;
			default:
				return(
					<div>
					 	<h1>Welcom To Checkout Form!</h1>
						<button onClick={()=>{this.handleButtonClick(0)}}>Checkout</button>
					</div>
				)
		}	
	}
}

var FormOne = (props) => (
			<div>
				Name: <input type="text"/>
				Email: <input type="email"/>
				Password: <input type="password"/>
				<button onClick={()=>{props.handleClick(1)}}>Next</button>
			</div>
		)
var FormTwo = (props) => (
			<div>
				Address Line1: <input type="text"/>
				Address Line2: <input type="text"/>
				City: <input type="text"/>
				State: <input type="text"/>
				Zip Code: <input type="text"/>
				<button onClick={()=>{props.handleClick(2)}}>Next</button>
			</div>
		)
var FormThree = (props) => (
			<div>
				Credit Card Number: <input type="text"/>
				Expiration Date: <input type="text"/>
				CVV: <input type="text"/>
				Billing Zip Code: <input type="text"/>
				<button onClick={()=>{props.handleClick(3)}}>Confirm</button>
			</div>
		)
var ConfirmationPage = (props) => (
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
				<button onClick={()=>{props.handleClick()}}>Purchase</button>
			</div>
		)

ReactDOM.render(<App />, document.querySelector('#app'));