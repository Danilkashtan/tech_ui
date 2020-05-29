import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import CheckBoxField from './../components/CheckBoxField.js';
import TextAreaField from './../components/TextAreaField.js';
import SelectField from './../components/SelectField.js';
import Label from './../components/Label.js';
import InputField from './../components/InputField.js';
import RadioButtonGroup from './../components/RadioButtonGroup.js';
import Range from './../components/Range.js';

const selectOptions = [{value: 'I'}, {value: 'Love'}, {value: 'Selects'}];
const myRadios = [{labelText: 'My first Radio',
            id: 'myRadio1'}, 
            {labelText: 'My second Radio',
            id: 'myRadio2'}, 
            {labelText: 'My third Radio',
            id: 'myRadio3',
            isDisabled: 'true'}];
var jsonObj = {};

const OtherModule = (props) => {

    const formik = props.formik;

    return (
    	    <div>
    				<Form.Row>
              <Col>
                  <InputField
                          label="City"
                          id="city"
                          name="city"
                          onChange={formik.handleChange}
                          value={formik.values.city}
                          type="text"
                          isInvalid={formik.errors.city && formik.touched.city}
                          errors={formik.errors.city}
                          onBlur={formik.handleBlur}
                        />                  
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Улица" id="street" name="street" onChange={formik.handleChange} value={formik.values.street} type="text" />
                  {formik.errors.street ? <div>{formik.errors.street}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Дом" id="house" name="house" onChange={formik.handleChange} value={formik.values.house} type="text" />
                  {formik.errors.house ? <div>{formik.errors.house}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Тест" id="test" name="test" onChange={formik.handleChange} value={formik.values.test} type="text" />
                  {formik.errors.test ? <div>{formik.errors.test}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Тест" id="test" name="test" onChange={formik.handleChange} value={formik.values.test} type="text" />
                  {formik.errors.test ? <div>{formik.errors.test}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Тест" id="test" name="test" onChange={formik.handleChange} value={formik.values.test} type="text" />
                  {formik.errors.test ? <div>{formik.errors.test}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Тест" id="test" name="test" onChange={formik.handleChange} value={formik.values.test} type="text" />
                  {formik.errors.test ? <div>{formik.errors.test}</div> : null}
                </Form.Group>              
              </Col>
              <Col>
                <Form.Group>
                  <InputField label="Тест" id="test" name="test" onChange={formik.handleChange} value={formik.values.test} type="text" />
                  {formik.errors.test ? <div>{formik.errors.test}</div> : null}
                </Form.Group>              
              </Col>
            </Form.Row>
            <Label labelText='LABEL' />
            <TextAreaField
                          label="TextArea"
                          id="textArea"
                          name="textArea"
                          rows="3"
                          onChange={formik.handleChange}
                          value={formik.values.textArea}
                          isInvalid={formik.errors.textArea && formik.touched.textArea}
                          errors={formik.errors.textArea}
                          onBlur={formik.handleBlur}
                        />        
            <CheckBoxField 
              id='check' 
              name='check' 
              label='CheckBox' 
              onChange={formik.handleChange}
              value={formik.values.check}
              isInvalid={formik.errors.check && formik.touched.check}
              errors={formik.errors.check}
              onBlur={formik.handleBlur}
              isDisabled={false}
               />
            <SelectField 
              id='select' 
              name='select' 
              label='SelectField' 
              options={selectOptions} 
              onChange={formik.handleChange}
              value={formik.values.select}
              isInvalid={formik.errors.select && formik.touched.select}
              errors={formik.errors.select}
              onBlur={formik.handleBlur}
              isDisabled={false}
            />
            <RadioButtonGroup 
              id='radio' 
              name='radio' 
              label='RadioButton'  
              defaultRadio="myRadio2" 
              onChange={formik.handleChange}
              value={formik.values.radio}
              isInvalid={formik.errors.radio && formik.touched.radio}
              errors={formik.errors.radio}
              onBlur={formik.handleBlur}
              isDisabled={false}
              radios={myRadios} />
            <Range
                          label="Range"
                          id="range"
                          name="range"
                          onChange={formik.handleChange}
                          value={formik.values.range}
                          isInvalid={formik.errors.range && formik.touched.range}
                          errors={formik.errors.range}
                          onBlur={formik.handleBlur}
                        />     
          </div>
    );
}

export default OtherModule;