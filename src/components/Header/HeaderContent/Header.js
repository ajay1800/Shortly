import HeaderContent from "./HeaderContent";
import styled from "styled-components";
import HeaderImg from "../../../Images/illustration-working.svg";

const Div = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    overflow:hidden;
    justify-content:center;
    margin:50px 0px;

    & span.content{
        width:49%;
    }

    & span.Img{
        width:27%;
    }

    @media (max-width: 376px){
        width: 100%;
        flex-direction: column-reverse;
        margin-bottom: 160px;

        & span.content{
            width: 100%;
            text-align: center;
        }
        & span.Img{
            width: 100%;
            margin-bottom: 50px;
        }
        & span.Img img{
            width: 140%;
            height: auto;
        }
    }
`;


const Header = () => {
    return (
        <Div>
            <span className="content"> < HeaderContent/> </span>
            <span className="Img"> <img src={HeaderImg} alt="working"></img> </span>
        </Div>
    )
}

export default Header;