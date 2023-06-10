<!DOCTYPE html>
<html>
<head>
  <title>Role Management</title>
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
    <h2>Role Management</h2>
    
    <form action="create_role" method="post">
      @csrf
      <label>Role Name:</label>
      <input type="text" id="role_name" name="role_name" placeholder="Enter your role" >
      
      <label>Status:</label>
      <input type="radio" value="Active" id="status1" name="status">
      <label>Active</label>
      <input type="radio" value="Inactive" id="status2" name="status">
      <label>Inactive</label>
  <br/><br/><br/>
      <input type="submit" value="Submit">
    </form>
  </div>
</body>
</html>
