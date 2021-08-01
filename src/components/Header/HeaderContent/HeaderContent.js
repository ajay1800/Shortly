import React , { Fragment } from 'react';
import { Button } from '../../UI/Button'; 
import styled from 'styled-components';


const Header = styled.div`  
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    height:100%;

    & p{
        font-size:18px;
        color:#bfbfbf;
        font-weight:500;
        width:75%;
        line-height: 30px;
    }
    & h1.title{
        color: #34313d;
        font-size: 4.5rem;
        font-weight: 700;
        letter-spacig:-0.2rem;
        word-spacing:-0.2rem;
        margin-bottom:0px;
        line-height: 5.5rem;

    }

    @media (max-width : 376px){
        & h1.title{
            font-size: 2.5rem;
            line-height: 3rem;
            font-weight: 900;
            width: 90%;
            margin: auto;
        }
        & p{
            width: 90%;
            margin: 20px auto;
        }
        & button{
            margin: auto;
        }
    }
  
`;


const HeaderContent = () => {
    return(
        <Fragment>
            <Header>
                <h1 className="title">
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <Button width="170px" radius="50px" background="#2acfcf" color="#fff" hoverbackground="#2acfcf97">Get Started</Button>
            </Header>
        </Fragment>
        
    )
}

export default HeaderContent;