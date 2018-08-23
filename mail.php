<?php

if(isset($_POST['subscribe'])){
$con = mysqli_connect("localhost","root","","newmaildata");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$subscribe = $_POST['email'];

$sql = "insert into maildata(`email`) values('$subscribe')";
if(mysqli_query($con, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
}

$to_email = $subscribe;
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: noreply @ company . com';


mail($to_email,$subject,$message,$headers);
header('location:index.html');
header('location:about.html');
header('location:career.html');
header('location:contact.html');
header('location:industries.html');
header('location:leadership.html');
header('location:news.html');
header('location:product.html');
header('location:services.html');
header('location:why.html');
}
?>