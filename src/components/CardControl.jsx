// CardControl.jsx

import { useContext } from 'react';
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';
import { UserInfoContext } from '../contexts/UserInfoContext';
import { FaArrowRotateRight, FaArrowRotateLeft, FaEye } from "react-icons/fa6";

import "./CardDND.scss"

export default function CardControl(props) {

    const { name, reversed, flipped } = props.card;

    const DIC = useContext(DivinationInfoContext);
    const UIC = useContext(UserInfoContext);

    const handleReverse = () => {
        DIC.changeCardStatusByName(name, "reversed", !reversed);
    }

    const handleFlip = () => {
        DIC.changeCardStatusByName(name, "flipped", !flipped);
    }

    const style = {
        color: "rgb(155, 155, 155)"
    }

    return (
        <div className='card--control'>
            <div className='button--reverse' onClick={handleReverse}>
                {reversed ? <FaArrowRotateLeft style={style} /> : <FaArrowRotateRight style={style} />}
            </div>
            {UIC.userInfo.otherInfo === "dev" ? (
                <div className='button--flip' onClick={handleFlip}>
                    <FaEye style={style} />
                </div>) : null}
            {/* <div className='button--flip' onClick={handleFlip}>
                <FaEye style={style} />
            </div> */}
        </div>
    );
}
