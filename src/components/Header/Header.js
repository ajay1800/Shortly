import React , {Fragment} from 'react';
import Navbar from "./NavBar/Navbar";
import Header from "./HeaderContent/Header";
import HamburgerBtn from './NavBar/Hamburger';

const MainHeader = () => {
        const width = window.innerWidth <= 375;
        console.log(width);

    return(
        <Fragment>
            {!width && <Navbar/>}
            {width && <HamburgerBtn />}
            <Header/>
        </Fragment>
    )

}

export default MainHeader;