<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page With Light/Dark Mode</title>
    <link rel="stylesheet" href="css/home.css"/>
    <link rel="stylesheet" type="text/css" href="css/puzzle.css">
  </head>
  <body>
    <main>
      <div class="big-wrapper light">

      <nav class="desktop_nav">
        <div class="nav_container1">
            <img src="./assets/logo.png" width="30" alt="P">
            <span>zzle</span>
        </div>
        <div class="nav_container2">
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">Rules</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="puzzle.php">Puzzle</a></li>
            </ul>
        </div>
        <div class="nav_container3">
          <?php
            if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {
              echo '<li><a href="logout.php" class="btn logout">Logout</a></li>';
            } else {
              echo '<li><a href="login.php" class="btn">Login</a></li>';
            }
          ?>
        </div>
    </nav>

    <nav class="mobile_nav">
        <div class="nav_container1">
            <img src="./assets/logo.png" width="30" alt="P">
            <span>zzle</span>
        </div>
        <div id="webapp_cover">
            <div id="menu_button">
              <input type="checkbox" id="menu_checkbox">
              <label for="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
              </label>
            </div>
        </div>
        <div class="mobile_nav_container">
            <ul>
                <li><a href="#" class="mactive">Home</a></li>
                <li><a href="#">Rules</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="puzzle.php">Puzzle</a></li>
            </ul>
        </div>
    </nav>
        <div class="puzzleContainer">
        </div></div></main>
<div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="http://localhost/mgm/img/Krebs-Cycle-2-1.png"></div>
        <div class="card_content">
          <h2 class="card_title">Kreb Cycle</h2>
          <p class="card_text"> is a chain of reactions occurring in the mitochondria, through which almost all living cells produce energy in aerobic respiration.</p>
          <a href="puzzle game/kreblvl1.html" class="btn card_btn">Level 1</a>
          <a href="puzzle game/kreblvl2.html" class="btn card_btn" style="margin-top: 10px;">Level 2</a>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="http://localhost/mgm/img/Krebs-Cycle-2-1.png"></div>
        <div class="card_content">
          <h2 class="card_title">Kreb Cycle</h2>
          <p class="card_text"> is a chain of reactions occurring in the mitochondria, through which almost all living cells produce energy in aerobic respiration.</p>
          <a href="puzzle game/kreblvl1.html" class="btn card_btn">Level 1</a>
          <a href="puzzle game/kreblvl2.html" class="btn card_btn" style="margin-top: 10px;">Level 2</a>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="http://localhost/mgm/img/Krebs-Cycle-2-1.png"></div>
        <div class="card_content">
          <h2 class="card_title">Kreb Cycle</h2>
          <p class="card_text"> is a chain of reactions occurring in the mitochondria, through which almost all living cells produce energy in aerobic respiration.</p>
          <a href="puzzle game/kreblvl1.html" class="btn card_btn">Level 1</a>
          <a href="puzzle game/kreblvl2.html" class="btn card_btn" style="margin-top: 10px;">Level 2</a>
        </div>
      </div>
    </li>

        </div>
    </main>

    <!-- JavaScript Files -->

    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
<?php 
}else{
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <link rel="stylesheet" href="css/home.css"/>
</head>
<body>

  <script type="text/javascript">
    swal("Only logged in users can access puzzle")
    .then((value) => {
      window.location.href = 'http://localhost/mgm/index.php';
    });
  </script>
</body>
</html>


<?php
     // header("Location: index.php");
     // exit();
}
?>