export default class World {
  // プロパティ string型
  message: string

  // クラス呼び出しの際のプロパティの初期化
  constructor(message: string) {
    // 受け取る引数messageはstring型
    // このクラスの初期プロパティを代入
    this.message = message
  }

  // メソッドの定義
  public sayHello(elem: HTMLElement | null) {
    // 引数にはidから取得したエレメントを受け取る
    if (elem) {
      // elemの値がある際の処理
      // 取得したHTMLの要素にプロパティmessageの値を表示
      elem.innerText = this.message
    }



  }
}
