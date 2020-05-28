import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import AboutMe from './modules/AboutMe.js';
import Dropdown from './components/Dropdown.js';
import OtherModule from './modules/OtherModule.js';
import Form from 'react-bootstrap/Form';

import './css/App.css';

var json = {};
var finishJson = {};

class App extends React.Component {

	changeUnit(item) {
		json = JSON.parse(item);
		for (var i = 0; i < Object.keys(json).length; i++) {
			var key = Object.keys(json)[i];
			finishJson[key] = json[key];
		}
	}
handleSubmit(event) {
  	var firstName = finishJson.firstName
  	var city = finishJson.city
  	var check = finishJson.check
  	var select = finishJson.select
  	var radio = finishJson.radio
  	var range = finishJson.range

  	console.log("str - " + firstName + " " + city + " " + check + " " + select + " " + radio + " " + range)
    event.preventDefault();
  }
	render() {
    	return (
			<Container>
			  <Form onSubmit={this.handleSubmit}>
				  <Dropdown labelText='Обо мне'>
				  	<AboutMe changeUnit={this.changeUnit.bind(this)}/>
				  </Dropdown>
				  <Dropdown labelText='Другой модуль'>
				  	<OtherModule changeUnit={this.changeUnit.bind(this)}/>
				  </Dropdown>
				  <Button onClick={this.handleSubmit} type="submit">Отправить на решение</Button>
			  </Form>
			</Container>

		);
    }
}

export default App;