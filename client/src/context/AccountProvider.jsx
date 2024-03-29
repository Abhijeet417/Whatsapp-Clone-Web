

import { createContext, useState ,useEffect,useRef} from "react";

// resolve: {
//   alias: {
//     'socket.io-client'; path.resolve(__dirname, 'socket/node_modules/socket.io-client')
//   }
// }

// import io from 'socket.io-client';


//import { io } from '../../../socket/node_modules/socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) =>{

    const [account,setAccount] = useState();

    const [person, setPerson] = useState({});

    // const socket = useRef();

    // useEffect(() => {
    //     socket.current = io('ws://localhost:9000')
    // },[])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            //socket
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;

