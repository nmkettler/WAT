<?php
 
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $subjects=$_REQUEST['subjects'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($subjects=="")||($message==""))
        {
    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
      }
    else{   
      $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
    mail("nmkettler@hotmail.com", $subject, $message, $from);
    echo "Email sent!";
      }
?>
 
 
 
 
