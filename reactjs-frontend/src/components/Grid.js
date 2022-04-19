import React, { useState } from 'react'
import DataTable from './DataTable';
import Footer from './Footer';
import GridButton from './GridButton'

function Grid() {
    const [check,setCheck]=useState([])
    const [q,setQ]=useState("");
    const [columns,setColumns]=useState(["cust_number"]);
    const [data,setData]=useState(null);
        
    let [doc_id,setDocId] = React.useState("");
    let [docIddata,setDocIdData] = React.useState("");
    let [invoice_id, setInvoiceId] = React.useState("");
    let [cust_number,setCustNumber] = React.useState("");
    let [business_year,setBusinessYear] = React.useState("");
    console.log("Check Box data :"+data);
    console.log("Sl_no values :"+check);
    console.log("Doc id data :"+docIddata);    
    return (
        <div>
            <div className="table">
                <GridButton 
                    check={check} 
                    q={q} 
                    setQ={setQ} 
                    setColumnsChange={cols=>setColumns(cols)}
                    setDocIdChange={docId=>setDocId(docId)}
                    setInvoiceIdChange={invoiceId=>setInvoiceId(invoiceId)}
                    setCustomerNumberChange={custNumber=>setCustNumber(custNumber)}
                    setBusinessYearChange={businessYear=>setBusinessYear(businessYear)}
                    checkBoxData={data}
                    docIDsend={docIddata}
                />
                <div>
                    <DataTable 
                        changeCheck={check => setCheck(check)} 
                        q={q} 
                        columns={columns}
                        doc_id={doc_id}
                        invoice_id={invoice_id}
                        cust_number={cust_number}
                        business_year={business_year}
                        changsetData={data => setData(data)}
                        changedocIddata={docIddata => setDocIdData(docIddata)}
                    />                    
                </div>
            </div>
            <div>
                  <Footer />
            </div>
        </div>
    )
 } 
 export default Grid