<!-- submit_form.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $to = "berkaykalayci35@icloud.com";
    $subject = "Yeni İletişim Formu Mesajı";
    $headers = "From: $email";
    $mailContent = "Name: $name\n";
    $mailContent .= "Email: $email\n";
    $mailContent .= "Phone: $phone\n";
    $mailContent .= "Message:\n$message";
    mail($to, $subject, $mailContent, $headers);
    header("Location: thank_you.html");
    exit(); 
}
?>
