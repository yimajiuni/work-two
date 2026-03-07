<?php
/**
 * The template for displaying archive pages (blog list)
 * This template is used for /blog/ URL when page_for_posts is set
 *
 * @package Fairbuild_Fukuoka
 */

get_header();
?>

<!-- Blog Main Content -->
<div class="blog-page">
    <div class="blog-container">
        <!-- Main Blog List Area -->
        <main class="blog-main">
            <div class="blog-header">
                <div class="blog-header-title">
                    <div class="blog-title-en">REALESTATE NEWS</div>
                    <div class="blog-title-ja">不動産ブログ</div>
                </div>
                <p class="blog-subtitle">最新の物件情報と不動産投資のヒント</p>
            </div>

            <!-- Blog Posts Grid: 2 columns x 3 rows -->
            <div class="blog-posts-grid">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="blog-post-card">
                            <div class="blog-post-image">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('medium', array('alt' => get_the_title())); ?>
                                <?php else : ?>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/service-2.png" alt="<?php the_title(); ?>" />
                                <?php endif; ?>
                                <?php
                                $categories = get_the_category();
                                if (!empty($categories)) {
                                    echo '<div class="blog-post-category">' . esc_html($categories[0]->name) . '</div>';
                                }
                                ?>
                            </div>
                            <div class="blog-post-content">
                                <div class="blog-post-meta">
                                    <span class="blog-post-date"><?php echo get_the_date('Y.m.d'); ?></span>
                                    <span class="blog-post-author"><?php the_author(); ?></span>
                                </div>
                                <h2 class="blog-post-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <p class="blog-post-excerpt">
                                    <?php 
                                    if (has_excerpt()) {
                                        echo wp_trim_words(get_the_excerpt(), 30);
                                    } else {
                                        echo wp_trim_words(get_the_content(), 30);
                                    }
                                    ?>
                                </p>
                                <div class="blog-post-tags">
                                    <?php
                                    $tags = get_the_tags();
                                    if ($tags) {
                                        foreach ($tags as $tag) {
                                            echo '<span class="tag">#' . esc_html($tag->name) . '</span>';
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                        </article>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p>投稿が見つかりませんでした。</p>
                <?php endif; ?>
            </div>

            <!-- Pagination -->
            <?php
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('前へ', 'fairbuild-fukuoka'),
                'next_text' => __('次へ', 'fairbuild-fukuoka'),
            ));
            ?>
        </main>

        <!-- Sidebar -->
        <aside class="blog-sidebar">
            <!-- What's New Section -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">What's New</h3>
                <div class="whats-new-list">
                    <?php
                    $recent_posts = wp_get_recent_posts(array(
                        'numberposts' => 5,
                        'post_status' => 'publish'
                    ));
                    
                    if ($recent_posts) {
                        foreach ($recent_posts as $post_item) {
                            $post_id = $post_item['ID'];
                            $categories = get_the_category($post_id);
                            $category_name = !empty($categories) ? $categories[0]->name : '';
                            ?>
                            <div class="whats-new-item">
                                <div class="whats-new-header">
                                    <h4 class="whats-new-title">
                                        <a href="<?php echo get_permalink($post_id); ?>"><?php echo esc_html($post_item['post_title']); ?></a>
                                    </h4>
                                </div>
                                <div class="whats-new-meta">
                                    <span class="whats-new-author"><?php echo get_the_author_meta('display_name', $post_item['post_author']); ?></span>
                                    <span class="whats-new-date"><?php echo get_the_date('Y.m.d', $post_id); ?></span>
                                    <?php if ($category_name) : ?>
                                        <span class="whats-new-category"><?php echo esc_html($category_name); ?></span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php
                        }
                        wp_reset_query();
                    }
                    ?>
                </div>
            </div>

            <!-- Category Hashtag List -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">カテゴリー</h3>
                <div class="category-tags">
                    <?php
                    $categories = get_categories(array(
                        'orderby' => 'name',
                        'order' => 'ASC'
                    ));
                    
                    if ($categories) {
                        foreach ($categories as $category) {
                            echo '<a href="' . esc_url(get_category_link($category->term_id)) . '" class="category-tag">#' . esc_html($category->name) . '</a>';
                        }
                    }
                    ?>
                </div>
            </div>
        </aside>
    </div>
</div>

<!-- About Us Section -->
<div class="about">
    <div class="overlap-group-6-about">
        <img class="vector-3-about" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-1.png" />
        <img class="vector-4-about" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-2.png" />
    </div>
    <div class="about-content">
        <div class="about-title">
            <div class="contact-title">About US</div>
            <div class="contact-title2">お問い合わせ</div>
        </div>
        <div class="list-2">
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">会社情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="https://goromaru.net/" target="_blank">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">会社概要</div>
                        </div>
                    </a>
                    <a href="<?php echo esc_url(home_url('/#service')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">事業内容</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">物件情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="<?php echo esc_url(home_url('/#property')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">販売物件</div>
                        </div>
                    </a>
                    <a href="https://goromaru.net/service" target="_blank">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">販売実績</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">サポート</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="<?php echo esc_url(home_url('/#support')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">住宅相談</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">連絡先情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <div class="item-link-2">
                        <div class="text-wrapper-18">
                            〒808-0008<br />福岡県北九州市<br />若松区小竹694<br />フェアビルド福岡<br />(+81)080-5797-9825
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>

