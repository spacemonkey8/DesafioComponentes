import logo from './logo.svg';
import './App.css';
import Input from './Component/input';
import React, { useState } from 'react';
import Boton from './Component/Boton';

function App() {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  return (
    <div className="App">

      <Input
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
      />

      {password === "252525" ? <Boton /> : null}
     {/*  {password === "252525" && <Boton />} */}


    </div>
  );
}

export default App;
