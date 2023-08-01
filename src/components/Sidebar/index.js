import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoJ from '../../assets/logo-j.png'
import LogoSub from '../../assets/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt="logo" />
            <img className='sub-logo' src={LogoSub} alt="jack" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='nonreferrer' href='https://www.linkedin.com/in/jackrifkin/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='nonreferrer' href='https://github.com/jackrifkin'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar