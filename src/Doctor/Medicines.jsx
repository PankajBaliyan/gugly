import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavStaff from "./NavStaff";

function Medicines(){
    return(
        <Box sx= { {display: "flex"} }>
            <NavStaff/>
            <Box component="main" sx={{width: { sm: `calc(100% -200px)` } }}>
                <Typography>Medicines Page</Typography>
            </Box>
        </Box> 
    )
}

export default Medicines;