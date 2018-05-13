import React from 'react';
import PropTypes from 'prop-types';

class Students extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.getData();
	}
	render() {
		console.log('this is our data from app', this.props.data);
		return (
			<div className="students">
				our Data is :<h2>{this.props.data.one}</h2>
			</div>
		);
	}
}

export default Students;

Students.propTypes = {
	//getAction: PropTypes.func.isRequired
};
