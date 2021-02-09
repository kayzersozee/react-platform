import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useWindowSize from '../../useWindowSize'

const StyledUl = styled.ul`
display:flex;
flex-direction: ${() => useWindowSize().width > 600  ? 'row':'column'};
list-style: none;
`

const StyledLi = styled.li`
background-color:   #370637;
line-height: 2.5rem;
margin: 5px 0px;
`





function Navigation() {
    return (
        <StyledUl>
            <StyledLi><Link to='/'>Home</Link></StyledLi>  
            <StyledLi><Link to='/about'>About</Link></StyledLi>  
            <StyledLi><Link to='/projects'>Projects</Link></StyledLi>  
            <StyledLi><Link to='/contact'>Contact</Link></StyledLi>
        </StyledUl>
    )
}

export default Navigation