import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { shouldForwardProp } from '@mui/styled-engine';

function Head(){
    const [show,upshow]=React.useState(false)
   
    return(
        <div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <span onClick={()=>upshow(!show)}><MenuIcon/></span>
            <div className={show?'show':'hide'} >
                <p><span style={{fontweight:'bold'}}>Sompany :</span>Geeksynergy Technologies Pvt Ltd</p>
                <p><span>Address :</span>Sanjayanagar, Bengaluru-56</p>
                <p><span>Phone :</span>xxxxxxxx09</p>
                <p><span>Email :</span>xxxxx@gmail.com</p>
            </div>
            <h1 style={{textAlign:'center'}}>Welcome</h1>
            <span></span>
            </div>
        </div>
    )
}

export default Head
