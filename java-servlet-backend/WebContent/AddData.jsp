<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert Records to DataBase</title>
</head>
<body>
 <div align="center">
  <h1>Insert Records Form</h1>
  <form action="<%= request.getContextPath() %>/InsertServlet" method="post">
   <table style="with: 80%">
    <tr>
     <td>Business Code</td>
     <td><input type="text" name="business_code" required/></td>
    </tr>
    <tr>
     <td>Customer Number</td>
     <td><input type="number" name="cust_number" required/></td>
    </tr>
    <tr>
     <td>Clear Date</td>
     <td><input type="date" name="clear_date" required/></td>
    </tr>
    <tr>
     <td>Business Year</td>
     <td><input type="number" name="business_year" required/></td>
    </tr>
    <tr>
     <td>Doc id</td>
     <td><input type="text" name="doc_id" required/></td>
    </tr>
    <tr>
     <td>Posting Date</td>
     <td><input type="date" name="posting_date" required/></td>
    </tr>
    <tr>
     <td>Document_create Date</td>
     <td><input type="date" name="document_create_date" required/></td>
    </tr>
    <tr>
     <td>Due in date</td>
     <td><input type="date" name="due_in_date" required/></td>
    </tr>
    <tr>
     <td>Invoice currency</td>
     <td><input type="text" step="0.01" name="invoice_currency" required/></td>
    </tr>
    <tr>
     <td>Doc type</td>
     <td><input type="text" name="document_type" required/></td>
    </tr>

    <tr>
     <td>Posting id</td>
     <td><input type="number" name="posting_id" required/></td>
    </tr>
    <tr>
     <td>Total Open Amount</td>
     <td><input type="number" step="0.01" name="total_open_amount" required/></td>
    </tr>
    <tr>
     <td>Baseline_create_date</td>
     <td><input type="date" name="baseline_create_date" required/></td>
    </tr>
    <tr>
     <td>Cust_payment_terms</td>
     <td><input type="text" name="cust_payment_terms" required/></td>
    </tr>
    <tr>
     <td>Invoice ID</td>
     <td><input type="number" name="invoice_id" required/></td>
    </tr>
   </table>
   <input type="submit" value="Submit" />
  </form>
 </div>
</body>
</html>