var positionY;
var scrollTop;

var lastPositionX =0;

let compteurEchelle =1
let largeurFenetre;

    //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !


$( document ).ready(function() {
/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
largeurFenetre =$(window).width();

$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
      var scrollReduit = scrollTop*0.05;
 
    
    $("#relique1").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique2").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique3").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique4").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique5").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique6").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
    $("#relique7").css({
      'background' : "rgb(255,255,255)",
      'background' : "radial-gradient(circle, rgb(173, 38, 38) 0%, rgb(255, 255, 255) "+scrollReduit+"%)",
    });
  });


  $('.relique').on( "click", function() {
console.log('sdfsdfsdfsdf')
  
      // Augmente la largeur et la hauteur de 10%
      $(this).css({
      'scale' : ''+compteurEchelle+''
      });

      compteurEchelle = compteurEchelle+0.2;


    if (compteurEchelle > 4) {
      compteurEchelle = 1; // Reset to default size (scale = 1)
    }
  });

//$('.courbes').on( "click", function() {

 // var currentRotation = $(this).data('rotation') || 0;  // If no rotation is set, default to 0

  // Calculate the new rotation (increase by 45 degrees each time)
 // var newRotation = currentRotation + 45;

  // Apply the new rotation
  //$(this).css({
 //  "transform": "rotate(" + newRotation + "deg)"
 // });

  // Store the new rotation value in the data attribute
 // $(this).data('rotation', newRotation);
//});





$('.relique').on( "mouseenter", function() {
  $(this).css({
    "transform": 'rotate(300deg)'
    });
});

$('.relique').on("mouseleave", function() {
   $(this).css({
  "transform": 'rotate(0deg)',
    });
});

  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  })



//$( '.relique' ).on( 'mousemove', function() {

//  var valeur = mapValue(event.pageX,0,largeurFenetre,-100,100);
//    $(this).css({
 //   'top' : (positionY-50),
//    'left' : (event.pageX)-125,   })
// });  
 //////// ///ne rien écrire après ceci

 $('.deplacement').on( "mousedown", function() {
  $(this).toggleClass('move') //ajouter ou retirer la classe "move" à l'élément sur lequel on clique
});


 $(window).on('mousemove', function(){
  positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
 
  //ensuite quand on bouge la sourie on déplace l'élément sur lequel on a cliqué
  $('.move').css({
      'position' : 'absolute',
      'top' : ''+positionY+'px',
      'left': event.pageX+'px'
  })
})

});
