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
    }
}))
const Profile = ()=>{
    const { t, i18n } = useTranslation();
    const lang = useSelector(state=>state.personalInfo.laguage);
    const [ currentLang, setCurrentLang ] = useState(lang);
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        e.preventDefault();
        setCurrentLang(e.target.value);
    }
    useEffect(()=>{
        dispatch(actions.changeLanguage(currentLang))
        i18n.changeLanguage(currentLang);
    }, [currentLang])
    const classes = styles();
return <Grid container>
    <Grid item xs={12}><Typography variant="h3">{t("profile.profile")}</Typography></Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar} variant="Enis Jašarović" src={placeholder} />
                <Button className={classes.button} color="primary">Edit details:</Button>
                <TextField label={t("profile.fullName")}/>
                <TextField label={t("profile.email")}/>
                <TextField label={t("profile.changePassword")}/>
                <FormControl>
                    <InputLabel>{t("profile.selectAppLanguage")}</InputLabel>
                    <Select value={currentLang} defaultValue={currentLang} onChange={handleChange}>
                        <MenuItem selected={lang==="en"} value="en">English</MenuItem>
                        <MenuItem selected={lang==="sr"} value="sr">Serbian</MenuItem>
                    </Select>

                </FormControl>
            </Paper>
        </Grid> 
        <Grid item={12} sm={8}><Typography variant="h3">{t("likes.recentLikes")}</Typography></Grid>
    </Grid> 
    
</Grid>
}

export default Profile;