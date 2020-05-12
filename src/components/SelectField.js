import React from 'react';

import Form from 'react-bootstrap/Form';

const SelectField = (props) => (
	<Form.Group id={props.id}>
        <Form.Label>{props.labelText}</Form.Label>
        <Form.Control as="select" custom disabled={props.isDisabled}>
        {
            props.options.map((option, index) => {
        		return (<option key={index} value={option.value}>{option.value}</option>)
     		})
     	}
        </Form.Control>
    </Form.Group>
  );

SelectField.defaultProps = {
  options: [{value: 'first'}, {value: 'second'}, {value: 'third'}],
  isDisabled: false
};

export default SelectField;