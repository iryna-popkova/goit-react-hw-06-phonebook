import { List } from './contactList.styled';
import { ContactItem } from '../ContactItem/contactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filters = useSelector(state => state.filters.value);

  const filterContacts = () => {
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return contactName.includes(filters) || contactNumber.includes(filters);
    });
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
