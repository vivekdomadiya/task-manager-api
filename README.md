# task-manager-api Node.js

Task manager (TODO) API with Node.js

### To run this project, do the following:

##### create .env with the following code (update credentials). Make sure to create .env in the root directory of the project. config/dev.env

```
PORT = 3000
MONGODB_URL=<--YOUR_URL-->/task-manager-api
SENDGRID_API_KEY=<--YOUR_API_KRY-->
```

##### Then install all dependency with

```
npm install
```

##### Then run the following commands to start up the app

```
npm start
```

IT run your application on http://localhost:3000/

Users Command

```
"/users": "POST - Create User",
"/users/me": "GET - Read User",
"/users/me": "PATCH - Update User",
"/users/me": "DELETE - Delete User",
"/users/login": "POST - user login",
"/users/logout": "POST - user logout from one device",
"/users/logoutAll": "POST - user logout from all device",
"/users/me/avatar": "POST - Add User Avator",
"/users/me/avatar": "DELETE - Remove User Avator",
"/users/me/avatar": "GET - Get User Avator",
```

Task Command

```
"/tasks": "POST - Create Task",
"/tasks/:id": "GET - Read Task",
"/tasks/:id": "PATCH - Update Task",
"/tasks/:id": "DELETE - Delete Task",
```

Made with ❤️.
