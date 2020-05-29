import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from './components/Dropdown.js';

import AboutMe from './modules/AboutMe.js';
import OtherModule from './modules/OtherModule.js';

import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';

import './css/App.css';
import validation from './validation.js';

const App = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "123",
      secondName: "123123",
      middleName: "",
      city: "123",
      check: true,
      radio: "myRadio3",
      range: 50,
      textArea: "not invalid",
      select: "Love"
    },
    onSubmit: (values) => {
      console.log("Submitted")
      console.log(values)
      alert(JSON.stringify(values));
    },
    validate: validation
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Dropdown labelText="Обо мне">
          <AboutMe formik={formik} />
        </Dropdown>
        <Dropdown labelText="Другой модуль">
          <OtherModule formik={formik} />
        </Dropdown>
        <Button type="submit">Отправить на решение</Button>
      </Form>
    </Container>

  );
}

export default App;