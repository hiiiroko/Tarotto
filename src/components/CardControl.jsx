// CardControl.jsx

import { useContext } from 'react';
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import { FaArrowsRotate, FaEllipsisVertical } from "react-icons/fa6";

import "./CardDND.scss"

export default function CardControl(props) {

    const { name, reversed, flipped } = props.card;

    const DIC = useContext(DivinationInfoContext);

    const handleReverse = () => {
        DIC.changeCardStatusByName(name, "reversed", !reversed);
    }

    const handleFlip = () => {
        DIC.changeCardStatusByName(name, "flipped", !flipped);
    }

    return (
        <div className='draggable--control'>
            <div className='button--flip' onMouseDown={handleFlip}>
                <FaEllipsisVertical />
            </div>
            <div className='button--reverse' onMouseDown={handleReverse}>
                <FaArrowsRotate />
            </div>
        </div>
    );
}
