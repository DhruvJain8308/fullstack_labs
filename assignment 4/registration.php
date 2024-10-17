<?php
session_start();

// Initialize student data array in session
if (!isset($_SESSION['students'])) {
    $_SESSION['students'] = [];
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['submit'])) {
        // Register student
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $roll_number = $_POST['roll_number'];
        $password = $_POST['password'];
        $contact_number = $_POST['contact_number'];

        if ($_POST['password'] !== $_POST['confirm_password']) {
            $message = "Passwords do not match!";
        } else {
            $_SESSION['students'][] = [
                'first_name' => $first_name,
                'last_name' => $last_name,
                'roll_number' => $roll_number,
                'password' => $password, // In a real app, hash this
                'contact_number' => $contact_number,
            ];
            $message = "New student registered successfully!";
        }
    } elseif (isset($_POST['delete'])) {
        // Delete all data
        $_SESSION['students'] = [];
        $message = "All data deleted successfully!";
    } elseif (isset($_POST['display'])) {
        // Display data
        $students = $_SESSION['students'];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration System</title>
</head>
<body>
    <h1>Student Registration Form</h1>
    <form method="POST" action="registration.php">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" required><br><br>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" required><br><br>

        <label for="roll_number">Roll Number:</label>
        <input type="text" id="roll_number" name="roll_number" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required><br><br>

        <label for="contact_number">Contact Number:</label>
        <input type="text" id="contact_number" name="contact_number" required><br><br>

        <input type="submit" name="submit" value="Register">
        <input type="submit" name="delete" value="Delete All Data">
        <input type="submit" name="display" value="Display Data">
    </form>

    <?php
    // Display messages
    if (isset($message)) {
        echo "<p>$message</p>";
    }

    // Display registered students
    if (isset($students) && !empty($students)) {
        echo "<h2>Registered Students:</h2>";
        echo "<table border='1'><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th><th>Contact Number</th></tr>";
        foreach ($students as $student) {
            echo "<tr><td>" . htmlspecialchars($student['first_name']) . "</td><td>" . htmlspecialchars($student['last_name']) . "</td><td>" . htmlspecialchars($student['roll_number']) . "</td><td>" . htmlspecialchars($student['contact_number']) . "</td></tr>";
        }
        echo "</table>";
    } elseif (isset($students)) {
        echo "<p>No registered students found.</p>";
    }
    ?>
</body>
</html>
