function formes(){
    var largeurFenetre = $(window).width();
var hauteurFenetre = $(window).height();





    for (let i = 1; i <largeurFenetre/20; i++) {
        let augmentation = 20;
        nbrImage = 1+parseInt(Math.random()*50)


        $('.conteneur').append('<div id="forme'+i+'" class="forme"  alt=""></div>');



        $('#forme'+i+'').css({
          'mask-image':'url("reliques/SVG/Fichier '+nbrImage+'.svg")',
          'top' : 0+Math.random()*80+'px',
          'left' : 0+augmentation*i+'px',
          'height': 40+Math.random()*200+'px'
        })
  
        
      }
}