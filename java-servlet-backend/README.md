# java-servlet-backend

## Made with : <br>
![JAVA](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)

## Servers Used: <br>
![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)

Preferred IDEs:<br>
![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)
![PyCharm](https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green)

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
