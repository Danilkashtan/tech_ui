import React from 'react';

import Form from 'react-bootstrap/Form';

import InputField from './../components/InputField.js';
	var jsonObj = {};
    
class AboutMe extends React.Component {

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
		  		<h3>{this.props.unit}</h3>
			  <InputField value="about" id='firstName' labelText="Имя" onChange={this.eventhandler}/>
			  <InputField id='secondName' labelText="Фамилия" onChange={this.eventhandler}/>
			  <InputField id='middleName' labelText="Отчество" onChange={this.eventhandler}/>
		  </Form.Group>
		);
	}
}
export default AboutMe; 