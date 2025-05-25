## JavaScriptの基本

### プリミティブ型

JavaScriptが元々持っている基本的なデータ型

* Number
* String
* Boolean
* Null
* Undefined

---

### Number (数値型)

* **`%` (剰余演算子)**: 割り算の余りを計算する。割り切れる場合は`0`になるため、奇数か偶数かを見分けるのに使える
    ```javascript
    5 % 2; // 1
    4 % 2; // 0
    ```
* **`**` (べき乗演算子)**: 乗算を行うことができる
    ```javascript
    3 ** 2; // 9 (3の2乗)
    ```
* **`NaN` (Not a Number)**: 数値ではないことを示す特殊なNumber型の値
    ```javascript
    0 / 0;       // NaN
    1 + NaN;     // NaN
    200 + 0 / 0; // NaN (0/0 が NaN のため)
    ```
* **`typeof` 演算子**: データ型を文字列で返す
    ```javascript
    typeof 4;   // "number"
    typeof NaN; // "number" (NaNもNumber型の一種)
    ```

---

### 変数

変数に名前をつけて保存しておくことができる

#### `let`

再代入可能な変数を宣言

```javascript
let year = 1985;
yeer //1985 
hoge 5
moge 1
let total = hoge + moge;
total　//6
hoge = hoge + 1;　//6

```
#### 変数の更新
```javascript

let score = 10;

// 基本的な更新
score = score + 5; // score は 15 になる

// 短縮形 (自己代入演算子)
score += 5; // さらに5を加算 (score は 20 になる)（score = score + 5; と同じ意味)

// インクリメント (1増やす)
score++;    // scoreを1ずつやす

```
---
### const  
再代入不可能な変数を宣言する（定数）。一度値を設定すると変更できない


```javascript
const PI = 3.14;
// PI = 3.14159; // エラーが発生する

const hoge = 26;
console.log(hoge); // 26
// hoge += 1; // エラー (TypeError: Assignment to constant variable.)
```

---
### var  
`let` と同様に再代入可能な変数を宣言しますが、古いバージョンのJavaScriptで使われていたもので、現在は `let` や `const` の使用が推奨されている

```javascript
var moge = 12345;
moge += 1;
console.log(moge); // 12346
```
---
### Boolean(真偽値型)  
true (真) または false (偽) のどちらかの値を持つ

```javascript
let isLoggedIn = true;
let gameOver = false;
```
---
### 変数名
変数には分かりやすい名前を付けることが重要

`キャメルケース` (camelCase): 最初の単語は小文字で、後続の各単語の先頭を大文字にする。例:`currentYear` (JavaScriptで最も一般的)

`スネークケース` (snake_case): 単語間をアンダースコアでつなぐ。例: `current_year`

`パスカルケース` (PascalCase): すべての単語の先頭を大文字にする。クラス名などによく使われる。例: `CurrentYear`

命名のヒント:`isLoggedInUser` のように is で始めると、Boolean型であることが分かりやすくなる。
`hasHeader` のように has で始めると、何かを持っているかどうかの状態を表す変数であることが分かりやすくなる。

---

`String` (文字列型)

文字の並びを表すデータ型。シングルクォート (') またはダブルクォート (") で囲む

```javascript
let userName = "yamada";
let message = "I'm happy"; // シングルクォート内でシングルクォートを使う場合はエスケープ(\)が必要

'hoge' + 'moge'; // "hogemoge" (文字列の結合)

let lastName = '山田';
let firstName = '太郎';
lastName + firstName;      // "山田太郎"
lastName + ' ' + firstName; // "山田 太郎" (空白を挟む)
```
---
#### 数値と文字列の結合:
数値と文字列を + で結合すると、数値は文字列に変換されて結合される。（ストリングになる）

```javascript
1 + "hoge"; // "1hoge"
```
---
### String メソッド (thing.method())  
文字列に対して様々な操作を行うための関数

`.toUpperCase()`: 文字列をすべて大文字に変換

`.toLowerCase()`: 文字列をすべて小文字に変換

```javascript
let hello = "hello world";
hello.toUpperCase(); // "HELLO WORLD"

"HELLO WORLD".toLowerCase(); // "hello world"
// メソッドの後には必ず () をつけないと実行されない
```
---
#### `.trim`()
文字列の両端にある空白文字（スペース、タブ、改行など）を削除する

```javascript
let userNameInput = '      yamada      ';
userNameInput.trim(); // "yamada"
```
---
#### `メソッドチェーン`
複数のメソッドを連続して呼び出すことができる。実行順序は記述した順

```javascript
let greeting = '      hello world!!!!      ';
greeting.trim().toUpperCase(); // "HELLO WORLD!!!!"
// greeting.toUpperCase().trim(); でも同じ結果になる場合があるが、処理の意図によって順番は重要
```
---
#### `インデックス` (添字)  
文字列内の各文字は、先頭から 0 で始まる番号（インデックス）を持っている

```javascript
文字列: C H I C K E N
インデックス: 0 1 2 3 4 5 6

let cat = 'Stray Cat';
cat[0]; // "S"
cat[1]; // "t"
```
---
#### `.length` プロパティ  
文字列の長さを返す（文字数）。インデックスとは異なり、1 から数える

```javascript
let cat = 'StrayCat';
cat.length; // 8 (8文字のため)
```
---

#### `indexOf`　引数
指定された値が最初に現れたインデックスを返す。値が見つからない場合は-1を返す。（0からカウントする）

```javascript
let tvShow = 'catdog' ;
tvShow.indexOf('cat');　//0　(catが始まるのは0文字目)
tvShow.inDexOf('dog');　//3　(dogが始まるのは3文字目)
tvShow.indexOf('z');　//-1(not found)　(zは入っていない)
```
---
#### `slice`　　引数
()で指定した数字の文字数の場所から、文字を切り取ることができる(0から数える)

```javascript
'hello happy world!!!!'.slice(6);　//"happy world!!!!"　(取り出しを終える前のインデックス。このインデックスにある文字は含まれない)

let hello = 'hello happy world!!!!';
hello.slice(6,11);　//"happy"　(カンマで次の引数を入れることができる)

hello.slice(-6);　//"ld!!!!"　(マイナスを使うと後ろから数えて切り取る)

```
---

#### `.replace`  
()内の用語に置き換え。('hello','good naight');helloをgood naightに置き換える。最初に見つかったhelloのみなので、2回出てきた場合は最初のhelloのみgood naightに置き換わる

```javascript
let hello = 'hello happy world!!!!';
hello.replace('hello','good night');　//"good night happy world!!!!"
hello.replace('h','H');　//"Hello happy world!!!!"　(最初に見つかったhのみHに置き換えられるので、happyはそのまま)
```
---

#### `.repeat` 
  
()内の回数リピートされる

```javascript
'hello'.repeat(5);　//"hellohellohellohellohello"
```
---

### テンプレートリテラル
文字列の中に変数や式、改行を含めることができる便利な構文
`${}`で書かれたものが文字列に埋め込まれる
使うのは、シングルクォート('')ではなく、バックティック(``)

```javascript
`hello ${1 + 2 + 9}` // "hello 12"
const message = `今日の合計は${10 + 20}です。`;
```
---

### Null
意図的に値が存在しないことを表す
undifindは、わからない
nullは、意図的に存在しないことを明示
```javascript
let loggedInUser = null;
```
---
### Mathオブジェクト
`Math.randum()`は、0以上1未満のランダムな数字を返す
```javascript
Math.randum() * 5　//0.5303477789849065
Math.floor(Math.random() * 5)　//3　(小数点以下切り捨て)
Math.floor(Math.random() * 5) + 1　//1~5までのランダムな数字が出力される
Math.floor(Math.random() * 3) + 20　//20~22のランダムな数字が出力される
```
---

### 条件文
`比較演算子`  
結果は全てBooleanになる
（文字列を比較することもできる。平仮名（Unicodeのブロック）で表が載っているサイトを参照）

`<`　より大きい  
`>`　より小さい  
`<=`　以上  
`>=`　以下  
`==`　等価  
`!=`　不当価  
`===`　厳密な等価  
`!==`　厳密な不当価  

```javascript
1 > 3　//false
1 < 3　//true

let age = 31;
age >= 18;　//true
```
---

```javascript
1 == "1";　//true　(==は、値が等しいかチェックするが、肩が等しいかはチェックしない)
1 != "1";　//false　(==の反対。等しくないかをチェックするので、1は2ではないのでtrue==と同様、型は関係なく、値のみを見る)

1 === "1";　//false　(値と型の両方が一致するかチェックする)
1 !== "1";　//true　(===の反対。値と型のt両方を見て、一致していなければtrue)
```
---

### 条件分岐
`IF`  
条件がtrueの場合に処理を実行する
```javascript
console.log('条件分岐の前');
let random = Math.random();
if (random < 0.5){
    console.log('数字は0.5より小さい');
    console.log(random);
}

```
---
`else if`
```javascript
const dayOfweek = 'Friday';

if (dayOfweek === 'Manday'){
    console.log('月曜日は憂鬱');
} else if (dayOfweek === 'Saturday'){
    console.log('土曜日は最高');
}else if (dayOfweek === 'Friday');{
    console.log('仕事が終わってからの花金は最高')
}　//仕事が終わってからの花金は最高
```

```javascript
const age = 4;
if (age < 5){
    console.log('無料になります')
}else if (age < 10){
    console.log ('子供料金なので1000円になります');
}else if (age < 65){
    console.log ('大人料金なので2000円になります');
}　//無料になります　(4は10や65未満でもあるが、上から実行されるため、最初に指定されたlogになる)
```
---

`else if`  
条件分岐の最後に登場する。「それ以外は」
```javascript
const dayOfweek = prompt('英語で曜日を入力してください').toLowerCase();

if (dayOfweek === 'monday'){
    console.log('月曜日は憂鬱');
} else if (dayOfweek === 'saturday'){
    console.log('土曜日は最高');
}else if (dayOfweek === 'friday'){
    console.log('仕事が終わってからの花金は最高')
}else{
    console.log ('はあ。。。');
}　//promptで入力画面が表示され、入力された文字に合わせて出力される。monday、saturday、friday以外は全てelseである、「はあ。。。」が出力される。toLowerCase()を入れておくことで、入力が大文字でも小文字に統一される
```

```javascript
console.log('条件分岐の前');
let random = Math.random();
if (random < 0.5){
    console.log('数字は0.5より小さい');
}else {
    console.log('数字は0.5以上');
}
console.log(random);　//elseでは、ramdomが0.5より小さいもの以外(つまり0.5以上)を表示
```

```javascript
const age = 64;
if (age < 5){
    console.log('無料になります')
}else if (age < 10){
    console.log ('子供料金なので1000円になります');
}else if (age < 65){
    console.log ('大人料金なので2000円になります');
}else {
    console.log('シニア料金なので、1000円になります');
}　//elseでは、それ以外の人はシニアになるので上記の表示になる
```
---

### if文のネスト
if文の中にif文を入れる
ネストした文章
```javascript
const password = prompt('パスワードを入力してください');
//▼パスワードは6文字以上
if (password.length >= 6) {
    //▼パスワードには空白を含めてはいけない
    if (password.indexOf(' ') === -1){
        console.log('素晴らしいパスワードです')
    }else{
        console.log('パスワードは空白を含んではいけません')
    }
}else{
    console.log('パスワードが短すぎます。6文字以上にしてください。')
}

//indexOfは、()内の単語の場所の位置(何文字目か)を教えてくれる。入っていなければ-1が出力されるため、('')で空白を調べ、-1によって空白が存在するかどうかを調べることができる
```
---

### TRUTHY/FALSYな値
falsyな値
`faise`
`0`
`""(空文字)`
`null`
`undefined`
`NaN`
上記以外はtruthyな値

```javascript
if ('null'){
    console.log('TRUTHY');
}else{
    console.log('FALSY');
} //FALSY　(nullはFALSYである)
```
---

### 論理演算子
&&　且つ

```javascript
1 === 1 && 2 < 7 //true　(&&の左右どちらもtrueなのでtrueになる)

const password = prompt('パスワードを入力してください');

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log('素晴らしいパスワードです！');
}else{
    console.log('パスワードのフォーマットが無効です');
} //パスワードが6桁以上で且つ空白が含まれていないもののみ、素晴らしいパスワードです！が出力される
```


