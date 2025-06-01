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

// const password = prompt('パスワードを入力してください');

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('素晴らしいパスワードです！');
// }else{
//     console.log('パスワードのフォーマットが無効です');
// } //パスワードが6桁以上で且つ空白が含まれていないもののみ、素晴らしいパスワードです！が出力される

// const age = -10;
// if((age >= 0 && age< 5) || age >= 65){ //0歳以上且つ、5歳未満または65歳以上
//     console.log('無料です');
// }else if (age >= 5 && age < 10){ //5歳以上且つ、10歳未満
//     console.log('子供です');
// }else if (age >= 10 && age < 65){ //10歳以上且つ、65歳未満
//     console.log('大人料金です');
// } else{ //その他は「無効な年齢です」
//     console.log('無効な年齢です');
// }
// 無効な年齢です（-がつくとあり得ない年齢なので、無効と出る。）

// let username = prompt('ユーザーを入力してください');

// if (!username){//空文字はfalseyな値なので、!をつけてtrueにする。そのため以下が実行される
//     username = prompt('問題が起きました。ユーザー名を入力してください:');
// }//空白で入力した場合、問題が起きました。ユーザー名を入力してくださいと出力される

// const age = 8;
// if(!(age >= 0 && age< 5 || age >= 65)){ //0歳以上且つ、5歳未満または65歳以上じゃない人(!がついているので否定形)
// console.log('有料です');
// }//有料です

// const day = 1;

// switch(day){
//     case 1:
//     console.log('hello');
// }//const dayが1の場合console.logを実行

const day = 7;

switch (day) {
    case 1:
        console.log("月曜日");
        break;
    case 2:
        console.log("火曜日");
        break;
    case 3:
        console.log("水曜日");
        break;
    case 4:
        console.log("木曜日");
        break;
    case 5:
        console.log("金曜日");
        break;
    case 6:
    case 7:
        console.log("週末");
        break; //breakがない限り後続を出力し続ける特性を利用し、6と7を共に同じ出力にしたい場合は、breakを用いず、続けて記載する。
    default:
        console.log("無効な数字です"); //elseの役割。上記以外の数字が入力されると出力される
}

//水曜日　constの数字と同じものに入れ替わる。breakとは、そこで打ち切りを示す。switchには、仮に3が選ばれたら、後続の木曜日 金曜日も呼び出される特性があるので、breakを使用してそれ以降の呼び出しを止める。
