# AI-Enabled-FinTech-B2B-Invoice-Management-Application
A web application to help the people working in the Accounts Receivable departments in their day-to-day activities. Made with :<br>
![ReactJs](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![JAVA](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)



Database used:<br>
![MYSQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

Preferred IDEs:<br>
![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)

## Steps to run
#### Database setup: <br>
Make sure you have MYSQL installed with default user and password as 'root'. If you have used other username and password than 'root' then you need to make changes in many files in the backend.
So reconfigure your SQL server and make the user and password as 'root'. <br>
Import the invoice dataset.sql file into mysql workbench.

### Backend Setup: <br>
Make sure that you have JAVA 8 JDK installed and enviornment paths configured accordingly. Make sure you have eclipse photon installed in your system. You can work on other IDEs like PyCharm also.

1- Create a new dynamic web app project in eclipse. Make sure you mark the checkbox asking to add the project descriptor file while creating the app.<br>
2- From the repo all folders and files required are there. Copy all the src files to your project src directory.<br>
3- Change the code of /WebContent/WEB-INF/web.xml of your project with the one in the repo web.xml file.<br>
4- Copy all the JAR files from /WebContent/WEB-INF/lib folder to the same folder of your project.<br>
5- In the .classpath file of your project add the following lines after line number 10:
```
<classpathentry kind="lib" path="./WebContent/WEB-INF/lib/gson-2.2.2.jar"/>
<classpathentry kind="lib" path="./WebContent/WEB-INF/lib/mysql-connector-java-8.0.26.jar"/>
<classpathentry kind="lib" path="./WebContent/WEB-INF/lib/servlet-api.jar"/>
```
6- Download the apache tomcat server folder and extract it somewhere. Link for the same : [Click Here](https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.62/bin/apache-tomcat-9.0.62.zip) <br>
7- In the servers tab of eclipse IDE, choose the option to add new server and browse he tomcat directory and follow the rest of the instructions. <br>
8- Run the project by right clicking on the project name---> Run As------> Run on server.

### Frontend Setup: <br>
Make sure you have nodejs installed on your system. Visual Studio Code IDE is preferred.<br>
1- Open the reactjs-frontend folder in VS code and a open a new terminal of VS Code.<br>
2- Run the below commands one at a time to install all the libraries:
```
npm install

npm i es6-promise isomorphic-fetch

npm install @mui/icons-material

npm i @emotion/react @emotion/styled

npm i react-chartjs-2 chart.js
```

3- Then finally run the web-app using the below command:
```
npm start
```
#### Sources of error in frontend
Maybe your tomcat server is running at some other port than 8081 then you have to make the few changes in the urls in the frontend files present in /src/components folder.<br>
Change the following files accordingly:
<ul>
  <li>AddBtn.js - Line 142 </li>
  <li>AnalyticView.js - Line 192</li>
  <li>Chart.js - Line 44</li>
  <li>Datatable.js - Line 61</li>
  <li>DeleteBtn.js - Line 117</li>
  <li>EditBtn.js - Line 149</li>
  <li>Predict.js - Line 154</li>
</ul>

### Prediction Setup: <br>
1. Uninstall all previous versions of Python and Anaconda from your system. Install the anaconda with Python 3.6. The link to the same can be found [here](https://repo.anaconda.com/archive/Anaconda3-5.2.0-Windows-x86_64.exe):<br>
2. While installing the anaconda make sure that you check mark on 'Add path to Enviornment variables' otherwise you have to reinstall or perform complex steps by googling yourself.<br>
3. Update the pandas and flask libraries and install xgboost by running the below commands in a new terminal or anaconda prompt:
```
pip install --upgrade pandas --user

pip install --upgrade flask --user

pip install xgboost pandas --user
```
4. Run the Integration.ipynb in the flask-integration folder using jupyter notebook.


## Demo of the CRUD operations, Predict and Analytics Feature: <br>

### 1. Add a Record:<br>
https://user-images.githubusercontent.com/62816609/164052971-ffbd4996-3b12-4b0c-a527-50a2ec3f1ef6.mp4

### 2. Edit a Record:<br>
https://user-images.githubusercontent.com/62816609/164052994-1f78768f-b4c3-4104-b1f6-79299c785947.mp4

### 3. Delete a Record:<br>
https://user-images.githubusercontent.com/62816609/164054479-0b0220af-ff71-4993-92ef-2f265aa2f775.mp4

### 4. Search and Advanced Search:<br>
https://user-images.githubusercontent.com/62816609/164056815-5449409f-a5b6-4f8e-837b-9c279ebe6346.mp4

### 5. Predict:<br>
https://user-images.githubusercontent.com/62816609/164058058-a6bb052f-93c5-4599-9b64-7fdaba919a36.mp4

### 6. Analytics View:<br>
https://user-images.githubusercontent.com/62816609/164061591-7f4fff3c-1f90-48a1-b7a8-a5560a51aac6.mp4
