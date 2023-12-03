import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactList } from '../ContactList/contactList';
import { Filter } from '../Filter/filter';
import { ContactForm } from '../ContactForm/contactForm';
import { Container, Section, Title, SectionTitle, Message } from './App.styled';

const contactsData = 'contacts';

const savedContacts = window.localStorage.getItem(contactsData);

export const App = () => {
  function getFilteredContacts() {
    const normFilter = (filters.filter || '').toLowerCase();

    return contacts.filter(contact => {
      const contactName = contact.name;
      const contactNumber = contact.number;

      return (
        contactName.toLowerCase().includes(normFilter) ||
        contactNumber.includes(normFilter)
      );
    });
  }

  const resetFilters = () => {
    addContacts({
      filters: '',
    });
  };

  const removeContact = contactId => {
    const contactToRemove = contacts.find(contact => contactId === contact.id);
    Notify.success(`${contactToRemove.name} removed from your phone book`);
  };

  useEffect(() => {
    window.localStorage.setItem(contactsData, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <ContactForm onSubmit={AddContact} />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>
        {contacts.length !== 0 ? (
          <>
            <Filter value={filters.filter} onChange={changeFilter} />
            <ContactList
              contacts={getFilteredContacts}
              onDelete={removeContact}
              onReset={resetFilters}
            />
          </>
        ) : (
          <Message>
            {' '}
            "There are no contacts in your phonebook. Please add your first
            contact!"
          </Message>
        )}
      </Section>
    </Container>
  );
};
