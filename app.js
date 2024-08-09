function criptografar() {
    const input = document.getElementById('input_text').value;

    if (input === "") {
        alert("Digite um texto para continuar..")
        mostrarMensagemInicial();
        return;
    }

    // Regras de substituição para criptografar
    const output = input.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");

    document.getElementById('output_text_content').value = output;
    mostrarMensagemResultado();
}

function descriptografar() {
    const input = document.getElementById('input_text').value;

    if (input.trim() === "") {
        alert("Digite um texto para continuar..")
        mostrarMensagemInicial();
        return;
    }

    // Regras de substituição para descriptografar
    const output = input.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");

    document.getElementById('output_text_content').value = output;
    mostrarMensagemResultado();
}

function copiar() {
    const output = document.getElementById('output_text_content').value;

    if (output.trim() === "") {
        mostrarMensagemInicial();
        return;
    }

    navigator.clipboard.writeText(output).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}

function mostrarMensagemInicial() {
    document.querySelector('.title_message_output').style.display = 'flex';
    document.querySelector('.text_message_output').style.display = 'flex';
    document.querySelector('.output_text').style.display = 'none'; 
    
}

function mostrarMensagemResultado() {
    document.querySelector('.title_message_output').style.display = 'none';
    document.querySelector('.text_message_output').style.display = 'none';
    document.querySelector('.output_text').style.display = 'flex'; 
}


