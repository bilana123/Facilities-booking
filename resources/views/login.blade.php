<!DOCTYPE html>
<html>
<head>
  <title>Login Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    
    .container {
      width: 300px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      margin-top: 100px;
    }
    
    .container h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .container input[type="text"],
    .container input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    
    .container input[type="submit"] {
      width: 100%;
      background-color: #4caf50;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    
    .container input[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" placeholder="Enter your username" required>
      
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" required>
      
      <input type="submit" value="Login">
    </form>
  </div>
</body>
</html>
