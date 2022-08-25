# meeting-of-the-minds
## -=Project Description=-
Describe the goal and project.

![An image that visually represents the Account, Post, and Comment database tables and their associations to one another](./lib/images/DBSchema.jpg)

---
## Table of Contents
* [Installation Instructions](#installation)
* [Usage](#usage)
* [Contact Information](#contact)

---

## -=Installation=-
Before running the program, install *npm packages* npm dependencies with:
<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
npm i
</div>
<br>
Describe the npm packages here

<br>

## -=Usage=-
To run the code, first open your mysql using: 
<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
mysql -u root -p
</div> 

<br>
and enter in your password. Then run:
<br><br>

<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
SOURCE db/schema.sql;
</div>

<br>
to create and enter the database. Quit mysql and type in the command line:
<br><br>

<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
npm run seed
</div>  

<br>
to seed the data. Finally type:
<br><br>

<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
node server.js <em>OR</em> npm start
</div> 

<br>
in the command line of the root directory. 
<br><br>
Since this application is only providing the back-end of the retail store. The use of Insomnia is required to run the api routes to view the database and functionality. 
<br><br>

## -=Contact=-

Check out the [Heroku deployed application]() and feel free to look at my other work on my [GitHub](https://github.com/AHudg).

Made by Andrew Hudgins :)