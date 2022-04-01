let k=0;
let l=0;
let vez_do_jogador=0;
let rodada = 0;
let lugaresclicados=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
let matrizResultado = [[10,10,10],[10,10,10],[10,10,10]];
let texto = document.getElementById('texto');
let h=0;
let v=0;
let d1=0;
let d2=0;
let vitoria=0;
let controledoX=5;
let controledoO=1;


document.write("<div id='tabuleiro' >");
for( let i=0;i<3;i++){
    document.write("<div class='linha'>");
    for(let j=0;j<3;j++){
            document.write("<a href='javascript:selecionarPeca("+k+")' class = 'fundo'> ");
            document.write("<img src='' id='"+(k)+"' alt='' class='foto' style = 'width:90%;height:90%;margin-top: 5%'> ");
            document.write("</a>");
            k++;
    }
    document.write('</div>');
}
document.write('</div>');
document.write('<button id="botaoReiniciar" onclick="reiniciarJogo();">Jogar de novo </button>');

function selecionarPeca(posicao){
    let idtransform;
    if(vitoria===0){
        for(let i=0;i<9;i++){
        
            if(lugaresclicados[posicao]!=posicao){
                lugaresclicados[posicao]=posicao;

                if(rodada<9){
                    if(vez_do_jogador===0){
                    
                    
                    idtransform = 'X'+String(controledoX);
                    controledoX--;
                    document.getElementById(idtransform).style.visibility = 'hidden';
                    document.getElementById(posicao).src = "images/X.png";
                    document.getElementById(posicao).style.visibility = "visible";
                    let linha = parseInt(posicao/3);
                    let coluna = parseInt(posicao%3);    
                    matrizResultado[linha][coluna]= 0;
                    verificaResultado(matrizResultado,vez_do_jogador);
                    vez_do_jogador = 1;
                    }else{
                        idtransform = 'O'+String(controledoO);
                        controledoO++;
                        document.getElementById(idtransform).style.visibility = 'hidden';
                        document.getElementById(posicao).src = "images/circulo.png";
                        document.getElementById(posicao).style.visibility = "visible";
                        let linha = parseInt(posicao/3);
                        let coluna = parseInt(posicao%3);    
                        matrizResultado[linha][coluna]= 1;
                        verificaResultado(matrizResultado,vez_do_jogador);
                        vez_do_jogador = 0;
                    }
                    rodada++;  
                }
            }
        }   
    }
    if(rodada===9 && vitoria!=1)
    {   
        document.getElementById('titulo').style.opacity = '0.1';
        document.getElementById('tabuleiro').style.opacity = '0.1';
        document.getElementById('texto').style.opacity = '1';
        document.getElementById('texto').style.visibility ='visible';
        texto.innerHTML = "Velha";

        
    }
    if(vitoria===1 || rodada===9){
        document.getElementById('botaoReiniciar').style.visibility = 'visible';
    }
      
}

function reiniciarJogo(){
    window.location.reload();
}

function IniciarJogo(){
    document.getElementById("botaoInicio").style.visibility = 'hidden';
    document.getElementById("body").style.visibility = 'visible';
    document.getElementById('icone').style.visibility= ' hidden';
}
function verificaResultado(matrizResultado,verificador){
    verificaDiagonal(matrizResultado,verificador);
    verificaLinha(matrizResultado,verificador);
    verificaColuna(matrizResultado,verificador);
    
}

function verificaLinha(matrizResultado,verificador){
    let jogador;
    
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(matrizResultado[i][j]===verificador){
                h++;
            }
            if(h===3){
                if(verificador===0){
                    texto.innerHTML = " X Ganhou";
                    vitoria=1;
                    document.getElementById('tabuleiro').style.opacity = '0.1';
                    document.getElementById('titulo').style.opacity = '0.1';
                    document.getElementById('texto').style.opacity = '1';
                    document.getElementById('texto').style.visibility ='visible';
                }else{
                    texto.innerHTML = " O Ganhou ";
                    vitoria=1;
                    document.getElementById('tabuleiro').style.opacity = '0.1';
                    document.getElementById('titulo').style.opacity = '0.1';
                    document.getElementById('texto').style.opacity = '1';
                    document.getElementById('texto').style.visibility ='visible';
                }
                
            }
        }
        h=0;    
    }
}

function verificaColuna(matrizResultado,verificador){
    for(let j=0;j<3;j++){
        for(let i=0;i<3;i++){
            if(matrizResultado[i][j]===verificador){
                v++;
            }
            if(v===3){
                if(verificador===0){
                    texto.innerHTML = " X Ganhou";
                    vitoria=1;
                    document.getElementById('tabuleiro').style.opacity = '0.1';
                    document.getElementById('titulo').style.opacity = '0.1';
                    document.getElementById('texto').style.opacity = '1';
                document.getElementById('texto').style.visibility ='visible';
                }else{
                    texto.innerHTML = " O Ganhou ";
                    vitoria=1;
                    document.getElementById('tabuleiro').style.opacity = '0.1';
                    document.getElementById('titulo').style.opacity = '0.1';
                    document.getElementById('texto').style.opacity = '1';
                    document.getElementById('texto').style.visibility ='visible';
                }
            }
        }
        v=0;    
    }
}

function verificaDiagonal(matrizResultado,verificador){
    let aux = 0;
    let aux2 =0;
    let aux3=0;
    let aux4=0;
    let vez=0;
    let j=0;
    
    for(j;j<3;j++){
        if(verificador===0){
            aux+=(matrizResultado[j][j]);
            if(aux===0 && vez===2){
                texto.innerHTML="X Ganhou";
                vitoria=1;
                document.getElementById('tabuleiro').style.opacity = '0.1';
                document.getElementById('titulo').style.opacity = '0.1';
                document.getElementById('texto').style.opacity = '1';
                document.getElementById('texto').style.visibility ='visible';
            }
            aux3+=(matrizResultado[j][2-j]);
            if(aux3===0 && vez==2){
                texto.innerHTML="X Ganhou";
                vitoria=1;
                document.getElementById('tabuleiro').style.opacity = '0.1';
                document.getElementById('titulo').style.opacity = '0.1';
                document.getElementById('texto').style.opacity = '1';
                document.getElementById('texto').style.visibility ='visible';
            }
        }else{
            aux2+=(matrizResultado[j][j]);
            if(aux2===3 && vez===2){
                texto.innerHTML="O Ganhou";
                vitoria=1;
                document.getElementById('tabuleiro').style.opacity = '0.1';
                document.getElementById('titulo').style.opacity = '0.1';
                document.getElementById('texto').style.opacity = '1';
                document.getElementById('texto').style.visibility ='visible';
            }
            aux4+=(matrizResultado[j][2-j]);
            if(aux4===3 && vez==2){
                texto.innerHTML="O Ganhou";
                vitoria=1;
                document.getElementById('tabuleiro').style.opacity = '0.1';
                document.getElementById('titulo').style.opacity = '0.1';
                document.getElementById('texto').style.opacity = '1';
                document.getElementById('texto').style.visibility ='visible';
            }
        }

    vez++;
    }
    
}

