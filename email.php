<?php
//kirim email
// $to      = 'rega.blank@gmail.com';
// $subject = 'Pemesanan Papercraft #4	';
// $message = 'testing
// ';
// $headers = 'From: info@quicrafts.com' . "\r\n" .
//     'Reply-To: info@quicrafts.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// mail($to, $subject, $message, $headers);
// //print_r(error_get_last())


//<?php
// multiple recipients
// $to  = 'rega.blank@gmail.com'; // note the comma
// // $to .= 'wez@example.com';

// // subject
// $subject = 'Birthday Reminders for August';

// // message
// $message = '
// <html>
// <head>
//   <title>Birthday Reminders for August</title>
// </head>
// <body>
//   <p>Here are the birthdays upcoming in August!</p>
//   <table>
//     <tr>
//       <th>Person</th><th>Day</th><th>Month</th><th>Year</th>
//     </tr>
//     <tr>
//       <td>Joe</td><td>3rd</td><td>August</td><td>1970</td>
//     </tr>
//     <tr>
//       <td>Sally</td><td>17th</td><td>August</td><td>1973</td>
//     </tr>
//   </table>
// </body>
// </html>
// ';

// // To send HTML mail, the Content-type header must be set
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// // Additional headers
// $headers .= 'To: Mary <rega.blank@gmail.com>' . "\r\n";
// $headers .= 'From: Birthday Reminder <info@quicrafts.com>' . "\r\n";
// $headers .= 'Cc: info@quicrafts.com' . "\r\n";
// $headers .= 'Bcc: info@quicrafts.com' . "\r\n";

// // Mail it
// mail($to, $subject, $message, $headers);
?>
<?php
    ini_set("SMTP", "ultron.equatorialserver.com");
    ini_set("sendmail_from", "info@quicrafts.com");

    $message = "The mail message was sent with the following mail setting:\r\nSMTP = ultron.equatorialserver.com\r\nsmtp_port = 465\r\nsendmail_from = info@quicrafts.com";

    $headers = "From: info@quicrafts.com";


    mail("rega.blank@gmail.com", "Testing", $message, $headers);
    echo "Check your email now....<BR/>";
?>