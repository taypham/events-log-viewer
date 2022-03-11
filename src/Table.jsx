import React, {useState}  from 'react'
import JsonData from './frontend-log-sample.json'
import './Table.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
 function JsonDataDisplay(){
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const DisplayData=JsonData.map(
        (info)=>{
            if(info.type==="1"){
            return(
                <tr>
                    <td>{info.created}</td>
                    <td> <button onClick={handleOpen} style={{background: 'green' }}>{info.subject} </button> </td>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                         {info.subject}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {info.body}
                        </Typography>
                    </Box>
                    </Modal>
                </tr>
            )
            }
            else if(info.type==="2"){
                return(
                    <tr> 
                        <td>{info.created}</td>
                        <td> <button onClick={handleOpen2} style={{ background: 'yellow' }}>{info.subject} </button> </td>
                        <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {info.subject}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {info.body}
                        </Typography>
                    </Box>
                    </Modal>
                    </tr>
                )
                }
            else if(info.type==="3"){
            return(
                <tr>
                    <td>{info.created}</td>
                    <td> <button onClick={handleOpen3} style={{ background: 'red' }}>{info.subject} </button> </td>
                    <Modal
                        open={open3}
                        onClose={handleClose3}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {info.subject}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {info.body}
                        </Typography>
                    </Box>
                    </Modal>
                    
                </tr>
            )
            }
        }
    )
 
    return(
        <div>
            <table class="table">
                <thead >
                    <tr>
                    <th>Date-time </th>
                    <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;