<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar os dados do formulário
    $name = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configuração do e-mail
    $to = "seuemail@exemplo.com";  // Altere para o seu e-mail
    $subject = "Mensagem de Contato";
    $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
    $headers = "From: $email";

    // Enviar o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Tente novamente.";
    }
}
?>
