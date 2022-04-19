import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import './grid.css'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
        width: "170px",
        height: "45px",
        background: "#488fc9",
        borderRadius: "5px",
        textAlign: "left",
        color: "#FFFFFF",
        fontSize: "20px",
        textTransform: "none",       
    },
    view: {
        marginLeft: "10px",
        display: "inline-block"
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
    prdt: {
        marginLeft: "15px",
        marginRight: "15px",
        display: "inline-block",
        marginTop: "6px",
        alignContent: "center",     
    },
    ana: {
        color: "#FFFFFF",
        textAlign: "center",
        borderInlineEnd: "2px solid #14AFF1",   
        width: "200px",
        height: "50px",
        fontSize: "15px",
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
    }
}));
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function AdvanceSearch(props) {
    var checkBox=props.check;
    let [doc_id,setDocId] = useState("");
    
    let [invoice_id, setInvoiceId] = useState("");
    let [cust_number,setCustNumber] = useState("");
    let [business_year,setBusinessYear] = useState("");
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen=()=>{
        if(checkBox.length===0){
            setOpen(true);
            props.setColumnsChange(["doc_id","invoice_id","cust_number","business_year"]);
        }
        else{
            setOpen(false);
        }
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleDocIdChange= (event) => {
        setDocId(event.target.value);

    }
    const handleInvoiceIdChange= (event) => {
        setInvoiceId(event.target.value);

    }
    const handleCustomerNumberChange = (event) => {
        setCustNumber(event.target.value);
    }
    const handleBusinessYearChange= (event) => {
        setBusinessYear(event.target.value);
    }
    const handlSearch=()=>{        
        props.setDocIdChange(doc_id);
        props.setInvoiceIdChange(invoice_id);
        props.setCustomerNumberChange(cust_number);
        props.setBusinessYearChange(business_year);
        handleClose();
    }    
  return (
    <div>
        <Button className={classes.ana} variant="outlined" onClick={handleClickOpen} >Advance Search</Button>
         <Dialog width="70%" onClose={handleClose} aria-labelledby="form-dialog-title1" open={open}>
                <DialogTitle className={classes.divs} id="form-dialog-title1" onClose={handleClose}>
                    Advance Search
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>
                    <form className={classes.root} noValidate autoComplete="off" action="" id="AdvancedSearchForm">
                        <Grid container width="55%">
                            <Grid item xs={6} direction="row">
                                <TextField className={classes.text1} id="doc_id" variant="outlined" name="doc_id" value={doc_id} onChange={handleDocIdChange} display="inline-block" required type="no" placeholder='Document ID' />
                            </Grid>                            
                            <Grid item xs={6} direction="row">
                                <TextField className={classes.text1} id="invoice_id" variant="outlined" name="invoice_id" value={invoice_id} onChange={handleInvoiceIdChange} display="inline-block" placeholder='Invoice Id' />
                            </Grid>                            
                            <Grid item xs={6} direction="row">
                                <TextField className={classes.text1} id="cust_number" variant="outlined" name="cust_number" value={cust_number} onChange={handleCustomerNumberChange} display="inline-block" placeholder='Customer Number' />
                            </Grid>                            
                            <Grid item xs={6} direction="row">
                                <TextField className={classes.text1} id="business_year" variant="outlined" name="business_year" value={business_year} onChange={handleBusinessYearChange} display="inline-block" placeholder='Business Year' />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button  className={classes.can} id="edtcancel" onClick={handlSearch}>
                        Search
                    </Button>
                    <Button className={classes.clear} id="edtreset" onClick={handleClose}>
                        Cancel
                    </Button>                
                </DialogActions>
            </Dialog>                   
    </div>
  )
}
export default AdvanceSearch