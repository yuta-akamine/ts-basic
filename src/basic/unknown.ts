export default function unknownSample() { // 関数が一つだけ存在
	const maybeNumber: unknown = 10 // unknown型に指定したが、10を代入したのでnumber型に変化
	console.log("unknown Sample 1:", typeof maybeNumber, maybeNumber) // number 10と出力される

	const ifFoo = maybeNumber === "foo" // 比較の条件式の結果を代入
	console.log("unknown Sample 2:",typeof ifFoo, ifFoo) // boolean false と出力される

	// const sum = maybeNumber + 10 // 現在number型だが、元はunknown型なのでエラーになる。

  // unknown型の場合、利用する際に型の判定をして利用できる。
	if (typeof maybeNumber === 'number') { // maybeNumber型がnumber型の場合
		const sum = maybeNumber + 10
		console.log("unknown Sample 3:",typeof sum, sum) // number 20 と出力される
	}
}