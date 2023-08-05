import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={css.notification}>{message}</p>;
}

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
