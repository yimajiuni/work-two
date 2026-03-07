<?php
/**
 * Functions and definitions
 *
 * @package Fairbuild_Fukuoka
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme setup
 */
function fairbuild_fukuoka_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'fairbuild-fukuoka'),
    ));
}
add_action('after_setup_theme', 'fairbuild_fukuoka_setup');

/**
 * Enqueue scripts and styles
 */
function fairbuild_fukuoka_scripts() {
    // Enqueue main stylesheet (style.css - required for theme info, but minimal)
    wp_enqueue_style('fairbuild-fukuoka-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue main stylesheet directly (all styles are here)
    wp_enqueue_style('fairbuild-fukuoka-main-style', get_template_directory_uri() . '/assets/styles.css', array('fairbuild-fukuoka-style'), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans+JP:wght@400&family=Zen+Maru+Gothic:wght@700&family=Noto+Serif+SC:wght@200..900&display=swap', array(), null);
    
    // Enqueue jQuery from WordPress core (don't deregister WordPress jQuery)
    wp_enqueue_script('jquery');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('fairbuild-fukuoka-script', get_template_directory_uri() . '/assets/script.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'fairbuild_fukuoka_scripts');

/**
 * Get theme asset URL
 */
function get_theme_asset_url($path) {
    return get_template_directory_uri() . '/assets/' . $path;
}

/**
 * Get theme image URL
 */
function get_theme_img_url($filename) {
    return get_template_directory_uri() . '/assets/img/' . $filename;
}

/**
 * Get blog page URL
 */
function get_blog_page_url() {
    // If a posts page is set in Settings > Reading, use it
    $posts_page_id = get_option('page_for_posts');
    if ($posts_page_id) {
        return get_permalink($posts_page_id);
    }
    
    // Otherwise, use the post archive URL (archive.php will be used)
    return get_post_type_archive_link('post');
}

/**
 * Get service page URL (blog post with service content)
 */
function get_service_page_url() {
    // Try to find entry with slug 'service' among posts first
    $service_post = get_page_by_path('service', OBJECT, 'post');

    // If not found, try pages (in case it was created as a page)
    if (!$service_post) {
        $service_post = get_page_by_path('service', OBJECT, 'page');
    }

    if ($service_post) {
        return get_permalink($service_post->ID);
    }

    // Fallback: try to find any published post named 'service'
    $posts = get_posts(array(
        'numberposts' => 1,
        'post_type' => array('post', 'page'),
        'post_status' => 'publish',
        'name' => 'service'
    ));

    if (!empty($posts)) {
        return get_permalink($posts[0]->ID);
    }

    // Final fallback: use the latest blog post
    $latest_posts = get_posts(array(
        'numberposts' => 1,
        'post_type' => 'post',
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC'
    ));

    if (!empty($latest_posts)) {
        return get_permalink($latest_posts[0]->ID);
    }

    // Last resort: return blog archive URL
    return get_blog_page_url();
}

/**
 * Get contact page URL
 */
function get_contact_page_url() {
    // Try to find page with slug 'contact'
    $contact_page = get_page_by_path('contact');
    
    if ($contact_page) {
        return get_permalink($contact_page->ID);
    }
    
    // Fallback: try to find page using page-contact.php template
    $contact_page = get_pages(array(
        'meta_key' => '_wp_page_template',
        'meta_value' => 'page-contact.php'
    ));
    
    if (!empty($contact_page)) {
        return get_permalink($contact_page[0]->ID);
    }
    
    return home_url('/contact');
}

