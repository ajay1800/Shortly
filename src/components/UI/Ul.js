import styled from "styled-components";

export const Ul = styled.ul`
    display:flex;
    flex-direction:${props => props.direction};
    width:${props => props.width};
`;

