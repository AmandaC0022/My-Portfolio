import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.css'; 
import { maxHeight } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'white',
    border: '8px solid #F298B4',
    borderRadius: '40px 40px 0 40px', 
    boxShadow: 24,
    p: '5%'
  };

const OpenModal = ({title, role, company, framework, technologies, workexamples}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const technologyList = Array.from(technologies); 
    const workList = Array.from(workexamples); 
  
    return (
      <div>
        <button className="custom-btn-2 fill-2" onClick={handleOpen}><p>Learn More</p></button>
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header">
              <h2>{title}</h2>
            </div>
            <div className="modal-body">
              <p>Role: {role}</p>
              <p>Company: {company}</p>
              <p>Framework: {framework}</p>
              <p>Technologies:</p>
              <ul className="technology-list">
                {technologyList.map((technology) => {
                  return <li>{technology}</li>
                })}
              </ul>
              <p>Work Examples:</p>
              <ol className="work-example-list">
                {workList.map((example) => {
                  return (
                    <li>
                      <h5>{example.title}</h5>
                      <p>{example.description}</p>
                      <a href={example.projecturl} className="work-link">See Project</a>
                    </li>
                  )
                })}
              </ol>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }

  export default OpenModal;