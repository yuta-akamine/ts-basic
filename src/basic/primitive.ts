export default function primitiveSample() { //関数が一つだけ存在
  console.log("Foo")

	let name: string ='akamine'
	// name = 123 // 変数nameはstring型なのでnumber型は代入不可
	console.log("primitive sample 1:", typeof name, name) // nameのデータ型とakamineが出力
  
	let age: number = 35
	// age ="28" // 変数ageはnumber型なのでstring型は代入不可
	console.log("primitive sample 2:", typeof age, age) // ageのデータ型と35が出力
  
	let isSingle: boolean = true
	// // isSingle ="foo" // 変数isSingleはboolean型なのでstring型は代入不可
	console.log("primitive sample 3:", typeof isSingle, isSingle) // booleanとtrueが出力

	const isOver20: boolean = age >= 20
	console.log("primitive sample 4:", typeof isOver20, isOver20) // booleanとtrueと出力
}