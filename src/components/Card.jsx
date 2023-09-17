// Card.jsx

import classNames from 'classnames';
import "./CardDND.scss"
import PatternsDefault from "../assets/patterns/PatternsDefault"
import cardsAdditional from "../contexts/StaticValue"

export default function Card(props) {

  const { name, tablePosition, arrayPosition, reversed, flipped } = props.card;
  const index = props.index;

  const cardClass = classNames("card",{
    'card--flipped': flipped && !reversed,
    'card--reversed': !flipped && reversed,
    'card--both': flipped && reversed,
    'card--placed': arrayPosition != -1
  });

  // 根据卡牌名字获取静态序号
  const getIndexByName = (name) => {
    for (let i = 0; i < cardsAdditional.length; i++) {
      if (cardsAdditional[i].name === name) {
        return i;
      }
    }
    return -1;
  }

  return (
    <div className={cardClass} style={{ zInde: index }}>
      <div className='card__div front'>
        <ul >
          <li>{name}</li>
          <li>{tablePosition},{arrayPosition}</li>
          <li>{reversed ? 'Yes' : 'No'},{flipped ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      <div className='card__div back'>
        <img
          className="svg--PD"
          src={PatternsDefault[getIndexByName(name)]}
          alt={"PD:" + name} />
      </div>
    </div>
  );
}
