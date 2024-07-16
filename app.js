    let inputText = document.getElementById('inputText');
    let outputText = document.getElementById('outputText');
function inserirHTML(elemento,mensagem){
    return elemento.innerHTML = `${mensagem}`;
    
}
function criptografar() {
    let inputValue = document.getElementById('inputText').value;
    let criptografiaResult = criptografia(inputValue);
    inserirHTML(outputText,criptografiaResult)
    document.getElementById('outputText').style.display = 'block'; 
    document.querySelector('.texto__imagem').style.display = 'none'; 
    document.querySelector('.texto__imagem2').style.display = 'none'; 
    document.querySelector('.container_botao3').style.display = 'block'; 
    limparCampo(inputText);
}
function criptografia(valor){
    return valor.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}
function descriptografia(valor){
    return valor.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

}
function limparCampo(elemento){
   elemento.value = '';
}

function descriptografar() {
    let inputValue = document.getElementById('inputText').value;
    let descriptografiaResult = descriptografia(inputValue);
    inserirHTML(outputText,descriptografiaResult)
    document.getElementById('outputText').style.display = 'block'; 
    document.querySelector('.texto__imagem').style.display = 'none'; 
    document.querySelector('.texto__imagem2').style.display = 'none';
    document.querySelector('.container_botao3').style.display = 'block'; 
    limparCampo(inputText);
   
}

function updateClipboard() {
    let outputValue = outputText.innerHTML;
    navigator.clipboard.writeText(outputValue)
        .then(() => {
            alert('texto copiado!')
        })
        .catch(err => console.error('Erro ao copiar texto: ', err));

}

function validateInput(input) {
    input.value = input.value.toLowerCase().replace(/[^a-z\s]/g, ''); 
}
function clearOutput() {
    document.getElementById('outputText').textContent = '';
    document.getElementById('outputText').style.display = 'none'; 
    document.querySelector('.texto__imagem').style.display = 'block'; 
    document.querySelector('.texto__imagem2').style.display = 'block'; 
    document.querySelector('.container_botao3').style.display = 'none'; 
}
