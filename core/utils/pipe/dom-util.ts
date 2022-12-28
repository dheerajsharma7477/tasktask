declare var $: any;

export class DOM_UTIL {

    
    /**
     * @description 
     * Function for scroll to top btn in mobile
     * */
    static scrollToTop() {
        $(document).ready(function () {
            var timeout;
            // -----------------list1--------------
            $('#listscrol').scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    $('#back-to-top').fadeOut();
                }, 3000);
            });

            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#listscrol').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });


            // -----------------list2--------------

            $('#listscrol2').scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('#back-to-top2').fadeIn();
                } else {
                    $('#back-to-top2').fadeOut();
                }
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    $('#back-to-top2').fadeOut();
                }, 3000);
            });

            // scroll body to 0px on click
            $('#back-to-top2').click(function () {
                $('#listscrol2').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });



            // -----------------list3--------------
            $('#listscrol3').scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('#back-to-top3').fadeIn();
                } else {
                    $('#back-to-top3').fadeOut();
                }
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    $('#back-to-top3').fadeOut();
                }, 3000);
            });

            // scroll body to 0px on click
            $('#back-to-top3').click(function () {
                $('#listscrol3').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });

            // -----------------list4--------------

            $('#listscrol4').scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('#back-to-top4').fadeIn();
                } else {
                    $('#back-to-top4').fadeOut();
                }
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    $('#back-to-top4').fadeOut();
                }, 3000);
            });

            // scroll body to 0px on click
            $('#back-to-top4').click(function () {
                $('#listscrol4').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });
    }

}