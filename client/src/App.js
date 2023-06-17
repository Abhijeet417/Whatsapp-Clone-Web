import Messenger from "./components/messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const ClientID = '126223605902-bh89m61v1616tqghf1ao164nvti64v3u.apps.googleusercontent.com';
  return (

    <GoogleOAuthProvider clientId={ClientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
