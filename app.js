//この下にコードを書いてください:
const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('クリックした！');
    console.log('ほげほげ');
}

function scream(){
    console.log('あああああああ');
    console.log('いやーーー');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('h1をクリック');
}