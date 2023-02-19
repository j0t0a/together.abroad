
$('.main_list').slick({
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,

	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

			}
		}
	],

});