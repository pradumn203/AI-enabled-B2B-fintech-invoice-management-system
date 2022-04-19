import React,{useEffect} from 'react'
import axios from 'axios';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({  
  predict: {
      width: "200px",
      height: "50px",
      background: "#488fc9",
      borderRadius: "5px",
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: "20px",
      textTransform: "none"
  },
  divs: {
    backgroundColor: "#39495E",
    color: "#FFFFFF",
    fontFamily: "Ubuntu",
  },
  view: {    
    minWidth: "150px",
    height: "50px",  
    borderRadius: "10px",
    background: "#273D49CC",
    textAlign: "center",
    fontSize: "18px",
    color: "#FFFFFF",
    textTransform: "none",
  },
  add: {
    color: "#14AFF1",
    marginTop: "30px",
    marginLeft: "638px",
    textAlign: "center",
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    width: "99px",
    height: "45px",
    textTransform: "none",
    fontSize: "20px",
  },
  can: {
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "10px",
    width: "500px",
    height: "45px",
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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


export default function Predict(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [storeData, setStoreData] = React.useState([]);
  const [length, setLength] = React.useState([]);
  const [agBucket, setAgBucket] = React.useState([]);
  const [clrDate, setClrDate] = React.useState([]);
  const [documentId, setDocumentId] = React.useState([]);    
  var checkBox=props.check;
  var checkBoxData=props.checkBoxData;
  const handleClickOpen = () => {
    if(checkBox.length===0){
      setOpen(false);
    }
    else{
      handlePredict();
      setOpen(true);      
    }   
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePredict = () => {
    console.log("Predict Button Clicked");
    console.log("Checkboxes numbers selected: "+ checkBox);
    console.log("Checkbox Data: "+ checkBoxData);      
    var docIDdata={      
        data:props.docIDsend
    }
    return fetch(`http://127.0.0.1:5000/get_prediction`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(docIDdata)
    })
    .then(response => response.json())
    .then(data => setStoreData(data))
    .catch(error => console.log(error))
  }
  console.log(storeData);
  const handlePredictDataUpdate = () => {
    for(var i=0;i<storeData.length;i++){      
      documentId.push(storeData[i].doc_id)
      agBucket.push(storeData[i].aging_bucket)
      clrDate.push(storeData[i].clear_date)
    }
    console.log(documentId);
    console.log(agBucket);
    console.log(clrDate);
    try{
      axios.post(`http://localhost:8080/hrc-backend/PredictBucketServlet?docID=${documentId}&ageBucket=${agBucket}&clearDate=${clrDate}`,agBucket)
      .then(res => console.log(res))
     }catch(error){
       console.log("postError");
       console.log(error);
     }
     handleClose();
     window.location.reload(false)
  }
  return (
    <div>
      <button type="button" className={classes.predict} onClick={handleClickOpen}>Predict</button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className={classes.divs}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Prediction(s)
        </DialogTitle>
        <DialogContent className={classes.divs} dividers>
          <Typography gutterBottom>
            Your data is predicted successfully.
          </Typography>          
        </DialogContent>
        <DialogActions className={classes.divs}>
          <Button className={classes.can} onClick={handlePredictDataUpdate} color="primary">
            Close
          </Button>          
        </DialogActions>
      </Dialog>
    </div>
  )
}