import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { creators as uiActions } from '../state/ui/uiDuck'

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  fullList: {
    width: "250px",
  },
  arrow: {
    position: "absolute",
    right: 0,
    height: "100%",
    backgroundColor: "red",
    width: "20px"
  },
  flexDiv: {
    display: "flex"
  }
});

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory()
  const show = useSelector((store)=>(store.ui.showDrawer))
  const dispatch = useDispatch();
  const handleClick =(link, e)=>{
    e.preventDefault()
    history.push(link)
  }

  const handleClose = ()=>{
    dispatch(uiActions.showDrawer(false))
  }
  return (
    <div className={classes.flexDiv}>
        <Drawer className={classes.root} anchor="left" open={show} onClose={handleClose} >
            <div className={classes.root}>
            <Link href="#" onClick={handleClick.bind(this, "contact")}> Contact </Link>
            <Link href="#" onClick={handleClick.bind(this, "profile")}> Profile </Link>
            <Link href="#" onClick={handleClick.bind(this, "help")}> Help </Link>
            </div>
        </Drawer>
        <div className={classes.arrow}>
            enis
        </div>
    </div>
  );
}
