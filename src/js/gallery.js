import React from 'react';
import gal1 from '../madia/gal-1.jpeg';
import gal2 from '../madia/gal-2.jpeg';
import gal3 from '../madia/gal-3.jpeg';
import gal4 from '../madia/gal-4.jpeg';
import gal5 from '../madia/gal-5.jpeg';
import gal6 from '../madia/gal-6.jpeg';
import gal7 from '../madia/gal-7.jpeg';
import gal8 from '../madia/gal-8.jpeg';
import gal9 from '../madia/gal-9.jpeg';
import gal10 from '../madia/gal-10.jpeg';
import gal11 from '../madia/gal-11.jpeg';
import gal12 from '../madia/gal-12.jpeg';
import gal13 from '../madia/gal-13.jpeg';
import gal14 from '../madia/gal-14.jpeg';

const Gallery = () => (
    <section className="gallery">
        <figure className="gallery__item gallery__item--1">
            <img src={gal1} alt="Galleryimage 1" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--2">
            <img src={gal2} alt="Galleryimage 2" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--3">
            <img src={gal3} alt="Galleryimage 3" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--4">
            <img src={gal4} alt="Galleryimage 4" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--5">
            <img src={gal5} alt="Galleryimage 5" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--6">
            <img src={gal6} alt="Galleryimage 6" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--7">
            <img src={gal7} alt="Galleryimage 7" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--8">
            <img src={gal8} alt="Galleryimage 8" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--9">
            <img src={gal9} alt="Galleryimage 9" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--10">
            <img src={gal10} alt="Galleryimage 10" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--11">
            <img src={gal11} alt="Galleryimage 11" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--12">
            <img src={gal12} alt="Galleryimage 12" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--13">
            <img src={gal13} alt="Galleryimage 13" className="gallery__img"/>
        </figure>

        <figure className="gallery__item gallery__item--14">
            <img src={gal14} alt="Galleryimage 14" className="gallery__img"/>
        </figure>
    </section>
);

export default Gallery;