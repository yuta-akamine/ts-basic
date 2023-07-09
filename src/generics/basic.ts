export default function genericsBasicSample() {

  // ジェネリック型を使わない場合
  // 第二引数の文字列を、第一引数の配列内の文字列全てと連結し、連結した文字列を返す関数。
  const stringReduce = (array: string[], initialValue: string): string => {
    // initialValue(初期値)をresultへ代入
    let result = initialValue
    for (let i=0; i < array.length; i++) { // arrayの要素数繰り返す。
      // 要素の文字列をresultと連結してresultに代入する
      result += array[i]
    }
    // 全て繋げた文字列を返す
    return result
  }
  console.log("Generics basic sample 1:", stringReduce(["May ", "the ", "force ", "be ", "with ", "you "], ""))

  // 第二引数の数値を、第一引数の配列内の数値全てと連結し、連結した数値を返す関数。
  const numberReduce = (array: number[], initialValue: number): number => {
    // initialValue(初期値)をresultへ代入
    let result = initialValue
    for (let i=0; i < array.length; i++) { //arrayの要素数の間繰り返し
      // 要素の数値をresultと合計してresultに代入する
      result += array[i]
    }
    // 全て合計した数値を返す
    return result
  }
  console.log("Generics basic sample 2:", numberReduce([100, 200, 300], 1000))


  // ジェネリックスを利用しない例
  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
    // 別の型を利用したい場合は順次追加する必要があり、コードが冗長になる。
  }


  // 関数の型をジェネリックスで共通化する
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  // ジェネリックスで共通化したデータ型を利用する例
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    // initialValue(初期値)をresultへ代入
    let result = initialValue
    for (let i=0; i < array.length; i++) { // arrayの要素数の間繰り返し
      // 要素をresultと連結してresultに代入する
      result += array[i]
    }
    // 全て繋げた文字列を返す
    return result
  }
  console.log("Generics basic sample 3:", genericStringReduce(["MAKE ", "TYPESCRIPT ", "GREAT ", "AGAIN "], ""))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    // initialValue(初期値)をresultへ代入
    let result = initialValue
    for (let i=0; i < array.length; i++) { //arrayの要素数の間繰り返し
      //要素の数値をresultと合計してresultに代入する
      result += array[i]
    }
    // 全て合計した数値を返す
    return result
  }
  console.log("Generics basic sample 4:", genericNumberReduce([-100, -200, -300], 1000))


  // 様々なジェネリック型の定義方法
  // 完全な呼び出しシグネチャ(オブジェクト内それぞれのシグネチャにジュネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  // シグネチャ全体にジュネリック型を割り当てる
  type GenericReduce3<T> = (array: T[], initialValue: T) => T

  // 個々のシグネチャにジュネリック型を割り当てる
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
  
}