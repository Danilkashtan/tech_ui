import React from 'react';

import Form from 'react-bootstrap/Form';

class CheckBoxField extends React.Component {
  render() {
    return (
    <Form.Group>
      <Form.Check
      	id={this.props.id}
        required
        label={this.props.labelText}
        disabled={this.props.isDisabled}
      />
    </Form.Group>
    );
  }
}
CheckBoxField.defaultProps = {
  isDisabled: false
};

export default CheckBoxField;