import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import React, {useEffect, useState} from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Jack".split("")
    const jobArray = "web developer".split("")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _15`}>m</span> <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
                </h1>
                <h2>Fullstack Developer / Student / Creative</h2>
            </div>
            <Logo />
        </div>
    );
}

export default Home