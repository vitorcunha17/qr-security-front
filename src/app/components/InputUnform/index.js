import React from 'react';
import { Input } from '@rocketseat/unform';
import './styles.css';

export default function InputUnform({ contentLabel, nameInput, ...rest }) {
  return (
    <div className="label-float">
      <Input name={nameInput} type="text" placeholder=" " {...rest}/>
      <label>{contentLabel}</label>
    </div>
  );
}
