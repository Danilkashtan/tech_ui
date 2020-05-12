import React from 'react';

import Form from 'react-bootstrap/Form';

const TextAreaField = (props) => (
	<Form.Group id={props.id}>
	    <Form.Label>{props.labelText}</Form.Label>
	    <Form.Control as="textarea" rows={props.rows} disabled={props.isDisabled}/>
    </Form.Group>
  );

TextAreaField.defaultProps = {
  rows: '3',
  isdisabled: false
};

export default TextAreaField;