import React from 'react';
import Form from 'react-bootstrap/Form';


const RadioButtonGroup = (props) => {
  return (
        <Form.Group id={props.id}>
          <Form.Label>{props.label}</Form.Label>
            {
              props.radios.map((radio) => {
                if(props.value===radio.id) {
                  var isChecked = true;
                }
                return (
                <Form.Check
                  type="radio"
                  label={radio.labelText} 
                  name={props.name} 
                  value={radio.id}
                  onChange={props.onChange} 
                  isInvalid={props.isInvalid} 
                  onBlur={props.onBlur}
                  disabled={props.isDisabled}
                  checked={isChecked}
                />
                );
              })
            }
            {props.errors ? 
          <div>
            <Form.Label type="invalid" style={{color: "red", fontSize: "13px"}}>{props.errors}</Form.Label>
          </div>
          : null }
        </Form.Group>
      );
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