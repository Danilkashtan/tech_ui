import React from 'react';

import Form from 'react-bootstrap/Form';

const Label = (props) => (
      <Form.Label>{props.labelText}</Form.Label>
  );

Label.defaultProps = {
  isDisabled: false
};

export default Label;