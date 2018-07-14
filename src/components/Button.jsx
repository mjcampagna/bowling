import React from 'react';

export default function Button(props) {
	return <li><button type="button" value={props.value} onClick={(n) => props.bowl(props.value)}>{props.value}</button></li>
}
