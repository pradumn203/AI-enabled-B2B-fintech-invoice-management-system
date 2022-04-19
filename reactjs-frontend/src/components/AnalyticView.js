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
import axios from 'axios';
import Chart  from './Chart';

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
        textTransform: "none"
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
        marginTop: "5px",
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

function AnalyticView(props) {
    const [showChart,setshowChart] = useState(false);
    const classes = useStyles();
    var checkBox=props.check;   
    const [openAnalytic, setOpenAnalytic] = React.useState(false);    
    const handleClickAnalyticOpen=()=>{
        if(checkBox.length===0){
            setOpenAnalytic(true);
        }
        else{
            setOpenAnalytic(false);
        }
    }   
    const handleCloseAnalytic = () => {       
        setOpenAnalytic(false);
    };
    function handleAnalyticView(){      
        console.log("Analytics View Button Clicked");
        var y=document.querySelectorAll('#AnalyticViewForm input');
        console.log(y[0].value,y[1].value,checkBox);    
        var query={
            invoice_currency : y[0].value,
            customer_payment_terms : y[1].value,            
        }
        const data = {
          title: "MY FIRST WEB APP",
          body: "made in India"
        };
        try{
         axios.post(`http://localhost:8080/hrc-backend/AnalyticsServlet?clear_date1=${y[0].value}&clear_date2=${y[1].value}&due_in_date1=${y[2].value}&due_in_date2=${y[3].value}&baseline_create_date1=${y[4].value}&baseline_create_date2=${y[5].value}&invoice_currency=${y[6].value}`,data)
         .then(res => {setshowChart(true);})
        }catch(error){
          console.log("postError");
          console.log(error);
        }
      }    
  return (
    <div >       
         <Button className={classes.ana} variant="outlined" onClick={handleClickAnalyticOpen}>ANALYTICS VIEW</Button>
         {showChart ? <Chart />:
        <Dialog classes={{ paper: classes.paper }} onClose={handleCloseAnalytic} aria-labelledby="form-dialog-title" open={openAnalytic}>
        <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleCloseAnalytic}>
          Analytic View
        </DialogTitle>
        <DialogContent className={classes.divs} dividers>        
        <form id = "AnalyticViewForm" className={classes.form} style={{display:"flex"}}>
            <div>
            <div>
                <h4>Clear Date</h4>
                <input placeholder="Clear Date" label="Clear Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>               
                <input placeholder="Due Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>
            </div>
            <div>
                <h4>Baseline Create Date</h4>
                <input placeholder="Clear Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>
                <input placeholder="Due Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>
            </div>
            </div>
            <div>
            <div >
            <h4>Due Date</h4>
                <input placeholder="Clear Date" label="Clear Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>                
                <input placeholder="Due Date"  type="date" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>
            </div>
            <div>
                <h4>Invoice Currency</h4>
                <input placeholder="Invoice Currency"  type="text" style={{padding:'10px',marginRight:'10px',width:'70%'}}/>                
            </div>
            </div>            
        </form>
        </DialogContent>
        <DialogActions className={classes.divs}>
        <Button  className={classes.can} id="addt" onClick={handleAnalyticView}  type="submit">
             Submit
            </Button> 
          <Button  className={classes.can} id="addcancel" onClick={handleCloseAnalytic}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    }              
    </div>
  )
}
export default AnalyticView
