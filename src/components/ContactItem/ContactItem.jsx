import PropTypes from 'prop-types';
import { Item, NameItem, Button} from './ContactItem.styled';

export function ContactItem({ contact, deleteContact }) {
  return (
    <Item>
      <NameItem>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </NameItem>
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};