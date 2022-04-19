<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>HRC CRUD Application</title>
</head>
<body>
<h1><%= "CRUD Application" %>
</h1>
<br/>
<a href="InsertServlet">Insert Record</a><br>
<form action="<%= request.getContextPath() %>/DisplayServlet" method="get">
<a href="DisplayServlet">Display Record</a>
    <input type="submit" value="Submit" />
</form>
<form action="<%= request.getContextPath() %>/AnalyticsServlet" method="post">
<a href="AnalyticsServlet">Analytics</a>
    <input type="submit" value="Submit" />
</form>


<a href="DeleteServlet">Delete Record</a><br>
<a href="EditServlet">Edit Record</a><br>
<a href="AdvancedSearch.jsp">Perform Advanced Search on Records</a><br>
</body>
</html>