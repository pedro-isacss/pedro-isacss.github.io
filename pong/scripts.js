//START
var btnplay = document.querySelector("button#btnplay");

btnplay.addEventListener('click', function(){
    var namep1 = document.querySelector('input#nameplayer1');
    var namep2 = document.querySelector('input#nameplayer2');
    var placar = document.querySelector('h1#title');
    var divstart = document.querySelector('div#start');
    var divplay = document.querySelector('div#play');
    var maxpoint = document.querySelector("input#numberpoints");

    //Placar
    var p1Points = 0;
    var p2Points = 0;

    placar.innerHTML = namep1.value + " " + p1Points +" x " + p2Points + " "  + namep2.value;
    divstart.style.display = 'none';
    divplay.style.display = 'block';

    //Posição dos players e da bola
    var p1 = 125;
    var p2 = 125;
    var bolaX = 210;
    var bolaY = 140;

    //Sortear a direção da bola
    function direcaoX(){
        var direcoesX = [-5,5]
        var i = Math.floor(Math.random() * 2);
        return direcoesX[i];
    }
    function direcaoY(){
        var direcoesY = [-5,5]
        var k = Math.floor(Math.random() * 2);
        return direcoesY[k];
    }
    var x = direcaoX();
    var y = direcaoY();

    //Função mover bola
    setInterval(function moverBola(){
        var bola = document.querySelector('canvas#bola');
        var px1 = p1+50 >= bolaY && p1-30 <= bolaY;
        var px2 = p2+50 >= bolaY && p2-30 <= bolaY;

        if(bolaY<=255 && bolaY>=0){
            bola.style.marginTop = bolaY+y+'px';
            bolaY = bolaY+y;
        };

        if(bolaX>=-130 && bolaX<=530){
            bola.style.marginLeft = bolaX+x+'px';
            bolaX = bolaX+x;
        };
        if(bolaX<=-100){
            bolaX = 210;
            x = direcaoX();
            y = direcaoY();
            p2Points = p2Points+1;
            placar.innerHTML = namep1.value + " " + p1Points +" x " + p2Points + " "  + namep2.value;
        };
        if(bolaX>= 510){
            bolaX = 210;
            x = direcaoX();
            y = direcaoY();
            p1Points = p1Points+1;
            placar.innerHTML = namep1.value + " " + p1Points +" x " + p2Points + " "  + namep2.value;
            
        }
        if(bolaY==255 || bolaY==0){
            y=-y;
        }
        if(bolaX==0 && px1){
            x = -x;
            y = direcaoY();
        }
        if(bolaX==410 && px2){
            x = -x;
            y = direcaoY();
        }

        //Ganhador
        if(p1Points == maxpoint.value){
            window.alert(namep1.value + " foi o vencedor. Atualize a página para jogar novamente");
            
        }else if(p2Points == maxpoint.value){
            window.alert(namep2.value + " foi o vencedor. Atualize a página para jogar novamente");
        }
    }, 25)


    //Funções mover players
    function moveDownP1(){
        var player1 = document.querySelector('canvas#player1');
        if(p1<=220){
            player1.style.marginTop = p1+10+'px';
            p1 = p1+10;
        };
    };
    function moveUpP1(){
        var player1 = document.querySelector('canvas#player1');
        if(p1>=5){
            player1.style.marginTop = p1-10+'px';
            p1 = p1-10;
        };
    };
    function moveDownP2(){
        var player2 = document.querySelector('canvas#player2');
        if(p2<=220){
            player2.style.marginTop = p2+10+'px';
            p2 = p2+10;
        };
    };
    function moveUpP2(){
        var player2 = document.querySelector('canvas#player2');
        if(p2>=5){
            player2.style.marginTop = p2-10+'px';
            p2 = p2-10;
        };
    };

    //Evento mover players
    document.addEventListener('keydown', function(e){
        if(e.which == 65){
            moveDownP1();
        };
        if(e.which == 68){
            moveUpP1();
        };
    });

    document.addEventListener('keydown', function(e){
        if(e.which == 37){
            moveDownP2();
        };
        if(e.which == 39){
            moveUpP2();
        };
    });
});