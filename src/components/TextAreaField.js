import React from 'react';
import Form from 'react-bootstrap/Form';

const TextAreaField = (props) => {

  return (
    <Form.Group id={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control 
      	  as="textarea" 
      	  rows={props.rows} 
	      name={props.name} 
	      value={props.value} 
	      type={props.type} 
	      onChange={props.onChange} 
	      isInvalid={props.isInvalid} 
	      onBlur={props.onBlur}/>
      <Form.Control.Feedback type="invalid">{props.errors}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextAreaField;