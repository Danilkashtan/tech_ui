import React from 'react';


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import CheckBoxField from './../components/CheckBoxField.js';
import TextAreaField from './../components/TextAreaField.js';
import SelectField from './../components/SelectField.js';
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

class OtherModule extends React.Component {
  render() {
      return ( 
    	<Form.Group>
    				<Form.Row>
                      <Col>
                        <InputField id='city' labelText="Город" />
                      </Col>
                      <Col>
                        <InputField id='street' labelText="Улица" />
                      </Col>
                      <Col>
                        <InputField id='house' labelText="Дом" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="Очень" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="Много" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="Полей" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="ИХ" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="РЕАЛЬНО" isDisabled="true"/>
                      </Col>
                      <Col>
                        <InputField id='city' labelText="ОЧЕНЬ" isDisabled="true"/>
                      </Col>
                      <Col>
                        <InputField id='city' labelText="МНОГО" isDisabled="true"/>
                      </Col>
                      <Col>
                        <InputField id='city' labelText="ALARM!!!" isDisabled="true"/>
                      </Col>
                </Form.Row>
                <Form.Row>
                      <Col>
                        <InputField id='city' labelText="Ну" />
                      </Col>
                      <Col>
                        <InputField id='street' labelText="А тут" />
                      </Col>
                      <Col>
                        <InputField id='house' labelText="Не очень" />
                      </Col>
                      <Col>
                        <InputField id='city' labelText="Много" />
                      </Col>
                </Form.Row>
                <TextAreaField id='1' labelText='TextAreaField'/>
                <CheckBoxField id='1' labelText='CheckBox'/>
                <SelectField id='1' labelText='SelectField' options={selectOptions}/>
                <RadioButtonGroup id='radio' labelText="Radios" radios={myRadios} />
                <Range id='range' labelText="Range"/>
            </Form.Group>
        );
      }
    }

OtherModule.defaultProps = {
  isdisabled: false
};

export default OtherModule;