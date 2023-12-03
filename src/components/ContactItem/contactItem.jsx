import { ListItem, ContactData, RemoveButton } from './contactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ContactData>
        {name}: {number}
      </ContactData>
      <RemoveButton
        type="button"
        onClick={() => dispatch(deleteContact({ id: id }))}
      >
        Delete
      </RemoveButton>
    </ListItem>
  );
};
