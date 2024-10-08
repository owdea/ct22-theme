<footer>
    <div class="footer-container">
        <a class="footer-logo">
            <img src="<?php echo esc_url( get_field('footer_main_logo', 'options')); ?>" alt="Logo České Televize">
        </a>
        <div class="footer-contact">
            <div class="footer-contact-center">
                <span class="font-semibold text-black mb-2"><?php echo get_field('footer_contact', 'options')['footer_contact_title']; ?></span>
                <br>
                <span><?php echo get_field('footer_contact', 'options')['footer_contact_open_hours']; ?></span>
            </div>
            <div class="footer-contact-contacts-list">
                <?php
                    $phone_number = get_field('footer_contact', 'options')['footer_contact_phone_number'];
                    $mail_address = get_field('footer_contact', 'options')['footer_contact_email'];
                ?>
                <a href="tel:<?php echo $phone_number;?>">
                    <img src="<?php get_site_url();?>/wp-content/themes/ct22-theme/assets/icons/phone.svg">
                    <span><?php echo $phone_number; ?></span>
                </a>
                <a href="mailto:<?php echo $mail_address;?>">
                    <img src="<?php get_site_url();?>/wp-content/themes/ct22-theme/assets/icons/mail.svg">
                    <span><?php echo get_field('footer_contact', 'options')['footer_contact_email']; ?></span>
                </a>
            </div>
        </div>
        <hr>
        <?php
          wp_nav_menu(
               array(
                   'theme_location' => 'footer',
                   'menu_class'     => 'footer',
                   'container'      => 'nav'
               )
           );
        ?>
        <hr>
        <?php if( have_rows('footer_socials', 'option') ): ?>
        <ul class="footer-socials">
            <?php while( have_rows('footer_socials', 'option') ): the_row();
                $image = get_sub_field('social_network_image');
                $image_hover = get_sub_field('social_network_image_hover');
                $name = get_sub_field('social_network_name');
                $link = get_sub_field('social_network_link');
                ?>
                <li>
                    <a href="<?php echo $link ?>">
                        <img id="socials-icon" src="<?php echo $image; ?>" alt="<?php $name = get_sub_field('social_network_name'); ?> ikona">
                        <img id="socials-icon-hover" class="hidden" src="<?php echo $image_hover; ?>" alt="<?php $name = get_sub_field('social_network_name'); ?> aktivní ikona">
                        <span><?php echo $name ?></span>
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
        <?php endif; ?>
        <hr>
        <div class="footer-subfooter">
            <span class="text-darkscale-40 block sm:inline ">© Česká televize</span>
            <span class="separator hidden sm:inline">•</span>
            <a href="">English version</a>
            <span class="separator">•</span>
            <a href="">Ochrana soukromí</a>
        </div>
        <?php if( have_rows('footer_logos', 'option') ): ?>
        <ul class="footer-logos">
            <?php while( have_rows('footer_logos', 'option') ): the_row();
                $image = get_sub_field('footer_tv_logo');
                $link = get_sub_field('footer_tv_link');
                ?>
                <li>
                    <a href="<?php $link ?>">
                        <img src="<?php echo $image; ?>" alt="">
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
        <?php endif; ?>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
