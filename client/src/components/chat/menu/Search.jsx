import { Box,styled } from '@mui/system';
import {Search as SearchIcon} from '@mui/icons-material';
import { InputBase } from '@mui/material';

const Component = styled(Box)`
     background: #fff;
     height: 45px;
     border-bottom: 1px solid #F2F2F2 ;
     margin-top: 5px;
`;

const Wrapper = styled(Box)`
     background-color: #f0f2f5;
     position: relative;
     margin: 0 13px;
     border-radius: 10px;
`;
const Icon= styled(Box)`
    position: absolute;
     height: 100%;
     padding: 8px;
     color: #919191; 
`;

const InputFeild = styled(InputBase)`
    width: 95%;
    padding: 16px;
    height: 16px;
    padding-left: 60px;
    font-size: 14px;
`;
const Search = ({setText}) => {
    
    return(
        <Component>
          <Wrapper>
            <Icon>
                <SearchIcon /> 
            </Icon>
             <InputFeild 
               placeholder='Search or start a new chat'
               onChange={(e) => setText(e.target.value)}
               />
          </Wrapper>
        </Component>
    )
}
export default Search;