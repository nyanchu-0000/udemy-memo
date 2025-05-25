// console.log('条件分岐の前');
// let random = Math.random();
// if (random < 0.5){
//     console.log('数字は0.5より小さい');
// }else {
//     console.log('数字は0.5以上');
// }
// console.log(random);



// const dayOfweek = prompt('英語で曜日を入力してください').toLowerCase();

// if (dayOfweek === 'monday'){
//     console.log('月曜日は憂鬱');
// } else if (dayOfweek === 'saturday'){
//     console.log('土曜日は最高');
// }else if (dayOfweek === 'friday'){
//     console.log('仕事が終わってからの花金は最高')
// }else{
//     console.log ('はあ。。。');
// }



// const age = 64;
// if (age < 5){
//     console.log('無料になります')
// }else if (age < 10){
//     console.log ('子供料金なので1000円になります');
// }else if (age < 65){
//     console.log ('大人料金なので2000円になります');
// }else {
//     console.log('シニア料金なので、1000円になります');
// }


// const password = prompt('パスワードを入力してください');
//▼パスワードは6文字以上
// if (password.length >= 6) {
    //▼パスワードには空白を含めてはいけない
//     if (password.indexOf(' ') === -1){
//         console.log('素晴らしいパスワードです')
//     }else{
//         console.log('パスワードは空白を含んではいけません')
//     }
// }else{
//     console.log('パスワードが短すぎます。6文字以上にしてください。')
// }

//indexOfは、()内の単語の場所の位置(何文字目か)を教えてくれる。入っていなければ-1が出力されるため、('')で空白を調べ、-1によって空白が存在するかどうかを調べることができる


// if ('null'){
//     console.log('TRUTHY');
// }else{
//     console.log('FALSY');
// } //FALSY　(nullはFALSYである)

// 1 === 1 && 2 < 7 //true　(&&の左右どちらもtrueなのでtrueになる)

const password = prompt('パスワードを入力してください');

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log('素晴らしいパスワードです！');
}else{
    console.log('パスワードのフォーマットが無効です');
} //パスワードが6桁以上で且つ空白が含まれていないもののみ、素晴らしいパスワードです！が出力される