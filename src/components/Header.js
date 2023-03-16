import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ModeButton } from './styled/Button.styled'

import { setDarkTheme, setDefaultTheme } from "../feature/theme.slice"

const Header = () => {

    let navigate = useNavigate()
    const home = () => { navigate('/home') }
    const about = () => { navigate('/about') }
    const projets = () => { navigate('/projets') }
    const contact = () => { navigate('/contact') }

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme)

    const setDark = () => {
        dispatch(setDarkTheme())
    }

    const setDefault = () => {
        dispatch(setDefaultTheme())
    }

    return (
        <header className='header main'>
            <nav className="main-nav">
                <ul className='linkContent'>
                    <li className="main-nav-item" onClick={home}>
                        Home
                    </li>
                    <li className="main-nav-item" onClick={about}>
                        Qui-suis je ?
                    </li>
                    <li className="main-nav-item" onClick={projets}>
                        Projets
                    </li>
                    <li className="main-nav-item" onClick={contact}>
                        Contact
                    </li>
                    <li>{!theme.darkmode ? (
                        <ModeButton onClick={setDark} bg="#324b50">
                            <img src="./assets/img/night-mode.png" alt="" />
                        </ModeButton>
                    ) : (
                        <ModeButton onClick={setDefault} bg="#f4e8dc">
                            <img src="./assets/img/day-mode.png" alt="" />
                        </ModeButton>
                    )}</li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;