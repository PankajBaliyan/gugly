import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavStaff from "./NavStaff"


function PatientsSummary(){
    return(
        <>
            <Box sx= { {display: "flex"} }>
                <NavStaff/>
                <Box component="main" sx={{width: { sm: `calc(100% -200px)` } }}>
                    <Typography>Summary works</Typography>
                </Box>
            </Box>    
        </>
    )
}

export default PatientsSummary;