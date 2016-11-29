
$(document).ready(function(){
  $('#eventClic').click(function(){
    var elem = $('#mensajeEv');
    if(elem.css('display') == 'none'){


    elem.show('slow');

    $('#Color').click(function(){
      //$("p")
      document.getElementsByTagName("p")[0].setAttribute("class", "democlass");
    })
  }else{
    elem.hide('slow');
  }
  });

  $('#eventM').click(function(){
    $.get("procesar.php", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});