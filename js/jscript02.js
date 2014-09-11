//collecting emoticons
var collectEmoticons = [
{expression :") D :-) :) :o) :] :3 :c) :> =] 8) =) :} :^) :っ) ?.? :?) ?) ≠) |:-) =) :) :-) ;) ;=) ;-) :-D :D 8-D 8D x-D xD X-D XD =-D =D =-3 =3 B^D",
	heart : "happy" },
{expression :"( < >:[ :-( :( :-c :c :-< :っC :< :-[ :[ :{ :-|| :@ >:( >:\ >:/ :-/ :-. :/ :\ =/ =\ :L =L :S ￣m￣",
	heart : "angry"},
{expression :"o O >:O :-O :O :-o :o 8-0 O_O o-o O_o o_O o_o",
	heart : "Surprise"},
{expression :"p P B b :-J \0/ *\0/* :P :b =P =b =-b >.< :-P :Þ :-Þ B-Þ B=Þ Ж-b ≧ω≦ P=: :-J 2к-P >:P :-P :P X-P x-p xp XP :-p :p =p :-Þ :Þ :þ :-þ :-b :b d: ✖╭╮✖ @.@",
	heart : "cheer"},
{expression :";; $ X # & :$ :-X :X :-# :# :-& :& (^^ゞ ^^ゞ　^_^; (^_^;)　-_-; (-_-;)　~_~; (~_~;)　(・。・;)　(・_・;)　(・・;)　^^;　^_^; (#^.^#) (^ ^;) (╯╰) (╯3╰) (╯▽╰)",
	heart : "embarrassed"},
{expression :"ύ.ὺ   :|   =|   :=|   (►.◄) :┨  ό,ὸ   =I :-I :-1 '_'",
	heart : "neutral"},
{expression :"X <3 * (a❤‿❤a) (✿ ♥‿♥) (a♥‿♥a) (^o❤‿❤) (♥♥,) '}{' {{{***}}} :-@ :-)~~(-: :-)~~~ :-{} :-(|) }xx :-X :-<> :->< :-x :x :-* :* (:-* =^* :-)* :-)(-:",
	heart : "Love"},
{expression :"? -- ◣◢ (◣◢) [--] (-”-) (¬¬) :-? ;¬_¬ Umm -＿- -_-;",
	heart : "think"},
{expression :"; ;-) ‘-) ;) ;-> ^_- (^_-) (^_-)-☆",
	heart : "wink"},
{expression :"(/_;) T_T (T_T) (;_;) ;_; (;_:) ;O; (;O;) :_; (:_;) ToT (ToT) Ｔ▽Ｔ (Ｔ▽Ｔ) ;_; ;-; ;n; Q.Q T.T QQ Q_Q ＿|￣|○ STO OTZ OTL orz",
	heart : "crying"},
{expression :"__ (__) ._.　_(._.)_　_(_^_)_　<(_ _)>　<m(__)m>　m(__)m m(_ _)m",
	heart : "apology"},
{expression :"",
	heart : "random"},

]


//to switch from string in obj to array in obj  
var arrExpression = [];
var groupEmoticons = [];

function _arrangeEmoti(obj) {
	var nObjCount =  obj.length;
	for (var i = 0; i < nObjCount; i++)
		arrExpression[i] = obj[i].expression.split(" ");
	return arrExpression;
}

_arrangeEmoti(collectEmoticons);

//changing className according to pickedHeart
var charHeart = document.querySelector('.char');
var clickBtn = document.querySelector('button.btn');
var txt = document.getElementById('txtBox');

function clickEnter(event) {
	if(event.keyCode === 13)
		moveHeart();
}

clickBtn.addEventListener("click", function(e) {
	moveHeart()
}, false);

function moveHeart(){
	var inputTxt = txt.value;
	var theTxt = getTxt(inputTxt);
	var pickedHeart = matchEmoticon(theTxt);
	changeChineseChar(pickedHeart);			
}

function changeChineseChar(keyword) {
	event.preventDefault();
	charHeart.className = 'char ' + keyword; 
} 



//to get user input text
function getTxt(txt) {
	if(txt !== "")
		return _removeSpace(txt);
	else
		alert("enter the txt!");
}

function _removeSpace(txt) {
	var theTxt = txt.split(" ").join("");
	return theTxt;
}



//scanning the arrExpression for any element with the same value alikes theTxt
//for matchEmoticon() in clickEnter()
function matchEmoticon(theTxt) {
	var idx = getIdxArrOfEmoti(theTxt);
	var valueHeart = collectEmoticons[idx].heart;
	return valueHeart;
}

function getIdxArrOfEmoti(theTxt) {
	var objTxt = {input:theTxt};
	for(var i =0; i < arrExpression.length; i++) {
		var isTrue = arrExpression[i].some(isSameValue, objTxt);
		if(isTrue)
			return i;
	}
}

function isSameValue(element){
	return element.indexOf(this.input) === 0;
}

/*
document.querySelector('.char').addEventListener('click', function(e){
	this.className = this.className === 'char'  ?  'char on' : 'char';}
);









/*function matchEmoticon() {
			var i = 0;
	if(arrExpression.some(_matchByValue, inputTxt)) {
		return collectEmoticons[i].heart; 	
		i++;
	}
	return _isNotMatch();*/	
/*function isBigEnough(element, index, array) {
  return element >= 10;
}
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
*/

/*function _matchByValue(element) {
	return element.indexOf(this.inputTxt);
}

function _isNotMatch() {
//random or alert
}*/

///splitted txt 인자로 받아
//배열안의 요소 scan해서 같은 것이 있다면 true값 반환
//1)expression 오븍젝트 안의 오브젝트의 value 값인 string을 배열로 변경한다>>_arrangeEmoti완료
//2)배열로 변경된 요소 한개씩 스캔하면서 입력된 값이 있는지 없는지 파악하고
//3)있다면 오브젝트의 heart 속성을 불러오고 그 속성에 맞는 class 불러와서 이미지 변신
//true값을 반환된 object key 불러서 관계된 class불러서 이미지 변신


//3:35 연결고리 사라짐 몇번째 배열과 같으니 몇번째 키워드값을 불러와야하는데 변수 변수 만들다보니 몇 번째 배열인지 알 수 없게 됨
//filter에 idx 전달 할 수 있으니 어떻게 하면 될듯 한데... ~5:30 

//오브젝트 안의 오브젝트 안의 value를 통해서 오븍젝트 index번호를 파악하고 그 인덱스 번호를 통해서
//키값을 통한 키워드를 파악한다
