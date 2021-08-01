import React , {useState} from "react";
import { useDispatch , useSelector } from 'react-redux';
import styled from "styled-components";
import ShortLinkForm from "./ShortLinkForm";
import { Button } from "../UI/Button"
import { linkAction } from "../../store";

const Shorten = styled.div`
    transform: translateY(-70px);

    @media (max-width:376px){
        transform: translateY(-100px);
    }
`;

const Div = styled.div`
    width:75%;
    display:flex;
    flex-direction:row;
    background:#fff;
    padding:10px;
    font-size:18px;
    font-weight:500;
    margin:auto;
    border-radius:10px;
    margin-top:20px;
    justify-content: space-between;

    & div{
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
        align-items:center;
        width: 35%;
    }

    & p.old-link{
        color:#000;
        margin-left: 25px;
    }
    & p.new-Link{
        width:60%;
        color:#2acfcf;
        margin:0;
    }

    @media (max-width: 376px){
        width: 85%;
        display: flex;
        flex-direction: column;
        padding: 0px;

        & p.old-link{
            margin: 10px 0px 0px 0px;
            padding: 15px;
            width: 91%;
            border-bottom: 1px solid #838383;
        }

        & p.new-Link{
            width: 100%;
        }

        & div.updated{
            flex-direction: column;
            width: 90%;
            height: 95px;
            margin: auto;
        }
        & button{
            width: 100%;
        }
    }

    }
`;


const ShortLinks = () => {

    const dispatch = useDispatch();

    const linkData = useSelector(state => state.linksData.linkData);

    const [isCopy , setIsCopy] = useState(false);

    const copyHandler = () => {
        setIsCopy(true)
        let copyUrl = document.getElementById("url");
        const urlValue = copyUrl.textContent;
        
        let textarea = document.createElement("textarea");
        textarea.value = urlValue;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0,9999);
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setTimeout(()=>{
            setIsCopy(false);
        },3000)
    }
    
    const linkHandler = (oldLink,newLink) => {
        console.log(oldLink);
        console.log(newLink);

        const data = {oldLink,newLink};

        dispatch(linkAction.addLinkData(data));

    }
    
    
    const checkData = linkData.length === 0;
    
    const linkSBar = <div>{
        linkData.map(item => <Div>
        <p className="old-link">{item.oldLink}</p>
        <div className="updated">
        <p className="new-Link" id="url">{item.newLink}</p>
        {!isCopy && <Button radius="5px" color="#fff" background="#2acfcf" padding="0px" hoverbackground="#2acfcf90" width="110px" height="40px" onClick={copyHandler}>copy</Button>}
        {isCopy && <Button radius="5px" color="#fff" background="#3b3054" padding="0px"  width="110px" height="40px">copied!</Button>}
        </div>
        </Div>
        )}
        </div>

       
    return (
        <Shorten>
            <ShortLinkForm linkData={linkHandler}/>
            {!checkData && linkSBar}
        </Shorten>
    )
   
}

export default ShortLinks;