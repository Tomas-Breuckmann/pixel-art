function quadroDePixel(numero){
    let board=document.getElementById('pixel-board')
    numero=numero*numero
    for (i=1;i<=numero;i+=1){
        // let linha=document.createElement('div')
        let item=document.createElement('div')
        item.className='pixel'
        item.style.backgroundColor='white'
        board.appendChild(item)
    }
}
quadroDePixel(5)