// Card.jsx

import { useContext, useState } from 'react';
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import classNames from 'classnames';
import "./CardDND.scss"

export default function Card({ props }) {
  const DIC = useContext(DivinationInfoContext);

  const { name, tablePosition, arrayPosition, reversed, flipped } = props;
  const cardClass = classNames('card', {
    'card--reversed': reversed,
    'card--flipped': flipped,
  });

  const handleReverse = () => {
    DIC.changeCardStatusByName(name, "reversed", !reversed);
  }

  return (
    <ul className={cardClass}>
      <li>{name}</li>
      <li>{tablePosition},{arrayPosition}</li>
      <li>{reversed ? 'Yes' : 'No'},{flipped ? 'Yes' : 'No'}</li>
      <div className='reverseButton' onMouseDown={handleReverse}>Reverse Me</div>
    </ul>
  );
}
