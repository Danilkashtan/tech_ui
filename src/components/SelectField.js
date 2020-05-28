import React from 'react';
import Form from 'react-bootstrap/Form';

var json = {};

class SelectField extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.options[0].value
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
          <Form.Control value={this.state.value} id={this.props.id} as="select" custom disabled={this.props.isDisabled} onChange={this.handleChange}>
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