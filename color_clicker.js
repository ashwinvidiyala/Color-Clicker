function random_color()
{
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++)
   {
      x = Math.floor((Math.random()*16))
      color += rgb[x];
   }
   return color;
}

$(document).ready(function(){
   $('#large_box').click(function(){
     $('#large_box').children('.side_box').css('background-color', random_color());
     $('#large_box').children('.middle_box').css('background-color', random_color());
     $('.side_box').parent().css('background-color', random_color());
     // $('.middle_box').css('background-color', random_color());
      // alert('you clicked the big box!');

   })
   $('.side_box').click(function(event){
      event.stopPropagation();
      $(this).siblings().css('background-color', random_color());
   })
   $('.middle_box').click(function(event){
      event.stopPropagation();
      $(this).parent().css('background-color', random_color());

   })
});
