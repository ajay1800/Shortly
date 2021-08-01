import React , {useState} from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import bgImg from "../../Images/bg-shorten-desktop.svg"
import bgMobImg from "../../Images/bg-shorten-mobile.svg"

const Container = styled.div`
    width:76%;
    height: 145px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-color: #3b3054;
    background-size: cover;
    background-image:url(${bgImg});

    
    & form{
        width: 90%;
        margin: auto;
    }

    & input{
        width: 80%;
        font-size: 18px;
        height: 49px;
        border-radius: 5px;
        border: none;
        padding-left: 20px;
        font-weight: 700;
        margin-right:20px;
        outline:none;
    }

    & p{
        font-size:18px;
        font-weight:500;
        color: #f46262;
        font-style:italic;
        margin:0px 0px -20px 0px;
    }

    & .invalid{
        border:2px solid #f46262;
    }
    & .invalid::placeholder{
        color:#f4626290;
    }

    @media (max-width:376px){
        width: 90%;
        display: flex;
        flex-direction: column;
        height: 220px;
        justify-content: space-around;
        background-image:url(${bgMobImg});
        background-position: 80px -60px;

        & form{
            width: 90%;
        }
        & form div{
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        & input{
            width: 93%;
            margin: 0px;
        }

        & button{
            width: 100%;
        }

        & p{
            position: absolute;
            top: 25%;
        }
    }
}
`;

const ShortLinkForm = (props) => {

    const [inputValue , setInputValue] = useState("");
    const [isValid , setIsValid] = useState(true);

    const valueHandler = (event) => {
        setInputValue(event.target.value);

        if(inputValue.trim() !== ""){
            setIsValid(true);
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(inputValue.trim() === ""){
            setIsValid(false);
            return;
        }

        const fetchLinks = async () => {
            const Response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            const data = await Response.json();

            const shortedLink = data.result.full_short_link;

            props.linkData(inputValue,shortedLink);
        }
        fetchLinks();
        
        setInputValue("");
    }

    const inValid = isValid ? '' :'invalid';  

    return (
        <Container link={inputValue} >
        <form onSubmit={formSubmitHandler}>
            <div>
            <input className={inValid} placeholder="Shorten a link here..." type="text" value={inputValue} onChange={valueHandler}/>
            <Button radius="5px" color="#fff" background="#2acfcf" hoverbackground="#2acfcf90">Shorten It!</Button>
            </div>
            {!isValid && <p>please add a link</p>}
        </form>
        </Container>
    )
}

export default ShortLinkForm;