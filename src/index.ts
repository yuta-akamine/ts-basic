// import World from './world' // webpack.configのresolveで.tsの拡張子指定しているので記述不要

// const root = document.getElementById('root') //エレメントのオブジェクト取得
// const world = new World('Hello Akamine!') //messageの初期値設定しインスタンス化
// world.sayHello(root) //worldオブジェクトのメソッドにエレメントを渡す

// 03.基本の型定義
// basic/index.tsからnotExistSampleという関数を受け取り利用する
import {unknownSample, anySample, notExistSample, primitiveSample} from './basic'

unknownSample()
anySample()
notExistSample()
primitiveSample()