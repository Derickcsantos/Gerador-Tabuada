const calcularBtn = document.getElementById("calculoBtn");

function calcularTabuada(){
    const valor = document.getElementById('inputNumero').value;
    let texto = document.getElementById('texto');
    let recebeResultado = document.getElementById('recebeResultado');
    
    for (let i = 0; i <= 10; i++){
        const valorFinal = document.createElement('p');
        valorFinal.textContent = `${valor} x ${i} = ${valor*i}`

        console.log(valorFinal);

        recebeResultado.appendChild(valorFinal);

    }

    const mensagemResultado = document.getElementById('mensagemResultado').innerText = `Abaixo está a tabuada do número ${valor}. `
    document.getElementById('inputNumero').value = '';
    return console.log('Funcionou!')
}

calcularBtn.addEventListener('click', () =>{
    calcularTabuada()
})
