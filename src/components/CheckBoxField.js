import React from 'react';

import Form from 'react-bootstrap/Form';

const CheckBoxField = (props) => (
    <Form.Group>
      <Form.Check
      	id={props.id}
        required
        label={props.labelText}
        disabled={props.isDisabled}
      />
    </Form.Group>
  );

CheckBoxField.defaultProps = {
  isDisabled: false
};

export default CheckBoxField;