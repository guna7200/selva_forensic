<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Only POST method allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$category = isset($input['category']) ? strip_tags(trim($input['category'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

if (empty($name) || empty($phone) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Required fields are missing."]);
    exit();
}

$to = "forensicselva@gmail.com";
$subject = "New Case Consultation Request - " . $name . " [SELVAS]";

$email_body = "=================================================\n";
$email_body .= "SELVAS FORENSIC MEDICAL CENTRE - INQUIRY\n";
$email_body .= "=================================================\n\n";
$email_body .= "Client Name: " . $name . "\n";
$email_body .= "Phone: " . $phone . "\n";
$email_body .= "Email: " . (!empty($email) ? $email : "Not provided") . "\n";
$email_body .= "Category: " . $category . "\n\n";
$email_body .= "Case Summary / Questions:\n";
$email_body .= $message . "\n\n";
$email_body .= "=================================================\n";
$email_body .= "Sent from website: https://selvasforensicmedicalcentre.com\n";
$email_body .= "Date & Time: " . date("d-M-Y H:i:s") . " IST\n";

$headers = "From: noreply@selvasforensicmedicalcentre.com\r\n";
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $subject, $email_body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Consultation request sent successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Mail delivery failed on server."]);
}
?>
