## JavaScriptの基本

### プリミティブ型

JavaScriptが元々持っている基本的なデータ型です。

* Number
* String
* Boolean
* Null
* Undefined

---

### Number (数値型)

* **`%` (剰余演算子)**: 割り算の余りを計算します。割り切れる場合は`0`になるため、奇数か偶数かを見分けるのに使えます。
    ```javascript
    5 % 2; // 1
    4 % 2; // 0
    ```
* **`**` (べき乗演算子)**: 乗算を行います。
    ```javascript
    3 ** 2; // 9 (3の2乗)
    ```
* **`NaN` (Not a Number)**: 数値ではないことを示す特殊なNumber型の値です。
    ```javascript
    0 / 0;       // NaN
    1 + NaN;     // NaN
    200 + 0 / 0; // NaN (0/0 が NaN のため)
    ```
* **`typeof` 演算子**: データ型を文字列で返します。
    ```javascript
    typeof 4;   // "number"
    typeof NaN; // "number" (NaNもNumber型の一種)
    ```

---

### 変数

データを一時的に保存しておくための名前付きの入れ物です。

#### `let`

再代入可能な変数を宣言します。

```javascript
let year = 1985;
console.log(year); // 1985

let hoge = 5;
let moge = 1;
let total = hoge + moge;
console.log(total); // 6

hoge = hoge + 1;
console.log(hoge); // 6

```
変数の更新
```javascript

let score = 10;

// 基本的な更新
score = score + 5; // score は 15 になる

// 短縮形 (自己代入演算子)
score += 5; // さらに5を加算 (score は 20 になる)

// インクリメント (1増やす)
score++;    // score は 21 になる

```

`const`  
再代入不可能な変数を宣言します（定数）。一度値を設定すると変更できません。


```javascript
const PI = 3.14;
// PI = 3.14159; // エラーが発生する
```

