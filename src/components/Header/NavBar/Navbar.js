import React , { Fragment } from 'react';
import styled  from 'styled-components';
import NavLinks from './NavLinks';
import Logo from './logo';
import { Button } from '../../UI/Button';

const Nav = styled.nav`
    display:flex;
    flex-direction:row;
    margin:auto;
    width:80%;
    justify-content:center;

    & svg{
        padding:20px;
    }
`;

const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <Logo/>
                <NavLinks />
                <div>
                    <Button radius="50px" background="#fff" color="#bfbfbf" margin="10px">Login</Button>
                    <Button radius="50px" background="#2acfcf" color="#fff" margin="10px" hoverbackground="#2acfcf97">Sign Up</Button>
                </div>
            </Nav>
        </Fragment>
    )
}

export default Navbar;