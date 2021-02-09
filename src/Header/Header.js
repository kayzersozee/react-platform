import Navigation from './Navigation/Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
color: #fff;
background-color: #370617;
width: 100vw;
`;


function Header(props) {
     return (
          <StyledHeader>
               <h1>{props.title}</h1>
               <Navigation />
          </StyledHeader> 
     )
}

export default Header