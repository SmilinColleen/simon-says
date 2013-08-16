$(document).ready(function(){
  $('#get_color').on('click',function(e) {
    e.preventDefault();
    console.log('click')
    var colorChange = $.post('/color');  //ajax for post

    colorChange.done(function(response){
      var ans = $.parseJSON(response)
      $("ul li:nth-child("+ans.cell+")").css("background-color", ans.color)
    });
  });

});
