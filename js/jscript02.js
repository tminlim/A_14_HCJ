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



