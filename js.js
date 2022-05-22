 $(document).ready(function() 
 {
        var botao = $(".b1");// classe a no que vai ser clicado
        var dropDown = $(".ul-noticias");    // classe do submenu do ul que vai abrir quando clicar no a

        botao.on('click', function(event)
        {
            dropDown.stop(true,true).slideToggle();
            event.stopPropagation();
    });
});

$(document).ready(function() 
{
       var botao = $('.b2');// classe a no que vai ser clicado
       var dropDown = $('.ul-ensino');    // classe do submenu do ul que vai abrir quando clicar no a

       botao.on('click', function(event)
       {
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
   });
});