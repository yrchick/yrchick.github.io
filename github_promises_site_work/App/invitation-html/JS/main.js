$(document).ready(function(){



	$('.about__toggle').click(function(event){
		event.preventDefault();
		console.log('click!')


		$('.about-content__box').hide();

		var href = $(this).attr('href')

		console.log(href);

		$(href).fadeIn();


	});


var windowheight = $(window).height();
console.log(windowheight);




  // Следим за скролом , и показывает / скрываем кнопку 
	$(window).scroll(function(){


		console.log( $(this).scrollTop() );

		if ( $(this).scrollTop() >windowheight) {
			$('#scrollToTop').fadeIn();
		} else  {
			$('#scrollToTop').fadeOut();

		}

		// console.log(this);
	});



//  При клиеке на кнопку  - делаем пропкрутку наверх страницы 


$('#scrollToTop').click(function(event){
	console.log(111111);
	event.preventDefault();
	$('html').animate({scrollTop: 0}, 800)

});











	










   





});	