import 'animate.css';

import logo from '../assets/24118357.jpg'

const Home = () => {
    return (
        <div>
            <div className="home-container animate__animated animate__fadeIn" >
                <div className="home-1 animate__animated animate__backInLeft">
                    FRONT-END <br />DEVELOPER
                </div>
                <div className="home-image animate__animated animate__flip">
                    <img src={logo} alt="foto" width='100px' />
                </div>
                <div className="home-2 animate__animated animate__backInRight">
                    Hi! I'm Muhamad Rafli
                </div>
            </div>
            <div className='home-location'>
            <p>Location</p>
            <p>Depok, Indonesia</p>
            </div>
        </div>

    );
}

export default Home;