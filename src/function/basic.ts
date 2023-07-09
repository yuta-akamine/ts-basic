// アロー関数(関数式の省略)
// voidの利用例
export const logMessage = (message: string): void => {
	console.log('Function basic sample 1:', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
	console.log('Function basic sample 2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
	console.log('Function basic sample 3:', message)
}

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log('Function basic sample 4:', message);


// アロー関数
// neverの利用例
export const alwaysThrowError = (message: string): never => {
  // 常に例外をthrowするので戻り値はnever
	throw new Error(message)
}


// Reactでイベント発生の際に子のコンポーネントに関数をpropsで渡したい場合などによく使う？

// 呼び出しシグネチャ(省略記法)
// LogMessageというデータ型。 引数の数や引数及び戻り値のデータ型を定義
type LogMessage = (message: string) => void

// LogMessage型の関数logMessage6
export const logMessage6: LogMessage = (message) => {
	//messageを出力する
	console.log('Function basic sample 6:', message)
}

// 完全な呼び出しシグネチャ
// FullLogMessageというデータ型を定義。 引数の数や引数及び戻り値のデータ型を定義
type FullLogMessage = {
	(message: string): void
}

// FullLogMessage型の関数logMessage7
export const logMessage7: FullLogMessage = (message) => {
	console.log('Function basic sample 7:', message)
}