import React from 'react';

import Button from './Button.jsx';

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const buttons = num => {
			const zeroToNum = Array.from( Array(num).keys() );
			return zeroToNum.map( n => {
				return <Button key={n} value={n} bowl={this.props.bowl} />;
			});
		}
	
		return (
			<ul>
				{ buttons(11) }
			</ul>
		)
	}
}
