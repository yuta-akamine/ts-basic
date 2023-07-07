export default function notExistSample() { // 関数が一つだけ存在
	let name = null
	// name = 123 //string型なのでnumber型は代入不可
  console.log("notExist Sample 1:", typeof name, name) // object nullが出力される

	name = "akamine"

	if (name) { // nameが存在する。 ※nullではない場合
		console.log("notExist Sample 2: 名前は" + name) //名前はakamine と出力される
	} else { // nameが存在しない。※つまりnullの場合
		console.log("notExist Sample 3: 名前はまだ" + name) //名前はまだnull と出力される
	}


	let age = undefined
	console.log("notExist Sample 4:", typeof age, age) //undefined undefinedが出力される

  // ageを上書き
	age = 35

	if (age) { // ageが存在する。 ※undefinedではない場合
		console.log("notExist Sample 5:年齢は" + age + "です。") // 年齢は35 と出力される
	} else { // ageが存在しない。※undefinedの場合
		console.log("notExist Sample 6:年齢は秘密です。") // 年齢は秘密 と出力される
	}

}