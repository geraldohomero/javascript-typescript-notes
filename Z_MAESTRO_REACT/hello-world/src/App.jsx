import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {

  return (
    <div>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
};

export default App
