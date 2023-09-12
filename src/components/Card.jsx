// Card.jsx

import classNames from 'classnames';
import "./CardDND.scss"

export default function Card({ props }) {
  const { name, tablePosition, arrayPosition, reversed, flipped } = props;
  const cardClass = classNames('card', {
    'card--reversed': reversed,
    'card--flipped': flipped,
  });

  return (
    <ul className={cardClass}>
      <li>Name: {name}</li>
      <li>Table: {tablePosition}</li>
      <li>Array: {arrayPosition}</li>
      <li>Reversed: {reversed ? 'Yes' : 'No'}</li>
      <li>Flipped: {flipped ? 'Yes' : 'No'}</li>
    </ul>
  );
}
