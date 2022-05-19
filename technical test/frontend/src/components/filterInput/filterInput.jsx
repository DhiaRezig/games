import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

export default function FilterInput(props){
    const onSubmit=()=>{
        props.setFiltre(true);      
    };
    useEffect(() => {  
      },[]);
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="platform" variant="standard" onChange={((e)=>{
            if (e.target.value !== "") {
                props.setOptions({ ...props.options, ...{platforms: e.target.value }});
            } else {
                delete props.options.platforms;
            }
      })}/>
      <TextField label="genre" variant="standard" onChange={((e)=>{
            if (e.target.value !== "") {
                props.setOptions({ ...props.options, ...{genre: e.target.value } });
            } else {
                delete props.options.genre;
            }
      })} />
      <TextField
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange={((e)=>{
            if (e.target.value !== "") {
                props.setOptions({ ...props.options, ...{nb: e.target.value } });
            } else {
                delete props.options.nb;
            }
      })}
        />
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </Box>
  );
}
FilterInput.propTypes={
  setFiltre: PropTypes.func,
  setOptions: PropTypes.func,
  options: PropTypes.object
};

