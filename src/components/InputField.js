import React from 'react';

import Form from 'react-bootstrap/Form';
var json = {}
class InputField extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  value: this.props.value
		}
	}

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      json = {};
  	  json[this.props.id] = this.state.value;
      this.props.onChange(json);
    }
  }

  componentDidMount() {
  	this.componentDidUpdate()
  }

  render() {
    return (
   	  <Form.Group>
        <Form.Label>{this.props.labelText}</Form.Label>
        <Form.Control value={this.state.value} id={this.props.id} type="text" onChange={this.handleChange} />
      </Form.Group>
    );
  }
}
InputField.defaultProps = {
  isDisabled: false,
  value:"sdf"
};

export default InputField;