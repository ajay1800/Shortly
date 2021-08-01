import styled from 'styled-components';

export const Button = styled.button`
    font-size: 18px;
    font-weight:700;
    height:${props => props.height? props.height: '50px'};
    width : ${props => props.width};
    border-radius : ${props => props.radius};
    background : ${props => props.background};
    color : ${props => props.color};
    margin : ${props => props.margin};
    padding :${props => props.padding? props.padding: '0px 35px'};
    border: none;
    margin:${props => props.margin};
    cursor:pointer;

    &:hover{
        background : ${props => props.hoverbackground};
    }

`;