
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');

    function toggleMobileNav() {
        menuIcon.classList.toggle('hide');
        // closeIcon.classList.toggle('hide');
        mobileNavContainer.classList.toggle('show');
    }

    menuIcon.addEventListener('click', toggleMobileNav);
    closeIcon.addEventListener('click', toggleMobileNav);
