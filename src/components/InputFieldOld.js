import React from 'react';

import Form from 'react-bootstrap/Form';

class InputField extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      fullName: null
    }
}
	render() {
		const fullName = this.state
    	return (
		    <Form.Group id={this.props.id}>
		      <Form.Label>{this.props.labelText}</Form.Label>
		      <Form.Control type="text" placeholder={this.props.labelText} disabled={this.props.isDisabled}
		        name={fullName}
	            onChange={this.handleInputChange}/>
		    </Form.Group>
  		);
  	}
  }

InputField.defaultProps = {
  isDisabled: false
};

export default InputField;