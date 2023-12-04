import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { resetFilters } from 'redux/filterSlice';

import {
  Field,
  Form,
  Button,
  FormContainer,
  FormGroup,
  ErrorMessage,
} from './contactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          dispatch(resetFilters());
          if (contacts.some(contact => contact.name === values.name)) {
            Notify.failure(`${values.name} already in phonebook!`);
            return;
          }

          dispatch(addContact({ ...values, id: nanoid() }));
          Notify.success(`${values.name} added to your contacts!`);
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" placeholder="Mike" />
            <ErrorMessage name="name" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="number" placeholder="+380..." />
            <ErrorMessage name="number" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
