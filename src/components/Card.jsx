// Card.jsx

import classNames from 'classnames';
import "./CardDND.scss"

export default function Card(props) {

  const { name, tablePosition, arrayPosition, reversed, flipped } = props.card;
  // const cardClass = classNames('card', {
  //   'card--reversed': reversed,
  //   'card--flipped': flipped,
  // });
  const cardClass = classNames('card', {
    'flipped': flipped,
    'card--reversed': reversed,
  });

  return (
    <div className={cardClass} >
      <div className='card-inner front'>
        <ul >
          <li>{name}</li>
          <li>{tablePosition},{arrayPosition}</li>
          <li>{reversed ? 'Yes' : 'No'},{flipped ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      <div className='card-inner back'>
        <p>FKU</p>
      </div>
    </div>
  );
}
