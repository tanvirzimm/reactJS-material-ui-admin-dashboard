import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './Admin.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Admin = (props) => {

    const classes = useStyles();

    return (
        <div>
            <Container>
            <Typography component="div" style={{width:"100%"}}>
                <Box textAlign="center" m={1} fontSize={30}>
                     Admin Login
                </Box>
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" style={{margin:"0 auto",width:"220px"}}>
                    <TextField id="standard-basic" label="Username" /> <br/>
                    <TextField id="standard-basic" label="Password" type="password"/><br/>
                    <Button variant="contained" color="secondary" onClick={()=> props.handleUser("logedIn")}>
                       Login
                   </Button>
                   
            </form>


            <Typography component="div" style={{width:"100%"}}>
                <Box textAlign="center" m={1} fontSize={20} color='red'>
                     Dont need to fill input boxes.
                </Box>
                <Box textAlign="center" m={1} fontSize={20}>
                Just click LOG IN button to Log in
                </Box>
            </Typography>
            </Container>
        </div>
    );
};

export default Admin;