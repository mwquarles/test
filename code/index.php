<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta content='width=device-width, initial-scale=1' name='viewport'/>

    <title>Michael Quarles - Code Test</title>

    <link rel="stylesheet" href="css/style.css"/>

</head>

<body>

<?php

$url = 'https://test.dubosewebgroup.com/test/1';
$data = @file_get_contents($url);
$pageContent = json_decode($data);
$sections = $pageContent->sections;

?>

<div id="navBar">

    <a href="/">
        <img src="https://test.dubosewebgroup.com//assets/test1/logo.png" alt="logo">
    </a>

    <nav>
        <ul id="navItems">
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">contact</a></li>
        </ul>
    </nav>

</div>

<?php
    if ($data) {

        foreach ($sections as $sections) {

            echo '<div id="' . $sections->type . '">';

            if ($sections->type == "hero") {

                echo '<h1 id="heroHeader">' . $sections->headline . '</h1>' .
                    '<h3 id="heroSubHeader">' . $sections->subHeadLine . '</h3>' .
                    '<button>Let\'s Get Started &#9658;</button></div>';

            } else if ($sections->type == "stats") {

                echo '<img src="' . $sections->img . '">' .
                    '<span>' . $sections->content . '</span></div>';

            } else if ($sections->type == "contentBlock") {

                echo '<h1>' . $sections->headline . '</h1>' .
                    '<p>' . $sections->content . '</p>';

            } else if ($sections->type == "cards") {

                $cards = $sections->items[0];

                foreach ($cards as $cards) {

                    echo '<div class=card>' .
                        '<img src="' . $cards->img . '">' .
                        '<h3>' . $cards->headline . '</h3>' .
                        '<p>' . $cards->content . '</p>' .
                        '<button><a href="' . $cards->cta->url . '">' . $cards->cta->content . '</a></button>' .
                        '</div>';
                }
            } else if ($sections->type == "info") {

                echo '<footer><span>' . $sections->content . '</span></footer>';

            }

            echo '</div>';

        }
    } else {

        echo '<span class="error">Something went wrong. Please <a href="#" onclick="window.location.reload(true);">Try Again</a></span>';

    }
?>

</body>

</html>