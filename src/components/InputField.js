import React from 'react';

import Form from 'react-bootstrap/Form';

class InputField extends React.Component {
	render() {
    	return (
		    <Form.Group id={this.props.id}>
		      <Form.Label>{this.props.labelText}</Form.Label>
		      <Form.Control type="text" placeholder={this.props.labelText} required disabled={this.props.isDisabled}/>
		    </Form.Group>
  		);
  	}
  }

InputField.defaultProps = {
  isDisabled: false
};

export default InputField;