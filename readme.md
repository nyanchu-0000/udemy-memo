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
sortする際にstringに変換される
```javascript
let scores = [1, 70, 100, 2500, 9, 0, 34];
scores.sort() //[-12, 0, 100, 2500, 34, 70, 9] (-は0より前、0以降、小さい順に並ぶが、1の次は9ではなく、数字の一文字目で判断されるため、100の1文字目が1なので前に来る。その次は2の2500)
```

#### 配列の等価性
配列の中身が等しいかどうかではなく、全く同じ配列を指しているかどうかを確認している
```javascript
['hai', 'bye'] === ['hai', 'bye'] //false (配列の中身は同じでも配列の参照先（メモリ上のアドレス先が違うため)
```
```javascript
let nums = [1, 2, 3];
let numsCopy = naums;

nums.push(4);
nums //[1, 2, 3, 4]
numsCopy //[1, 2, 3, 4]
//この場合は、nums=「1, 2, 3, 4]=numsCopyのため、同じ住所を指していることになる
```

### 配列のconst
中の値は変更できるが、変数への再代入はできない

```javascript
const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green'; //メソッドを使用して同じ箱の中の中身を変えることはok

myEggs = ['blue', 'pink']; //Error! 直接myEggsを再代入することは、違う箱を作っていることと同じになるのでNG

```

```javascript
```

```javascript
```

```javascript
```