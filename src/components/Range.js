import React from 'react';

import Form from 'react-bootstrap/Form';

class Range extends React.Component {
  render() {
      return (
		<Form.Group id={this.props.id}>
	              <Form.Label>{this.props.labelText}</Form.Label>
	              <Form.Control type="range" custom />
	            </Form.Group>
	  );
	}
}

Range.defaultProps = {
  isdisabled: false
};

export default Range;