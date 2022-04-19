package com.Pojo;
import java.util.ArrayList;

public class AnalyticsPojo {
	private ArrayList<String> business_name;
    private ArrayList<String> business_id;
    private ArrayList<Integer> no_of_customers;
    private ArrayList<Float> total_open_amount;

    public ArrayList<String> getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(ArrayList<String> business_name) {
        this.business_name = business_name;
    }

    public ArrayList<String> getBusiness_id() {
        return business_id;
    }

    public void setBusiness_id(ArrayList<String> business_id) {
        this.business_id = business_id;
    }

    public ArrayList<Integer> getNo_of_customers() {
        return no_of_customers;
    }

    public void setNo_of_customers(ArrayList<Integer> no_of_customers) {
        this.no_of_customers = no_of_customers;
    }

    public ArrayList<Float> getTotal_open_amount() {
        return total_open_amount;
    }

    public void setTotal_open_amount(ArrayList<Float> total_open_amount) {
        this.total_open_amount = total_open_amount;
    }
}
