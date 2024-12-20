<?php
/*
 * Template part - Post list
 *
 * "post_list_data" => Required
 * including:
 *          "id"            => Required (String)
 *          "url"           => Required (url)
 *          "thumbnail"     => Required (url)
 *          "title"         => Required (String)
 *          "source"        => Required (String)
 *          "publish_time"  => Optional (String)
 * */

if (!empty($args['post_list_data'])):


    ?>
    <div class="template-part-post-list">
        <?php foreach ($args['post_list_data'] as $post): ?>
            <a id="post-<?php echo esc_attr($post['id']); ?>" href="<?php echo esc_url($post['url']); ?>">
                <img class="post-thumbnail" src="<?php echo esc_url($post['thumbnail']); ?>" alt="<?php echo esc_attr($post['title']); ?>">
                <div>
                    <h3><?php echo esc_html($post['title']); ?></h3>
                    <span class="article-excerpt"><?php echo esc_html($post['excerpt']); ?></span>
                    <div>
                        <?php
                        if (isset($post['publish_time'])) {
                            echo "<span>" . $post['publish_time'] . "</span>";
                        } else {
                            echo display_post_time_info($post['id']);
                        }
                         ?>
                        <span class="post-list-divider">|</span>
                        <span><?php echo $post['source'] ? esc_html( $post['source']) : get_field('article_sources', $post['id']); ?></span>
                    </div>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
