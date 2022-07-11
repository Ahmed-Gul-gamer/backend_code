## Config Database
1. Installation guide for postgreSQL [title](https://www.youtube.com/watch?v=C93Ed8b8Mhc&t=405s) and follow steps upto the point where pgadmin master was set.
2. Now open cmd and type `psql -U postgres` and enter your pgadmin password.
3. Now just copy and paste each command on cmd prompt written inside database.sql file.
4. Now in db.js file, change password value with whatever you have used for in pgadmin master. And all the other variables will be same if you have followed the above steps exactly.
 
# Start

`npm index.js`

## Api's Built
- Add a Student
- Add a Book
- Delete a Book
- Delete a Student
- List all Students
- List all Books
- Borrow a Book
- Return a Book
