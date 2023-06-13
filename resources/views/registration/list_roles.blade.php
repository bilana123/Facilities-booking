<!DOCTYPE html>
<html>
<head>
  <title>HTML Table Example with CSS</title>
  <style>
    table {
      width: 50%;
      border-collapse: collapse;
      justify-content:center;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      justify-content:center;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
      justify-content:center;
    }

    tr:hover {
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
<button type="button">
        <a href="/create_role_index"> 
        Create New</a></button>
        <button type="button">
        <a href="/get_role_list/status/NA/Active"> 
        List  Active role</a></button>
        <button type="button">
        <a href="/get_role_list/ALL/NA/ALL"> 
        List  All Role</a></button>
  <table>
    <tr>
      <th>Sl.No</th>
     <th>Role name</th>
      <th>Status</th>
      <th>Action</th>
      
     
    </tr>
    @foreach ($response_data as $i=> $data)
    <tr>
      <td>{{$i+1}}</td>
      <td>{{$data->name}}</td>
      <td>{{$data->status}}</td>
      <td>
        <button type="button">
            <a href="/edit_role/{{$data->id}}">
        Edit</a></button>
        <button type="button">
        <a href="/delete_role/{{$data->id}}"> 
        Delete</a></button>
      </td>
      
      
    </tr>
    @endforeach
   
  </table>
</body>
</html>
