package com.Servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Crud.Crud;
import com.Pojo.Pojo;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	Pojo pojo = null;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Pojo pojoObject = new Pojo();
        
        String invoiceCurr=request.getParameter("invoice_currency");
        String custPayTerms=request.getParameter("cust_payment_terms");
        String sl_no=request.getParameter("sl_no");        
        
        pojoObject.setInvoice_currency(invoiceCurr);
        pojoObject.setCust_payment_terms(custPayTerms);
        pojoObject.setSl_no(Integer.parseInt(sl_no));
        Crud crudObject = new Crud();
        try {
			Crud.createConnection();
		} 
        catch (Exception e) {			
			e.printStackTrace();
		}
        int statusCode = crudObject.editData(pojoObject);
        System.out.println("Edit Servlet Status: "+ statusCode);        
	}
}