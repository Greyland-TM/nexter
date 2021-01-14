import React from 'react';

const Features = () => (
    <section className="features">
        <div className="feature">
            <svg className="feature__icon">
                <use xlinkHref='../media/sprite.svg#icon-global'></use>
            </svg>
            <h4 className="heading-4">Worlds best luxery homes.</h4>
            <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>
        <div className="feature">feature 2</div>
        <div className="feature">feature 3</div>
        <div className="feature">feature 4</div>
        <div className="feature">feature 5</div>
        <div className="feature">feature 6</div>
    </section>
);

export default Features;