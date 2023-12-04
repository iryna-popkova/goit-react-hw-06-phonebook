import { List } from './contactList.styled';
import { ContactItem } from '../ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFiletrs } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFiletrs);

  const filterContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.toLowerCase().includes(normalizedFilter) ||
        contactNumber.includes(normalizedFilter)
      );
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
