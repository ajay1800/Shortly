import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { Li } from "./NavLinks";
import { Ul } from "../../UI/Ul";

const Div = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    text-align:center;
    background: #3b3054;
    border-radius:10px;
    margin:auto;

    & div.Actions{
        display:flex;
        flex-direction:column;
        margin: 20px;
        border-top: 1px solid #fff;
        padding-top: 25px;
    }
    & li{
        padding: 15px;
    }
    & ul{
        width: 100%;
        padding: 0px;
    }

    & li a{
        color:#fff;
    }
`;


const MobileNav = () => {
    return (
        <Div>
            <Ul direction="column" width="100%%">
                <Li>
                    <NavLink to="/features" activeClassName="active">
                        Features
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/pricing" >
                        Pricing
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/resourses" >
                        Resources
                    </NavLink>
                </Li>
            </Ul>
            <div className="Actions">
                    <Button radius="50px" background="transparent" color="#fff" margin="10px">Login</Button>
                    <Button radius="50px" background="#2acfcf" color="#fff" margin="10px" hoverbackground="#2acfcf97">Sign Up</Button>
            </div>
        </Div>
    )
}

export default MobileNav;