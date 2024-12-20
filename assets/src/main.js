
//Custom Blocks
import './js/photo-gallery';

//Pages
import './js/weather-page';


document.addEventListener('DOMContentLoaded', function () {
    // Event listener for toggling visibility of the secondary menu (top part of the header).
    const menuButton = document.querySelector('.secondary-menu-btn');
    const secondaryMenu = document.querySelector('.secondary-menu');
    const secondaryMenuContainer = document.querySelector('.secondary-menu-container');

    if (menuButton && secondaryMenu) {
        menuButton.addEventListener('click', function () {
            if (secondaryMenu.classList.contains('secondary-menu-active')) {
                secondaryMenu.classList.remove('secondary-menu-active');

                // After animation it over it sets display:none
                secondaryMenu.addEventListener('transitionend', function hideMenu() {
                    if (!secondaryMenu.classList.contains('secondary-menu-active')) {
                        secondaryMenu.style.display = 'none';
                    }
                    secondaryMenu.removeEventListener('transitionend', hideMenu);
                    secondaryMenuContainer.style.display = 'none';
                });
            } else { //Sets display block and runs transition after click
                secondaryMenuContainer.style.display = 'block';
                secondaryMenu.style.display = 'block';
                secondaryMenu.offsetHeight; // Necessary to force a reflow before the animation (so the browser registers the `display` change)
                secondaryMenu.classList.add('secondary-menu-active');
            }
            secondaryMenuContainer.classList.toggle('secondary-container-active');
            menuButton.classList.toggle('bg-shadow-light-active');
        });

        document.addEventListener('click', function (event) {
            if (!secondaryMenu.contains(event.target) && !menuButton.contains(event.target)) {
                if (secondaryMenu.classList.contains('secondary-menu-active')) {
                    secondaryMenu.classList.remove('secondary-menu-active');

                    // Setting display: none after transition is over
                    secondaryMenu.addEventListener('transitionend', function hideMenu() {
                        if (!secondaryMenu.classList.contains('secondary-menu-active')) {
                            secondaryMenu.style.display = 'none';
                        }
                        secondaryMenu.removeEventListener('transitionend', hideMenu);
                        secondaryMenuContainer.style.display = 'none';
                    });
                    if(secondaryMenuContainer.classList.contains('secondary-container-active')) secondaryMenuContainer.classList.remove('secondary-container-active')
                    menuButton.classList.remove('bg-shadow-light-active');
                }
            }
        });
    }
});


// Counting top position for secondary menu
document.addEventListener('DOMContentLoaded', function () {
    let adminBar = document.getElementById('wpadminbar');
    let headerTop = document.querySelector('.header-top');

    let adminBarHeight = adminBar ? adminBar.offsetHeight : 0;
    let headerTopHeight = headerTop ? headerTop.offsetHeight : 0;
    let totalHeight = adminBarHeight + headerTopHeight;
    document.querySelector('.secondary-menu-container').style.top = totalHeight + 'px';

    let resizeObserver = new ResizeObserver(() => {
        let adminBarHeight = adminBar ? adminBar.offsetHeight : 0;
        let headerTopHeight = headerTop ? headerTop.offsetHeight : 0;
        let totalHeight = adminBarHeight + headerTopHeight;
        document.querySelector('.secondary-menu-container').style.top = totalHeight + 'px';
    });

    if (adminBar) {
        resizeObserver.observe(adminBar);
    }
    if (headerTop) {
        resizeObserver.observe(headerTop);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for toggling visibility of the mobile primary menu.
    // TODO: Hiding menu when changing res from mobile to wider.
    const primaryMenuMobileButton = document.querySelector('.primary-menu-mobile-icon');
    const primaryMenuMobile = document.querySelector('.primary-menu-mobile');

    if (primaryMenuMobileButton && primaryMenuMobile) {
        primaryMenuMobileButton.addEventListener('click', function () {
            primaryMenuMobile.classList.toggle('primary-menu-mobile-active');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Event listener for toggling visibility of elements in case of opening mobile search menu.
    const searchButton = document.querySelector('#mobile-search-bar-button');
    const searchLabel = document.querySelector('.header-top-right');
    const secondaryMenuButton = document.querySelector('.secondary-menu-btn');
    const headerLogo = document.querySelector('#header-logo')
    const magnifierIcon = document.querySelector('#mobile-search-magnifier')
    const exitIcon = document.querySelector('#mobile-search-exit')

    if (searchButton && searchLabel && secondaryMenuButton && headerLogo) {
        searchButton.addEventListener('click', function () {
            searchLabel.classList.toggle('header-top-right-mobile');
            secondaryMenuButton.classList.toggle('invisibleHidden');
            headerLogo.classList.toggle('invisibleHidden');
            magnifierIcon.classList.toggle('invisibleHidden');
            exitIcon.classList.toggle('visibleBlock');
            searchButton.classList.toggle('bg-shadow-light-active');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Toggling "Další..." menu visibility on button click
    const moreButton = document.querySelector('.primary-more-btn');
    const primaryMoreMenu = document.querySelector('.primary-more');

    if (moreButton && primaryMoreMenu) {
        moreButton.addEventListener('click', function() {
            primaryMoreMenu.classList.toggle('visibleVisible')
            moreButton.classList.toggle('primary-button-active')
        })
    }
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not inside the primary-more menu or the moreButton
        if (!primaryMoreMenu.contains(event.target) && !moreButton.contains(event.target)) {
            primaryMoreMenu.classList.remove('visibleVisible');
            moreButton.classList.remove('primary-button-active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Handling changes in menu layout (visible menu and hidden elements in "Další..." menu
    document.fonts.ready.then(function() {
        // primaryMenu - whole bottom menu element (ul of navigators, chosen navigator (not required), live stream button (not required) and Další... button)
        // primaryMenuWidthCounted -
        // navigatorElement - chosen navigator | navigatorWidth - its width
        // liveStreamElement - live stream button | liveStreamWidth - its width
        // buttonPrimaryWidth - width of the "Další..." button
        // primaryElements - navigators NodeList from primary menu | primaryArray - JS array containing navigators from primary menu
        // primaryMoreArray - UL containing navigators which would not fit in #primary-menu
        const primaryMenu = document.querySelector("#primary-menu");

        if (primaryMenu) {
            const navigatorElement = document.getElementById('primary-navigator');
            const liveStreamElement = document.getElementById('primary-live');
            let navigatorWidth = 0;
            let liveStreamWidth = 0
            if (navigatorElement) navigatorWidth = navigatorElement.offsetWidth;
            if (liveStreamElement) liveStreamWidth = liveStreamElement.offsetWidth;
            let buttonPrimaryWidth = document.getElementById('primary-button').offsetWidth
            const primaryMenuWidthCounted = primaryMenu.offsetWidth;

            let primaryElements = document.querySelectorAll('#primary-menu nav ul li');
            let primaryArray = Array.from(primaryElements);

            let primaryMoreArray = document.getElementById('primary-more');

            let widthSum = 0;
            let primaryMenuWidthSum = 0

            primaryArray.forEach((element) => {
                primaryMenuWidthSum += element.offsetWidth
            })

            if (navigatorWidth + liveStreamWidth + primaryMenuWidthSum <= primaryMenuWidthCounted) {

            } else {
                document.getElementById("primary-button").style.display = "flex";
                for (let i = 0; i < primaryArray.length; i++) {
                    if (navigatorWidth + liveStreamWidth + buttonPrimaryWidth + widthSum + primaryArray[i].offsetWidth > primaryMenuWidthCounted) {
                        primaryMoreArray.append(primaryArray[i]);
                        for (let j = i + 1; j < primaryArray.length; j++) {
                            primaryMoreArray.append(primaryArray[j]);
                        }
                        break;
                    } else {
                        widthSum += primaryArray[i].offsetWidth;
                    }
                }
            }


                const resize_ob = new ResizeObserver(function (entries) {
                    let rect = entries[0].contentRect;
                    let width = rect.width;

                    primaryArray = Array.from(document.querySelectorAll('#primary-menu nav ul li'));


                    widthSum = 0;
                    primaryArray.forEach(item => {
                        widthSum += item.offsetWidth;
                    });

                    // Refreshing lists of ULs and widths
                    // primaryMoreElements - LI NodeList containing current #primary-menu content
                    // primaryMoreLiArray - Array of the LI elements from #primary-menu
                    // primaryHTMLElement - HTMLElement containing #primary-menu for appending navigators in it
                    let primaryMoreElements = document.querySelectorAll('#primary-more li');
                    let primaryMoreLiArray = Array.from(primaryMoreElements);
                    let primaryHTMLElement = document.getElementById('primary-menu-ul');
                    const navigatorElement = document.getElementById('primary-navigator');
                    const liveStreamElement = document.getElementById('primary-live');
                    if (navigatorElement) navigatorWidth = navigatorElement.offsetWidth;
                    if (liveStreamElement) liveStreamWidth = liveStreamElement.offsetWidth;
                    let buttonPrimaryWidth = document.getElementById('primary-button').offsetWidth;

                    // Creating invisible element for watching width of the first element from hidden UL (copy of first LI with different styling).
                    // Deleting element which was created last time.
                    const elementToDelete = document.querySelector('.primary-menu-more-first-item-duplicate');
                    if (elementToDelete) {
                        elementToDelete.remove();
                    }
                    const originalElement = primaryMoreLiArray[0];
                    const primaryButton = document.getElementById('primary-button');
                    if (primaryMoreLiArray[0]) {
                        let duplicateElement = originalElement.cloneNode(true);
                        duplicateElement.className = '';
                        duplicateElement.classList.add('primary-menu-more-first-item-duplicate');
                        document.body.appendChild(duplicateElement);
                        const currentMenuItemInMoreMenu = document.querySelector('#primary-more .current-menu-item');
                        // If there is an item with class 'current-menu-item', add the class to the button
                        if (currentMenuItemInMoreMenu) {
                            primaryButton.classList.add('current-menu-item');
                        } else {
                            primaryButton.classList.remove('current-menu-item');
                        }
                        primaryButton.style.display = "flex";
                    } else {
                        primaryButton.style.display = "none";
                    }
                    let bothMenuWidthSum = 0
                    primaryArray.forEach((element) => {
                        bothMenuWidthSum += element.offsetWidth
                    })
                    primaryMoreLiArray.forEach((element) => {
                        bothMenuWidthSum += element.offsetWidth
                    })


                    //
                    if (navigatorWidth + liveStreamWidth + widthSum + buttonPrimaryWidth > width) {
                        primaryMoreArray.prepend(primaryArray[primaryArray.length - 1]);
                        primaryButton.style.display = "flex";
                        primaryMoreLiArray = Array.from(document.querySelectorAll('#primary-more li'));
                        if (primaryMoreLiArray[0].classList.contains('current-menu-item')) primaryButton.classList.add('current-menu-item');
                        //(bothMenuWidthSum + navigatorWidth + liveStreamWidth && primaryMoreLiArray[0]) ||
                    } else if (
                        primaryMoreLiArray[0] &&
                        navigatorWidth +
                        liveStreamWidth +
                        widthSum +
                        (primaryMoreLiArray.length === 1 ? 0 : buttonPrimaryWidth) +
                        document.querySelector('.primary-menu-more-first-item-duplicate').offsetWidth <= width) {
                            if (primaryMoreLiArray.length === 1) primaryButton.style.display = "none";
                            if (primaryMoreLiArray[0].classList.contains('current-menu-item')) primaryButton.classList.remove('current-menu-item');
                            primaryHTMLElement.append(primaryMoreLiArray[0]);
                    }
            });


            resize_ob.observe(primaryMenu);

        } else {
            console.error("Element s ID #primary-menu nebyl nalezen.");
        }
    })
});

document.addEventListener('DOMContentLoaded', function() {
    //Handling hovers on socials LI for showing active imgs
    document.querySelectorAll('.footer-socials li').forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const iconHover = item.querySelector('#socials-icon-hover');
            const icon = item.querySelector('#socials-icon');

            if (iconHover && icon) {
                iconHover.style.display = 'block';
                icon.style.display = 'none';
            }
        });

        item.addEventListener('mouseout', function() {
            const iconHover = item.querySelector('#socials-icon-hover');
            const icon = item.querySelector('#socials-icon');

            if (iconHover && icon) {
                iconHover.style.display = 'none';
                icon.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".carouselSwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});


document.addEventListener('DOMContentLoaded', function () {

    /*const element = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;

        if (currentScroll < lastScroll) {
            element.classList.add('header-fixed');
        } else {
            element.classList.remove('header-fixed');
        }

        lastScroll = currentScroll;
    });
    const adminBar = document.getElementById('wpadminbar');
    if (adminBar && element) {
        element.style.marginTop = adminBar.offsetHeight + "px";
    }*/
});

