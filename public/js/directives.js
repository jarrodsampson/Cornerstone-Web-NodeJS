app.directive('wrapOwlcarousel', function() {

    return {

        restrict: 'E',

        link: function(scope, element, attrs) {
            scope.initCarousel = function() {
                $(element).owlCarousel({
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    }
                });
            };
        }
    }

});

app.directive('owlCarouselItem', [function() {
    return function(scope) {
        if (scope.$last) {
            scope.initCarousel();
        }
    };
}]);

app.directive('unslider', function() {

    return {

        restrict: 'AE',

        link: function(scope, element, attrs) {
            console.log(element);
            $(element).unslider({
                autoplay: true,
                arrows: false
            });
        }
    }

});

app.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: scope[iAttrs.uiItems],
            select: function() {
                $timeout(function() {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});

app.directive('windowVideoFade', function($timeout) {
    return {

        restrict: 'E',

        link: function(scope, element, attrs) {
            $(window).scroll(function() {
                $(".top").css("opacity", 1 - $(window).scrollTop() / 450);
            });
        }
    }
});

app.directive('wowScroll', function($timeout) {
    return {

        restrict: 'E',

        link: function(scope, element, attrs) {
            new WOW({
                mobile: false
            }).init();
        }
    }
});

app.directive('scrollTop', function($timeout) {
    return {

        restrict: 'AE',

        link: function(scope, element, attrs) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.topHome').fadeIn();
                } else {
                    $('.topHome').fadeOut();
                }
            });

            $("a[href*='#']").click(function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
                e.preventDefault();
            });


        }
    }
});

app.directive('headroom', function($timeout) {
    return {

        restrict: 'AE',

        link: function(scope, element, attrs) {
            var header = document.querySelector("#headerNav");
            if (window.location.hash) {
                header.classList.add("slide--up");
            }

            new Headroom(header, {
                tolerance: {
                    down: 10,
                    up: 20
                },
                offset: 205,
                classes: {
                    initial: "slide",
                    pinned: "slide--reset",
                    unpinned: "slide--up"
                },
                // callback when pinned, `this` is headroom object
                onPin: function() {},
                // callback when unpinned, `this` is headroom object
                onUnpin: function() {},
                // callback when above offset, `this` is headroom object
                onTop: function() {},
                // callback when below offset, `this` is headroom object
                onNotTop: function() {}
            }).init();
        }
    }
});