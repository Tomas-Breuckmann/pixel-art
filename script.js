function quadroDePixel(numero){
    let board=document.getElementById('pixel-board')
    for (let i=0;i<numero;i+=1){
        let pixelBoardSection=document.createElement('div')
        pixelBoardSection.className='pixel-board-section'
        board.appendChild(pixelBoardSection)
        for (j=1;j<=numero;j+=1){
            let item=document.createElement('div')
            item.className='pixel'
            pixelBoardSection.appendChild(item)
        }
    }
}
quadroDePixel(5)