import React, { useCallback, useState } from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Plugins } from '@capacitor/core';

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

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Capacitor Demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Box p={1}>
        <Button onClick={takePhoto} variant="contained" color="secondary">Take Photo</Button>
        {photo && <img src={`data:image/jpeg;base64,${photo.base64String}`} alt="Camera" />}
      </Box>
    </div>
  );
}

export default App;
