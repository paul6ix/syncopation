<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "okporp@gmail.com";
$subject = "New Message";
mail($to, $subject, $message, "from " . $name);
echo "Your Message have been sent successfully";

?>