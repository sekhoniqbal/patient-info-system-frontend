import { Link, useRoute, useLocation } from 'wouter';
import NavItem from './nav-item';
import authenticationService from '../../service/authentication-service';
import useAuthentication from '../../hooks/useAuthentication';

const Sidebar = () => {
    const {authInfo} = useAuthentication();
    return <div className="Sidebar">
        <ul className="sidebar--items">
            <li><NavItem href="/" label="Dashboard" icon="layout-grid-line" iconColor={"#c5bc58"} /></li>
            <li><NavItem href="/patients" label="Patients" icon="user-line" iconColor={"#e36ac8"} /></li>
        </ul>

        <ul className="sidebar--bottom-items">
            <li>Username: {authInfo.username}</li>
            <li>Role: {authInfo.role}</li>
            {/* <li><NavItem href="/settings" label="Settings" icon="settings-3-line" iconColor={"#e86786"} /></li> */}

            <li><a className='NavItem' href="#" onClick={()=>authenticationService.logout()}>
                <span className="icon" style={{ color: "#70d7a5" }}><i className={`ri-logout-box-r-line`}></i></span>
                <span className="sidebar--item">Logout</span>
            </a>
            </li>
        </ul>
    </div>
}

export default Sidebar;