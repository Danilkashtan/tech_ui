import React from 'react';

import Form from 'react-bootstrap/Form';

const Range = (props) => (
	<Form.Group id={props.id}>
              <Form.Label>{props.labelText}</Form.Label>
              <Form.Control type="range" custom />
            </Form.Group>
  );

Range.defaultProps = {
  isdisabled: false
};

export default Range;