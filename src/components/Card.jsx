// Card.jsx
// 新增组件，用于显示卡牌的信息
// 该文件位于src/components文件夹下

import React from 'react';
import classNames from 'classnames';

import "./CardDND.scss"

export default function Card({props}) {
  // 从props中解构出卡牌的信息
  const { name, tablePosition, arrayPosition, reversed, flipped } = props;
  // 根据卡牌的状态设置不同的样式类名
  const cardClass = classNames('card', {
    'card-reversed': reversed,
    'card-flipped': flipped,
  });
  // 返回一个div元素，显示卡牌的信息
  return (
    <ul className={cardClass}>
      <li>Name: {name}</li>
      <li>Table Position: {tablePosition}</li>
      <li>Array Position: {arrayPosition}</li>
      <li>Reversed: {reversed ? 'Yes' : 'No'}</li>
      <li>Flipped: {flipped ? 'Yes' : 'No'}</li>
    </ul>
  );
}
