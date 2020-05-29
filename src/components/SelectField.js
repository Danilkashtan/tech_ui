import React from 'react';
import Form from 'react-bootstrap/Form';

const SelectField = (props) => {

  return (
      	<Form.Group id={props.id}>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control 
            name={props.name} 
            value={props.value} 
            as="select" 
            custom 
            disabled={props.isDisabled} 
            onChange={props.onChange} 
            isInvalid={props.isInvalid} 
            onBlur={props.onBlur}>
            {
              props.options.map((option, index) => {
                return (<option key={index} value={option.value}>{option.value}</option>)
           	  })
           	}
          </Form.Control>
          <Form.Control.Feedback type="invalid">{props.errors}</Form.Control.Feedback>
        </Form.Group>
      );
}


export default SelectField;