export default function typeAliasSample() {
  // 型エイリアス
  // Country型の定義
  type Country = {
    capital :string 
    language: string
    name: string
  }

  // 定数japanにデータ型Countryを定義
  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
  }
  console.log("Object alias sample 1:", japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'USA'
  }
  console.log("Object alias sample 2:", america)


  // 合併型(union) と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardのどちらかの型を持つ
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const Adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り'
  }

  // Wizard寄りの冒険者
  const Adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール'
  }
  console.log("Object alias sample 3:", Adventurer1)
  console.log("Object alias sample 4:", Adventurer2)

  // 交差型... KnightかつWizardの型を持つ冒険者
  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイヤボール'
  }
  console.log("Object alias sample 5:", paladin)

}