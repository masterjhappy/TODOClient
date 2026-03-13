to run the application 

1) Please start the TODOListAPI with the steps below:

a) you need to have visual studio 2026 installed. please installed visual studio 2026

b) open TODOListAPI-main solution/TODOListAPI.slnx with visual studio 2026

c) click the start debugging button , it will take 1 to 2 minutes when running 
   for the first time
   
3) please run the angular client application with the steps below

a) open command prompt using   the Start Menu (Search)
  by typing cmd and after that click and open Command Prompt
   
b) use the command prompt to go to the  TODOClient-main directory where the package.json is located
  on my computer it is in this folder "D:\test\testGlobal\TODOClient-main>"

  so I used  this command on the command prompt "cd D:\test\testGlobal\TODOClient-main"

c) Install Dependencies with npm install, this might take a while

D:\test\testGlobal\TODOClient-main>npm install

d) run the angular client with npm start

D:\test\testGlobal\TODOClient-main>npm start

e) opeh the application with Chrome browser   http://localhost:4200/

if all good you will see the todo list application

3) this is how you use the application:
   
   a) to create a new todo
   - fill in the todo task
	 - fill the description
	 - click the add button
     
   b) to update todo
    - click the edit button
	  - update the todo task if you want
	  - update the todo description if you want
	  - click the update button(after you click the edit button the add button text will be change to update)
      
   c) the task can be change to done by clicking the checkbox
    - clicking the checkbox will toggle the text, a done task text will be strike through line
    - clicking the checkbos again will remove the strike through line.
      
   d) the task can be deleted with the delete button
   

PS: the angular client application was build with  node.js version  v24.11.1 
if there are issue running the angular client the node version might be the issue
please download the correct node js version
