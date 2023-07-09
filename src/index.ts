// import World from './world' // webpack.configのresolveで.tsの拡張子指定しているので記述不要

// const root = document.getElementById('root') //エレメントのオブジェクト取得
// const world = new World('Hello Akamine!') //messageの初期値設定しインスタンス化
// world.sayHello(root) //worldオブジェクトのメソッドにエレメントを渡す


// 03.基本の型定義
// basic/index.tsからnotExistSampleという関数を受け取り利用する
// import {unknownSample, anySample, notExistSample, primitiveSample} from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()


// 04.関数の型定義
// import {alwaysThrowError, logMessage, logMessage2, logMessage3, logMessage4, logMessage6, logMessage7} from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters';

// logMessage("Hello TypeScript!")
// logMessage2("Hello TypeScript!")
// logMessage3("Hello TypeScript!")
// logMessage4("Hello TypeScript!")
// // alwaysThrowError("エラー発生!")
// logMessage6("呼び出しシグネチャ(省略記法)")
// logMessage7("完全な呼び出しシグネチャ")


// isUserSignedIn("ABC", "Akamine") // Function parameters sample 1: User is signed in! Username is Akamine
// isUserSignedIn("DEF") // Function parameters sample 2: User is not signed in!.
// isUserSignedIn2("ABC") // Function parameters sample 3: User is signed in! Username is NO NAME

// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameters sample 5:', sum) // Function parameters sample 5: 1500


// // 05.オブジェクトの型定義
// import typeAliasSample from "./object/alias";
// import objectSample from "./object/object";

// objectSample()
// // Object object sample 1: {language: 'Japanese', name: 'Japan'}
// // Object object sample 2: {language: 'English', name: 'USA'}
// // Object object sample 3: {age: 35, lastName: 'Kamado', firstName: 'Yuta', gender: 'male'}
// // Object object sample 4: {Japan: 'Tokyo', Korea: 'Seoul', China: 'Beijing', Canada: 'Ottawa'}

// typeAliasSample()
// // Object alias sample 1: {capital: 'Tokyo', language: 'Japanese', name: 'Japan'}
// // Object alias sample 2: {capital: 'Washington, D.C.', language: 'English', name: 'USA'}
// // Object alias sample 3: {hp: 100, sp: 30, weapon: '木の剣', swordSkill: '三連切り'}
// // Object alias sample 4: {hp: 100, mp: 30, weapon: '木の杖', magicSkill: 'ファイヤボール'}
// // Object alias sample 5: {hp: 300, sp: 100, mp: 100, weapon: '銀の剣', swordSkill: '三連切り', weapon: "銀の剣"}

// 06.配列とタプルの型定義
import tupleSample from "./array/tuple";
import arraySample from "./array/array";
arraySample()
// Array array sample 1: (3) ['red', 'blue', 'yellow']
// Array array sample 2: (4) [2, 4, 6, 8]
// Array array sample 3: (4) ['ABC', 123, 'DEF', 456]
// Array array sample 4: (3) [123, 'ABC', 456]
// Array array sample 5: (3) ['git add', 'git commit', 'git push']

tupleSample()
// Array tuple sample 1: (2) [200, 'OK']
// Array tuple sample 2: (4) ['Kana', 'Miku', 'Keiko', 'Misa']