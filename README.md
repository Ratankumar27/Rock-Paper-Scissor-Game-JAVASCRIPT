# Rock-Paper-Scissor-Game-JAVASCRIPT
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }
    h1, h2 {
      color: #2c3e50;
    }
    .container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    ul {
      margin-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    .section-title {
      margin-top: 30px;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Rock, Paper, Scissors Game (User vs. Computer)</h1>

  <p>Rock, Paper, Scissors is a simple hand game usually played between two people, but in this case, it's played between a user and a computer.</p>

  <h2 class="section-title">Basic Rules:</h2>
  <ul>
    <li><strong>Rock beats Scissors</strong> (Rock crushes Scissors)</li>
    <li><strong>Scissors beats Paper</strong> (Scissors cut Paper)</li>
    <li><strong>Paper beats Rock</strong> (Paper covers Rock)</li>
    <li>If both choose the same item, it's a <strong>tie</strong></li>
  </ul>

  <h2 class="section-title">How it works with a computer:</h2>
  <ul>
    <li>The user selects Rock, Paper, or Scissors.</li>
    <li>The computer randomly chooses one of the three options.</li>
    <li>The result is compared:</li>
    <ul>
      <li>If the user's choice beats the computer's, the <strong>user wins</strong>.</li>
      <li>If the computer's choice wins, the <strong>computer wins</strong>.</li>
      <li>If both choose the same, it's a <strong>draw</strong>.</li>
    </ul>
  </ul>
</div>

</body>
</html>
