//メイン部分
let alertString;
alertString = addString("お嬢ちゃん");

//作成した関数を呼び出す
alert(alertString);

//関数の書き方
//function 関数名(引数){
//  処理
//  return 戻り値;
// }


//作成した関数
function addString(strA){ //function(ひとまとまり)、関数名addString、引数strA
  let addStr = "Hello"+ strA; //変数名addStrへ「Hello」と「strAに設定された文字列」を結合
  return addStr; //結合結果が入ったaddStr↑を関数の戻り値に設定
}