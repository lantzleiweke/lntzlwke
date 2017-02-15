<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)||empty($message))
{
    echo "What's your name? What's your email? What do you wanna say? It's all required, baby!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "I think you mistyped your email? Check it out.";
    exit;
}

$email_from = 'hello@lntzlwke.com';//<== update the email address
$email_subject = "New Message from lntzlwke.com";
$email_body = "$name.\n has sent you a message:".
    "\n $message".

$to = "hello@lntzlwke.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thanks.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
