import { useState } from 'react';

import PropTypes from 'prop-types';

import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <Input
        placeholder="Number"
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
