package com.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Crud.Crud;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
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
		String deleteArray = request.getParameter("deleteArray");        
        String[] deleteArraySplit = deleteArray.split(",");

        int[] rowsToDelete = new int[deleteArraySplit.length];
        for (int i = 0; i < deleteArraySplit.length; i++) {
            rowsToDelete[i] = Integer.parseInt(deleteArraySplit[i]);
            System.out.println("Row(s) to delete: "+ rowsToDelete[i]);
        }
        int[] statusCode=new int[rowsToDelete.length];
        try {
			Crud.createConnection();
		} catch (Exception e1) {			
			e1.printStackTrace();
		}
        Crud crudObject = new Crud();
        try {
        	statusCode=crudObject.delete(rowsToDelete);
        } catch (Exception e) {
            e.printStackTrace();
        }
        for (int i : statusCode) {
            System.out.println("\nStatus Code:" + i);
        }		
	}

}