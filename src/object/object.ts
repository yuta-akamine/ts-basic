export default function objectSample() {
  // aという定数にobjectを定義
  // const a: object = {
  //   name: 'Akamine',
  //   age: 35
  // }
  // a.name // プロパティの型を定義していないのでそのプロパティは存在しないというエラーになる。

  // オブジェクトリテラル記法で型定義
  let country: {
  language: string
  name: string
  }	= {
    language: "Japanese",
    name: "Japan"
  }
  console.log("Object object sample 1:", country)

  // 定数countryのプロパティに値を再代入
  country = {
    language: "English",
    name: "USA"
  }
  console.log("Object object sample 2:",country)

  // オプショナルとreadonly
	// akamineという定数を定義
	const akamine: {
		age: number
		lastName: string
		readonly firstName: string
		gender?: string
	} = {
		age: 35,
		lastName: "Akamine",
		firstName: "Yuta"
	}

	// akamineオブジェクトのプロパティに値を上書き
	akamine.gender = 'male' // 問題なし
	akamine.lastName = 'Kamado' // 問題なし
	// akamine.firstName = 'Tanjiro' // エラーが出る。readonlyのため代入不可

	console.log("Object object sample 3:", akamine)

  // インデックスシグネチャ
  const capitals: {
    // プロパティ名はstring型で指定、値はstring型を指定
    [countryName: string]: string
  } = {
    // string型のプロパティと値
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log("Object object sample 4:", capitals)

}