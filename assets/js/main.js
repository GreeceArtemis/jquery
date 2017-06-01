//$(document).ready(function(){
//  alert("Cargo jQuery");
//});
/*Es lo mimso*/

$( () => {  //(function(){}
//$("a:last-child").on("click,(e)")
  alert("Cargo jQuery");
});

  $( () => { //function() {}
    $(".popup-link").on('click',(e) => {
      e.preventDefault();
      $('.brand-popup').show();
      //$('.brand-popup').removeClass('hide');
      //$('.brand-popup').addClass('show');

    });

    $(".brand-popup .popup-close").on('click',(e) => {
      e.preventDefault();
      $('.brand-popup').hide();
      //$('.brand-popup').removeClass('show');
      //$('.brand-popup').addClass('hide');
    })
  });
