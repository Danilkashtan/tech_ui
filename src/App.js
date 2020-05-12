import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import AboutMe from './modules/AboutMe.js';
import Dropdown from './components/Dropdown.js';
import OtherModule from './modules/OtherModule.js';

import './css/App.css';

const App = () => (

<Container>
  <Dropdown labelText='Обо мне'>
    <AboutMe />
  </Dropdown>
  <Dropdown labelText='Другой модуль'>
    <OtherModule />
  </Dropdown>
  <Button type="submit">Отправить на решение</Button>
</Container>

);

export default App;