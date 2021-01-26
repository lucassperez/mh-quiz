import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

function Submit (props) {
  return (
    <InputSubmit
      type="submit"
      value={props.value || "Enviar"}
    />
  );
}

export default Submit;

const InputSubmit = styled.input`
  background-color: ${db.theme.colors.secondary};
  border-radius: 5px;
  color: ${db.theme.colors.contrastText};
  cursor: pointer;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  height: 52px;
  padding: 10px;
  margin: 24px 0 0;
  width: 100%;
  &:hover {
    color: #f5f5f5;
    background-color: ${db.theme.colors.secondaryLight};
  }
  &:active {
    background-color: ${db.theme.colors.secondaryDark};
    color: #555;
  }
  &:focus { outline: none; }
`;
