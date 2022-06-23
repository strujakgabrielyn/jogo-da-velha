$(() => {
    let nextMove = 'X';
    $('.coluna').click(function(){
        $(this).text('');
    });
    $('.coluna').click(function(){
        if(!$(this).hasClass('marcado')){
            $(this).addClass('marcado');
            $(this).text(nextMove);
            nextMove = nextMove == 'X' ? 'O' : 'X';
            vencedor();
        }
    })

    function clearAll(){
        $('.coluna').removeClass('marcado');
        $('.coluna').text('');
    }
    
    function vencedor(){
        let linha1_coluna1 = $('#linha1_coluna1').text().trim();
        let linha1_coluna2 = $('#linha1_coluna2').text().trim();
        let linha1_coluna3 = $('#linha1_coluna3').text().trim();
        let linha2_coluna1 = $('#linha2_coluna1').text().trim();
        let linha2_coluna2 = $('#linha2_coluna2').text().trim();
        let linha2_coluna3 = $('#linha2_coluna3').text().trim();
        let linha3_coluna1 = $('#linha3_coluna1').text().trim();
        let linha3_coluna2 = $('#linha3_coluna2').text().trim();
        let linha3_coluna3 = $('#linha3_coluna3').text().trim();


        if(linha1_coluna1 == linha1_coluna2 && linha1_coluna2 == linha1_coluna3 && linha1_coluna1 != '' && linha1_coluna1 != undefined){
            $("#end").html("<h3>" + linha1_coluna1 + " venceu!!! </h1>"); //modifiquei todas aq
           clearAll();
        }
        if(linha2_coluna1 == linha2_coluna2 && linha2_coluna2 == linha2_coluna3 && linha2_coluna1 != '' && linha2_coluna1 != undefined){
            $("#end").html("<h3>" + linha2_coluna1 + " venceu!!! </h1>");
           clearAll();
        }
        if(linha3_coluna1 == linha3_coluna2 && linha3_coluna2 == linha3_coluna3 && linha3_coluna1 != '' && linha3_coluna1 != undefined){
            $("#end").html("<h3>" + linha3_coluna1 + " venceu!!! </h1>");
        
            clearAll();
        }
        if(linha1_coluna1 == linha2_coluna1 && linha2_coluna1 == linha3_coluna1 && linha1_coluna1 != '' && linha1_coluna1 != undefined){
            $("#end").html("<h3>" + linha1_coluna1 + " venceu!!! </h1>");
            clearAll();
        }
        if(linha1_coluna2 == linha2_coluna2 && linha2_coluna2 == linha3_coluna2 && linha1_coluna2 != '' && linha1_coluna2 != undefined){
            $("#end").html("<h3>" + linha1_coluna2 + " venceu!!! </h1>");
            clearAll();
        }
        if(linha1_coluna3 == linha2_coluna3 && linha2_coluna3 == linha3_coluna3 && linha1_coluna3 != '' && linha1_coluna3 != undefined){
            $("#end").html("<h3>" + linha1_coluna3 + " venceu!!! </h1>");
            
            clearAll();
        }
        if(linha1_coluna1 == linha2_coluna2 && linha2_coluna2 == linha3_coluna3 && linha1_coluna1 != '' && linha1_coluna1 != undefined){
            $("#end").html("<h3>" + linha1_coluna1 + " venceu!!! </h1>");

            clearAll();
        }
        if(linha1_coluna3 == linha2_coluna2 && linha2_coluna2 == linha3_coluna1 && linha1_coluna3 != '' && linha1_coluna3 != undefined){
            $("#end").html("<h3>" + linha1_coluna3 + " venceu!!! </h1>");
            clearAll();
        }
        if($('.marcado').length == 9){
            $("#end").html("<h3>Velha!!!!</h1>");
            clearAll();
        }
    }
})


$('h1').fadeIn(0).fadeOut(3000).fadeIn();