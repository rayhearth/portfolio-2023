import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    let navigate = useNavigate()
    const projets = () => { navigate('/projets') }
    const about = () => { navigate('/about') }

    return (
        <section className='home ' >
            <img className='dark stars' src={process.env.PUBLIC_URL + '/assets/img/stars.png'} alt="" />

            <img className='dark cloud-top-left' src={process.env.PUBLIC_URL + '/assets/img/dark-cloud-top-left.png'} alt="" />
            <img className='dark cloud-top-right' src={process.env.PUBLIC_URL + '/assets/img/dark-cloud-top-rigth.png'} alt="" />

            <img className='cloud' src={process.env.PUBLIC_URL + '/assets/img/cloud.png'} alt='a cloud in the sky' />

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


            <img className='little_cloud' src={process.env.PUBLIC_URL + '/assets/img/little_cloud.png'} alt='a cloud in the sky' />

            <img className='dark cloud-bottom-left' src={process.env.PUBLIC_URL + '/assets/img/dark-cloud-bottom-left.png'} alt="" />
            <img className='dark cloud-bottom-right' src={process.env.PUBLIC_URL + '/assets/img/dark-cloud-bottom-rigth.png'} alt="" />
        </section>
    );
};

export default Home;