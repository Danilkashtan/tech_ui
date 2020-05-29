import React from 'react';
import Form from 'react-bootstrap/Form';
import InputField from '../components/InputField.js';

const NewModule = (props) => {
  const formik = props.formik;

  return (
    <Form.Group>
      <InputField
        label="Name"
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        type="text"
        isInvalid={formik.errors.firstName && formik.touched.firstName}
        errors={formik.errors.firstName}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Second Name"
        id="secondName"
        name="secondName"
        onChange={formik.handleChange}
        value={formik.values.secondName}
        type="text"
        isInvalid={formik.errors.secondName && formik.touched.secondName}
        errors={formik.errors.secondName}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Middle Name"
        id="middleName"
        name="middleName"
        onChange={formik.handleChange}
        alue={formik.values.middleName}
        type="text"
        isInvalid={formik.errors.middleName && formik.touched.middleName}
        errors={formik.errors.middleName}
        onBlur={formik.handleBlur}
      />
    </Form.Group>
  );
}
export default NewModule; 