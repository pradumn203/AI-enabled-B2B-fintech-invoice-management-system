import React, { useState, useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid"
import {styled } from '@mui/material/styles';
import { light } from '@material-ui/core/styles/createPalette';

function customCheckbox(theme) {
    return {
      '& .MuiCheckbox-root svg': {       
        color:'white',        
      },
      '& .MuiTablePagination-root': {
          color:"white",
      },
      '& .MuiSvgIcon-root': {
          color:"white",
      }
    };
 }    
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color: light,
     ...customCheckbox(theme),
  }));

const columns = [
    { field: 'sl_no', headerName: 'Sl_no', width: 150,height:50 },
    { field: 'business_code', headerName: 'Business Code',width: 150,height:50 },
    { field: 'cust_number', headerName: 'Cust Number',width: 150 },
    { field: 'clear_date', headerName: 'Clear Date',width: 200},
    { field: 'business_year', headerName: 'Business Year',width: 200},
    { field: 'doc_id', headerName: 'Doc Id',width: 200},
    { field: 'posting_date', headerName: 'Posting Date',width: 200},
    { field: 'document_create_date', headerName: 'Document Create Date',width: 200},
    { field: 'document_create_date1', headerName: 'Document Create Date1',width: 200},
    { field: 'due_in_date', headerName: 'Due In Date',width: 200},
    { field: 'invoice_currency', headerName: 'Invoice Currency',width: 200},
    { field: 'document_type', headerName: 'Document Type',width: 200},
    { field: 'posting_id', headerName: 'Posting Id',width: 200},
    { field: 'area_business', headerName: 'Area Business',width: 200},
    { field: 'total_open_amount', headerName: 'Total Open Amount',width: 200},
    { field: 'baseline_create_date', headerName: 'Baseline Create Date',width: 200},
    { field: 'cust_payment_terms', headerName: 'Cust Payment Terms',width: 200},
    { field: 'invoice_id', headerName: 'Invoice Id',width: 200},
    { field: 'isOpen', headerName: 'IsOpen',width: 200},
    { field: 'aging_bucket', headerName: 'Aging Bucket',width: 200 },
    { field: 'is_deleted', headerName: 'Is Deleted',width: 200 }
]
const DataTable = (props) => {
    const [tableData, setTableData] = useState([])   
    const [pageSize,setPageSize]=useState(10)
    var [pageIndex,setPageIndex]=useState([])
    var [checkBoxData,setCheckBoxData]=useState([])
    var [doc_id,setDocId]=useState([])
    const [selectedRows, setSelectedRows] = React.useState([]);
    console.log(props.columns);
    console.log(props.doc_id);
    console.log(props.invoice_id);
    console.log(props.cust_number);
    console.log(props.business_year);
    useEffect(() => {
        fetch("http://localhost:8081/backend/DisplayServlet")
            .then(data => data.json())
            .then(data => setTableData(data))            
    },[])

    function search(rows){
        if(props.columns.length===1){
            return rows.filter((row)=>row.cust_number.toString().toLowerCase().indexOf(props.q.toLowerCase())>-1
            ||row.business_year.toString().toLowerCase().indexOf(props.q.toLowerCase())>-1
            ||row.invoice_id.toString().toLowerCase().indexOf(props.q.toLowerCase())>-1
            ||row.doc_id.toString().toLowerCase().indexOf(props.q.toLowerCase())>-1);
        }
        else{
            return rows.filter(
                (row)=>
                    row.doc_id.toString().toLowerCase().indexOf(props.doc_id.toLowerCase())>-1 &&
                    row.invoice_id.toString().toLowerCase().indexOf(props.invoice_id.toLowerCase())>-1 &&
                    row.cust_number.toString().toLowerCase().indexOf(props.cust_number.toLowerCase())>-1 &&
                    row.business_year.toString().toLowerCase().indexOf(props.business_year.toLowerCase())>-1); 
        }       
    }
    function getIndex(sl_no) {
        return tableData.findIndex(obj => obj.sl_no === sl_no);
    }
    return (        
        <div  style={{height:500,width:'100%'}}>            
            <StyledDataGrid              
                rows={search(tableData)}
                columns={columns}
                getRowId={row => row.sl_no}
                loading={!tableData.length}               
                checkboxSelection
                style={{color:'white',border:'1px solid white'}}
                onSelectionModelChange={(ids) => {
                    pageIndex = ids;
                    checkBoxData.push(getIndex(pageIndex[(ids.length)-1]));
                    doc_id.push(parseInt(tableData[checkBoxData[(checkBoxData.length)-1]].doc_id));
                    props.changeCheck(pageIndex)
                    props.changsetData(checkBoxData)
                    props.changedocIddata(doc_id)                   
                }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}                
                Pagination
            />
        </div>
    )
}
export default DataTable
