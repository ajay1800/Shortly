import styled from "styled-components";

const Div = styled.div`
    background:#bfbfbf;
    margin-top:100px;

    @media (max-width:375px){
        margin-top: 175px;
    }
`;

const Body = (props) => {
    return (
        <Div>
            {props.children}
        </Div>
    )
}

export default Body;