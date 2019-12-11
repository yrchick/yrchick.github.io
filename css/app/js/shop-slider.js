$(document).ready(function() {

    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 500,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 3 up
            1254: {
                items: 3,
            }
        }

    });

    $('#shopSliderLeft').click(function() {
        console.log('Left');
        shopSlider.trigger('prev.owl.carousel');
    });

    $('#shopSliderRight').click(function() {
        console.log('Right');
        shopSlider.trigger('next.owl.carousel');
    });

});






// headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function(event){

//   $('.slides-controls-number__active').text(event.item.index + 1)
//   $('.slides-controls-number__total').text(event.item.count)


// }); 


// headerSlider.owlCarousel({
//   items: 1,
//     // loop: true,
//     dots: false,
//     smartSpeed: 2000
// });



// // // Go to the previous item
// $('#headerSliderLeft').click(function() {
//   console.log('Left');
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     headerSlider.trigger('prev.owl.carousel');
// // });


// // // Go to the next item
// $('#headerSliderRight').click(function() {
//   console.log('Right');
//     headerSlider.trigger('next.owl.carousel');
// });

// headerSlider.on('change.owl.carousel', function(event){

//   $('.slides-controls-number__active').text(event.item.index + 1)
//   $('.slides-controls-number__total').text(event.item.count)

// });