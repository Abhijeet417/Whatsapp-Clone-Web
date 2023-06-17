
import { useContext } from 'react';

import {AppBar,Toolbar,styled,Box} from '@mui/material';

import { AccountContext } from '../context/AccountProvider';
import LoginDial from "./accounts/LoginDialogue";
import ChatDialog from './chat/chatDialog';

const Component = styled(Box)`
     height: 100vh;
     background-color : #DCDCDC;
`
const Header = styled(AppBar)`
      height : 125px;
      background-color : #00A884;
      box-shadaw : none;
`

const LoginHeader = styled(AppBar)`
      height : 220px;
      background-color : #00bfa5;
      box-shadaw : none;
`
const Messenger = () =>{

    const {account} = useContext(AccountContext);

    return(

        <>
           <Component>
             {
                account ? 
                
                <>
                   <Header>
                            <Toolbar>

                            </Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                    </LoginHeader>
                    <LoginDial />
                </>
             }
         </Component>
        </>
    )
}
export default Messenger;
