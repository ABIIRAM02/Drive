import { Checkbox, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const DataTable = () => {
    const data = [
        { Notifications: 'New Goal', age: 25, gender: 'male' },
        { Notifications: 'Updating of Goals', age: 30, gender: 'female' },
        { Notifications: 'MileStone Compeltion', age: 45, gender: 'male' },
        { Notifications: 'MileStone Misses', age: 45, gender: 'male' },
        { Notifications: 'Goal Changes', age: 45, gender: 'male' },
        { Notifications: 'Goal Compeltion', age: 45, gender: 'male' },
      ];

  return(

            <TableContainer component={Paper} sx={{ height:'100vh' , width:'100vw' , overflowX:'auto'}} >
            <Table sx={{width:'80%' , height:'80%' , border:'2px solid lightgray', margin:'auto' , my:'4rem' }} >
            <TableHead sx={{backgroundColor:'lightskyblue' , height:'5rem', }} >
                <TableRow  >
                <TableCell sx={{ fontSize:'18px',textAlign:'left' }} >Notificatins</TableCell>
                <TableCell sx={{ fontSize:'18px',textAlign:'center' }} >All</TableCell>
                <TableCell sx={{ fontSize:'18px',textAlign:'center' }} >Family/Friends</TableCell>
                <TableCell sx={{ fontSize:'18px',textAlign:'center' }} >Reviewers</TableCell>
                <TableCell sx={{ fontSize:'18px',textAlign:'center' }} >Notification Mode</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{}} >

                {
                    data.map((data)=>{return(

                <TableRow >
                <TableCell sx={{  textAlign:'left'}}  >{data.Notifications}</TableCell>
                <TableCell sx={{  textAlign:'center'}} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}/>
                </TableCell>
                <TableCell sx={{  textAlign:'center'}} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}/>
                </TableCell>
                <TableCell sx={{  textAlign:'center'}} >
                        <Checkbox sx={{'&.Mui-checked':{color:'#00A36C'} , '& .MuiSvgIcon-root': { fontSize: 28 }}}
                        icon={<CheckBoxOutlineBlankOutlinedIcon/>}
                        checkedIcon={<CheckBoxOutlinedIcon/>}/>
                </TableCell>
                <TableCell sx={{  textAlign:'center' }}>
                        <Stack spacing={'20px'} justifyContent={'space-evenly'} direction={'row'} >
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
                </TableCell>
                </TableRow>

                    )})
                }

            </TableBody>
            </Table>
            </TableContainer>
                
  )
}

export default DataTable