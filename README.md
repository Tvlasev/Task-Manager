# Simple Task Manager with NodeJS and MongoDB


To start the project: 

```
npm install 
npm run dev
```

Install and configure MongoDB and Robo 3T

In Postman use following requests to test the end points: 

Request to create a user or task
```
 POST request, url: http://localhost:3000/users
 POST request, url: http://localhost:3000/task
(You have to provide a valid request body and headers)
```

Request to read all users or tasks
```
GET request, url: http://localhost:3000/users
GET request, url: http://localhost:3000/tasks
```

Request to read a specific user or task by id
```
 GET request, url: http://localhost:3000/user/<user-id>
 GET request, url: http://localhost:3000/task/<task-id>
```

Request to update user or task 
```
 PATCH request, url: http://localhost:3000/user/<user-id>
 PATCH request, url: http://localhost:3000/task/<task-id>
(You have to provide a valid request body and headers)
```

Request to delete user or task by id
```
DELETE request, url: http://localhost:3000/user/<user-id>
DELETE request, url: http://localhost:3000/tasks/<task-id>
```


