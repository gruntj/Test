  $('.slider').slick({

  	autoplay:true,
  	autoplaySpeed:3000,
  	speed:2000,
  	dots:true,
    centerMode: false,
  	arrows:false,
    slidesToShow: 1,
  	 responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]

  });

