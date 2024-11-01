<?php get_header(); ?>

<?php
$start_time = microtime(true);
?>
<div class="search-results-page">
    <div class="search-results-page-top">
        <h1>Vyhledávání</h1>

        <?php
        $total_results = $wp_query->found_posts;
        ?>

        <div class="search-bar">
            <form role="search" method="get" action="<?php echo home_url( '/' ); ?>">
                <label>
                    <span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ) ?></span>
                    <input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Hledat ...', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
                </label>
                <button type="submit" class="search-submit">
                    <span>Hledej</span>
                </button>
            </form>
        </div>
    </div>
    <div class="info-row">
        <p>Přibližný počet výsledků: <?php echo number_format_i18n($total_results); ?> (<?php echo number_format(microtime(true) - $start_time, 2); ?> s)</p>

        <div class="sorting-dropdown">
            <form method="get" action="">
                <input type="hidden" name="s" value="<?php echo get_search_query(); ?>">

                <label for="orderby">Řadit podle:</label>
                <select name="orderby" id="orderby" onchange="this.form.submit()">
                    <option value="date" <?php selected(get_query_var('orderby'), 'date'); ?>>Data vydání</option>
                    <option value="relevance" <?php selected(get_query_var('orderby'), 'relevance'); ?>>Relevance</option>
                </select>
            </form>
        </div>
    </div>

<?php if ( have_posts() ) : ?>
    <div class="search-results">
        <?php while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div class="entry-summary">
                    <?php the_excerpt(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>

    <?php
    the_posts_pagination(array(
        'prev_text' => __('Previous'),
        'next_text' => __('Next'),
    ));
    ?>

<?php else : ?>
    <p><?php _e( 'No results found. Please try a different search.', 'textdomain' ); ?></p>
<?php endif; ?>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
