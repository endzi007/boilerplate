import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh - 69px - 69px)",
        justifyContent: "center",
        "& .MuiInput-root":{
            width: "500px",
            padding: "10px",
            margin: "10px"
        }
    }
    
}))
const Contact = ()=>{
    const { t, i18n } = useTranslation();
    const classes = styles();
return <div className={classes.wrapper}>
            <Typography variant="h6">{t("contact.contactUs")}</Typography>
            <Typography variant="body1">{t("contact.help")}</Typography>
            <Input defaultValue="place something here" error={false}  type="text" multiline rows={8}></Input>
            <Button variant="contained" color="primary">{t("contact.buttonText")}</Button>
        </div>
}

export default Contact;