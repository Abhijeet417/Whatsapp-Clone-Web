import { Typography,styled,Divider } from "@mui/material";
import { Box } from "@mui/system";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
     background: #f8f9fa;
     padding: 30px 0;
     text-allign: center;
     height: 100%;
`;

const Container = styled(Box)`
    padding : 0 200px;
`;

const Image = styled('img')({
    marginTop: 100,
    width: 400
})

const Title = styled(Typography)`
     font-weight: 300;
     margin: 25px 0 10px 0;
     font-family: inherit;
     font-size: 32px;
     color: #41525D;
     margin-left: 100px; 
`;

const SubTitle = styled(Typography)`
    font-weight: 400;
    font-family: inherit;
    font-size: 12px;
    color: #667781;
     margin-left: 10px;   
`;

const Divide = styled(Divider)`
     margin: 40px 0;
     opacity: 0.4;
`;

const EmptyChat = () => {

    return(
       <Component>
        <Container>
           <Image src={emptyChatImage} alt="" />
           <Title>Whatsapp Web</Title>
           <SubTitle>Send and recieve messages without keeping your phone online.</SubTitle>
           <SubTitle>Use Whatsapp on up to 4 linked devices and 1 phone at same time.</SubTitle>
           <Divide />
        </Container>
       </Component>
    )
}
export default EmptyChat;