//この下にコードを書いてください:
const container = document.querySelector('#container');


for (let i = 1; i <= 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = `ボタン${i}`;
    container.appendChild(newButton);
}

