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
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
    divs: {
        backgroundColor: "#2A3E4C",
        color: "#FFFFFF",
        fontFamily: " normal normal normal Ubuntu"
    },
    view: {
        minWidth: "200px",
        height: "50px",        
        borderInlineEnd: "2px solid #14AFF1",
        backgroundColor: "#2A3E4C",
        textAlign: "center",
        fontSize: "18px",
        color: "#FFFFFF",        
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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "#2A3E4C",
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

export default function EditBtn(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    var checkBox=props.check;
    let [invoice_currency, setInvoice_currency] = React.useState('');
    let [customer_payment_terms, setCustomer_payment_terms] = React.useState('');
    const handleClear = () => {
        document.getElementById("info-form").reset();
    }
    const handleClickOpen = () => {
        if(checkBox.length===1 ){
            setOpen(true);
        }
        else{
            setOpen(false);
        }        
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleEdit = () => {      
        const data = {
          title: "MY FIRST WEB APP",
          body: "made in India"
        };
        try{
         axios.post(`http://localhost:8081/backend/EditServlet?invoice_currency=${invoice_currency}&cust_payment_terms=${customer_payment_terms}&sl_no=${checkBox[0]}`,data)
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
            <Button className={classes.view} variant="outlined" startIcon={<EditIcon />} onClick={handleClickOpen}> Edit</Button>
            <Dialog width="50%" onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
                <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleClose}>
                    Edit Invoice
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>
                <form id ="EditForm" className='Form'>
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
                    label="Invoice Currency"
                    multiline
                    fullWidth
                    variant='filled'
                    style={{
                      backgroundColor: "White"
                  }}
                  value={invoice_currency}
                  onChange={(e) => setInvoice_currency(e.target.value)}                   
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Customer Payment Terms"
                    multiline
                    fullWidth
                    variant='filled'
                    style={{
                      backgroundColor: "White"
                  }}
                  value={customer_payment_terms}
                  onChange={(e) => setCustomer_payment_terms(e.target.value)}
                  />
                  </div>
                  </Box>
                  </div>            
                </form>
                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button  className={classes.can} id="edtcancel" onClick={handleEdit}>
                        Edit
                    </Button>
                    <Button className={classes.clear} id="edtreset" onClick={handleClose}>
                        Cancel
                    </Button>                    
                </DialogActions>
            </Dialog>
        </div>
    );
}
