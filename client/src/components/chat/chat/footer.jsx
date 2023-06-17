import { useEffect } from "react";
import { Box } from "@mui/system";
import { styled,InputBase } from "@mui/material";
import { EmojiEmotionsOutlined , AttachFile , Mic } from '@mui/icons-material';

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
   height: 55px;
   background: #ededed;
   display: flex;
   width: 100%;
   align-item: center;
   padding: 0 15px;
   & > * {
        margin: 5px;
        color: #919191;
   }
`;

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(94% - 100px);
`;

const InputFeild = styled(InputBase)`
     width:100%
     padding: 20px;
     height: 18px;
     padding-left: 25px;
     font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
     transform: rotate(40deg);
`;

const Footer = ({ sendText,setValue,value,file,setFile,setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    },[file])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    } 

    return(
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor="fileInput">
             <ClipIcon />
            </label>
            <input
             type="file" 
             id="fileInput"
             style={{display: 'none'}}
             onChange={(e) => onFileChange(e)}
             />
            <Search>
                <InputFeild 
                placeholder='Type a message'
                onChange = {(e) => setValue(e.target.value)}
                onKeyPress = {(e) => sendText(e)}
                value={value}
               />
            </Search>
            <Mic />
        </Container>
    )
}
export default Footer;