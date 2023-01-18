//inputs / outputs data
const textAreaIn = document.querySelector('#inputData');
const textAreaOut = document.querySelector('#outputData');

//buttons
const encryptBtn = document.querySelector('#encryptBtn');
const decryptBtn = document.querySelector('#decryptBtn');
const copyBtn = document.querySelector('.copyBtn');

//image & p tags zone
const img = document.querySelector('#muñecoImg');
const p1 = document.querySelector('.noMessages');
const p2 = document.querySelector('.message2');

//create tip for copy button
const tips = Array.from(document.querySelectorAll('[tip]'));
createTooltip(tips);

//dictionary with encrypted letters
const code = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
}



//encrypt button
encryptBtn.addEventListener('click', () => {
    //get data
    const data = textAreaIn.value;

    removeImg();
    viewMessage();
    textAreaOut.value = encrypt(data);
})

//decrypt button
decryptBtn.addEventListener('click', () => {
    //get data
    const data = textAreaIn.value;
    removeImg();
    viewMessage();
    textAreaOut.value = decrypt(data);
})

//copy button
copyBtn.addEventListener('click', () => {
    textAreaOut.select();
    document.execCommand("copy"); //deprecated.
    textAreaIn.focus();
})


function createTooltip(tips) {
    tips.forEach(el => {
        let tip = document.createElement('div');
        tip.classList.add('tooltip');
        tip.innerText = el.getAttribute('tip');
        el.appendChild(tip);
    });
}

function removeImg() {
    img.setAttribute('style', 'display:none');
    p1.setAttribute('style', 'display:none');
    p2.setAttribute('style', 'display:none');
}

function viewMessage() {
    textAreaOut.setAttribute('style', 'display:initial');
    copyBtn.setAttribute('style', 'display:initial');
}

function encrypt(text = String) {
    let miText = text.toLowerCase();
    let res = '';

    for (let letter of miText) {

        if (!code[letter]) {
            res += letter;
        } else {
            res += code[letter];
        }
    }
    return res;
}

function decrypt(text = String) {
    let miText = text.toLowerCase();

    for (let letter of miText) {
        miText = miText.replaceAll(code[letter], letter)
    }

    return miText;
}

