import React from 'react';

import Form from 'react-bootstrap/Form';

const RadioButtonGroup = (props) => (
    <Form.Group id={props.id}>
      <Form.Label>{props.labelText}</Form.Label>
          {
              props.radios.map((radio) => {
              return (<Form.Check 
                        type="radio" 
                        label={radio.labelText} 
                        name={props.id} 
                        id={radio.id} 
                        disabled={radio.isDisabled}
                      />);
          })
        }
    </Form.Group>
  );

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