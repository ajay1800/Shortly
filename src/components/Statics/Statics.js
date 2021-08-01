import styled from "styled-components";
import StaticContent from "./StaticsContent";
import StaticsCards from "./StaticsCard";

const Div = styled.div`
    width:76%;
    margin:auto;
    padding:0px 0px 100px 0px;

    @media (max-width:376px){
        width: 90%;
    }
`;

const Statics = () => {
    return(
        <Div>
            <StaticContent/>
            <StaticsCards/>
        </Div>
    )
}

export default Statics;