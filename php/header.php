<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  </head>
  <body <?php body_class(); ?>>
    <header>
      <nav class="nav">
        <?php 
        if(function_exists('the_custom_logo')){
            the_custom_logo();
        }
        ?>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'main-menu',
            'container' => false,
            'menu_class' => 'main-nav-list',
            'fallback_cb' => false
        ));
        ?>
        <div class="socials-logo">
          <ion-icon class="socials" name="logo-instagram"></ion-icon>
          <ion-icon class="socials" name="logo-tiktok"></ion-icon>
          <ion-icon class="socials" name="logo-youtube"></ion-icon>
        </div>
      </nav>
    </header>