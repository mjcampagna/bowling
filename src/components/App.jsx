import React from 'react';

import Buttons from './Buttons.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pins: 10
		}
		this.deductPins = this.deductPins.bind(this);
	}

	deductPins(n) {
		this.setState({
			pins: this.state.pins - n
		})
	}

	render() {
		return (
			<React.Fragment>
				<Buttons deductPins={this.deductPins} />
				<p>Pins are {this.state.pins}</p>
			</React.Fragment>
		)
	}
}
