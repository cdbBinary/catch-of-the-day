import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

 	addFish = fish => {
 		// 1. Take a copy of the existing
 		const fishes = { ...this.state.fishes };
 		// 2. Add our new fish to that fishes variable
 		fishes[`fish${Date.now()}`] = fish;
 		this.state.fishes.fish1 = fish;
 	};

	render() {
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		);
	}
}

export default App;
