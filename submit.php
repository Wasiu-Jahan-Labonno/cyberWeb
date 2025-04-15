<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registrations (full_name, email, institution, phone, team_name, event, member1, size1, member2, size2, member3, size3, member4, size4)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssssssss",
  $_POST['full_name'],
  $_POST['email'],
  $_POST['institution'],
  $_POST['phone'],
  $_POST['team_name'],
  $_POST['event'],
  $_POST['member1'],
  $_POST['size1'],
  $_POST['member2'],
  $_POST['size2'],
  $_POST['member3'],
  $_POST['size3'],
  $_POST['member4'],
  $_POST['size4']
);

if ($stmt->execute()) {
  echo "Registration successful!";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
