import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavStaff from "./NavStaff"

function Symptoms(){
    return(
        <Box sx= { {display: "flex"} }>
            <NavStaff sx={{ width: 200}}/>
            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <Typography>Symptoms Page</Typography>
            </Box>
        </Box> 
        
    )
}

export default Symptoms;