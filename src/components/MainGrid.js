import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();
const [Password, setPassword] = useState('');

const [lent, setlent] = useState(true);

const pss =(pass)=>{
  
  const vlen = pass.length;
  if(vlen>7){
    console.log('hei')
    setlent(true)
  }
  else{
    console.log('length')
    setlent(false)
  }

};



  return (
    <div className={classes.root}>
 
        <TextField
                   variant="outlined"
                   error={lent === false}
                  helperText={lent === false ? 'password short!' : ' '}
                            required
                            fullWidth
                            id="Password"
                            label="Password"
                            name="Password"
                            autoComplete="Password"
                            type="Password"
                            value={Password}
                            onChange={e=>  {setPassword(e.target.value)}}
                          />

  
  
                         <Button
                          onClick={()=> {pss(Password)}}
                          style={{
                            background: "#2BDD49",
                            color: "#ffffff",
                            height: "45px",
                            marginTop: "10px",
                          }}
                          type="submit"
                          fullWidth
                          variant="contained"
                          className={classes.submit}
                        >
                          Submit
                        </Button>

  
    
    </div>
  );
}
