/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Typography, Grid, Paper, Avatar, TextField, Select, MenuItem, makeStyles, FormControl, InputLabel, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import placeholder from '../../assets/avatarPlaceholder.png'
import { useSelector, useDispatch } from "react-redux";
import { creators as actions } from "../../state/personalInfoDuck.js/personalInfoDuck";

const styles = makeStyles(theme =>({
    paper: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(4)
    },
    avatar: {
        alignSelf: "center",
        justifySelf: "center",
        width: "120px",
        height: "120px"
    },
    button: {
        justifySelf: "flex-end",
        fontSize: "0.8em"
    },
    editDetails: {
        color: "blue",
        maxWidth: "150px",
        alignSelf: "flex-end"
    }
}))
const Profile = ()=>{
    const { t, i18n } = useTranslation();
    const [ details, setDetails ] = useState(useSelector(state=>state.personalInfo));
    const [ editMode, setEditMode ] = useState(useSelector(state=>state.personalInfo.editMode))
    const [ currentLang, setCurrentLang ] = useState(details.lang);
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        e.preventDefault();
        changeLanguage(e.target.value);
    }
    useEffect(()=>{
        console.log("lang changed");
        i18n.changeLanguage(details.language);
    }, [details.language])

    const classes = styles();
return <Grid container>
    <Grid item xs={12}><Typography variant="h3">{t("profile.profile")}</Typography></Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar} variant="Enis Jašarović" src={details.profileImage} />
                <Button className={classes.editDetails}>Edit details:</Button>
                <TextField disabled={!editMode} label={t("profile.fullName")} defaultValue={details.fullName}/>
                <TextField disabled={!editMode} label={t("profile.email")} defaultValue={details.email}/>
                <TextField disabled={!editMode} type="password" label={t("profile.changePassword")} defaultValue={details.password}/>
                <FormControl disabled={editMode}>
                    <InputLabel>{t("profile.selectAppLanguage")}</InputLabel>
                    <Select value={currentLang} defaultValue={currentLang} onChange={handleChange}>
                        <MenuItem selected={details.lang==="en"} value="en">English</MenuItem>
                        <MenuItem selected={details.lang==="sr"} value="sr">Serbian</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </Grid> 
        <Grid item={12} sm={8}><Typography variant="h3">{t("likes.recentLikes")}</Typography></Grid>
    </Grid> 
    
</Grid>
}

export default Profile;

function changeLanguage(newLang){
    const [ lang, setLang ] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        setLang(newLang)
    }, [newLang])


    return lang;
}