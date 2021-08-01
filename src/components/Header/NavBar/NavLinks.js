import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Ul } from '../../UI/Ul';

export const Li = styled.li`
    list-style:none;
    font-weight:500;
    color: 	#bfbfbf;
    padding: 5px 10px;
   

    & a{
        font-size:18px;
        text-decoration:none;
        color:#bfbfbf;
        font-weight:700;

    }
    & a:hover{
        color:#000;
    }
    & a.active{
        color:#000;
        font-weight : 700;
    }
`;

const NavLinks = () => {
    return (
            <Ul direction="row" width="56.7%">
                <Li>
                    <NavLink to="/features" activeClassName="active">
                        Features
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/pricing" >
                        Pricing
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/resourses" >
                        Resources
                    </NavLink>
                </Li>
            </Ul>
    )
}

export default NavLinks;