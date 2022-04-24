document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        hover:true,
        inDuration: 700,
        outDuration: 700
    });
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.slider');
  //   var instances = M.Slider.init(elems, {
  //       indicators:true,
  //       height:100,
  //       duration:500,
  //       interval:3000
  //   });
  // });
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount(1000);
  
} );

