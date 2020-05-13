import React from 'react';

import Form from 'react-bootstrap/Form';

class Label extends React.Component {
	render() {
    	return (
      		<Form.Label>{this.labelText}</Form.Label>
  		);
  	}
  }

Label.defaultProps = {
  isDisabled: false
};

export default Label;