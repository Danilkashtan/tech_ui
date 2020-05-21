import React from 'react';

import Form from 'react-bootstrap/Form';
var json = {}
class RadioButtonGroup extends React.Component {
constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultRadio,
    }
  }
  handleChange = e => {
      this.setState({ value: e.target.id });

}

  componentDidUpdate() {
    if (this.props.onChange) {
      json = {}
      json[this.props.id] = this.state.value;
      this.props.onChange(json);
    }
  }
  componentDidMount() {
      this.componentDidUpdate()
    }

  render() {
      return (
        <Form.Group id={this.props.id}>
          <Form.Label>{this.props.labelText}</Form.Label>
              {
                  this.props.radios.map((radio) => {
                    if(radio.id==this.state.value) {
                      var isChecked = true;
                    }
                  return (<Form.Check 
                            type="radio" 
                            label={radio.labelText} 
                            value={this.state.value}
                            name={this.props.id} 
                            id={radio.id} 
                            checked= {isChecked}
                            onChange={this.handleChange} 
                          />);
              })
            }
        </Form.Group>
      );
    }
  }

RadioButtonGroup.defaultProps = {
  radios: [{labelText: 'First Radio',
            id: 'radio1'}, 
            {labelText: 'Second Radio',
            id: 'radio2'}, 
            {labelText: 'Third Radio',
            id: 'radio3'}],
  isDisabled: false
};

export default RadioButtonGroup;