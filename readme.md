## JavaScript の基本

### プリミティブ型

JavaScript が元々持っている基本的なデータ型

-   Number
-   String
-   Boolean
-   Null
-   Undefined

---

### Number (数値型)

-   **`%` (剰余演算子)**: 割り算の余りを計算する。割り切れる場合は`0`になるため、奇数か偶数かを見分けるのに使える
    ```javascript
    5 % 2; // 1
    4 % 2; // 0
    ```
-   **`**` (べき乗演算子)\*\*: 乗算を行うことができる
    ```javascript
    3 ** 2; // 9 (3の2乗)
    ```
-   **`NaN` (Not a Number)**: 数値ではないことを示す特殊な Number 型の値
    ```javascript
    0 / 0; // NaN
    1 + NaN; // NaN
    200 + 0 / 0; // NaN (0/0 が NaN のため)
    ```
-   **`typeof` 演算子**: データ型を文字列で返す
    ```javascript
    typeof 4; // "number"
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
score++; // scoreを1ずつやす
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

`let` と同様に再代入可能な変数を宣言しますが、古いバージョンの JavaScript で使われていたもので、現在は `let` や `const` の使用が推奨されている

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

`キャメルケース` (camelCase): 最初の単語は小文字で、後続の各単語の先頭を大文字にする。例:`currentYear` (JavaScript で最も一般的)

`スネークケース` (snake_case): 単語間をアンダースコアでつなぐ。例: `current_year`

`パスカルケース` (PascalCase): すべての単語の先頭を大文字にする。クラス名などによく使われる。例: `CurrentYear`

命名のヒント:`isLoggedInUser` のように is で始めると、Boolean 型であることが分かりやすくなる。
`hasHeader` のように has で始めると、何かを持っているかどうかの状態を表す変数であることが分かりやすくなる。

---

`String` (文字列型)

文字の並びを表すデータ型。シングルクォート (') またはダブルクォート (") で囲む

```javascript
let userName = "yamada";
let message = "I'm happy"; // シングルクォート内でシングルクォートを使う場合はエスケープ(\)が必要

"hoge" + "moge"; // "hogemoge" (文字列の結合)

let lastName = "山田";
let firstName = "太郎";
lastName + firstName; // "山田太郎"
lastName + " " + firstName; // "山田 太郎" (空白を挟む)
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
let userNameInput = "      yamada      ";
userNameInput.trim(); // "yamada"
```

---

#### `メソッドチェーン`

複数のメソッドを連続して呼び出すことができる。実行順序は記述した順

```javascript
let greeting = "      hello world!!!!      ";
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
let cat = "StrayCat";
cat.length; // 8 (8文字のため)
```

---

#### `indexOf`　引数

指定された値が最初に現れたインデックスを返す。値が見つからない場合は-1 を返す。（0 からカウントする）

```javascript
let tvShow = "catdog";
tvShow.indexOf("cat"); //0　(catが始まるのは0文字目)
tvShow.inDexOf("dog"); //3　(dogが始まるのは3文字目)
tvShow.indexOf("z"); //-1(not found)　(zは入っていない)
```

---

#### `slice`　　引数

()で指定した数字の文字数の場所から、文字を切り取ることができる(0 から数える)

```javascript
"hello happy world!!!!".slice(6); //"happy world!!!!"　(取り出しを終える前のインデックス。このインデックスにある文字は含まれない)
let hello = "hello happy world!!!!";
hello.slice(6, 11); //"happy"　(カンマで次の引数を入れることができる)
hello.slice(-6); //"ld!!!!"　(マイナスを使うと後ろから数えて切り取る)
```

---

#### `.replace`

()内の用語に置き換え。('hello','good naight');hello を good naight に置き換える。最初に見つかった hello のみなので、2 回出てきた場合は最初の hello のみ good naight に置き換わる

```javascript
let hello = "hello happy world!!!!";
hello.replace("hello", "good night"); //"good night happy world!!!!"
hello.replace("h", "H"); //"Hello happy world!!!!"　(最初に見つかったhのみHに置き換えられるので、happyはそのまま)
```

---

#### `.repeat`

()内の回数リピートされる

```javascript
"hello".repeat(5); //"hellohellohellohellohello"
```

---

### テンプレートリテラル

文字列の中に変数や式、改行を含めることができる便利な構文
`${}`で書かれたものが文字列に埋め込まれる
使うのは、シングルクォート('')ではなく、バックティック(``)

```javascript
`hello ${1 + 2 + 9}`; // "hello 12"
const message = `今日の合計は${10 + 20}です。`;
```

---

### Null

意図的に値が存在しないことを表す
undifind は、わからない
null は、意図的に存在しないことを明示

```javascript
let loggedInUser = null;
```

---

### Math オブジェクト

`Math.randum()`は、0 以上 1 未満のランダムな数字を返す

```javascript
Math.randum() * 5; //0.5303477789849065
Math.floor(Math.random() * 5); //3　(小数点以下切り捨て)
Math.floor(Math.random() * 5) + 1; //1~5までのランダムな数字が出力される
Math.floor(Math.random() * 3) + 20; //20~22のランダムな数字が出力される
```

---

### 条件文

`比較演算子`  
結果は全て Boolean になる
（文字列を比較することもできる。平仮名（Unicode のブロック）で表が載っているサイトを参照）

`<`　より大きい  
`>`　より小さい  
`<=`　以上  
`>=`　以下  
`==`　等価  
`!=`　不当価  
`===`　厳密な等価  
`!==`　厳密な不当価

```javascript
1 > 3; //false
1 < 3; //true
let age = 31;
age >= 18; //true
```

---

```javascript
1 == "1"; //true　(==は、値が等しいかチェックするが、肩が等しいかはチェックしない)
1 != "1"; //false　(==の反対。等しくないかをチェックするので、1は2ではないのでtrue==と同様、型は関係なく、値のみを見る)
1 === "1"; //false　(値と型の両方が一致するかチェックする)
1 !== "1"; //true　(===の反対。値と型のt両方を見て、一致していなければtrue)
```

---

### 条件分岐

`IF`  
条件が true の場合に処理を実行する

```javascript
console.log("条件分岐の前");
let random = Math.random();
if (random < 0.5) {
    console.log("数字は0.5より小さい");
    console.log(random);
}
```

---

`else if`

```javascript
const dayOfweek = "Friday";

if (dayOfweek === "Manday") {
    console.log("月曜日は憂鬱");
} else if (dayOfweek === "Saturday") {
    console.log("土曜日は最高");
} else if (dayOfweek === "Friday");
{
    console.log("仕事が終わってからの花金は最高");
} //仕事が終わってからの花金は最高
```

```javascript
const age = 4;
if (age < 5) {
    console.log("無料になります");
} else if (age < 10) {
    console.log("子供料金なので1000円になります");
} else if (age < 65) {
    console.log("大人料金なので2000円になります");
} //無料になります　(4は10や65未満でもあるが、上から実行されるため、最初に指定されたlogになる)
```

---

`else if`  
条件分岐の最後に登場する。「それ以外は」

```javascript
const dayOfweek = prompt("英語で曜日を入力してください").toLowerCase();

if (dayOfweek === "monday") {
    console.log("月曜日は憂鬱");
} else if (dayOfweek === "saturday") {
    console.log("土曜日は最高");
} else if (dayOfweek === "friday") {
    console.log("仕事が終わってからの花金は最高");
} else {
    console.log("はあ。。。");
} //promptで入力画面が表示され、入力された文字に合わせて出力される。monday、saturday、friday以外は全てelseである、「はあ。。。」が出力される。toLowerCase()を入れておくことで、入力が大文字でも小文字に統一される
```

```javascript
console.log("条件分岐の前");
let random = Math.random();
if (random < 0.5) {
    console.log("数字は0.5より小さい");
} else {
    console.log("数字は0.5以上");
}
console.log(random); //elseでは、ramdomが0.5より小さいもの以外(つまり0.5以上)を表示
```

```javascript
const age = 64;
if (age < 5) {
    console.log("無料になります");
} else if (age < 10) {
    console.log("子供料金なので1000円になります");
} else if (age < 65) {
    console.log("大人料金なので2000円になります");
} else {
    console.log("シニア料金なので、1000円になります");
} //elseでは、それ以外の人はシニアになるので上記の表示になる
```

---

### if 文のネスト

if 文の中に if 文を入れる
ネストした文章

```javascript
const password = prompt("パスワードを入力してください");
//▼パスワードは6文字以上
if (password.length >= 6) {
    //▼パスワードには空白を含めてはいけない
    if (password.indexOf(" ") === -1) {
        console.log("素晴らしいパスワードです");
    } else {
        console.log("パスワードは空白を含んではいけません");
    }
} else {
    console.log("パスワードが短すぎます。6文字以上にしてください。");
}

//indexOfは、()内の単語の場所の位置(何文字目か)を教えてくれる。入っていなければ-1が出力されるため、('')で空白を調べ、-1によって空白が存在するかどうかを調べることができる
```

---

### TRUTHY/FALSY な値

falsy な値
`faise`
`0`
`""(空文字)`
`null`
`undefined`
`NaN`
上記以外は truthy な値

```javascript
if ("null") {
    console.log("TRUTHY");
} else {
    console.log("FALSY");
} //FALSY　(nullはFALSYである)
```

---

### 論理演算子

`&& (且つ)`

```javascript
1 === 1 && 2 < 7; //true　(&&の左右どちらもtrueなのでtrueになる)

const password = prompt("パスワードを入力してください");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("素晴らしいパスワードです！");
} else {
    console.log("パスワードのフォーマットが無効です");
} //パスワードが6桁以上で且つ空白が含まれていないもののみ、素晴らしいパスワードです！が出力される
```

`||（OR）`
片方が true なら true となる
||
〇〇か〇〇なら true

```javascript
const age = -10;
if ((age >= 0 && age < 5) || age >= 65) {
    //0歳以上且つ、5歳未満または65歳以上
    console.log("無料です");
} else if (age >= 5 && age < 10) {
    //5歳以上且つ、10歳未満
    console.log("子供です");
} else if (age >= 10 && age < 65) {
    //10歳以上且つ、65歳未満
    console.log("大人料金です");
} else {
    //その他は「無効な年齢です」
    console.log("無効な年齢です");
}
// 無効な年齢です（-がつくとあり得ない年齢なので、無効と出る。）
```

`!（NOT）`
!は、true と false を反転させる

```javascript
let username = prompt("ユーザーを入力してください");
if (!username) {
    //空文字はfalseyな値なので、!をつけてtrueにする。そのため以下が実行される
    username = prompt("問題が起きました。ユーザー名を入力してください:");
} //空白で入力した場合、問題が起きました。ユーザー名を入力してくださいと出力される
```

```javascript
const age = 8;
if (!((age >= 0 && age < 5) || age >= 65)) {
    //0歳以上且つ、5歳未満または65歳以上じゃない人(!がついているので否定形)
    console.log("有料です");
} //有料です
```

### SWITCH

条件分岐の一種で、一つの値を基点とした場合わけに特化している

```javascript
const day = 1;

switch (day) {
    case 1:
        console.log("hello");
} //const dayが1の場合console.logを実行
```

`break;`

```javascript
const day = 3;

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
} //水曜日　constの数字と同じものに入れ替わる。breakとは、そこで打ち切りを示す。switchには、仮に3が選ばれたら、後続の木曜日 金曜日も呼び出される特性があるので、breakを使用してそれ以降の呼び出しを止める。
```

`default`

```javascript
const day = 6;

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
```

### JavaScript の配列

順序をもった「値のコレクション」
・SNS のコメント一覧
・ゲームの中のステージ一覧
・プレイリストの歌一覧

```javascript
//空の配列を作成
let students = [];

//Stringの配列
let colors = ["red", "orange", "yellow"];

//Naumberの配列
let lottoNums = [19, 22, 56, 12, 51];

//ごちゃ混ぜの配列
let stuff = [true, 68, "cat", null];
```

#### 配列のインデックス(配列の更新)

各様のには 0 から始まるインデックスが割り当てられる

```javascript
let days = ['Monday', 'Tuesday', 'Wednesday'];

days //['Monday', 'Tuesday', 'Wednesday']
days[0] //Monday (Mではなく、一つ目の要素の名前。0から数える)
days.lengs /3　(配列の場合、文字数ではなく配列数になる)
days[3] //undefined
days[1][0] //'T' ([]を二つ使用することで、1つ目の配列の中の0文字目という指定ができる)
```

文字列を更新することはできない

```javascript
let firstName = "ken";
firstName[0]; //'k'
firstName[0] = "K"; //'K' (文字列1文字目のkを大文字に変更する)
firstName; //ken (!できない！指定された'文字列'は不変。一度定義した文字列は変更することはできない)
```

配列を更新することはできる

```javascript
let colors = ["rad", "orange", "yallow"];
colors[0] = "red"; //'red' (配列1つ目のradをredに変更する)
colors; // ['red', 'orange', 'yallow']
colors[2] = "yellow"; //'yellow'
colors; //['red', 'orange', 'yellow'] (変更できる)
colors[1] = 70; //70 (1つ目の配列を70に変更)
colors; //['red', 70, 'yellow'] (数字にも変更できる。配列はどんな方でも入れることができる)

colors[10] = "purple"; //'purple' (存在しない配列10個目にpurpleを入れる)
colors; //['red', 70, 'yellow', empty × 7, 'purple'] (入れることができる。10個目に入れるため、存在しないデータはenpty×が代入される)
colors.lemgth; //11 (empty分もカウントされる)
colors[5]; //undefined (ただし、存在しない箇所についてはundefinedと出力される)
```

#### 配列のメソッド

push-末尾に追加
pop-末尾を取り除く
shift-先頭を取り除く
unshift-先頭に追加

.〇〇()になる。追加する場合は()内に追加する文言を入力し、削除の場合は()のみで良い

`.push()`末尾に追加

```javascript
let movieLine = ["yamada", "tanaka"];
movieLine[2] = "suzuki";
movieLine; //['yamada', 'tanaka', 'suzuki'] (配列2つ目(末尾)に追加することはできるが、毎回何個目かを数えるのは大変)

movieLine.push("sato");
movieLine; //['yamada', 'tanaka', 'suzuki', 'sato'] (pushメソッドを追加することで、数えなくても必ず末尾に追加することができる。メソッドは()を使用する)

//stringでtoUpperCaseを使用した際は、元々のstring自体は変わっていない。配列の場合は、元々の配列を変更できる。この場合、movieLine自体が変更される
```

`.pop()`末尾を取り除く

```javascript
let movieLine = ["yamada", "tanaka", "suzuki", "sato"];
movieLine.pop(); //'sato' (末尾の要素が返ってくる)
movieLine; //['yamada', 'tanaka', 'suzuki'] (末尾の'sato'が取り除かれる)
```

```javascript
let blocks = ["tumiki1", "tumiki2", "tumiki3"];
blocks.pop(); //tumiki3
blocks.pop(); //tumiki2
blocks.pop(); //tumiki1
```

`shift()`先頭を取り除く

```javascript
let movieLine = ["yamada", "tanaka", "suzuki", "sato"];
movieLine.shift(); //'yamada' (先頭のyamadaを取り除く)
movieLine; //[ "tanaka", "suzuki", "sato"]
```

`.unshift()`先頭に追加

```javascript
let movieLine = ["yamada", "tanaka", "suzuki", "sato"];
movieLine.unshift("vip"); //(先頭にvipを追加する)
movieLine[("vip", "yamada", "tanaka", "suzuki", "sato")];
```

#### その他のメソッド

`concat()`配列を融合
二つの配列を結合して新しい配列を作る。（元の配列の中身は変わらない）

```javascript
let cats = ["tama", "tora"];
let dogs = ["poch", "hach"];
cats.concat(dogs); //['tama', 'tora', 'poch', 'hach'] (dogsに融合するため、先頭は猫の名前で後ろに犬が入る)
dogs.concat(cats); //['poch', 'hach', 'tama', 'tora'] (この場合、catsに融合するため、先頭は犬の名前で後ろに猫が入る)
```

`includes()`boolian（true,false）を返すメソッド
配列の中に、指定した値が含まれているかどうかをチェックする

```javascript
let cats = ["tama", "tora"];
cats.includes("tama"); //true (catsの中にtamaが入っているため)
cats.includes("Tama"); //false (完全一致をチェックするので、大文字はfalseになる)
```

`indexOf()`（index は、（）内の文字が何文字目にあるかを教えてくれるメソッド。ないものは-1 で返される）
文字列だけでなく、配列の単語の位置も調べることができる

```javascript
let pets = ["poch", "hach", "tama", "tora"];
pets.indexOf("pochi"); //0 (0番目にpochiがある)
pets.indexOf("tama"); //2
pets.indexOf("luna"); //-1 (存在しないものは-1)
```

```javascript
let pets = ['poch', 'hach', 'tama', 'tora' 'tama']
pets.indexOf('tama'); //2 (文字列の時と同じで、最初に登場した単語の位置になる)
```

`reverse()`配列を逆順に変更させる
元々の配列自体の順番を変更する

```javascript
let pets = ["poch", "hach", "tama", "tora"];
pets.reverse(); //['tora', 'tama', 'hach', 'poch']
pets; //['tora', 'tama', 'hach', 'poch'] (新しい配列が逆順になったのではなく、pets自体が逆順になる)
```

`.slice()`配列の一部分を切り取って新しい配列を作ることができる
元の配列は変わらない

```javascript
let colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];
colors.slice(); //['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white']; (返答はそのままだが、新しい配列がコピーされる)
colors.slice(1); //['orange', 'yellow', 'green', 'blue', 'black', 'white'] (コピーではなく、切り取りをしたい際には()内に開始地点を入れる。orange以降を切り取りたい場合は、orangeは1番目なので1を入れる)
```

```javascript
let colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];
color.slice(2, 4); //['yellow, 'green'] (終わり一も指定できる。4はblueになるが、入力した値の位置は含まれず、一個前のものになるので注意)
colors.slice(-1); //['white'] （-を入れると、後ろからカウントされる）
```

`.splice()`既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることができる
元の配列自体が変わる

いくつ目以降いくつ消したいかを記載

```javascript
let colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];
colors.splice(5, 1); //['black'] (ブラックを削除する。5個目から1つを削除)
colors; //['red', 'orange', 'yellow', 'green', 'blue', 'white'];
```

```javascript
let days = ["Monday", "Tuesday", "Wednesday"];
days.splice(1, 2); //['Tuesday', 'Wednesday'] (1つ目の単語移行2つ消す)
days; //['Monday']
```

〇〇.splice(1, 0, '〇〇')
1→index の位置(単語位置) 0→ 消す個数 〇〇 → 追加する単語

```javascript
let colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];
colors.splice(1, 0, "red-orange"); //1つ目のインデックスを0個削除し、'red-orangeを追加する'
colors; //['red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'black', 'white']

colors.splice(4, 0, "yellow-green", "frestgreen"); //複数追加することもできる
colors; //['red', 'red-orange', 'orange', 'yellow', 'yellow-green', 'frestgreen' 'green', 'blue', 'black', 'white']
```

```javascript
colors.splice(2, 2, "DELETED!!!"); //2つ目のインデックスから2つ削除し、DELETED!!!を追加する
colors; //['red', 'red-orange', 'DELETED!!!', 'yellow-green', 'frestgreen' 'green', 'blue', 'black', 'white']
```

`sort`並びかえる
sort する際に string に変換される

```javascript
let scores = [1, 70, 100, 2500, 9, 0, 34];
scores.sort(); //[-12, 0, 100, 2500, 34, 70, 9] (-は0より前、0以降、小さい順に並ぶが、1の次は9ではなく、数字の一文字目で判断されるため、100の1文字目が1なので前に来る。その次は2の2500)
```

#### 配列の等価性

配列の中身が等しいかどうかではなく、全く同じ配列を指しているかどうかを確認している

```javascript
["hai", "bye"] === ["hai", "bye"]; //false (配列の中身は同じでも配列の参照先（メモリ上のアドレス先が違うため)
```

```javascript
let nums = [1, 2, 3];
let numsCopy = naums;

nums.push(4);
nums; //[1, 2, 3, 4]
numsCopy; //[1, 2, 3, 4]
//この場合は、nums=「1, 2, 3, 4]=numsCopyのため、同じ住所を指していることになる
```

### 配列の const

中の値は変更できるが、変数への再代入はできない

```javascript
const myEggs = ["brown", "brown"];
myEggs.push("purple");
myEggs[0] = "green"; //メソッドを使用して同じ箱の中の中身を変えることはok

myEggs = ["blue", "pink"]; //Error! 直接myEggsを再代入することは、違う箱を作っていることと同じになるのでNG
```

#### 多次元配列

配列の中に配列を入れる

```javascript
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O, 'X'']];
gameBoard[1] //['O', null, 'X']
gameBoard[1][1] //null (2個目の配列の2目の単語はnull)
```

```javascript
const airplaneSeats = [
    ["Ruth", "Anthony", "Stevie"],
    ["Amelia", "Pedro", "Maya"],
    ["Xavier", "Ananya", "Luis"],
    ["Luke", null, "Deniz"],
    ["Rin", "Sakura", "Francisco"],
];

airplaneSeats[3][1] = "Yumi"; //airplaneSeatsの中のnullの値をYumiに代入する
```

### オブジェクト

プロパティの集合体
プロパティはキーと値のペア

オブジェクトリテラル
配列も Booloan でもなんでも入れられる

```javascript
const cat = {
    name: "Tama",
    age: 2,
    colors: ["orange", "white"],
    isHungry: true,
}; //〇〇(キー)：〇〇((値)
```

#### オブジェクトからデータにアクセスする

オブジェクトを作成するときは{}、データにアクセスするときは[]

```javascript
const person = { firstName: "Taro", lastName: "Yamada" };
person["firstName"]; //'Taro'
person["lastName"]; //'Yamada'
```

オブジェクトのキーは String に変換される

```javascript
const years = { 1999: "good", 2020: "bad" };
years; //{1999: 'good', 2020: 'bad'}
years[1999]; //'good'
years["1999"]; //'good' (stringでもstringじゃなくても大丈夫。ナンバー型はstringではないので、'1999'ではなく1999でもok（ナンバー型は変数にならない)
```

```javascript
const person = { firstName: "Taro", lastName: "Yamada" };
person.fistName; //'Taro' (変数.キーはok。''なしでok)
person["firstName"]; //'Taro'
person[firstName]; //Error! (変数は必ずstring型なので''で囲う必要がある)
person["first" + "NAme"]; //'Taro' (+で繋げてもok)
```

```javascript
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

//restaurantの情報を使ってfullAddressという変数に住所を代入する
const fullAddress =
    restaurant["address"] +
    "," +
    restaurant["city"] +
    "," +
    restaurant["state"] +
    "," +
    restaurant["zipcode"];
//'64 Johnson Ave, Brooklyn, NY 11206'
```

#### データの参照方法

```javascript
const midterms = { taro: 96, jiro: 78 };
midterms.jiro; //78
midterms.jiro = 79; //jiroを79に変更
midterms; //{taro: 96, jiro: 79}

midterms["jiro"] = 79; //[]での指定
```

```javascript
midterms.saburo = 80;
midterms; //{taro: 96, jiro: 79, saburo: 80}

midterms["saburo"] = 80; //[]での指定
```

#### 配列とオブジェクト

```javascript
const comments = [
    { username: "yamada", text: "ああああ", votes: 9 },
    { username: "tanaka", text: "いいいい", votes: 123 },
];

comments[1]["text"]; //'いいいい' (インデックスが1の要素、その中のtextを見る)
```

### 繰り返し処理

#### ループ

'hello'を 10 回出力する、配列の中の全数字の和を求める など

`for文`
変数は i が主流。それぞれの箇所を;で分ける
1〜10 までの数字を出力する

```javascript
for (let i = 1; i <= 10; i++) {
    //1から設定したいので、1を設定。i++は増減式。この場合、1<=10までの間は一つずつ増加し続ける>
    console.log(i);
}
```

'Da ba dee da ba daa'を 6 回出力する

```javascript
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
} //console.log内に文字列を入れることで、特定の文字を繰り返すことができる
```

#### for 文でループ

0〜20 までの偶数を出力させる

```javascript
for(let i 0; i <= 20; i += 2){ //2から始めたいときは、0のところを2に変更する。奇数を出力したいときは、0を1に変更すれば、1を2ずつ足していくので奇数になる
    console.log(i);
}
```

100 から 0 まで 10 ずつ減らす

```javascript
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}
```

10 から 1000 まで 10 ずつかける

```javascript
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}
```

```javascript
for (let i = 0; i < animals.lengs; i++>){
    console.log(i,animals[i]);
}
```

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
people という変数に人の名前を入れています。この配列の一つ一つの要素を for 文で処理して、名前を大文字で console.log してください。

```javascript
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
```

#### ループのネスト

```javascript
for (let i = 1; i <= 10; i++){
    console.log(`iは${i}`);
    for (let j = 1; j < 4; j++>){
        console.log(` jは${j}`);
    }
}
//iが1〜10まで一つずつプラスされていく
//jが1〜3まで一つずつプラスされていく
//iが1を出力し、jが1 2 3 を出力。4は出力されないので、その時点で出力が中断され、iの出力に戻る。iが2を出力し、jが1 2 3を出力
```

```javascript
const seatingChart = [
    ["伊藤", "松本", "鈴木"],
    ["井上", "田中", "河野", "吉田"],
    ["安部", "後藤", "橋本"],
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; //iは行
    for (let j = 0; j < row.length; j++) {
        //jは列
        console.log(row[j]);
    }
}
```

####　 while でのループ

```javascript
let const = 0;
while (count < 10){
    console.log(count)
    count++;
}
```

```javascript
const SECRET = "supersecret";
let guess = prompt("秘密のコードを入力してください");
while (guess !== SECRET) {
    guess = prompt("秘密のコードを入力してください");
} //入力したコードが一致するまでループされる
console.log("正解！！おめでとう！！");
```

####　 break について

```javascript
let = input = prompt("何か入力してください");
while (true) {
    input = prompt(input);
    if (input === "quit") {
        break;
    }
} //quitとinputが一致したらbreakがかかって終了させる。
```

####　 for...of
配列の要素を順番に処理できる　　
for (変数 of 列挙可能なオブジェクト){
//処理の内容
}

記述が長くなってしまう ↓

```javascript
const subreddits = [
    'cooking',
    'books',
    'lofe',
    'pics',
];

for (let i = 0; i < subreddita.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`;)
}
```

上と同じ出力でまとめることができる ↓

```javascript
for (let subreddit of subreddits) {
    console.log(subreddit);
}
```

#### オブジェクトの中をイテレート

ループできるのは配列だけではない

```javascript
const testScores = {
    ken: 80,
    yuki: 70,
    taro: 56,
    mina: 78,
    yuko: 76,
};

for (let student of Object.keys(testScores)) {
    console.log(`${student}さんは${testScores[student]}`);
}
//kenさんは80
//VM63:2 yukiさんは70
//VM63:2 taroさんは56
//VM63:2 minaさんは78
//VM63:2 yukoさんは76
```

同じ出力を for...in で行う

```javascript
for (let student in testScores) {
    console.log(`${student}さんは${testScores[student]}`);
}
```

#### todo アプリを作る

・quit が来たらループを抜けさせる
・ユーザーの入力は prompt を使用
・todo の保存は配列を使用
・splice を使用して指定のインデックスを削除する

```javascript
let = input = prompt("コマンドを入力してください(new,list,delete,quit)");
const todos = ["水やりをする", "掃除をする"];
while (input !== "quit" && input !== "q") {
    //quitでもなくqでもない間は処理を続ける
    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    } else if (input === "new") {
        const newTodo = prompt("新しいTodoを入力してください");
        todos.push(newTodo);
        console.log(`「${newTodo}」を追加しました`);
    } else if (input === "delete") {
        const index = parseInt(
            prompt("削除するインデックスを入力してください")
        );
        if (!Number.isNaN(index)) {
            //not a naumberじゃない時は削除
            const deleted = todos.splice(index, 1);
            console.log(`「${deleted[0]}」を削除しました`);
        } else {
            console.log("有効なインデックスを入力してください");
        }
    }
    input = prompt("コマンドを入力してください(new,list,delete,quit)");
}
console.log("アプリを終了しました");
```

### 関数

再利用可能な処理

```javascript
//▼定義
function funcName() {
    console.log("あああ"); //なんらかの処理
}
//▼実行
funcName();
```

printHeart という関数を定義して、'<3'を出力させる

```javascript
function printHeart() {
    console.log("<3");
}

printHeart();
```

#### 関数の引数

関数の入力値

```javascript
function greet(firstName) {
    //定義するものの()内の言葉をパラメーターという
    console.log(`firstName: ${firstName}`);
}
//以下出力
greet("taro"); //firstNAme:taro
greet(); //undefined
//実行する際の()内の言葉を引数という
```

3 回 console.log で、message を大文字に変換した内容を出力

```javascript
function shout(message) {
    const uppercasedMessage = message.toUpperCase();

    console.log(uppercasedMessage);
    console.log(uppercasedMessage);
    console.log(uppercasedMessage);
}
```

#### 複数の引数を渡せる関数

Hi, Ken F.を出力する

```javascript
function greet(firstName, lastName) {
    //定義するものの()内の言葉をパラメーターという
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

greet("Ken", "Fukuyama"); //Hi, Ken F.
```

hihihi を出力する

```javascript
function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
//出力
repeat("hi", 3); //hihihi
```

#### RETURN
組み込みメソッドは実行すると値が返ってくる。この値を保持しておける

```javascript
function add(x, y) {
    return x + y; //returnに到達した時点で関数がそこで終わる性質がある。returnの後にコードを書いても意味がない
}

const sum = add(10, 16);
sum; //26

const answer = add(100, 200);
answer; //300
```

```javascript
function add(x, y) {//addは関数名
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }//returnの時点で関数が終わるから、elseifで定義しなくて良い
    return x + y;
}
```
multiplyという関数を作理、2つの数字を受け取って、その数字の乗算した値をreturnする。
```javascript
function multiply(x, y){
    return x * y;
}

const answer = add(x, y);
answer;
```
短パンででかけても良いような気温かどうかを判断するisShortsWeatherという関数を作ってください。
パラメータは一つ受け取る関数にしてください。例えばtemperatureなど。
temperatureが25以上であれば、trueをreturnしてください。
そうでなければfalseをreturnしてください
```javascript
function isShortsWeather(temperature){
    if (temperature >= 25){
        return true;
    }
    return false;
}
```
lastElementという関数を作ってください。関数は一つの配列を引数として受け取ります。そして、受け取った配列の最後の要素を返してください。もし配列が空の場合は、関数はnullを返してください。
```javascript
function lastElement(x) {
    if (x.length === 0) {

        return null;
    }
    return x[x.length - 1];
}
```
capitalizeという関数を作ってください。この関数は一つのStringを引数として受け取り、そのStringの最初の文字を大文字にした値を返します。
```javascript
function capitalize(x){
    return x[0].toUpperCase()+ x.slice(1);
}
```
sumArrayという関数を定義してください。数字で構成された一つの配列を引数として受け取ります。そして、配列内の数字の和を返してください。
```javascript
function sumArray(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}
```
returnDayという関数を作ってください。この関数は一つの数字を引数として受け取ります（1から7の値）。そして、1から7に対応した曜日を返します（1ならMonday、2ならTuesday、etc.）もし数字が1より小さい、あるいは7より大きい場合はnullを返します。
```javascript
function returnDay(num){
    const day =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if (num > 7 || num <= 0){
        return null
    }
    return day[num - 1];
}
```
#### 関数のスコープ
変数が参照できるかどうか
▼msgはhelpMe関数内でしか参照できない(関数ないで宣言したものは関数内でしか使えない)
```javascript
function helpMe(){
    let msg = "I'm on fire!";
    msg; //"I'm on fire!";
}
msg; //NOT DEFINED!
```
関数の外と中の両方で同じ変数を宣言した場合、関数の中では直近の変数の宣言が優先される。
外からは中の変数にはアクセスできない
（同じ宣言があってもエラーにはならない。）
```javascript
let bird = 'アオサギ';

function birdWatch(){
    let bird = 'ムクドリ';　//←{}内に関数の宣言がされていたらムクドリが優先される。{}内に宣言がなければの外にあるアオサギになる
    console.log(bird);
}

birdWatch();//ムクドリ
```
'カサゴ'
'ヒョウモンダコ'
を出力させる
```javascript
let deadlyAnimal = "ヒョウモンダコ";
 
function handleAnimal() {
    let deadlyAnimal = "カサゴ";
    console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)
```

#### ブロックスコープ
{}で囲まれている部分をブロックという。
PIとcircはブロック内でしか参照できない
```javascript
let radius = 8;
//ブロックここから
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
//ブロックここまで
console.log(radius); //8
console.log(PI); //NOT DEFINED
console.log(circ); //NOT DEFINED
```

#### レキシカルスコープ
コード上のどこで定義されたかでスコープが決まる
```javascript
function bankRobbery(){
    const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];
    function help(){
        for (let hero of heroes){
            console.log(`助けて、${hero}!!!`);
        }
    }
    help();
}
```

```javascript
let x = 'あいうえお';
function hoge(){
    console.log(x);
}
function moge(){
    let moge(){
        let x = 'かきくけこ';
        hoge();
    }
}

hoge()//あいうえお
moge()//あいうえお
```

#### 関数の定義
```javascript
const add = function (x, y){
    return x + y;
}
```
```javascript
const square = function (num) {
    return num * num;
}
square(7); //49
```

#### 高階関数
関数を受け取ったり関数を返す関数
高階関数は：
・引数として関数を受け取る
・戻り値に関数を指定する
```javascript
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
```

#### 関数をリピートする
```javascript
function makeRandomFunc() {
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('おめでとう！！！');
        }
    }else{
        return function(){
            alert('ウィルスに感染しました！！！');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
        }
    }
}
```
#### メソッド
オブジェクトのプロパティに関数を定義できる
```javascript
const math = {
    multiply : function(x, y) {
        return x * y;
    },
    divide   : function(x, y) {
        return x / y;
    },
    square   : function(x){
        return x * x;
    }
};
```
squareというオブジェクトを定義して、areaとperimeterというメソッドをもたせてください。

areaはsideという引数を一つ受け取って、sideを2乗した値を返します
perimeterはsideを受け取って、4を乗算した値を返します
```javascript
const square = {
    area :function(side) {
        return side * side;
    },
    perimeter : function(area) {
        return area * 4;
    }
};
```
#### this
同じオジェクト内の他のプロパティを使いたい時にthisを活用する
```javascript
const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカンショートヘア',
    cry(){
        console.log('にゃー');
    }
}
```
```javascript
const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカンショートヘア',
    cry(){
        console.log(this);
        console.log(`${this.name}がにゃーと泣きました`);
    }
}
```
henというオブジェクトを定義してください。2つのプロパティと、1つのメソッドを定義してください：

nameは'Helen'にしてください

eggCountは0にしてください

layAnEggというメソッドを定義してください。このメソッドは、自分のeggCountを1加算して、'EGG'という文字列をreturnしてください。（thisを使う必要があります）
```javascript
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1;
        return "EGG";
    }
};
```

#### tryとcatch
tryの中で問題が発生したときに、catchの中で問題が起きたときの処理をかく
```javascript
try {
    hello.toUpperCase();
}catch {
    console.log('エラーが起きました！！！');
}

console.log('実行！！！');
```
### 配列のコールバックを使ったメソッド
#### forEach
コールバック関数を受け取り、配列の要素毎に関数が呼ばれる
```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

numbers.forEach(function (element) {
    const.log(element);
});
```
#### map
与えられた関数の配列全ての要素に対して呼び出し、その結果からなる新しい配列を生成する

```javascript
const text = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase();
})
texts; //['rofl', 'lol', 'omg', 'ttyl']
caps; //['ROFL', 'LOL', 'OMG', 'TTYL']
```
```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const doubles = numbers.map(function (num) {
    return num * 2;
});
```
mapメソッドの練習をしましょう！firstNamesという変数を定義してください。fullNamesにmapをかけて、名前（first）だけを取り出してfirstNamesに代入してください。
```javascript
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


const firstNames = fullNames.map(function(name){
    return name.first;
});
```
#### アロー関数
通常の間数式の簡潔な代替構文（ただし制限がある）
```javascript
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}
```
```javascript
const add = (x, y) => {　//パラメータが2個以上の時は()を省略できない
    return x + y;
}

const square = num => { //パラメータが1つの時は(num)の()を省略できる
    return num * num;
}

const rollDie = () => { //パラメータがない時は()を省略できない
    return Math.floor(Math.random() * 6) + 1;
}
```
アロー関数の関数式をgreetという変数に代入してください。人の名前を表すStringを引数として一つ受け取って、英語の挨拶のStringを以下のように返してください：

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"
```javascript
const greet = name => {
    return (`Hey ${name}!`);
}
```
より省略する
```javascript
const add = (x, y) => {
    return x + y;
}

//以下に省略して一文にすることができる

const add = (x, y) => x + y;
```
暗黙的なreturnまとめ
```javascript
const isEven = function(num) { //通常の関数式
    return num % 2 === 0;
}
const isEven = (num) => { //引数にカッコを使ったアロー関数
    return num % 2 === 0;
}
const isEven = num => { //引数のカッコを省略
    return num % 2 === 0;
}
const isEven = num => ( //暗黙的return
    num % 2 === 0;
);
const  isEven = num => num % 2 === 0; //暗黙的return(1行版)
```
#### setTimeoutとsetInterval
setTimeoutで3秒後に出力する
```javascript
setTimeout(() => {
    console.log('やっほー');
}, 3000);
```
```javascript
console.log('やっほー')
setTimeout(() => {
    console.log('おーい');
}, 3000);//setTimeoutはそこで出力を止めておくのではなく、秒後に出力する命令をして次に行くので、ばいばいが先に出力される
console.log('ばいばい');
//やっほー ばいばい おーいの順番で出力される
```
setIntervalで2秒ごとに指定の関数を呼ばせる
clearIntervalで繰り返し処理を止める
```javascript
setInterval(() => {
    console.log(Math.random());
},2000);

clearInterval();
```
#### filter
提供されたテスト関数を満たす要素からなる新しい配列を生成する
```javascript
{
    title: 'Notting Hill',
    score: 77,
    year: 1999
},
{
    title: 'Alien',
    score:907,
    year: 1979
}

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
});
```
暗黙的リターンに変換
```javascript
const goodMovies = movies.filter(movie => movie.score > 80);
```
filterとmapを組み合わせる
```javascript
const goodMovies = movies.filter(movie => movie.score > 80).map(movie => movie.title); //titleだけの配列が出力される
```
改行で見やすく整理する
```javascript
const goodMovies = movies
    .filter(movie => movie.score > 80)
    .map(movie => movie.title);
```
filterメソッドの練習をしましょう。validUserNamesという関数を作ってください。この関数はStringの配列を引数として受け取って、Stringの長さが10文字未満の値だけが入っている新しい配列を返してください。以下が実行例です：

validUserNames(['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']);
// => ["tanaka", "hogemoge", "kimetsu"]
// 'suzuki1979'と'q29832128238983'は10文字以上なので、返ってきた配列には含まれない
```javascript
const validUserNames = (name) => {
    return name.filter(name => name.length < 10);
}
```
#### every
配列ないの全ての要素が指定されたテスト関数を満たすかそうかをtrueかfalseで返す
```javascript
const exams = [80, 98, 92, 78, 77, 90, 89, 81, 77]

exam.every(exam => exam >= 75); //全員が75点以上かをチェックする
//true
```
#### some
everyに似ているが、「一つでも」テスト関数を満たす要素があればtrueを返す
```javascript
exam.some(exam => exam >= 90); //90以上が1人以上いるかをチェックする
//true
```
allEvensという関数を定義してください。この関数は配列を一つ引数として受け取って、その配列の中身がすべて偶数であればtrueを返してください。そうでない場合はfalseを返してください。someあるいはeveryメソッドを使いましょう！（どちらを使うかは自分で決めてください）

allEvens([2,4,6,8]) //true（すべて偶数）
allEvens([1,4,6,8]) //false（奇数が含まれている）
allEvens([1,2,3]) //false（奇数が含まれている）
```javascript
const allEvens = (numbers) => {
    return numbers.every(num => num % 2 === 0);
}
```
#### reduce
配列の各要素に対して（引数で与えられた）reducer関数を実行して、「単一の出力値」を生成する

```javascript
const prices = [980, 1500, 1980, 4980, 2980];

let total = 0;
for (let price of prices) {
    total += price;
}
console.log(total); //12420
```
reduceを用いて書く
```javascript
prices.reduce((total, price) => {
    return total + price;
}) //12420 同じ結果が出る
```
配列の中の最小値を求める
```javascript
const minPrice = prices.reduce((min, price) =>{
    if (min > price){
        return price;
    }
    return min;
})//呼ばれたものがminに入り、再度priceと比較し、、を繰り返すことで最小値が出る
```
```javascript
const highestMovie = movies.reduce((bestMovie, currMovie) =>{
    if (bestMovie.score < currMovie.score){
        return currMovie;
    }
    return bestMovie;
})
```
### モダンなjavascriptの機能
#### デフォルトパラメータ
```javascript
function rollDie(numSides) {
    if (typeof numSides === 'undefined') {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}

rollDie() //デフォルトでは6までの数字がランダムに出力
rollDie(20) //数字を入れると()内の数字までの数字がランダムに出力
```
今時のやり方
```javascript
function rollDie(numSide = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

rollDie() //デフォルトでは6までの数字がランダムに出力
rollDie(20) //数字を入れると()内の数字までの数字がランダムに出力
```
```javascript
function greet(person, msg = 'こんにちは', suffix = '!！'){
    console.log (`${msg}、${person} さん`);
}

greet('やまだ', 'やっほー') //やっほー、やまださん！！
greet('やまだ') //こんにちは、やまださん！！
```
#### スプレッド構文
```javascript
Math.max(13,4,5,6,21,9,21,2222) //2222(最大値を出力することができる)

const nums = [13,4,5,6,21,9,21,2222]
MAth.max(nums) //NaN (カンマ区切りの数字を渡さないとNaNになってしまう)出力不可能
```
スプレッド構文を用いて配列の中身を展開する
```javascript
const nums = [13,4,5,6,21,9,21,2222]
Math.max(...nums) //2222(出力できる)
```
```javascript
console.log('sadf', 'sdaf', 'asdf', 'asdfa')
console.log(nums) //[13,4,5,6,21,9,21,2222]
console.log(...nums) //13 4 5 6 21 9 21 2222
```
```javascript
console.log('あいうえお') //あいうえお
console.log(...'あいうえお') //あ い う え お
```
#### 配列リテラルにおけるスプレッド構文
既存の配列から新しい配列を作成する。配列の要素を新しい配列にそれぞれ展開する。
```javascript
const cats = ['Tama', 'Tora', 'Momo'];
cost dogs = ['Hachi', 'Pochi'];

const allPets = [...cats, ...dogs]; //['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi']
```
結合するだけでなく、追加することもできる
```javascript
const allPets = [...cats, ...dogs, 'Sakura'] //['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi', 'Sakura']

const allPets = [...cats, 'Sakura', ...dogs] //['Tama', 'Tora', 'Momo', 'Sakura', 'Hachi', 'Pochi'](真ん中に持ってくることもできる)
```
#### オブジェクトにおけるスプレッド構文
オブジェクトからオブジェクトにプロパティをコピーする
```javascript
const fwline = {legs: 4, family: 'ネコ科'};
const canine = {family: 'イヌ科', bark: true};

{...feline} //{legs: 4, family: 'ネコ科'}
{...feline, color: 'black'} //{legs: 4, family: 'ネコ科', color: 'black'}
const catDog = {...feline, ...canine};
catDog //{family: 'イヌ科', bark: true}(同じfamilyという値が呼び出された際は、後に定義された方がうわかぶせして出力される)
```
```javascript
const forDate = {
    email: 'hoge@example.com',
    password: 'secret',
    username: 'hoge'
}

const newUser = {...forData, id: 123, isVerified: false}
```
#### レスト構文（残余引数）
その位置にある残りの引数を配列の中に入れることができる

▼argumenntsオブジェクト
・アロー関数以外の全ての関数で使える
・配列みたいなオブジェクト
　・lengthプロパティがある
　・pushやpopのようなメソッドは使えない
・関数に渡された引数を全て含んでいる

```javascript
function sum() {
    console.log(arguments);
}

sum(1, 2, 3) 
//0:1
//1:2 
//2:3
```
```javascript
function sum() {
    return arguments.reduce((total, num) => total + num);
}

sum(1, 2, 3) //Error
```
↓レストを使用する
```javascript
function sum(...nums) {
    console.log(nums);
}

sum(1, 2, 3) //[1, 2, 3] 配列として入ってくる
```
```javascript
function sum(...num) {
    return nums.reduce((total, num) => total + num);
}

sum(1, 2, 3) //6 (合計の6が出力される)
```
3個以降のものが全部restの中に残りの引数として配列に入る
```javascript
function raceResults(gold, silver, ...rest) { 
    console.log(`金：${gold}`);
    console.log(`銀：${silver}`);
    console.log(`その他：${rest}`);
}

raceResults('太郎', '次郎', '三郎', '四郎', '五郎');
//金：太郎
//銀：次郎
//その他：三郎,四郎,五郎
```
#### 分割代入
・配列の要素
・オブジェクトのプロパティを、別個の変数に割り当てるすっきりと書ける構文
```javascript
const scores = [929321, 456827, 3287376, 328763, 98732]

const [ gold, silver ] = scores;
gold //929321 (1個目の値)
silver //456827 (2個目の値)
```
```javascript
const raceResults = ['エリウド', 'フェイサ', 'ゲーレン'];

const [gold, silver, bronze] = raceResults;
gold; //エリウド
silver; //フェイサ
bronze; //ゲーレン
```
restを使う
```javascript
const raceResults = ['エリウド', 'フェイサ', 'ゲーレン'];

const [fastest, ...rest] = raceResults;
gold; //エリウド
rest; //['フェイサ', 'ゲーレン']
```
#### オブジェクトの分割代入
```javascript
const user = {
    email: 'haevey@example.com',
    password: 'aTsjdbh',
    firstName: 'Harvey',
    lastName: 'Milk'
    born: 1930,
    died: 1978,
    bio: 'Harvey Berbard Milk was an American politician and the first'
}
const { firstName, lastName, email } = user;
```
```javascript
const { born: birthYear } = user;//bornのプロパティをbirthYearという変数に入れる

birthYear //1930
```
仮にdiedがなかった場合は以下でデフォルト値を指定できる
（diedがあるユーザーに使用したら、デフォルト値を設定してもちゃんとuserにはdiedのプロパティがあるので呼び出すことができる）
```javascript
const { born: birthYear , died = 'N/A'} = user2;
died //N/A
```
#### パラメーターの分割代入
```javascript
const user = {
    email: 'haevey@example.com',
    password: 'aTsjdbh',
    firstName: 'Harvey',
    lastName: 'Milk'
    born: 1930,
    died: 1978,
    bio: 'Harvey Berbard Milk was an American politician and the first'
}

function fullName({firstName, lastNAme}) {
    return `${firstName} ${lastName}`; 
}

fullName //'Harvey Milk' (firstNameとlastNAmeが結合されて返ってくる)
```
```javascript
movie.filter(movie => movie.score >= 90);
movie.filter(({score}) => score >= 90); //↑と同様　(分割代入を使用する)
```
mapを使用する
```javascript
movie.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`;
})
```
### DOM入門
Document Object Model  
Document：DocumentオブジェクトがDOMの世界へのエントリーポイント。Webページのあらゆるコンテンツを表していて、便利なプロパティやメソッドも多数用意されている

・ウェブページをJavaScriptで表現したもの
・ウェブページとJavaScriptを接続するもの
・いっててしまえばJavaScriptで使えるオブジェクトの集まり

#### getElementByld
要素の取得
・getElementById
・getElementsByTagName
・getElementByClassName
```javascript
document.getElementById('banner')
//バナーのIDが返ってくる(IDなのでクラス名を入れても返ってこない)
```
```javascript
document.getElementById('toc')
const toc = document.getElementById('toc') //tocという変数に入れる
console.dir(toc)//オブジェクトが見れる
```
img要素をIDで取得してimageという変数に代入してください
h1要素をIDで取得してheadingという変数に代入してください
```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Unicorn</title>
</head>

<body>
    <!--このファイルは編集しないでください-->
    <h1 id="mainheading">I &hearts; Unicorns</h1>
    <img id="unicorn" src="https://devsprouthosting.com/images/unicorn.jpg" alt="" width="200px">
    <!-- Photo by Hello I'm Nik on unsplash.com -->

</body>

</html>
```
app.js
```javascript
document.getElementById('unicorn')
const image = document.getElementById('unicorn')
document.getElementById('mainheading')
const heading = document.getElementById('mainheading')
```

#### getElementsByTagNameとgetElementByClassName
タグネームの中身は大文字でも小文字でもok
```javascript
document.getElementsByTagName('IMG')
```
```javascript
const allImages = document.getElementsByTagName('img');

for (let img of allImages){
    console.log(img.src);
}//4つの画像のurlを取得することができる(配列ではないけど配列っぽくループを回す事もできる)
```






