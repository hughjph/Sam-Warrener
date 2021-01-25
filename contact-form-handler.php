<?php
	$name = $_POST['name'];
	$visitor_email = $POST['email'];
	$message = $_POST['message'];

	$email_from = 'hwrj.johnson@gmail.com';
	$email_subject = 'Enquiry';
	$email_body  = "Name: $name. \n".
						"Email: $visitor_email.\n".
							"Enquiry: $message.\n";

	$to = "hwr.johnson@hotmail.com";
	
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";
	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html");

?>