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
  var jsonObj = {};

class OtherModule extends React.Component {
  eventhandler = data =>  {
    if (data !== null && data !== undefined) {
      var json = JSON.stringify(data);
      var jsonParse = JSON.parse(json);
      var key = Object.keys(jsonParse)[0];
      jsonObj[key] = jsonParse[key];
      console.log("jsonObj " + JSON.stringify(jsonObj));
    this.props.changeUnit(JSON.stringify(jsonObj));    }
  }

  render() {
      return ( 
    	<Form.Group>
    				<Form.Row>
                      <Col>
                        <InputField id='city' value="other" labelText="Город" onChange={this.eventhandler}/>
                      </Col>
                      <Col>
                        <InputField id='street' labelText="Улица" onChange={this.eventhandler}/>
                      </Col>
                      <Col>
                        <InputField id='house' labelText="Дом" onChange={this.eventhandler}/>
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
                <TextAreaField id='textArea' labelText='TextAreaField' onChange={this.eventhandler}/>
                <CheckBoxField id='check' labelText='CheckBox' checked="true" onChange={this.eventhandler}/>
                <SelectField id='select' labelText='SelectField' options={selectOptions} onChange={this.eventhandler}/>
                //TODO не работает (берется только первое выбранное значение)
                <RadioButtonGroup id='radio' labelText="Radios" defaultRadio="myRadio2" radios={myRadios} onChange={this.eventhandler}/>
                <Range id='range' labelText="Range" onChange={this.eventhandler}/>
            </Form.Group>
        );
      }
    }

OtherModule.defaultProps = {
  isdisabled: false
};

export default OtherModule;