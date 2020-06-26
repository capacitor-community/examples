import React, { useCallback, useState, useEffect } from 'react';
import './App.css';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { Plugins } from '@capacitor/core';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tableDiv: {
    margin: 20
  },
  button: {
    margin: 10
  }
}));

function App() {
  const classes = useStyles();

  const [photo, setPhoto] = useState(null);

  const takePhoto = useCallback(async () => {
    const { Camera } = Plugins;

    const photo = await Camera.getPhoto({
      resultType: 'Base64'
    });

    console.log('Got photo', photo);

    setPhoto(photo);
  }, []);

  const shareCapacitor = async () => {
    const { Share } = Plugins;

    await Share.share({
      title: 'Share Capacitor',
      text: 'I deployed a MaterialUI web app as a native mobile app using @capacitorjs in minutes!',
      url: 'https://capacitorjs.com',
    });
  }

  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      const { Device } = Plugins;

      setDeviceInfo(await Device.getInfo());
    };

    getDeviceInfo();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Capacitor 💙 MaterialUI
          </Typography>
        </Toolbar>
      </AppBar>

      <Box p={1}>
        <Button className={classes.button} onClick={takePhoto} startIcon={<CameraAltIcon />} variant="contained" color="secondary">Take Photo</Button>
        <ThemeProvider theme={theme}>
          <Button className={classes.button} onClick={shareCapacitor} startIcon={<ShareIcon />} variant="contained" color="primary" >Share this app</Button>
        </ThemeProvider>
      </Box>
      <Box>
        {photo && <img src={`data:image/jpeg;base64,${photo.base64String}`} alt="Camera" />}
      </Box>
      <Box>
      <div className={classes.tableDiv}>
        <h3>Device Info:</h3>
        {deviceInfo ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(deviceInfo).map((key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">{deviceInfo[key].toString() || 'Not available'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null }
        </div>
      </Box>
    </div>
  );
}

export default App;
