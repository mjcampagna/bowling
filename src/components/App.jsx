import React from 'react';

import Buttons from './Buttons.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 1,
			frame: 1,
			pins: 10,
			score: 0
		}
		this.bowl = this.bowl.bind(this);
	}

	bowl(n) {
		const frame = this.state.frame += 1;
		const pins = this.state.pins - n;

		// advance turn
		if ( frame === 3 || pins <= 0 ) {
			this.setState({
				turn: this.state.turn += 1,
				frame: 1,
				pins: 10
			});
		} else {
			this.setState({
				frame: frame,
				pins: pins
			});
		}

		// increment score
		this.setState({
			score: pins <= 0 ? this.state.score + this.state.pins : this.state.score + n
		})

	}

	render() {
		return (
			<React.Fragment>
				<Buttons bowl={this.bowl} />
				<p>Turn {this.state.turn}, Frame {this.state.frame}; Pins are {this.state.pins}.</p>
				<p>Your score is {this.state.score}.</p>
			</React.Fragment>
		)
	}
}
