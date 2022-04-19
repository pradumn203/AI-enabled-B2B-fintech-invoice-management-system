package com.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Crud.Crud;
import com.Pojo.Pojo;

/**
 * Servlet implementation class InsertServlet
 */
@WebServlet("/InsertServlet")
public class InsertServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
		RequestDispatcher dispatcher=request.getRequestDispatcher("/AddData.jsp");
        dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    public java.sql.Date convertToSqlDate(java.util.Date date) {
        return new java.sql.Date(date.getTime());
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String business_code = request.getParameter("business_code");
        String cust_number = request.getParameter("cust_number");
        String clear_date = request.getParameter("clear_date");
        String business_year = request.getParameter("business_year");
        String doc_id = request.getParameter("doc_id");
        String doc_type = request.getParameter("document_type");
        String document_create_date = request.getParameter("document_create_date");
        String posting_date = request.getParameter("posting_date");
        String due_in_date = request.getParameter("due_in_date");
        String invoice_currency = request.getParameter("invoice_currency");
        String posting_id = request.getParameter("posting_id");
        String total_open_amount = request.getParameter("total_open_amount");
        String baseline_create_date = request.getParameter("baseline_create_date");
        String cust_payment_terms = request.getParameter("cust_payment_terms");
        String invoice_id = request.getParameter("invoice_id");

        Pojo PojoObject = new Pojo();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        
        PojoObject.setBusiness_code(business_code);
        PojoObject.setCust_number(Integer.parseInt(cust_number));

        Date parsedClearDate = null;
        try {
        	parsedClearDate = formatter.parse(clear_date);
        } 
        catch (ParseException e) {
            e.printStackTrace();
        }
        PojoObject.setClear_date(convertToSqlDate(parsedClearDate));

        PojoObject.setBusiness_year(Integer.parseInt(business_year));
        PojoObject.setDoc_id(doc_id);

        Date parsedPostingDate = null;
        try {
        	parsedPostingDate = formatter.parse(posting_date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        assert parsedPostingDate != null;
        PojoObject.setPosting_date(convertToSqlDate(parsedPostingDate));

        Date parsedDocDate = null;
        try {
        	parsedDocDate = formatter.parse(document_create_date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        PojoObject.setDocument_create_date(convertToSqlDate(parsedDocDate));
        PojoObject.setDocument_create_date1(convertToSqlDate(parsedDocDate));

        Date parsedDueDate = null;
        try {
        	parsedDueDate = formatter.parse(due_in_date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        assert parsedDueDate != null;
        PojoObject.setDue_in_date(convertToSqlDate(parsedDueDate));
        
        PojoObject.setInvoice_currency(invoice_currency);
        PojoObject.setDocument_type(doc_type);
        PojoObject.setPosting_id(Integer.parseInt(posting_id));
        PojoObject.setTotal_open_amount(Double.parseDouble(total_open_amount));

        Date parsedBaselineDate = null;
        try {
        	parsedBaselineDate = formatter.parse(baseline_create_date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        assert parsedBaselineDate != null;
        PojoObject.setBaseline_create_date(convertToSqlDate(parsedBaselineDate));

        PojoObject.setCust_payment_terms(cust_payment_terms);
        PojoObject.setInvoice_id(Integer.parseInt(invoice_id));
        PojoObject.setArea_business(null);
        
        // Check for empty clear dates and set the values of isOpen accordingly
        if (clear_date.equals("")) {
        	PojoObject.setIsOpen(1);
        } else {
        	PojoObject.setIsOpen(0);
        }
        
        PojoObject.setAging_bucket(null);
        PojoObject.setIs_deleted(0);

        try {
			Crud.createConnection();
		} catch (Exception e1) {
			e1.printStackTrace();
		}
        int resultStatus = -1;
        Crud crud = new Crud();

        try {
        	resultStatus= crud.addData(PojoObject);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(resultStatus==1){
            RequestDispatcher dispatcher = request.getRequestDispatcher("/SuccessPage.jsp");
            dispatcher.forward(request, response);
        }
        else{
            PrintWriter out = response.getWriter();
            out.println("<script type=\"text/javascript\">");
            out.println("alert('Error in registering');");
            out.println("location='index.jsp';");
            out.println("</script>");
        }
	}
}