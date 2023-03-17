import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image, BgImage, Cloud } from '../components/styled/Home.styles';


const Home = () => {

    const darkmode = useSelector((state) => state.theme.darkmode);

    let navigate = useNavigate()
    const projets = () => { navigate('/projets') }
    const about = () => { navigate('/about') }

    return (

        <section
            className={!darkmode ? "day-home home" : "dark-home home"}
        >

            <BgImage
                className='stars'
                src={!darkmode ? "" : "./assets/img/stars.png"}
                alt="Image load fail"
            />

            <Image
                className='cloud'
                src={!darkmode ? "./assets/img/cloud-day.png" : "./assets/img/cloud.png"}
                alt="Image load fail"
            />

            <Cloud
                className='cloud-top-left'
                src={!darkmode ? "./assets/img/day-cloud-top-left.png" : "./assets/img/dark-cloud-top-left.png"}
                alt="Image load fail"
            />
            <Cloud
                className='cloud-top-right'
                src={!darkmode ? "./assets/img/day-cloud-top-rigth.png" : "./assets/img/dark-cloud-top-rigth.png"}
                alt="Image load fail"
            />

            <div className="intro-text">
                <h3>Hello, Je suis Emmanuelle Jupon,</h3>
                <h3> et vous êtes sur mon </h3>
                <h1>Portfolio</h1>
                <div className='intro-roles'>
                    <p>
                        Je suis développeuse front-end
                    </p>
                    <p> && webdesigner</p>
                </div>
            </div>
            <div className="intro-links">
                <ul>
                    <li className='link' onClick={projets}>

                        <p>
                            Voir mes projets
                        </p>
                        <div className="arrow">
                            <img src={process.env.PUBLIC_URL + '/assets/img/arrow-gold.svg'} alt='icon de flèche vers la croite pour être redirigé vers la page de présentation des projets de Emmanuelle Jupon'></img>
                        </div>
                    </li>

                    <li className='link' onClick={about}>

                        <p>
                            En savoir plus
                        </p>

                        <div className="arrow">
                            <img src={process.env.PUBLIC_URL + '/assets/img/arrow-gold.svg'} alt='icon de flèche vers la croite pour être redirigé vers la page de présentation de Emmanuelle Jupon'></img>
                        </div>
                    </li>
                </ul>
            </div>

            <Image
                className='little_cloud'
                src={!darkmode ? "./assets/img/cloud-day.png" : "./assets/img/cloud.png"}
                alt="Image load fail"
            />
            <Cloud
                className='cloud-bottom-left'
                src={!darkmode ? "./assets/img/day-cloud-bottom-left.png" : "./assets/img/dark-cloud-bottom-left.png"}
                alt="Image load fail"
            />
            <Cloud
                className='cloud-bottom-right'
                src={!darkmode ? "./assets/img/day-cloud-bottom-rigth.png" : "./assets/img/dark-cloud-bottom-rigth.png"}
                alt="Image load fail"
            />

        </section>
    );
};

export default Home;