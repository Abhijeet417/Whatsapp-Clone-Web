import { useState } from 'react';
import { MoreVert as MoreIcon } from '@mui/icons-material';
import {Menu ,MenuItem,styled} from '@mui/material';

const MenuOptions = styled(MenuItem)`
      font-size: 15px;
      padding: 15px 60px 5px 24px;
      color: #4A4A4A;
`;

const HeaderMenu = ({setOpenDrawer}) =>{

    const [ open, setOpen ] = useState(false);
    const  handleClose = () => {
        setOpen(null);
    }
    const  handleClick = (e) => {
        setOpen(e.currentTarget);
    }
   return(
      <>
        <MoreIcon onClick ={handleClick} />
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin = {{
            vertical: 'bottom',
            horizontal: 'center'
        }}
         transformOrigin = {{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuOptions onClick={() => {handleClose(); setOpenDrawer(true); }}>Profile</MenuOptions>
      </Menu>
      </>
   )
}
export default HeaderMenu;