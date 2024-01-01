<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    //$name = $_POST["name"];
    //$email = $_POST["email"];
    //$message = $_POST["message"];
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    // Validate inputs (you can add more thorough validation)
    if (empty($name) || empty($email) || empty($message)) {
        echo "Email and message field is required!";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Enter a valid email address!";
    } else {
        // Email sending logic
        $to = "obeshein@gmail.com"; // Replace with your email address
        $subject = "New message from $name";
        $headers = "From: $email";
        
        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "Sorry, failed to send your message!";
        }
    }
}
?>