export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  // 第一引数T型の配列、第二引数にfnという名のコールバック関数を渡す
  // コールバック関数fnはT型のitemという引数を受け取り、U型にしてreturnする
  // 最終的にはU型の配列を返すMap型を定義
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  // string型の配列を渡してnumber型の配列を返す関数を定義
  // Map型エイリアスを持ち、引数をセッティングする
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    // 関数の戻り値にする初期値が空の配列resultを宣言
    const result = []
    for (let i=0; i < array.length; i++) {
      // 配列から文字列を取り出し変数itemへ代入
      const item = array[i]
      // fn関数は引数に文字列を渡し、文字列を数値にして返す。
      // fn関数の戻り値の数値を配列resultへ代入する
      result[i] = fn(item)
    }
    // mapStringsToNumbers定数の戻り値、number型の配列を返す
    return result
  }

  // string型の配列を渡してnumber型の配列を返す関数を利用
  const numbers = mapStringsToNumbers(["123", "456", "789"], (item) => Number(item))
  console.log("Generics advanced sample 1:", numbers)

  // number型の配列を渡したらstring型の配列を返す変数を定義
  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i=0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  // number型の配列を渡してstring型の配列を返す関数を利用
  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log("Generics advanced sample 2:", strings)
}