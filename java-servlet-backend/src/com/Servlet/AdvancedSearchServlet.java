package com.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Crud.Crud;
import com.Pojo.Pojo;
import com.google.gson.Gson;

/**
 * Servlet implementation class AdvancedSearchServlet
 */
@WebServlet("/AdvancedSearchServlet")
public class AdvancedSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvancedSearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String cust_number= request.getParameter("cust_number");
        String business_year= request.getParameter("business_year");
        String Doc_id= request.getParameter("doc_id");
        String invoice_id= request.getParameter("invoice_id");
        Crud crudObject= new Crud();
        try {
			Crud.createConnection();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        Pojo pojoObject=new Pojo();
        pojoObject.setCust_number(Integer.parseInt(cust_number));
        pojoObject.setBusiness_year(Integer.parseInt(business_year));
        pojoObject.setDoc_id(Doc_id);
        pojoObject.setInvoice_id(Integer.parseInt(invoice_id));
        ArrayList<Pojo> pojoArrayList = null;
        try {
            pojoArrayList=crudObject.AdvancedSearch(pojoObject);
        } catch (Exception e) {
            e.printStackTrace();
        }

        PrintWriter out = response.getWriter();
        Gson gsonObject = new Gson();
        String json = gsonObject.toJson(pojoArrayList);
        out.print(json);
        out.print(pojoArrayList.size());
	}

}
