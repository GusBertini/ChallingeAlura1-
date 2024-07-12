function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    document.getElementById('outputText').textContent = outputText;
    document.getElementById('outputText').style.display = 'block'; 
    document.querySelector('.texto__imagem').style.display = 'none'; 
    document.querySelector('.texto__imagem2').style.display = 'none'; 
    document.querySelector('.container_botao3').style.display = 'block'; 
    updateClipboard(outputText); 

    document.getElementById('inputText').value = '';
}

function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    document.getElementById('outputText').textContent = outputText;
    document.getElementById('outputText').style.display = 'block'; 
    document.querySelector('.texto__imagem').style.display = 'none'; 
    document.querySelector('.texto__imagem2').style.display = 'none';
    document.querySelector('.container_botao3').style.display = 'block'; 
    updateClipboard(outputText); 

    document.getElementById('inputText').value = '';
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip)
        .then(() => {})
        .catch(err => console.error('Erro ao copiar texto: ', err));
}

function validateInput(input) {
    input.value = input.value.toLowerCase().replace(/[^a-z ]/g, '');
}

function clearOutput() {
    document.getElementById('outputText').textContent = '';
    document.getElementById('outputText').style.display = 'none'; 
    document.querySelector('.texto__imagem').style.display = 'block'; 
    document.querySelector('.texto__imagem2').style.display = 'block'; 
    document.querySelector('.container_botao3').style.display = 'none'; 
}
