import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Dropdown = (props) => {

  return (
		  <Accordion defaultActiveKey="0">
			<Card>
			  <Card.Header>
			    <Accordion.Toggle as={Button} variant="link" eventKey="0">
			      {props.labelText}
			    </Accordion.Toggle>
			  </Card.Header>
			  <Accordion.Collapse eventKey="0">
				  <Card.Body>
				  	{props.children}
				  </Card.Body>
			  </Accordion.Collapse>
			</Card>
		  </Accordion>
  	  );
    }

export default Dropdown;