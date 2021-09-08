const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
showHeader('Kata 1')
kata1()
showHeader('Kata 2')
kata2()
showHeader('Kata 3')
kata3()
showHeader('Kata 4')
kata4()
showHeader('Kata 5')
kata5()
showHeader('Kata 6')
kata6()
showHeader('Kata 7')
kata7()
showHeader('Kata 8')
kata8()
showHeader('Kata 9')
kata9()
showHeader('Kata 10')
kata10()
showHeader('Kata 11')
kata11()
showHeader('Kata 12')
kata12()
showHeader('Kata 13')
kata13()
showHeader('Kata 14')
kata14()
showHeader('Kata 15')
kata15()
showHeader('Kata 16')
kata16()
showHeader('Kata 17')
kata17()
showHeader('Kata 18')
kata18()
showHeader('Kata Bônus 1')
kataBonus1()
showHeader('Kata Bônus 2')
kataBonus2()
showHeader('Kata Bônus 3')
kataBonus3()
showHeader('Kata Bônus 4')
kataBonus4()
showHeader('Kata Bônus 5')
kataBonus5()
function kata1() {
    // implemente o código do kata 1 aqui
    const resultado = []
    for(let i=0;i<26;i++){
        resultado.push(i)
    }
    showResults(resultado)
}

function kata2() {
    // implemente o código do kata 2 aqui
    const resultado = []
    for(let i=25;i>0;i--){
        resultado.push(i)
    }
    showResults(resultado)
}

function kata3() {
    // implemente o código do kata 3 aqui
    const resultado = []
    for(let i=-1;i>-26;i--){
        resultado.push(i)
    }
    showResults(resultado)
}

function kata4() {
    // implemente o código do kata 4 aqui
    const resultado = []
    for(let i=-25;i<0;i++){
        resultado.push(i)
    }
    showResults(resultado)
}

function kata5() {
    // implemente o código do kata 5 aqui
    const resultado = []
    for(let i=-25;i<26;i++){
        if(i%2!==0){
            resultado.push(i)
        }
    }
    showResults(resultado)
}

function kata6() {
    // implemente o código do kata 6 aqui
    const resultado = []
    for(let i=1;i<=100;i++){
        if(i%3===0){
            resultado.push(i)
        }
    }
    showResults(resultado)
}

function kata7() {
    // implemente o código do kata 7 aqui
    const resultado = []
    for(let i=1;i<=100;i++){
        if(i%7===0){
            resultado.push(i)
        }
    }
    showResults(resultado)
}

function kata8() {
    // implemente o código do kata 8 aqui
    const resultado = []
    for(let i=100;i>0;i--){
        if(i%3===0||i%7===0){
            resultado.push(i)
        }
    }
    showResults(resultado)
}

function kata9() {
    // implemente o código do kata 9 aqui
    const resultado = []
    for(let i=1;i<=100;i++){
        if(i%5===0&&i%2!==0){
            resultado.push(i)
        }
    }
    showResults(resultado)
}

function kata10() {
    // implemente o código do kata 10 aqui
    const resultado = []
    for(let i=0;i<sampleArray.length;i++){
        resultado.push(sampleArray[i])
    }
    showResults(resultado)
}

function kata11() {
    // implemente o código do kata 11 aqui
    const resultado = []
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2===0){
            resultado.push(sampleArray[i])
        }
    }
    showResults(resultado)
}

function kata12() {
    // implemente o código do kata 12 aqui
    const resultado = []
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2!==0){
            resultado.push(sampleArray[i])
        }
    }
    showResults(resultado)
}

function kata13() {
    // implemente o código do kata 13 aqui
    const resultado = []
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%8===0){
            resultado.push(sampleArray[i])
        }
    }
    showResults(resultado)
}

function kata14() {
    // implemente o código do kata 14 aqui
    const resultado = []
    for(let i=0;i<sampleArray.length;i++){
        resultado.push(sampleArray[i]*sampleArray[i])
    }
    showResults(resultado)
}

function kata15() {
    // implemente o código do kata 15 aqui
    let resultado = 0
    for(let i=0;i<=20;i++){
        resultado+=i
    }
    showResults(resultado)
}

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0
    for(let i=0;i<sampleArray.length;i++){
        resultado+=sampleArray[i]
    }
    showResults(resultado)
}

function kata17() {
    // implemente o código do kata 17 aqui
    let resultado = sampleArray[0]
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]<resultado){
            resultado=sampleArray[i]
        }
    }
    showResults(resultado)
}

function kata18() {
    // implemente o código do kata 18 aqui
    let resultado = sampleArray[0]
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]>resultado){
            resultado=sampleArray[i]
        }
    }
    showResults(resultado)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for(let i=0;i<20;i++){
        rekt(100,"darkgrey")
    }
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    for(let i=1;i<=20;i++){
        let largura = 100+i*5
        rekt(largura,"darkgrey")
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for(let i=0;i<sampleArray.length;i++){
        rekt(sampleArray[i],"darkgrey")
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for(let i=0;i<sampleArray.length;i++){
        let cor
        if(i%2===0){
            cor="red"
        }
        else{
            cor="darkgrey"
        }
        rekt(sampleArray[i],cor)
    }

}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for(let i=0;i<sampleArray.length;i++){
        let cor
        if(sampleArray[i]%2===0){
            cor="red"
        }
        else{
            cor="darkgrey"
        }
        rekt(sampleArray[i],cor)
    }
}
function showResults(linha){
    const elemento=document.createElement('p')
    elemento.innerText = linha
    const corpo=document.querySelector("body")
    corpo.appendChild(elemento)
}
function showHeader(titulo){
    const header=document.createElement('h3')
    header.innerText = titulo
    const corpo=document.querySelector('body')
    corpo.appendChild(header)
}
function rekt(largura,cor){
    const rect=document.createElement('div')
    rect.style.height="20px"
    rect.style.width=largura+"px"
    rect.style.backgroundColor=cor
    rect.style.margin="5px"
    const corpo=document.querySelector('body')
    corpo.appendChild(rect)
}