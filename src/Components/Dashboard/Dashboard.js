import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Home from '../Home.js/Home';
import HomeChart from '../HomeChart/HomeChart';
import './Dashboard.css'
import Sell from '../Sell/Sell';
import Rank from '../Rank/Rank';
import Admin from '../Admin/Admin';

//from branch 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function Dashboard(props) {
    const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
       
         <Link className="link-style" to='/'>
          <ListItem button>
              <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
              <ListItemText primary={"Home"}/>
          </ListItem>
         </Link>
      
      </List>
      <Divider />
      <List>
       
    <Link to='/sell' className='link-style'>
      <ListItem button>
            <ListItemIcon><ShoppingCartIcon></ShoppingCartIcon></ListItemIcon>
            <ListItemText primary={"Sell"}/>
        </ListItem>
    </Link>
   
   </List>
   <List>
   <Link to='/rank' className='link-style'>
       <ListItem button>
         <ListItemIcon><TrendingUpIcon></TrendingUpIcon></ListItemIcon>
         <ListItemText primary={"Rank"}/>
       </ListItem>
   </Link>
   </List>
      <Divider />
      <List>
       
       <ListItem button onClick={() => props.handleUser('logOut')}  style={{backgroundColor:"#F91944",color:"white"}} >
         <ListItemIcon></ListItemIcon>
         <ListItemText primary={"Logout"}/>
       </ListItem>
   
   </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>


      <Router>


      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    <Switch>


      <Route exact path='/'>
        <div className={classes.content}>
          <Home >
            <div className={classes.toolbar} />
          </Home>
        </div>
      </Route>


      <Route path='/sell'>
        <div className={classes.content}>

          <Sell> 
            <div className={classes.toolbar} />
          </Sell>

        </div>
      </Route>


      <Route path='/rank'>
        <div className={classes.content}>

            <Rank>
              <div className={classes.toolbar} />
            </Rank>

        </div>
      </Route>

     
    </Switch>
    </Router>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;