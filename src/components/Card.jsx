// Card.jsx

import classNames from 'classnames';
import "./CardDND.scss"

export default function Card(props) {

  const { name, tablePosition, arrayPosition, reversed, flipped } = props.card;
  const index = props.index;

  const cardClass = classNames('card', {
    'card--flipped': flipped,
    'card--reversed': reversed,
  });

  return (
    <div className={cardClass} style={{zInde:index}}>
      <div className='card__div front'>
        <ul >
          <li>{name}</li>
          <li>{tablePosition},{arrayPosition}</li>
          <li>{reversed ? 'Yes' : 'No'},{flipped ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      <div className='card__div back'>
        <p>SVG</p>
      </div>
    </div>
  );
}
