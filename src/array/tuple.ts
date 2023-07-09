export default function tupleSample() {

  // 一般的なタプルの型定義
  let response: [number, string] = [200, "OK"]
  // 再代入
  // response = [400, "Bad Requet", "Email is missing"] // エラーになる。要素が3つある
  // response = ["400", "Bad Requet"] // エラーになる。要素番号1のデータ型が異なる

  console.log("Array tuple sample 1:", response)

  // 可変長引数(レストパラメーター)を使ったタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Misa")
  console.log("Array tuple sample 2:", girlfriends)
}