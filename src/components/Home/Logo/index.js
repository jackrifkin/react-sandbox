import './index.scss';
import LogoJ from '../../../assets/logo-j.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
    
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20
        })
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt='J'/>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.19 358.38">
                <g id="Layer_1-2" data-name="Layer 1">
                    <text ref={outlineLogoRef} class="cls-1" transform="translate(.5 268.53)"><tspan x="0" y="0">J</tspan></text>
                    <text ref={outlineLogoRef} class="cls-1" transform="translate(10.29 257.73)"><tspan x="0" y="0">J</tspan></text>
                </g>
            </svg>
        </div>
    )
}

export default Logo