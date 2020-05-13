import React from 'react';

import Form from 'react-bootstrap/Form';

class SelectField extends React.Component {
  render() {
      return (
    	<Form.Group id={this.props.id}>
            <Form.Label>{this.props.labelText}</Form.Label>
            <Form.Control as="select" custom disabled={this.props.isDisabled}>
            {
                this.props.options.map((option, index) => {
            		return (<option key={index} value={option.value}>{option.value}</option>)
         		})
         	}
            </Form.Control>
        </Form.Group>
      );
    }
  }

SelectField.defaultProps = {
  options: [{value: 'first'}, {value: 'second'}, {value: 'third'}],
  isDisabled: false
};

export default SelectField;