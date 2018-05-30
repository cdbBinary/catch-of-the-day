import React from 'react';
// import ReactDom from 'react-dom';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		// 1. Stop the form submiting
		event.preventDefault();
		// 2. Get the text from tha input
		console.log(this.value);

		// 3. Change the page /store/whatever-they-entered
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store -></button>
			</form>
		);
	}
}

export default StorePicker;
