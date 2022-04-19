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
import com.Pojo.AnalyticsPojo;
import com.google.gson.Gson;

/**
 * Servlet implementation class AnalyticsServlet
 */
@WebServlet("/AnalyticsServlet")
public class AnalyticsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ArrayList<String> arrayList=new ArrayList<>();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AnalyticsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		try {
			Crud.createConnection();
		} catch (Exception e) {			
			e.printStackTrace();
		}
        ArrayList<AnalyticsPojo> analyticPojoArrayList=new ArrayList<>();
        Crud crud=new Crud();
        analyticPojoArrayList=crud.getAnalyticData(arrayList);
        PrintWriter out = response.getWriter();        
        Gson gson = new Gson();
        String json = gson.toJson(analyticPojoArrayList);
        out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		arrayList.clear();
        arrayList.add(request.getParameter("clear_date1"));
        arrayList.add(request.getParameter("clear_date2"));
        arrayList.add(request.getParameter("due_in_date1"));
        arrayList.add(request.getParameter("due_in_date2"));
        arrayList.add(request.getParameter("baseline_create_date1"));
        arrayList.add(request.getParameter("baseline_create_date2"));
        arrayList.add(request.getParameter("invoice_currency"));
	}
}