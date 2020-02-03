import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	onSubmit = formValues => {
		// console.log('formValues', formValues);
		this.props.createStream(formValues);
	};

	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>Create a Stream</h2>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createStream }
)(StreamCreate);