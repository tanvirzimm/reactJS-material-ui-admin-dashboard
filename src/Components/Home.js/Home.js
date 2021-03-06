import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Home.css';
import HomeChart from '../HomeChart/HomeChart';
import HomeChart2 from '../HomeChart/HomeChart2';
import HomeChart3 from '../HomeChart/HomeChart3';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
  }));

const Home = (props) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            {
             props.children
            }
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className='card1'> 
                        <h4 className='heading'>Total Item :</h4>
                        <h3 className='quantity'>219</h3>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="card2">
                        <h4 className='heading'>Total Cost :</h4>
                        <h3 className='quantity'>100k</h3>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="card3">
                        <h4 className='heading'>Total Customer :</h4>
                        <h3 className='quantity'>2700</h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                     <HomeChart2></HomeChart2>
                     <h5 style={{textAlign:"center"}} >Yearly Status</h5>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                 
                    <HomeChart3></HomeChart3>
                     <h5 className='bottom-line'>Yearly Status</h5>
                   
                    
                </Grid>
               
                <Grid item xs={12} md={12}>
                    <HomeChart></HomeChart>
                    <h5 style={{textAlign:"center"}} >Yearly Status</h5>
                </Grid>
               
            </Grid>
    </div>



   

    );
};

export default Home;