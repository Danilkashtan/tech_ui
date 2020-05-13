import React from 'react';

import Form from 'react-bootstrap/Form';


class TextAreaField extends React.Component {
  render() {
      return (
		<Form.Group id={this.props.id}>
		    <Form.Label>{this.props.labelText}</Form.Label>
		    <Form.Control as="textarea" rows={this.props.rows} disabled={this.props.isDisabled}/>
	    </Form.Group>
	  );
	}
}

TextAreaField.defaultProps = {
  rows: '3',
  isdisabled: false
};

export default TextAreaField;