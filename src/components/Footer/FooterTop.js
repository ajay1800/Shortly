import styled from "styled-components";
import { Button } from "../UI/Button";
import FooterImg from "../../Images/bg-boost-desktop.svg";
import FooterMobImg from "../../Images/bg-boost-mobile.svg";

const Footer = styled.div`
    width:100%;
    height:250px;
    background: #3b3054;
    background-image:url(${FooterImg});
    background-repeat: no-repeat;
    background-size: cover;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    & h1{
        font-weight:900;
    }

    @media(max-width:376px){
        height:300px;
        background-image:url(${FooterMobImg});

    & h1{
        width: 90%;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 600;
        }
    }
}
`;

const FooterTop = () => {
    return(
        <Footer>
            <h1>Boost your links today</h1>
            <Button radius="50px" color="#fff" background="#2acfcf" hoverbackground="#2acfcf90">Get Started</Button>
        </Footer>
    )
}

export default FooterTop;