import React from 'react';
import { IoHeartSharp, IoLocationOutline, IoPersonOutline, IoExpandOutline, IoKeyOutline } from 'react-icons/io5';

const Card = props => (
    <div className="home">

            <img src={props.src} alt="House #1" className="home__image"/>
            <IoHeartSharp className='home__like'/>

            <h5 className="home__name">{props.head}</h5>
            <div className="home__location">
                <IoLocationOutline className='home__icon'/>
                <p>{props.location}</p>
            </div>

            <div className="home__rooms">
                <IoPersonOutline className='home__icon'/>
                <p>{props.rooms} rooms</p>
            </div>

            <div className="home__area">
                <IoExpandOutline className='home__icon'/>
                <p>{props.meters}m<sup>2</sup></p>
            </div>

            <div className="home__price">
                <IoKeyOutline className='home__icon'/>
                <p>${props.price}</p>
            </div>

            <button className="btn home__button">Contact realtor</button>
        </div>
);

export default Card;