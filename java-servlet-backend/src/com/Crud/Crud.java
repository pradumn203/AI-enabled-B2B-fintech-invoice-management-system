package com.Crud;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Locale;

import com.Pojo.AnalyticsPojo;
import com.Pojo.Pojo;
public class Crud {
	static Connection conn;
	ResultSet rst;
	static boolean ConnectStatus = false;
	
	// A static function to establish connection with the database.
    public static void createConnection() throws Exception{
    	try {
            Class.forName("com.mysql.jdbc.Driver");            
            Crud.conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/invoice_dataset?zeroDateTimeBehavior=convertToNull", "root", "root");            
            ConnectStatus=true;
    	}
    	catch(Exception ex) {
    		ex.printStackTrace();
    		ConnectStatus = false;
    	}
    }
    
    //Function to convert Java.util.date type to java.sql.date type
    public java.sql.Date convertJavaDateToSqlDate(java.util.Date date) {
        return new java.sql.Date(date.getTime());
    }
    // Function to Display/Retrieve the data
    public ArrayList<Pojo> DisplayData() throws Exception {
        ArrayList<Pojo> PojoList = new ArrayList<>();
        String displayQuery = "select * from invoices where is_deleted=0;";
        Class.forName("com.mysql.jdbc.Driver");
        if (ConnectStatus == true) {
            Statement statement = conn.createStatement();
            rst = statement.executeQuery(displayQuery);
            while (rst.next()) {
                Pojo pojoObject = new Pojo();
                pojoObject.setSl_no(rst.getInt("sl_no"));
                pojoObject.setBusiness_code(rst.getString("business_code"));
                pojoObject.setCust_number(rst.getInt("cust_number"));
                pojoObject.setClear_date(rst.getDate("clear_date"));
                pojoObject.setBusiness_year(rst.getInt("buisness_year"));
                pojoObject.setDoc_id(rst.getString("doc_id"));
                pojoObject.setPosting_date(rst.getDate("posting_date"));
                pojoObject.setDocument_create_date(rst.getDate("document_create_date"));
                pojoObject.setDocument_create_date1(rst.getDate("document_create_date1"));
                pojoObject.setDue_in_date(rst.getDate("due_in_date"));
                pojoObject.setInvoice_currency(rst.getString("invoice_currency"));
                pojoObject.setDocument_type(rst.getString("document_type"));
                pojoObject.setPosting_date(rst.getDate("posting_date"));
                pojoObject.setArea_business(rst.getString("area_business"));
                pojoObject.setTotal_open_amount(rst.getDouble("total_open_amount"));
                pojoObject.setBaseline_create_date(rst.getDate("baseline_create_date"));
                pojoObject.setCust_payment_terms(rst.getString("cust_payment_terms"));
                pojoObject.setInvoice_id(rst.getInt("invoice_id"));
                pojoObject.setIsOpen(rst.getInt("isOpen"));
                pojoObject.setAging_bucket(rst.getString("aging_Bucket"));
                pojoObject.setIs_deleted(rst.getInt("is_deleted"));
                
                // Add the values to our resultant Arraylist
                PojoList.add(pojoObject);
            }
            return PojoList;
        } else {
            System.out.println("Database Not Connected");
        }
        return null;
    }
    
    // Function to Insert Data to Database
    public int addData(Pojo insertObject) throws Exception{
    	String insertQuery = "insert into invoices () values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    	int resultStatus=0;
    	Class.forName("com.mysql.jdbc.Driver");
    	
    	//To handle adding of data after deleting last row
    	String selectAllQuery = "select * from hrc";
    	Statement statement = conn.createStatement();    	
    	ResultSet selectAll = statement.executeQuery(selectAllQuery);
    	int count = 0;
    	while (selectAll.next()) {
            count+=1;
        }
        System.out.println("Number of Records in the database: " + count);   

        //Check if User entered Business Code and customer number is present in the business table or not
        //We query the condition and store the query results in two different ResultSets
        
        //Checking the business code
        PreparedStatement business_code = conn.prepareStatement("select * from business where business_code=?;");
        business_code.setString(1, insertObject.getBusiness_code());
        ResultSet bc = business_code.executeQuery();
        
        //Checking the customer number
        PreparedStatement cust_number = conn.prepareStatement("select * from customer where cust_number=?;");
        cust_number.setInt(1, insertObject.getCust_number());
        ResultSet cn = cust_number.executeQuery();
        
        //Checking if the ResultSets have null values.
        // If those ResultSets contain NULL values then it means that either the queried Business Code or Customer Number is not available in the database
        // Hence that customer does not exists.
        if(!cn.next() || !bc.next()){
            return 0;
        }
        else {    	
	    	if (ConnectStatus == true) {
	            PreparedStatement preparedStatement = conn.prepareStatement(insertQuery);
	            {
	                preparedStatement.setInt(1, count + 1);
	                preparedStatement.setString(2, insertObject.getBusiness_code());
	                preparedStatement.setInt(3, insertObject.getCust_number());
	                preparedStatement.setDate(4, insertObject.getClear_date());
	                preparedStatement.setInt(5, insertObject.getBusiness_year());
	                preparedStatement.setString(6, insertObject.getDoc_id());
	                preparedStatement.setDate(7, insertObject.getPosting_date());
	                preparedStatement.setDate(8, insertObject.getDocument_create_date());
	                preparedStatement.setDate(9, insertObject.getDocument_create_date1());
	                preparedStatement.setDate(10, insertObject.getDue_in_date());
	                preparedStatement.setString(11, insertObject.getInvoice_currency());
	                preparedStatement.setString(12, insertObject.getDocument_type());
	                preparedStatement.setInt(13, insertObject.getPosting_id());
	                preparedStatement.setString(14, insertObject.getArea_business());
	                preparedStatement.setDouble(15, insertObject.getTotal_open_amount());
	                preparedStatement.setDate(16, insertObject.getBaseline_create_date());
	                preparedStatement.setString(17, insertObject.getCust_payment_terms());
	                preparedStatement.setInt(18, insertObject.getInvoice_id());
	                preparedStatement.setInt(19, insertObject.getIsOpen());
	                preparedStatement.setString(20, insertObject.getAging_bucket());
	                preparedStatement.setInt(21, insertObject.getIs_deleted());
	
	                resultStatus = preparedStatement.executeUpdate();
	                return resultStatus;
	            }
	        }
	    	else {
	    		return resultStatus;
	    	}     	
        }
    }
    
    // Fetch details on the basis of sl_no to implement edit functionality
    public Pojo fetchDetailsbySl(String sl_id) throws SQLException {
        String fetchQuery = "select * from invoices where sl_no=?;";
        PreparedStatement preparedStatement=conn.prepareStatement(fetchQuery);
        preparedStatement.setString(1,sl_id);
        ResultSet fetchrs=preparedStatement.executeQuery();
        Pojo pojoObject=new Pojo();
        if(fetchrs.next()){
        	pojoObject.setSl_no(fetchrs.getInt("sl_no"));
        	pojoObject.setInvoice_currency(fetchrs.getString("invoice_currency"));
        	pojoObject.setCust_payment_terms(fetchrs.getString("cust_payment_terms"));
            return pojoObject;
        }
        else{
            System.out.println("Record Not Found");
            return null;
        }
    }
    //Function to implement edit functionality
    public int editData(Pojo pojoObject) {
    	int statusCode = -1;
        String editQuery = "update invoices set invoice_currency=?,cust_payment_terms=? where sl_no=?;";
        try {
            PreparedStatement preparedStatement = conn.prepareStatement(editQuery);
            preparedStatement.setString(1, pojoObject.getInvoice_currency());
            preparedStatement.setString(2, pojoObject.getCust_payment_terms());
            preparedStatement.setInt(3, pojoObject.getSl_no());
            preparedStatement.executeUpdate();
            statusCode=1;
        } 
        catch (SQLException e) {
            e.printStackTrace();
            statusCode=0;
        }
        return statusCode;
    }
    
    // Function to perform Advanced Search Functionality
    public ArrayList<Pojo> AdvancedSearch(Pojo pojo) throws Exception {
    	ArrayList<Pojo> searchList=new ArrayList<>();
    	Pojo pojoObject = new Pojo();
    	String AdvSearchQuery="select * from invoices where cust_number=? and buisness_year=? and doc_id=? and invoice_id=?;";
    	PreparedStatement preparedStatement=conn.prepareStatement(AdvSearchQuery);
        preparedStatement.setInt(1,pojo.getCust_number());
        preparedStatement.setInt(2,pojo.getBusiness_year());
        preparedStatement.setString(3,pojo.getDoc_id());
        preparedStatement.setInt(4,pojo.getInvoice_id());
        ResultSet SearchResults=preparedStatement.executeQuery();
        
        while(SearchResults.next()){
        	pojoObject.setSl_no(SearchResults.getInt("sl_no"));
        	pojoObject.setCust_number(SearchResults.getInt("cust_number"));
        	pojoObject.setClear_date(SearchResults.getDate("clear_date"));
        	pojoObject.setBusiness_year(SearchResults.getInt("buisness_year"));
        	pojoObject.setDoc_id(SearchResults.getString("doc_id"));
        	pojoObject.setPosting_date(SearchResults.getDate("posting_date"));
        	pojoObject.setDocument_create_date(SearchResults.getDate("document_create_date"));
        	pojoObject.setDocument_create_date1(SearchResults.getDate("document_create_date1"));
        	pojoObject.setDue_in_date(SearchResults.getDate("due_in_date"));
        	pojoObject.setInvoice_currency(SearchResults.getString("invoice_currency"));
        	pojoObject.setDocument_type(SearchResults.getString("document_type"));
        	pojoObject.setPosting_id(SearchResults.getInt("posting_id"));
        	pojoObject.setArea_business(SearchResults.getString("area_business"));
        	pojoObject.setTotal_open_amount(SearchResults.getDouble("total_open_amount"));
        	pojoObject.setBaseline_create_date(SearchResults.getDate("baseline_create_date"));
        	pojoObject.setCust_payment_terms(SearchResults.getString("cust_payment_terms"));
        	pojoObject.setInvoice_id(SearchResults.getInt("invoice_id"));
        	pojoObject.setIsOpen(SearchResults.getInt("isOpen"));
        	pojoObject.setAging_bucket(SearchResults.getString("aging_bucket"));
        	pojoObject.setIs_deleted(SearchResults.getInt("is_deleted"));
            searchList.add(pojoObject);
        }
        return searchList;
    }
    
    //Function to perform delete operation on multiple records
    public int[] delete(int[] rowsToDelete) throws SQLException {
        int[] deleteArray = new int[rowsToDelete.length];
        String delQuery= "update invoices set is_deleted=1 where sl_no=?;";
        PreparedStatement preparedStatement=conn.prepareStatement(delQuery);
        for(int i=0;i<rowsToDelete.length;i++){
            preparedStatement.setInt(1,rowsToDelete[i]);
            deleteArray[i]=preparedStatement.executeUpdate();
        }
        return deleteArray;
    }
    
    // Function to Fetch Analytics from the Database
    public ArrayList<AnalyticsPojo> getAnalyticData(ArrayList<String> list){
        String[] b_name={"Johnson and Johnson","Unilever","Bose","Kellog's","Sony","Puma"};
        String[] b_id={"U001","CA02","U002","U005","U007","U013"};

        ArrayList<Integer> no_of_customers=new ArrayList<>();
        ArrayList<Float> total_open_amount=new ArrayList<>();
        ArrayList<String> business_name=new ArrayList<>();
        ArrayList<String> business_id = new ArrayList<>();
        System.out.println("Analytics Arraylist size: "+list.size());
        
        for(String s:list){
            System.out.println("Analytics Arraylist Item before null: "+s);
        }        
        for(int i=0;i<list.size();i++){
            if(list.get(i)==""){
                list.set(i,"null");
            }
        }        
        for(String s:list){
            System.out.println("Analytics Arraylist Item after null: "+s);
        } 
        //Query to select any combination of input given by the user
        String Analyticsquery="select * from invoices where (((clear_date=? or clear_date=?) or (baseline_create_date=? or baseline_create_date=?) or" +
                " (due_in_date=? or due_in_date=?) or invoice_currency=?) and business_code=?);";
        
        for(int i=0;i<b_id.length;i++){
            try {
                PreparedStatement preparedStatement=conn.prepareStatement(Analyticsquery);
                if(list.get(0).equals("null")){
                    preparedStatement.setDate(1,null);
                }
                else{
                    preparedStatement.setString(1,list.get(0));
                    System.out.println(list.get(0));
                }
                if(list.get(1).equals("null")){
                    preparedStatement.setDate(2,null);
                }
                else{
                    preparedStatement.setString(2,list.get(1));
                    System.out.println(list.get(1));
                }
                if(list.get(2).equals("null")){
                    preparedStatement.setDate(3,null);
                }
                else{
                    preparedStatement.setString(3,list.get(2));
                    System.out.println(list.get(2));
                }
                if(list.get(3).equals("null")){
                    preparedStatement.setDate(4,null);
                }
                else{
                    preparedStatement.setString(4,list.get(3));
                    System.out.println(list.get(3));
                }
                if(list.get(4).equals("null")){
                    preparedStatement.setDate(5,null);
                }
                else{
                    preparedStatement.setString(5,list.get(4));
                    System.out.println(list.get(4));
                }
                if(list.get(5).equals("null")){
                    preparedStatement.setDate(6,null);
                }
                else{
                    preparedStatement.setString(6,list.get(5));
                    System.out.println(list.get(5));
                }
                if(list.get(6).equals("null")){
                    preparedStatement.setDate(7,null);
                }
                else{
                    preparedStatement.setString(7,list.get(6));
                    System.out.println(list.get(6));
                }
                preparedStatement.setString(8,b_id[i]);
                System.out.println(preparedStatement);
                ResultSet rs=preparedStatement.executeQuery();
                int no_of_customersTemp=0;
                float total_open_amountTemp=0;
                while(rs.next()){
                    no_of_customersTemp++;
                    total_open_amountTemp=total_open_amountTemp+rs.getFloat("total_open_amount");
                }
                total_open_amountTemp = total_open_amountTemp/10000;
                System.out.println(b_id[i]+" "+no_of_customersTemp+" "+total_open_amountTemp+" "+b_name[i]);
                business_id.add(b_id[i]);
                business_name.add(b_name[i]);
                no_of_customers.add(no_of_customersTemp);
                total_open_amount.add(total_open_amountTemp);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        ArrayList<AnalyticsPojo> analyticPojoArrayList=new ArrayList<>();
        AnalyticsPojo analyticPojo=new AnalyticsPojo();
        analyticPojo.setBusiness_id(business_id);
        analyticPojo.setBusiness_name(business_name);
        analyticPojo.setNo_of_customers(no_of_customers);
        analyticPojo.setTotal_open_amount(total_open_amount);
        analyticPojoArrayList.add(analyticPojo);
        
        return analyticPojoArrayList;
    }
    
    // Function to get doc_id, aging bucket and clear date to update it inside the database
    public boolean predictToDatabase(String[] docIDList, String[] ageBucketList, String[] clearDateList) throws Exception {
        String Predictquery = "update invoices set aging_bucket=?,clear_date=? where doc_id=?";
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        PreparedStatement preparedStatement = conn.prepareStatement(Predictquery);
        if (docIDList.length != ageBucketList.length || docIDList.length != clearDateList.length) {
            System.out.println("Lengths of recieved arrays of aging bucket and clear date are not equal");
            return false;
        } else {
            for (int i = 0; i < docIDList.length; i++) {
                preparedStatement.setString(1, ageBucketList[i]);
                Date clearDate = null;
                clearDate = formatter.parse(clearDateList[i]);
                preparedStatement.setDate(2, convertJavaDateToSqlDate(clearDate));
                preparedStatement.setString(3, docIDList[i]);
                preparedStatement.executeUpdate();
            }
            return true;
        }
    }
}
