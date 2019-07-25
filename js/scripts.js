jQuery(document).ready(function () {

    jQuery('.navigation1').on('click', '.dropdown-project', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-project').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-project').slideDown(300);
            e.preventDefault();
        }
    });

      jQuery('.navigation1').on('click', '.dropdown-client', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-client').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-client').slideDown(300);
            e.preventDefault();
        }
    });

  jQuery('.navigation1').on('click', '.dropdown-status', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-status').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-status').slideDown(300);
            e.preventDefault();
        }
    });


  });