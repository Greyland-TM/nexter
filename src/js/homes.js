import React from 'react';
import Card from './card';
import house1 from '../madia/house-1.jpeg';
import house2 from '../madia/house-2.jpeg';
import house3 from '../madia/house-3.jpeg';
import house4 from '../madia/house-4.jpeg';
import house5 from '../madia/house-5.jpeg';
import house6 from '../madia/house-6.jpeg';

const Homes = () => (
    <section className="homes">

        <Card
            head='Its a beautiful house!'
            location='Canada'
            rooms='56'
            meters='450'
            price='2,750,000'
            src={house1}
        ></Card>

        <Card
            head='Modern glass villa'
            location='USA'
            rooms='5'
            meters='325'
            price='1,200,000'
            src={house2}
        ></Card>

        <Card
            head='Its a cozy country house'
            location='UK'
            rooms='4'
            meters='250'
            price='850,000'
            src={house3}
        ></Card>

        <Card
            head='Large rustic villa'
            location='Portugal'
            rooms='6'
            meters='180'
            price='1,950,000'
            src={house4}
        ></Card>

        <Card
            head='Majestic palace house.'
            location='Germany'
            rooms='18'
            meters='4302'
            price='9,500,000'
            src={house5}
        ></Card>

        <Card
            head='Modern family apartment'
            location='Italy'
            rooms='3'
            meters='180'
            price='600,000'
            src={house6}
        ></Card>
        

    </section>
);

export default Homes;