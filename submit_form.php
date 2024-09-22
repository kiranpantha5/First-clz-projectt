<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gym-project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$address = $_POST['address'];

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO members (name, phone, email, height, weight, address) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $phone, $email, $height, $weight, $address);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
