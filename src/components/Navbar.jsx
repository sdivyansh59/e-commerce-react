import styled from 'styled-components';
import { Search, ShoppingCartOutlined  } from '@material-ui/icons'
import { Badge } from '@material-ui/core'


const Container = styled.div`
    height: 60px;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;
const Language = styled.span`
    font-size: 0.875rem;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center ;
    padding: 5px;
    margin-left: 25px;
`;

const Input = styled.input`
    border: none;
`;

//  *** Center ***
const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MenuItem = styled.div`
    margin-left: 25px;
`;


const Navbar = () => {
    return (
        <div>
            <Container>
               <Wrapper> 
                   <Left>
                       <Language>En</Language>
                       <SearchContainer>
                           <Input/>
                           <Search style={{color: 'gray' , fontSize: '16px'}}/>
                       </SearchContainer>
                   </Left>

                   <Center>
                       <Logo>fill-sack.</Logo>
                   </Center>

                   <Right>
                       <MenuItem>Register</MenuItem>
                       <MenuItem>Sign In</MenuItem>
                       <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                       </MenuItem>
                   </Right>
               </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
