// pathをインポートする。pathはnpmの初期モジュールとして入っている。
const path = require('path');

// webpackの設定宣言
module.exports = { 
	entry: { // エントリーポイント。webpackのmoduleのバンドルを行うための起点になる場所
  // webpackのモジュールのバンドルを行う起点となるファイルの指定
  // 指定したファイルをバンドルする。
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
		bundle: './src/index.ts'
	},

  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
	output: { // webpackでバンドルしまとめたファイルの出力先
		// "__dirname"はファイルが存在するルートディレクトリの意味
		path: path.join(__dirname, 'dist'),
		// [name]は上記entryで記述した名前（この設定ならbundle）
		filename: '[name].js' // バンドル後のファイル名がbundle.jsになる
	},

  // import文でファイル拡張子を書かずに名前解決するための設定。
  // 例「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
	resolve: {
		// 下記に記述した拡張子はimportやexportの名前解決時に拡張子の記述不要になる
		extensions: ['.ts', '.js'] // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
	},
	// 開発用のサーバーの設定
	devServer: {
		// webpack-dev-serverがブラウザ起動する際に参照するディレクトリ
	  // webpack-dev-serverの公開フォルダ
		contentBase: path.join(__dirname, 'dist'),
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
		open: true //ローカルサーバー立ち上げた際に自動的にブラウザが立ち上がる
	},
  // モジュールに適用するルールの設定（ts-loaderの設定を行う事が多い）
	module: { //moduleに適用するルール
		rules: [
			{
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
				test: /\.ts$/, // スラッシュで囲った中身が正規表現。.tsを対象にしている。
				// loaderをts-loaderとして設定
				loader: 'ts-loader'
			}
		]
	}
}