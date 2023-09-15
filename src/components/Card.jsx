// Card.jsx

import classNames from 'classnames';
import "./CardDND.scss"

export default function Card( props ) {

  const { name, tablePosition, arrayPosition, reversed, flipped } = props.card;
  const cardClass = classNames('card', {
    'card--reversed': reversed,
    'card--flipped': flipped,
  });

  return (
    <div>
      <ul className={cardClass} style={{
        zIndex : props.index
      }}>
        <li>{name}</li>
        <li>{tablePosition},{arrayPosition}</li>
        <li>{reversed ? 'Yes' : 'No'},{flipped ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}
