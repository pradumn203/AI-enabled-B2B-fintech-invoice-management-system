<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Advanced Search</title>
</head>
<body>
<div align="center">
  <h1>Input the below data to search records:</h1>
  <form action="<%= request.getContextPath() %>/AdvancedSearchServlet" method="post">
   <table style="with: 80%">
   <tr>
     <td>Customer Number</td>
     <td><input type="number" name="cust_number" required/></td>
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
     <td>Invoice ID</td>
     <td><input type="number" name="invoice_id" required/></td>
    </tr>
   </table>
   <input type="submit" value="Submit" />
  </form>
 </div>
</body>
</html>