import React from 'react';
import logo from '../madia/logo.png';
import logobbc from '../madia/logo-bbc.png'
import logoforbes from '../madia/logo-forbes.png'
import logotech from '../madia/logo-techcrunch.png'
import logobi from '../madia/logo-bi.png'

const Header = () => (
    <header className="header">
        <img src={logo} alt="header logo" className="header__logo"/>
        <h3 className="heading-3">Your own home;</h3>
        <h1 className="heading-1">The ultimate personal freedom.</h1>
        <button className="btn header__btn">View our properties.</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
            <img src={logobbc} alt="BBC"/>
            <img src={logoforbes} alt="techforbes"/>
            <img src={logotech} alt="techcrunch"/>
            <img src={logobi} alt="bi"/>
        </div>
    </header>
);

export default Header;