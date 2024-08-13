
containerLeftTextArea = document.getElementById("containerLeftTextArea");
leftTextarea = document.getElementById("textarea-left");
rightTextarea = document.getElementById("textarea-right");
rightTextarea_changing = document.getElementById("text__changing");
encryptButton = document.getElementById("encrypt-button");
decryptButton = document.getElementById("decrypt-button");

document.addEventListener("DOMContentLoaded", () => {
    rightTextarea.classList.add("none");
});

if (rightTextarea.classList.contains("none")) {
    rightTextarea_changing.classList.remove("none");
}

let insertarError = () => {
    if(leftTextarea.value.trim() == '') {

        if(document.querySelector(".block-error")) {
            document.querySelector(".block-error").remove();
        } else {
            const blockError = document.createElement("div");
            const messageError = document.createElement("p");
            blockError.style.backgroundColor = "#c30d0d";
            blockError.className = "block-error";
            blockError.style.color = "white";
            blockError.style.padding = "20px";
            blockError.style.fontSize = "24px";
            blockError.style.borderRadius = "10px";
            blockError.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
            blockError.style.textAlign = "center";
            blockError.style.marginTop = "20px";
            blockError.style.marginBottom = "20px";

            messageError.textContent = '¡No se permiten campos vacios!';
            messageError.style.fontFamily = 'Calibri', 'sans-serif';

            blockError.appendChild(messageError);
            containerLeftTextArea.insertBefore(blockError, leftTextarea);
        }
    }
}

let encryptText = (text) => {
    let textEncrypt = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    return textEncrypt;
}

let decryptText = (text) => {
    let textDecrypt = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    return textDecrypt;
}


encryptButton.addEventListener("click", () => {
        if (leftTextarea.value.trim() == '') {
            insertarError();
        }else{
            rightTextarea.classList.remove("none");
            rightTextarea_changing.classList.add("none");
        
            let textEncrypt = encryptText(leftTextarea.value);
            rightTextarea.value = textEncrypt;
        }
})

decryptButton.addEventListener("click", () => {
    insertarError()
    rightTextarea.classList.remove("none");
    rightTextarea_changing.classList.add("none");

    let textDecrypt = decryptText(leftTextarea.value);
    rightTextarea.value = textDecrypt;
})
