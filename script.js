// window.onload=function(){
//     function pintaBlack(event){
//         let pix=document.getElementById('pixel-board')
//         pix.addEventListener('click',function(event){
//             event.target.style.backgroundColor='black'
//         })
//     }
//     pintaBlack()
// }

function quadroDePixel(numero){
    let board=document.getElementById('pixel-board')
    board.style.width='210px'
    board.style.height='210px'
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
    pixels[i].addEventListener('click', function(e) {
        let propriedades=document.querySelector('.selected').id
        e.target.id = propriedades;
    })
}
