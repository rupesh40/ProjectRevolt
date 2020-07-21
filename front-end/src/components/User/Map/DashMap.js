import React, { Component } from 'react';
import Map from './Map';

class DashMap extends Component {

	render() {
		return(
			<div style={{ margin: '100px',background:"cover",width:'200%' }}>
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='600px'
					width="1500px"
					zoom={8}
				/>
			</div>
		);
	}
}

export default DashMap;
