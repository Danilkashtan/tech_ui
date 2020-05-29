import React from 'react';
import Form from 'react-bootstrap/Form';

const Range = (props) => {

  return (
    		<Form.Group>
    	    <Form.Label>{props.label}</Form.Label>
          <Form.Label>. Значение = {props.value}</Form.Label>
          
          <Form.Control custom type="range" name={props.name} value={props.value} onChange={props.onChange} isInvalid={props.isInvalid} onBlur={props.onBlur}/>
          <Form.Control.Feedback type="invalid">{props.errors}</Form.Control.Feedback>
        </Form.Group>
	   );
	}

export default Range;