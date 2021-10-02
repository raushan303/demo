import { useState } from 'react';

import Header from './Header';
import Input from './Input';
import './index.css'

function App() {

  const [state, setState] = useState('abc');

  return (
    <div className="main-box">
    <Header title={state} />
    <Input onChange = {setState}/>
   </div>
  );
}

export default App;
