import React , {useState} from "react";
import styled from "styled-components";
import MobileNav from "./mobileNavBar";
import icon from "../../../Images/Group.svg"
import logo from '../../../Images/logo.svg';

const Div = styled.div`
    width:100%;

    & div.top-bar{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    & div.top-bar img{
        margin:10px 15px;
    }
`;

const HamburgerBtn = () => {

    const [showMenu,setShowMenu] = useState(false);

    const toggelHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <Div>
            <div className="top-bar">
                <img src={logo} alt="shortly"/>
                <img src={icon}  alt="menu" onClick={toggelHandler}/>
            </div>
            {showMenu && <MobileNav />}
        </Div>
    )
}

export default HamburgerBtn;