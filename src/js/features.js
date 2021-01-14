import { IoGlobeOutline, IoTrophyOutline, IoLocationOutline, IoKeyOutline, IoEaselOutline, IoLockClosedOutline } from 'react-icons/io5';

const Features = () => (
    <section className="features">
        <div className="feature">
            <IoGlobeOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">Worlds best luxery homes.</h4>
            <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>
        <div className="feature">
            <IoTrophyOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">Only the best properties.</h4>
            <p className="feature__text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
        </div>
        <div className="feature">
            <IoLocationOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">All homes in top locations.</h4>
            <p className="feature__text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
        </div>
        <div className="feature">
            <IoKeyOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">New home in one week.</h4>
            <p className="feature__text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className="feature">
            <IoEaselOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">Top 1% of realtors.</h4>
            <p className="feature__text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>
        <div className="feature">
            <IoLockClosedOutline className='feature__icon'/>
            <h4 className="heading-4 heading-4--dark">Secure payments on XXX</h4>
            <p className="feature__text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
        </div>
    </section>
);

export default Features;