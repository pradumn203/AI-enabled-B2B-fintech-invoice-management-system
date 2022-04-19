<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Edit Data</title>
</head>
<body>
<div align="center">
    <h1>Edit Data Form</h1>
    <form action="<%= request.getContextPath() %>/EditServlet" method="get">
        <table style="with: 80%">

            <tr>
                <td>Sl_no</td>
                <td><input type="number" name="sl_no" required/></td>
            </tr>

        </table>
        <input type="submit" value="Submit" />
    </form>
    <form action="<%= request.getContextPath() %>/EditServlet" method="post">
        <table style="with: 80%">

            <tr>
                <td>Sl_no</td>
                <td><input type="number" name="sl_no1" value=${pojo.sl_no} required/></td>
            </tr>

            <tr>
                <td>Invoice_currency</td>
                <td><input type="text" name="invoice_currency" value=${pojo.invoice_currency} required/></td>
            </tr>

            <tr>
                <td>Cust_payment_term</td>
                <td><input type="text" name="cust_payment_terms" value=${pojo.cust_payment_terms} required/></td>
            </tr>

        </table>
        <input type="submit" value="Submit" />
    </form>
</div>

</body>
</html>