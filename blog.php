<?php

include_once("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $comment = $_POST["comment"];
    $email = $_POST["email"];

    $sql = "INSERT INTO `blogs` (name, comment,email )
    VALUES ('$name', '$comment', '$email')";

    if ($conn->query($sql)) {
        echo "done";
    } else {
        echo "failed";
    }
}
