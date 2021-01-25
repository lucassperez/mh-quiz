import React, { useState } from 'react';
import Textbox from '../Textbox';
import Submit from '../Submit';

function Form () {
  const [aviso, setAviso] = useState(false);

  function handleSubmit (e) {
    e.preventDefault();
    if (!e.target.firstChild.value) 
      setAviso(true);
    else
      e.target.firstChild.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      {aviso && "Escolha um nome para poder jogar!"}
      <Textbox placeholder={"Diz aí o teu nome pra jogar (:"} />
      <Submit value="Jogar!" />
    </form>
  );
}

export default Form;
