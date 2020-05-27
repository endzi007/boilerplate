import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { creators as uiActions } from '../state/ui/uiDuck'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    position: "relative",
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
    position: "relative"
  },
  innerDiv: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    minWidth: "127px!important"
  },
  
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
  const { t, i18n } = useTranslation();

  const handleClose = ()=>{
    dispatch(uiActions.showDrawer(false))
  }
  return (
    <div className={classes.flexDiv}>
        <Drawer className={classes.root} anchor="left" open={show} onClose={handleClose} >
            <div className={classes.innerDiv}>
                
                <Button onClick={handleClick.bind(this, "contact")}> {t("navigation.contact")} </Button>
                <Button onClick={handleClick.bind(this, "profile")}> {t("navigation.profile")} </Button>
                <Button onClick={handleClick.bind(this, "help")}> {t("navigation.help")} </Button>
                </div>
        </Drawer>
    </div>
  );
}
