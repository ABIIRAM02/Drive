import { Box, Checkbox, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const Table = () => {

    const data = [
        { Notifications: 'New Goal', age: 25, gender: 'male' },
        { Notifications: 'Updating of Goals', age: 30, gender: 'female' },
        { Notifications: 'MileStone Compeltion', age: 45, gender: 'male' },
        { Notifications: 'MileStone Misses', age: 45, gender: 'male' },
        { Notifications: 'Goal Changes', age: 45, gender: 'male' },
        { Notifications: 'Goal Compeltion', age: 45, gender: 'male' },
      ];

  return (
    
   <Box sx={{ display:'flex' , justifyContent:'center' , alignItems:'center' , height:'100vh' , width:'100vw' , backgroundColor:'lightgray' }} >
     <Paper sx={{ height:'80%' , width:'80%' }} >
        <Grid container sx={{height:'5rem' , width:'100%' , alignItems:'center' , backgroundColor:'lightblue' , color:'darkblue'  , fontSize:'20px' }} >
            <Grid item sx={{ width:'20%', textAlign:'center' }} >
                Notifications
            </Grid>
            <Grid item sx={{ width:'20%', textAlign:'center' }} >
                All
            </Grid>
            <Grid item sx={{ width:'20%', textAlign:'center' }} >
                Family/Friends
            </Grid>
            <Grid item sx={{ width:'20%', textAlign:'center' }} >
                Reviewers
            </Grid>
            <Grid item sx={{ width:'20%', textAlign:'center' }} >
                Notification Mode
            </Grid>
        </Grid>

        {
            data.map((row)=>{return(
                <Grid container key={row.Notifications} sx={{height:'5rem' , width:'100%' , alignItems:'center' }} >
                    <Grid item sx={{ width:'20%', textAlign:'left' , pl:'4rem' , fontWeight:'600' }} >
                        {row.Notifications}
                    </Grid>
                    <Grid item sx={{ width:'20%', textAlign:'center' }} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}
                        />
                    </Grid>
                    <Grid item sx={{ width:'20%', textAlign:'center' }} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}
                        />
                    </Grid>
                    <Grid item sx={{ width:'20%', textAlign:'center' }} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}
                        />
                    </Grid>
                    <Grid item sx={{ width:'20%', textAlign:'center' }} >
                        <Stack spacing={'20px'} justifyContent={'center'} direction={'row'} >
                            <Checkbox sx={{'&.Mui-checked':{color:'#00A36C' , opacity:1} , '& .MuiSvgIcon-root': { fontSize: 32 } , opacity:0.6}}
                            icon={<EmailOutlinedIcon/>}
                            checkedIcon={<EmailOutlinedIcon/>}
                            />
                            <Checkbox sx={{'&.Mui-checked':{color:'#00A36C' , opacity:1} , '& .MuiSvgIcon-root': { fontSize: 32 } , opacity:0.6}}
                            icon={<ChatOutlinedIcon/>}
                            checkedIcon={<ChatOutlinedIcon/>}
                            />
                            <Checkbox sx={{'&.Mui-checked':{color:'#00A36C' , opacity:1} , '& .MuiSvgIcon-root': { fontSize: 32 } , opacity:0.6}}
                            icon={<PhoneIphoneOutlinedIcon/>}
                            checkedIcon={<PhoneIphoneOutlinedIcon/>}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            )})
        }

    </Paper>
   </Box>
    
  )
}

export default Table