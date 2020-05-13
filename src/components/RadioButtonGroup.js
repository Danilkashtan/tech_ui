import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class RadioButtonGroup extends React.Component {
  render() {
      return (
        <Form.Group id={this.props.id}>
          <Form.Label>{this.props.labelText}</Form.Label>
              {
                  this.props.radios.map((radio) => {
                  return (<Form.Check 
                            type="radio" 
                            label={radio.labelText} 
                            name={this.props.id} 
                            id={radio.id} 
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