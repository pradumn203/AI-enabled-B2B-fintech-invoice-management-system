import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import AddBtn from "./AddBtn";
import './grid.css'
import EditBtn from "./EditBtn"
import DeleteBtn from "./DeleteBtn"
import Search from "./Search"
import RefreshIcon from '@mui/icons-material/Refresh';
import AnalyticView from './AnalyticView';
import AdvanceSearch from './AdvanceSearch';
import Predict from './Predict';

const useStyles = makeStyles((theme) => ({
    divs: {
        backgroundColor: "#39495E",
        color: "#FFFFFF",
        fontFamily: "Ubuntu"
    },
    add: {
        color: "#FFFFFF",
        marginTop: "30px",
        marginLeft: "638px",
        textAlign: "center",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        width: "99px",
        height: "45px",
        textTransform: "none",
        fontSize: "20px"
    },
    btngrp:{
        color: "#FFFFFF",
        textAlign: "center",
        border: "1px solid #14AFF1",
        borderRadius: "5px",
        
        margin: theme.spacing(1),
    },
    can: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px",
        width: "500px",
        height: "45px"
    },
    clear: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px",
        width: "500px",
        height: "45px"
    },
    predict: {
        width: "100px",
        height: "50px",
        background: "#488fc9",
        borderRadius: "5px",
        textAlign: "left",
        color: "#FFFFFF",
        fontSize: "20px",
        textTransform: "none"
    },
    view: {
        marginTop: "40px",
        marginLeft: "110px",
        display: "inline-block",
        marginBottom: "30px",
        flexWrap: "wrap",
    },
    search: {
        marginLeft: "20px",
        display: "inline-block"
    },
    adbtn: {
        marginLeft: "10px",
        display: "inline-block",       
    },
    dlt: {
        marginLeft: "10px",
        display: "inline-block"
    },
    prdt1: {
        marginLeft: "50px",
        display: "flex",
        marginTop: "30px",
        marginBottom: "30px",
        flexWrap: "wrap",
    },
    prdt2: {
        marginLeft: "130px",
        display: "flex",
        marginTop: "30px",
        marginBottom: "30px",
        flexWrap: "wrap", 
    },
    ana: {
        backgroundColor: "#273D49CC",
        color: "#FFFFFF",
    },
    label1: {
        margin: theme.spacing(1),
        color: "#97A1A9",
    },
    text1: {
        margin: theme.spacing(1),
        border: "1px solid #356680",
        borderRadius: "10px",
        opacity: "1",
        backgroundColor: "#FFFFFF",
        borderColor: "#356680",
    },
    root1: {
        flexGrow: 1,
        width: '100%'
    },
    grid: {
        width: "100%",
        margin: "0px",
    },
    icon:{
        display: "inline-block",
        width:"4%",
        border: "1px solid #14AFF1",
        alignItems: "center",
        color: "#14AFF1",
        marginLeft: "10px",
    },
    form:{
        display: "inline-block",
    },
    brngrp:{
        display: "flex",      
        flexWrap: "wrap",
        alignContent: "center",
    },
}));
export default function GridButton(props) {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);   
    function refreshPage() {
        window.location.reload(false);
}
    return (
        <div className={classes.brngrp}>
            <div className={classes.prdt1}>
                <ButtonGroup className={classes.btngrp}>
                    <Button className={classes.predict} component={Predict} check={props.check} checkBoxData={props.checkBoxData} docIDsend={props.docIDsend}></Button>                    
                    <Button component={AnalyticView} check={props.check}/>
                    <Button  component={AdvanceSearch} 
                    setColumnsChange={props.setColumnsChange}
                    setDocIdChange={props.setDocIdChange}
                    setInvoiceIdChange={props.setInvoiceIdChange}
                    setCustomerNumberChange={props.setCustomerNumberChange}
                    setBusinessYearChange={props.setBusinessYearChange}
                    check={props.check}
                    />
                    <Button onClick={refreshPage}>
                    <RefreshIcon style={{color:"14AFF1",justifyContent:"center"}}/></Button>                    
                </ButtonGroup>
            </div>
            <div className={classes.view}>
                <Search q={props.q} setQ={props.setQ}/>
            </div>
            <div className={classes.prdt2}>
                <ButtonGroup className={classes.btngrp} >  
                    <Button  component={AddBtn} check={props.check}/>
                    <Button  component={EditBtn} 
                        showModal={showModal} 
                        setShowModal={setShowModal} 
                        className="ModalButtons" 
                        check={props.check}                       
                    />
                    <Button  component={DeleteBtn} check={props.check}/>                    
                </ButtonGroup>
            </div>           
        </div>
    )
}