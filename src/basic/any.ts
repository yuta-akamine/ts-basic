export default function anySample() { // 関数が一つだけ存在
	let name: any = 'akamine' //string型を代入
  console.log("any Sample 1:", typeof name, name) // string akamineが出力される

  // any型のため、nameを上書き可能
	name = 35
  console.log("any Sample 2:", typeof name, name) // string 35が出力される

}