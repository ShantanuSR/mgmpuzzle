<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MGM puzzle game</title>
    <link rel="stylesheet" href="./css/home.css">
</head>
<body>
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
    <section class="home_section">
        <img src="./assets/homebg1.png" alt="..." class="homebg1">
        <img src="./assets/homebg2.png" alt="..." class="homebg2">
        <div class="home_container">
            <h1>puzzle</h1>
            <div class="home_container_middle">
                <p>Get an ammazing new play game experience</p>
                <a href="#">Play now</a>
            </div>
            <div class="div_bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident earum velit quidem laboriosam exercitationem</p>
                <img src="./assets/arrow.svg" alt="..." height="100">
            </div>
        </div>
    </section>
    <footer>
        <h2>Made with ❤️ in MGM</h2>
    </footer>

    <script>
        let checkbox = document.getElementById("menu_checkbox");
        const nav = document.querySelector(".mobile_nav_container");
        checkbox.addEventListener( "change", () => {
            if ( checkbox.checked ) {
                nav.classList.add('active_navbar');
            } else {
                nav.classList.remove('active_navbar');
            }
        });
    </script>
</body>
</html>