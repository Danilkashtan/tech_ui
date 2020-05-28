import React from 'react';
import Form from 'react-bootstrap/Form';

var json = {}

class CheckBoxField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked
    }
  }

  handleChange = e => {
    this.setState({ checked: e.target.checked });
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      json = {};
      json[this.props.id] = this.state.checked;
      this.props.onChange(json);
    }
  }
  componentDidMount() {
    this.componentDidUpdate();
  }
  render() {
    return (
      <Form.Group>
        <Form.Check
        	id={this.props.id}
          label={this.props.labelText}
          disabled={this.props.isDisabled}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }
}

CheckBoxField.defaultProps = {
  isDisabled: false,
  checked: false
};

export default CheckBoxField;