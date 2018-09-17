var pontosJog = document.getElementById("pontosjog");
var pontosComp = document.getElementById("pontospc");
var pedra = document.getElementById("pedra").value;
var papel = document.getElementById("papel").value;
var tesoura = document.getElementById("tesoura").value;
var cartas = [pedra,papel, tesoura];
var jogador = document.getElementById("mesajogador");
var pc = document.getElementById("mesapc");
var x = "";
var pontosjogador = 0;
var pontospc = 0;
var modal = document.getElementById("myModal");
var modaljog = document.getElementById("modaljogador");
var modalpc = document.getElementById("modalpc");
var span = document.getElementsByClassName("close")[0];
var texto = document.getElementById("texto");


function IniciarJogo(e){
   //verifica o id do botão clicado e define a img
    x = e;
   if(x == "pedra"){
      jogador.src="img/pedra.png";
   }else if (x == "papel"){
      jogador.src="img/papel.png";
   }else if( x == "tesoura"){
      jogador.src="img/tesoura.png";
   }
    //sortei a jogado do computador
   var aux = cartas[ Math.floor((Math.random() * 3))];
   if(aux == 1){
       mesapc.src="img/pedra.png";
   }else if (aux == 2){
       mesapc.src="img/papel.png";
   }else if( aux == 3){
       mesapc.src="img/tesoura.png";
   }
    //verfica o ganhador

    if( (x == "pedra" && aux == 1) || (x == "papel" && aux == 2)|| (x == "tesoura" && aux == 3))  {
        
        modal.style.display = "block";
        texto.textContent = "O jogo Empatou!";
        span.onclick = function() {
            modal.style.display = "none";
            jogador.src="";
            mesapc.src="";
        }
        
    }else if((x== "pedra" && aux == 3) || (x == "papel" && aux == 1) || (x == "tesoura" && aux == 2)) {
        pontosjogador++;
        modal.style.display = "block";
        texto.textContent = "O jogador Ganhou!";
        pontosJog.textContent = pontosjogador.toString();
        span.onclick = function() {
            modal.style.display = "none";
            jogador.src="";
            mesapc.src="";
        }
    }else if((aux== 1  && x == "tesoura") || (aux == 2 && x == "pedra") || (aux == 3 && x == "papel")){
        pontospc++;
        modal.style.display = "block";
        texto.textContent = "O computador Ganhou!";
        pontosComp.textContent = pontospc.toString();
        span.onclick = function() {
            modal.style.display = "none";
            jogador.src="";
            mesapc.src="";
        }
    }

    function teste(){
        pontosjogador = 0;
        pontospc = 0
        pontosJog.textContent = pontosjogador.toString();
        pontosComp.textContent = pontospc.toString();
    
    }
 
   
}