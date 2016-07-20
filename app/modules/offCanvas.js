module.exports = {
    load: function() {
        (function($) {
                var element = $('[gg-slide-nav]'),
                html = $('[gg-slide-nav-html]'),
                menuOpen = false;

            function toggleMenu(e) {
                $('#gg-slide-nav-button').toggleClass('gds-page-header__menu--open');

                if (menuOpen) {
                    closeMenu();
                } else {
                    openMenu(e);
                }
            }

            function openMenu(e) {
                e.stopPropagation();
                element.addClass("gds-slide-out");
                html.addClass('hide-overflow');
                menuOpen = true;
            }

            function closeMenu(e) {
                element.removeClass("gds-slide-out");
                html.removeClass('hide-overflow');
                menuOpen = false;
            }

            $('body').on('click', '#gg-slide-nav-button', toggleMenu).on('click','[gg-nav-closer]', closeMenu);

            $('body').on('click', '.gds-slide-nav__link', toggleMenu);

            // Toggle .gds-slide-nav menu with "a" key
            $(document).keypress(function(e) {
                // If any inputs or textareas are being typed in, disable "a" hotkey for showing .gds-slide-nav menu
                if ($('input[type="text"]:focus').length === 0 && $('input[type="email"]:focus').length === 0 && $('input[type="url"]:focus').length === 0 && $('input[type="password"]:focus').length === 0 && $('textarea:focus').length === 0 && e.which === 97) {
                    toggleMenu(e);
                }
            });

            // Hide .gds-slide-nav menu with esc
            $(document).on('keydown', function(e) {
                if (menuOpen && $('input[type="text"]:focus').length === 0 && $('input[type="email"]:focus').length === 0 && $('input[type="url"]:focus').length === 0 && $('input[type="password"]:focus').length === 0 && $('textarea:focus').length === 0 && e.which == 27) {
                    toggleMenu();
                }
            });
        }(jQuery));
    }
};
