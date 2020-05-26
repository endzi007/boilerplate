import React from "react";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { creators as uiActions } from "../state/ui/uiDuck";
const styles = makeStyles((theme)=>({
    toggleDiv: {
        width: "20px",
        height: "calc(100vh - 64px - 64px)",
        position: "absolute",
        top: "64px",
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
    },
    innerDiv: {
        height: "100px",
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px"
    }

}))

export default ()=>{
    const show = useSelector( store => store.ui.showDrawer)
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(uiActions.showDrawer(!show))
    }

    const classes = styles();
    return <div style={{ transform: show? "translateX(127px)": "translateX(0px)"}} className={classes.toggleDiv}>
        <div className={classes.innerDiv} onClick={()=>{ handleClick()}}>
            {show? <NavigateBefore/> :<NavigateNext />}
            
        </div>
    </div>
}