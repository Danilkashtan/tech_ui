import React from 'react';

import Form from 'react-bootstrap/Form';


class TextAreaField extends React.Component {
	handleChange = e => this.setState({ [e.target.id]: e.target.value });

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }
  render() {
      return (
		<Form.Group>
		    <Form.Label>{this.props.labelText}</Form.Label>
		    <Form.Control 
		    	as="textarea" 
		    	id={this.props.id} 
		    	rows={this.props.rows} 
		    	disabled={this.props.isDisabled} 
		    	onChange={this.handleChange}
		    />
	    </Form.Group>
	  );
	}
}

TextAreaField.defaultProps = {
  rows: '3',
  isdisabled: false
};

export default TextAreaField;