<?php
/**
 * The template for displaying all pages
 *
 * @package Fairbuild_Fukuoka
 */

get_header();
?>

<main>
    <?php
    while (have_posts()) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="entry-content">
                <?php
                the_content();
                
                wp_link_pages(array(
                    'before' => '<div class="page-links">' . esc_html__('Pages:', 'fairbuild-fukuoka'),
                    'after'  => '</div>',
                ));
                ?>
            </div>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php get_footer(); ?>

