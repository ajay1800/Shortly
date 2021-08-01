import BrandIcon from '../../Images/icon-brand-recognition.svg';
import DetailedIcon from "../../Images/icon-detailed-records.svg";
import CustomizableIcon from "../../Images/icon-fully-customizable.svg"
import styled from "styled-components";

const Card = styled.div`
    width:300px;
    height:250px;
    background:#fff;
    padding:20px;
    border-radius:5px;
    margin-top:${props => props.margin};
    z-index:9;


    & div.img{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#3b3054;
        width:80px;
        height:80px;
        border-radius:50%;
        transform: translate(10px, -55px);
    }
    & div.content{
        padding:10px;
        height:190px;
        padding:35px 10px;
    }
    & h2{
        font-weight:800;
        font-size:24px;
        color:#575757;
    }
    & p{
        font-size:18px;
        font-weight:500;
        color:#bfbfbf;
    }

    @media (max-width:376px){
        margin-top:70px;

        & div.img{
            left: 50%;
            transform: translate(-50%, -60px);
        }
    }
`;

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-top:100px;

    &::before{
        content:'';
        width:35%;
        height:10px;
        background: #2acfcf;
        position:absolute;
        display:flex;
        transform:translate(0,120px);
    }

    @media (max-width:376px){
        flex-direction: column;
        margin-top: 0px;

        &::before{
            content:'';
            width:8px;
            height:70%;
            left:50%;
            transform:translate(-50%,0px);
        }
    }

  
`;


const StaticsCards = () => {
    return(
        <Container>
            <Card>
                <div className="img">
                    <img src={BrandIcon} alt="Brand Recognition" width="35px" height="35px"/>
                </div>
                <div className="content">
                <h2>
                    Brand Recognition
                </h2>
                <p>
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                </p>
                </div>
            </Card>
            <Card margin="35px">
                <div className="img">
                    <img src={DetailedIcon} alt="Detailed Recorde" width="35px" height="35px"/>
                </div>
                <div className="content">
                <h2>
                    Detailed Recorde
                </h2>
                <p>
                    Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decision.
                </p>
                </div>
            </Card>
            <Card margin="70px">
                <div className="img">
                    <img src={CustomizableIcon} alt="Fully Customizable" width="35px" height="35px"/>
                </div>
                <div className="content">
                <h2>
                    Fully Customizable
                </h2>
                <p>
                    Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement.
                </p>
                </div>
            </Card>
        </Container>

    )
}

export default StaticsCards; 