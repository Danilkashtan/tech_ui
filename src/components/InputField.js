import React from 'react';

import Form from 'react-bootstrap/Form';

const InputField = (props) => (
    <Form.Group id={props.id}>
      <Form.Label>{props.labelText}</Form.Label>
      <Form.Control type="text" placeholder={props.labelText} required disabled={props.isDisabled}/>
    </Form.Group>
  );

InputField.defaultProps = {
  isDisabled: false
};

export default InputField;