package com.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Crud.Crud;

/**
 * Servlet implementation class PredictBucketServlet
 */
@WebServlet("/PredictBucketServlet")
public class PredictBucketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PredictBucketServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		boolean status=false;
		String docID= request.getParameter("docID");
        String ageBucket= request.getParameter("ageBucket");
        String clearDate= request.getParameter("clearDate");
        System.out.println("\nDocID:"+docID);
        System.out.println("\nAging Bucket: "+ageBucket);
        System.out.println("\nClear Date: "+clearDate);

        String[] docIDList= docID.split(",");
        String[] ageBucketList= ageBucket.split(",");
        String[] clearDateList= clearDate.split(",");

        try {
			Crud.createConnection();
		} catch (Exception e1) {
			e1.printStackTrace();
		}
        Crud crud= new Crud();
        try {
            status=crud.predictToDatabase(docIDList, ageBucketList, clearDateList);
        } catch (Exception e) {
            e.printStackTrace();
        }    
	}
}