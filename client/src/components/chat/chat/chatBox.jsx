import { useContext,useEffect,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';

import { Box } from "@mui/system";


import ChatHeader from "./chatHeader";
import Messages from "./messages";



const chatBox = () => {

    const { person,account } = useContext(AccountContext);
    const[conversation,setconversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
           let data = await getConversation({senderId: account.sub , recieverId: person.sub})
           setconversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box style = {{height: '75%'}} >
            <>
              <ChatHeader person={person}/>
              <Messages person={person} conversation={conversation} />
            </>
           
        </Box>
    )
}
export default chatBox;