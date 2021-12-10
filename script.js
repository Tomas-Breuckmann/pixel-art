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
    console.log(aCor)
    aCor.classList.remove('selected')
    event.target.classList.add('selected')
    console.log(aCor)
}

document.getElementById('cor1').addEventListener('click',selecionaCor)
document.getElementById('cor2').addEventListener('click',selecionaCor)
document.getElementById('cor3').addEventListener('click',selecionaCor)
document.getElementById('cor4').addEventListener('click',selecionaCor)