import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { creators as uiActions } from '../state/ui/uiDuck'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
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
  flexDiv: (props)=>({
    position: "absolute",
    left: 0,
    top: "64px",
    width: "130px",
    height: "calc(100vh - 64px - 20px)",
    backgroundColor: theme.palette.primary.contrastText,
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "& .MuiButton-label":{
      color: theme.palette.primary.main
    }
  }),
  innerDiv: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    minWidth: "127px!important",

  },
  
}));

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory()
  const show = useSelector((store)=>(store.ui.showDrawer))
  const avatarImage = useSelector(store => store.personalInfo.personalInfo.profileImage)
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
    <div className={classes.flexDiv} style={{transform: show? "translateX(0)": "translateX(-130px)"}}>
        <div className={classes.root} onClose={handleClose} >
            <div className={classes.innerDiv}>
                <Avatar src={avatarImage}/>
                <Button onClick={handleClick.bind(this, "contact")}> {t("navigation.contact")} </Button>
                <Button onClick={handleClick.bind(this, "profile")}> {t("navigation.profile")} </Button>
                <Button onClick={handleClick.bind(this, "help")}> {t("navigation.help")} </Button>
                </div>
        </div>
    </div>
  );
}
