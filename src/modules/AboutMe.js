import React from 'react';

import Form from 'react-bootstrap/Form';

import InputField from './../components/InputField.js';

const AboutMe = () => (  
  <Form.Group>
  <InputField id='firstName' labelText="Имя" />
  <InputField id='secondName' labelText="Фамилия" />
  <InputField id='middleName' labelText="Отчество" />
  </Form.Group>
);
export default AboutMe;