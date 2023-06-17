import { useState } from 'react';
import { Box } from "@mui/system";


import Header from "./Header";
import Search from "./Search";
import Conversations from "./conversations";

const Menu = () =>{

    const [text,setText] = useState('');

    return(
        <Box>
           <Header />
           <Search setText={setText}/>
           <Conversations text={text}/>
        </Box>
       
    )
}
export default Menu;