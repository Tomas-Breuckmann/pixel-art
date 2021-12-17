window.onload=function(){
    let x=[]
    for(let j=2;j<=4;j+=1){
    for(let i=0;i<3;i+=1){
        x[i]=Math.floor(Math.random()*255)
    }
    let cor ='rgb('+x[0]+','+x[1]+','+x[2]+')'
    document.getElementById('cor'+j).style.backgroundColor=cor
    }
    document.getElementById('cor1').style.backgroundColor='black'
}

//Limpa o quadro de pixels


function quadroDePixel(numero){
    let board=document.getElementById('pixel-board')
    let boardSize=numero*42
    console.log(boardSize)
    board.style.width=boardSize+'px'
    board.style.height=boardSize+'px'
    for (let i=0;i<numero;i+=1){
        for (j=1;j<=numero;j+=1){
            let item=document.createElement('div')
            item.className='pixel'
            board.appendChild(item)
        }
    }
}
quadroDePixel(5)

function selecionaCor(event){
    let aCor=document.querySelector('.selected')
    aCor.classList.remove('selected')
    event.target.classList.add('selected')
}
document.getElementById('cor1').addEventListener('click',selecionaCor)
document.getElementById('cor2').addEventListener('click',selecionaCor)
document.getElementById('cor3').addEventListener('click',selecionaCor)
document.getElementById('cor4').addEventListener('click',selecionaCor)

// As linhas 36 a 43 são de Danillo Goncalves Batista
const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function(event) {
        let propriedades=document.querySelector('.selected').style.backgroundColor
        event.target.style.backgroundColor = propriedades;
    })
}

function limpaQuadro(){
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor='white'
        }
    }
