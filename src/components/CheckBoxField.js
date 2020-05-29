import React from 'react';
import Form from 'react-bootstrap/Form';

var json = {}


const CheckBoxField = (props) => {

  return (
    <Form.Group id={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Check
          name={props.name} 
          value={props.value}
          onChange={props.onChange} 
          isInvalid={props.isInvalid} 
          onBlur={props.onBlur}
          disabled={props.isDisabled}
          checked={props.value}
        />
      {props.errors ? 
        <div>
          <Form.Label type="invalid" style={{color: "red", fontSize: "13px"}}>{props.errors}</Form.Label>
        </div>
      : null }
    </Form.Group>
  );
}

// class CheckBoxField extends React.Component {
  
//   render() {
//     return (
//       <Form.Group>
//         <Form.Check
//         	id={this.props.id}
//           label={this.props.labelText}
//           disabled={this.props.isDisabled}
//           checked={this.state.checked}
//           onChange={this.handleChange}
//         />
//       </Form.Group>
//     );
//   }
// }

export default CheckBoxField;