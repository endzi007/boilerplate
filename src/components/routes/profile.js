import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";


const Profile = ()=>{
    const { t, i18n } = useTranslation();

return <div>
    <div><Typography variant="h3">{t("profile.profile")}</Typography></div>
    <div><Typography variant="h3">{t("likes.recentLikes")}</Typography></div>
    
</div>
}

export default Profile;