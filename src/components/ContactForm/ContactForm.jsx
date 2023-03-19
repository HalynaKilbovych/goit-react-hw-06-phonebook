import React, { useState } from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = ({handleSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const handleChange = e => {
      const { name, value } = e.target;
      name === 'name' ? setName(value) : setNumber(value);
    };
  
    const handleSubmitForm = e => {
      e.preventDefault();
  
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
  
      handleSubmit(newContact);
      setName('');
      setNumber('');
    };
  
    return (
      <Form onSubmit={handleSubmitForm}>
        <Label>
          Name
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  };
  
  ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };