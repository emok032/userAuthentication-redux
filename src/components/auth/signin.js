// Sign-In form
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
class Signin extends Component {
		handleFormSubmit({ email, password }) {
			console.log(email, password);
			//  Handles sign-in form; Binded to event listener, onSubmit in <form>;
		}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
		<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
			<fieldset>
				<label>Email: </label>
				<input  {...email} className="form-control" />
			</fieldset>
			<fieldset>
				<label>Password: </label>
				<input {...password} className="form-control" />
			</fieldset>
			<button action="submit" className="btn btn-primary">Sign in</button>
		</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);