// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
	if (userId === 'ABC') { // 認証成功の例
		console.log('Function parameters sample 1: User is signed in! Username is', username)
		return true // ログイン成功
	} else { // 認証失敗の例
		console.log('Function parameters sample 2: User is not signed in!.')
		return false
	}
}

// // デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = "NO NAME"): boolean => {
	if (userId === 'ABC') { //認証成功の例
		console.log('Function parameters sample 3: User is signed in! Username is', username)
		return true //ログイン成功
	} else { //認証失敗の例
		console.log('Function parameters sample 4: User is not signed in!.')
		return false
	}

}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
	// reduce()は、配列の要素を一つずつ取り出して合計値をreturnする際に利用する配列の関数
	return productsPrice.reduce((prevTotal: number, productPrice: number) => {
		//prevTotalとproductPriceを足してprevTotalに合計値を返す。
		return prevTotal + productPrice
	}, 0) // reduce()の第2引数。prevTotalの初期値が0という意味
}