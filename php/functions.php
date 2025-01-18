<?php
function style_with_fernanda_setup() {
    // Adiciona suporte ao logo personalizado
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 100,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Registra o menu de navegação
    register_nav_menus(array(
        'main-menu' => 'Menu Principal'
    ));
}
add_action('after_setup_theme', 'style_with_fernanda_setup');

// Enfileira os estilos CSS
function style_with_fernanda_scripts() {
    wp_enqueue_style('style-with-fernanda-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'style_with_fernanda_scripts');