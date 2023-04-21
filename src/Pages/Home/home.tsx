import * as React from 'react';
import './home.css';
import OctoHello from '../../Images/Octo/octo-hello.png';


function Home() {
  return (
    <div className='Container'> 
        <div className='IntroContainer'> 
          <div className='TextSide'>
            <h1 className='Title'>Hi, I'm Lucy!</h1>
            <p>I am a third year Computer Science major at Northeastern University with a concentration in Software. My main interest lies in full stack web development, but I would love to have the opportunity to explore other fields. </p>
          </div>
          <div className='ImageContainer'>
            <img src={OctoHello} alt='My Octo' className='Octo'/>
          </div>
        </div>
        <div className='AboutMe'>
          <h1 className='Title'>About Me</h1>
          <p>
            I grew up with a love and curiousity for all things technology. I have always wanted to create products 
            to help people, from fascilitating things in everyday lives to tackling issues to change the world. As
            a result, I decided to pursue a career in Computer Science to follow my passion for technology. 
          </p>
          <p>
            My curiosity has helped me become an active learner, seeking any opportunity to expand my knowledge and either 
            self learn new topics or seek help from those with more experience. 
          </p>
        </div>
    </div>
  );
}

export default Home;
