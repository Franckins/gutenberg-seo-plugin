<?php
/*
Plugin Name: Gutenberg SEO Plugin
Description: Добавляет мета-поля для SEO в Gutenberg.
Version: 1.0
Author: Ваше имя
*/

function gutenberg_seo_plugin_enqueue_assets() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_enqueue_script(
        'gutenberg-seo-plugin-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_enqueue_style(
        'gutenberg-seo-plugin-style',
        plugins_url('build/index.css', __FILE__),
        array(),
        $asset_file['version']
    );
}
add_action('enqueue_block_editor_assets', 'gutenberg_seo_plugin_enqueue_assets');

function gutenberg_seo_plugin_register_meta() {
    $meta_fields = [
        'meta_title' => [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ],
        'meta_description' => [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ],
        'meta_keywords' => [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ],
        'canonical_url' => [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ],
        'robots_meta' => [
            'type' => 'boolean',
            'single' => true,
            'show_in_rest' => true,
        ],
    ];

    foreach ($meta_fields as $key => $args) {
        register_post_meta('', $key, $args);
    }
}
add_action('init', 'gutenberg_seo_plugin_register_meta');

function gutenberg_seo_plugin_add_meta_tags() {
    if (is_singular()) {
        global $post;
        $meta_title = get_post_meta($post->ID, 'meta_title', true);
        $meta_description = get_post_meta($post->ID, 'meta_description', true);
        $meta_keywords = get_post_meta($post->ID, 'meta_keywords', true);
        $canonical_url = get_post_meta($post->ID, 'canonical_url', true);
        $robots_meta = get_post_meta($post->ID, 'robots_meta', true);

        if (!empty($meta_title)) {
            echo '<meta name="title" content="' . esc_attr($meta_title) . '">' . "\n";
        }
        if (!empty($meta_description)) {
            echo '<meta name="description" content="' . esc_attr($meta_description) . '">' . "\n";
        }
        if (!empty($meta_keywords)) {
            echo '<meta name="keywords" content="' . esc_attr($meta_keywords) . '">' . "\n";
        }
        if (!empty($canonical_url)) {
            echo '<link rel="canonical" href="' . esc_url($canonical_url) . '">' . "\n";
        }
        if ($robots_meta) {
            echo '<meta name="robots" content="index, follow">' . "\n";
        } else {
            echo '<meta name="robots" content="noindex, nofollow">' . "\n";
        }
    }
}
add_action('wp_head', 'gutenberg_seo_plugin_add_meta_tags');