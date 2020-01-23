<?php
 header("Access-Control-Allow-Origin: *");
 // preluam informatiile din formular
 // afisam informatiile (pentru verificare)
 // trimitem datele pe mail
 // afisam mesaj de confirmare
 die(2334);
 //01. preluam informatiile din form
 $nume =     $_POST["nume"];
 $telefon =     $_POST["telefon"];
 $email =     $_POST["email"];
 $mesaj =     $_POST["mesaj"];
 
 
 //02. afisam datele din variabile
 
//  echo "
//  Nume: $nume <br>
//  Email: $email <br>
//  Telefon: $telefon <br>
//  Mesaj: $mesaj <br>
//  ";
 
 //03. trimitem datele pe mail
 
 $to = "robert.moisescu@gmail.com";
 $subject = "AI PRIMIT UN MESAJ DE PE LANDINGPAGE: Primul meu formular WebDesign";
 $content = "
 
 Nume: $nume 
 Email: $email 
 Telefon: $telefon 
 Mesaj: $mesaj 
 ";
 die(123);
 $headers = 'From: office@raffe.ro' . "\r\n" .
	 'Reply-To: office@raffe.ro' . "\r\n" .
	 'X-Mailer: PHP/' . phpversion();
 
 mail($to,$subject,$content,$headers);
 
//  echo "<h2> Multumim! Mesajul a fost trimis.</h2>";
 
 ?>