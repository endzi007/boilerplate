import React from "react";
import { useTranslation } from "react-i18next";

const Profile = ()=>{
    const { t, i18n } = useTranslation();

return <div>{t("profile.profile")}</div>
}

export default Profile;