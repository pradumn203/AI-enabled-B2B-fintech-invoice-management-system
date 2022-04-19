import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './addModel.css';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  divs: {
    backgroundColor: "#2A3E4C",
    color: "#FFFFFF",
    fontFamily: " normal normal normal Ubuntu"
  },
  paper: {
    minWidth: "1000px",
  },
  view: {
    width: "200px",
        height: "45px",
        borderRadius: "10px",
        backgroundColor: "#2A3E4C",
        textAlign: "center",
        fontSize: "18px",
        color: "#FFFFFF",
        margin: theme.spacing(1),
  },
  addbt: {
    color: "#FFFFFF",
    textAlign: "center",
    borderInlineEnd: "2px solid #14AFF1",   
    minWidth: "200px",
    height: "50px",
    fontSize: "20px",
    display: "flex",  
  },
  add: {
    marginLeft: "638px",
    textAlign: "center",
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    width: "120px",
    height: "45px",
    color: "#FFFFFF",
    backgroundColor: "#14AFF1",
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
  rootmain: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: "#2A3E4C",
    color: "#FFFFFF"
  },
  label1: {
    margin: theme.spacing(1),
    color: "#97A1A9",
  },
  text1: {
    border: "1px solid #356680",
    borderRadius: "10px",
    opacity: "1",
    backgroundColor: "white",
    borderColor: "#356680",
    color: "Black"
  },
  root1: {
    flexGrow: 1,
    width: '100%',
  },
  grid: {
    width: "100%",
    margin: "0px",
    color: "#FFFFFF"  
  },
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

export default function AddBtn(props) {
  const [open, setOpen] = React.useState(false);
  const [business_code, setBusiness_code] = React.useState('');
  const [cust_number, setCust_number] = React.useState('');
  const [clear_date, setClear_date] = React.useState('');
  const [business_year, setBusiness_year] = React.useState('');
  const [doc_id, setDoc_id] = React.useState('');
  const [posting_date, setPosting_date] = React.useState('');
  const [document_create_date, setDocument_create_date] = React.useState('');
  const [due_in_date, setDue_in_date] = React.useState('');
  const [invoice_currency, setInvoice_currency] = React.useState('');
  const [document_type, setDocument_type] = React.useState('');
  const [posting_id, setPosting_id] = React.useState('');
  const [total_open_amount, setTotal_open_amount] = React.useState('');
  const [baseline_create_date, setBaseline_create_date] = React.useState('');
  const [cust_payment_terms, setCust_payment_terms] = React.useState('');
  const [invoice_id, setInvoice_id] = React.useState('');
  var checkBox=props.check;
  const classes = useStyles();
  const handleClickOpen = () => {
    if(checkBox.length===0){
      setOpen(true);
    }
    else{
    setOpen(false);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };  
  const handleFinalAdd = () => {   
    console.log("Add Button Clicked");    
    const data = {
      title: "MY FIRST WEB APP",
      body: "made in India"
    };
    try{
     axios.post(`http://localhost:8080/hrc-backend/InsertServlet?business_code=${business_code}&cust_number=${cust_number}&clear_date=${clear_date}&business_year=${business_year}&doc_id=${doc_id}&posting_date=${posting_date}&document_create_date=${document_create_date}&due_in_date=${due_in_date}&invoice_currency=${invoice_currency}&document_type=${document_type}&posting_id=${posting_id}&total_open_amount=${total_open_amount}&baseline_create_date=${baseline_create_date}&cust_payment_terms=${cust_payment_terms}&invoice_id=${invoice_id}`,data)
     .then(res => console.log(res)) 
    }catch(error){
      console.log("postError");
      console.log(error);
    }
    window.location.reload(false);
    handleClose();
  }
  return (
    <div>
      <Button className={classes.addbt} variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon />} >Add</Button>
      <Dialog classes={{ paper: classes.paper }} onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
        <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleClose}>
          Add Invoice
        </DialogTitle>
        <DialogContent className={classes.divs} dividers>
        <form id = "AddBtnForm" className='Form'>
          <div style={{ padding: '10px'  }}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div > 
                  <TextField
                    id="outlined-textarea"
                    label="Business code"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White",                      
                  }}
                  value={business_code}
                  onChange={(e) => setBusiness_code(e.target.value)}                   
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Customer No"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={cust_number}
                  onChange={(e) => setCust_number(e.target.value)}
                  />
                  <TextField
                    name="Date"
                    label="Clear Date"
                    fullWidth
                    variant='filled'
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    style={{
                      backgroundColor: "White"
                  }}
                  value={clear_date}
                  onChange={(e) => setClear_date(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Business Year"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={business_year}
                  onChange={(e) => setBusiness_year(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-textarea"
                    label="Document id"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={doc_id}
                  onChange={(e) => setDoc_id(e.target.value)}
                  />
                  <TextField
                    name="PostingDate"
                    label="Posting Date"
                    fullWidth
                    variant='filled'
                    InputLabelProps={{ shrink: true, required: true }}                    
                    type="date"
                    style={{
                      backgroundColor: "White"
                  }}
                  value={posting_date}
                  onChange={(e) => setPosting_date(e.target.value)}
                  />
                  <TextField
                    name="Document Create Date"
                    label="Document Create Date"
                    fullWidth
                    variant='filled'
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    style={{
                      backgroundColor: "White"
                  }}
                  value={document_create_date}
                  onChange={(e) => setDocument_create_date(e.target.value)}
                  />
                  <TextField
                    name="Due Date"
                    label="Due Date"
                    fullWidth
                    variant='filled'
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    style={{
                      backgroundColor: "White"
                  }}
                  value={due_in_date}
                  onChange={(e) => setDue_in_date(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-textarea"
                    label="Invoice Currency"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={invoice_currency}
                  onChange={(e) => setInvoice_currency(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Document Type"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={document_type}
                  onChange={(e) => setDocument_type(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Posting Id"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={posting_id}
                  onChange={(e) => setPosting_id(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Total Open Amount"
                    multiline
                    fullWidth
                    variant='filled'
                    style={{
                      backgroundColor: "White"
                  }}
                  value={total_open_amount}
                  onChange={(e) => setTotal_open_amount(e.target.value)}
                  />
                </div>
                <div>  
                  <TextField
                    name="Baseline Create Date"
                    label="Baseline Create Date"
                    fullWidth
                    variant='filled'
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    style={{
                      backgroundColor: "White"
                  }}
                  value={baseline_create_date}
                  onChange={(e) => setBaseline_create_date(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Customer Payment Term"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={cust_payment_terms}
                  onChange={(e) => setCust_payment_terms(e.target.value)}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Invoice Id"
                    fullWidth
                    variant='filled'
                    multiline
                    style={{
                      backgroundColor: "White"
                  }}
                  value={invoice_id}
                  onChange={(e) => setInvoice_id(e.target.value)}
                  />
                </div>
              </Box>
            </div>
        </form>
        </DialogContent>
        <DialogActions className={classes.divs}>
        <Button  className={classes.can} id="addt"  onClick={handleFinalAdd} type="submit">
             Add
            </Button>
          <Button  className={classes.can} id="addcancel" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
