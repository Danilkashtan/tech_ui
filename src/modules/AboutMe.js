import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import InputField from './../components/InputField.js';

class AboutMe extends React.Component {
  render() {
      return ( 
		  <Form.Group>
			  <InputField id='firstName' labelText="Имя" />
			  <InputField id='secondName' labelText="Фамилия" />
			  <InputField id='middleName' labelText="Отчество" />
		  </Form.Group>
		);
	}
}
export default AboutMe;