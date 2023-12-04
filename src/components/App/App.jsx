import { ContactList } from '../ContactList/contactList';
import { Filter } from '../Filter/filter';
import { ContactForm } from '../ContactForm/contactForm';
import { Container, Title, SectionTitle, Message } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionTitle>Add contact</SectionTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Message>
          {' '}
          "There are no contacts in your phonebook. Please add your first
          contact!"
        </Message>
      )}
    </Container>
  );
};
