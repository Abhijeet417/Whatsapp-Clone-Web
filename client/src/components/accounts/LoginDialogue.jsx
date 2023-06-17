import { useContext } from "react";

import { Dialog,Typography ,List,ListItem,Box,styled} from "@mui/material";

import { qrCodeImage } from '../../constants/data';
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api"; 

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Component = styled(Box)`
      display: flex;
`;

const Container = styled(Box)`
      padding : 56px 0 56px 56px; 
`;

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    padding-bottom: 12px;
    font-family: inherit;
`;
const StyledList = styled(List)`
   & > li{
      padding: 0;
      margin-top: 12px;
      line-height: 28px;
      color: #4a4a4a;
      font-size: 16px;

   }
`;
const QrCode = styled('img')({
    height: 200,
    wodth: 200,
    margin: '50px 0 0 50px'
})
const dialogStyle = {
    height : '96%',
    marginTop : '12%',
    width : '60%',
    maxHeight : '100%',
    maxWidth : '100%',
    boxShadow : 'none',
    overflow : 'hidden'
}

 const LoginDial = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }
    
    const onLoginError = (res) => {
        console.log("Login Failed..",res);
    }
    return(
        <Dialog open={true} 
        PaperProps ={{sx : dialogStyle}} 
        hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To use Whatsapp on your computer : </Title>
                    <StyledList>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
                        <ListItem>3. Point your phone to the Screen and Capture the Code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position: 'relative'}}>
                    <QrCode src={qrCodeImage} alt="qr code" />
                     <Box style={{position: 'absolute', top: '50%',transform: 'translateX(25%)'}}>
                         <GoogleLogin 
                          onSuccess= {onLoginSuccess}
                          onError = {onLoginError}
                         />
                        
                     </Box>
                </Box>
            </Component>
            
        </Dialog>
    )
 }
 export default LoginDial;