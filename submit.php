<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "event_registration";

// Connect to database
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Escape and get form data
$full_name = $conn->real_escape_string($_POST['full_name']);
$email = $conn->real_escape_string($_POST['email']);
$institution = $conn->real_escape_string($_POST['institution']);
$phone = $conn->real_escape_string($_POST['phone']);
$student_id = $conn->real_escape_string($_POST['student_id']);
$tshirt_size = $conn->real_escape_string($_POST['T-shirt-Size']);

// Insert into database
$sql = "INSERT INTO registrations (full_name, email, institution, phone, student_id, tshirt_size) 
        VALUES ('$full_name', '$email', '$institution', '$phone', '$student_id', '$tshirt_size')";

if ($conn->query($sql) === TRUE) {
  // ✅ Redirect to index.html with success flag
  header("Location: index.html?success=true#form");
  exit();
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
