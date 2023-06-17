import { Box,styled } from "@mui/system";
import { Divider } from "@mui/material";
import { useEffect ,useState,useContext} from "react";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

//Components
import Conversation from "./conversation";

const Component = styled(Box)`
      height: 81vh;
      overflow: overlay; 
`;

const Divide = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations = ({ text }) =>{

    const [users , setUsers] = useState([]);

    const { account } = useContext(AccountContext);
     
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers(); 
            const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
     }, [text]);

    return(
         <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <Divide />
                    </>
                   
                ))
            }
         </Component>
    )
}
export default Conversations;