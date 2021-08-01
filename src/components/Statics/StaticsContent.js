import { Fragment } from "react";
import styled from "styled-components";

const HeadingContent = styled.div`
    width:100%;
    text-align:center;
    margin-top:70px;
    
    & h1{
        font-size:2rem;
        font-weight:700;
        color:#34313d;
        word-spacing:-0.2rem;
    }
    & p{
        font-size:18px;
        color:#3b3054;
        line-height:25px;
        font-weight:500;
    }

    @media (max-width:376px){
        margin-top:0px;
    }
`;


const StaticContent = () => {
    return (
        <Fragment>
            <div>
                <HeadingContent>
                <h1>
                    Advanced Statistics
                </h1>
                <p>
                    Track how your links are performing across the web with <br/> our advanced statistics dashboard.
                </p>
                </HeadingContent>
            </div>
        </Fragment>
    )
}

export default StaticContent;