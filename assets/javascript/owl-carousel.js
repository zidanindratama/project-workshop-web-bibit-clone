// $(document).ready(function () {
//   var owl = $("#owl-carousel-pencapaian");

//   owl.owlCarousel({
//     loop: true,
//     autoplay: true,
//     margin: 50,
//     dots: true,
//     nav: true,
//     // navText: [prevIcon, nextIcon],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 3,
//       },
//     },
//   });
// });
$(document).ready(function () {
  $("#owl-carousel-pencapaian").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    nav: true,
    // navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 3,
      },
    },
  });
  $("#owl-carousel-fitur").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    nav: true,
    // navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 3,
      },
    },
  });
  $("#owl-carousel-pengguna").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    nav: true,
    // navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  });
  $("#owl-carousel-dukungan").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    nav: true,
    // navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
