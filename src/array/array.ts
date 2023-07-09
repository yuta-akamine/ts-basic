export default function arraySample() {

  // シンプルな配列の型定義
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(123) // stringではないのでエラーになる
  console.log("Array array sample 1:", colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10") // number型ではないのでエラーになる
  console.log("Array array sample 2:", even)

  // 合併型の型定義
  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true) // booleanは指定された型ではないのでエラーになる
  console.log("Array array sample 3:", ids)


  // 配列の型推論
  // generateSomeArrayという関数の作成
  // 本来は下記のようにアノテーションで型付けする方が好ましい
  // const generateSomeArray = (): (string | number)[] => {
  const generateSomeArray = () => {
    const _someArray = [] // データ型の指定がないのでany[]
    _someArray.push(123) // number[]として推論
    _someArray.push("ABC") // (string | number)[]として推論
    return _someArray
  }

  // someArrayに配列_someArrayを代入
  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true) // boolean型はエラー。(string | number)[]として推論されている
  console.log("Array array sample 4:", someArray)


  // イミュータブルな配列を作る
	const commands: readonly string[] = ["git add", "git commit", "git push"]
	// commands.push("git fetch") // エラーになる。 readonlyなのでpushできない
	// commands[2] = "git pull" // エラーになる。 readonlyなので代入できない

	console.log("Array array sample 5:", commands)
}