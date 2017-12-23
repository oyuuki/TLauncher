var selectedid = "selectedText";
var windowid = "frm_weblunch_area";

var buttonDisableClass = "cls_3cbfXTmLXGUt5XQCbXzm_false";
var buttonEnableClass = "cls_3cbfXTmLXGUt5XQCbXzm_true";

var clicked = false;
var winsub = null;

var mouseDownPointX = -1;
var mouseDownPointY = -1;
var mouseUpPointX = -1;
var mouseUpPointY = -1;

function getSharpSelectedId(){
  return '#' + selectedid;
}

function getSharpwindowId(){
  return '#' + windowid;
}

$(function() {

  var key1_1 = 48;
  var key1_2 = 96;

  $('body').on("keydown", function(e){
     if(e.altKey && (e.keyCode == key1_1 + 1 || e.keyCode == key1_2 + 1)) {
        $('#id_pTPXdK3sNUtJ5smSWUug').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 2 || e.keyCode == key1_2 + 2)) {
        $('#id_hGDXsBaYLQEDtAY6EnAE').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 3 || e.keyCode == key1_2 + 3)) {
        $('#id_aShGrfNfXESsrDMWxjMy').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 4 || e.keyCode == key1_2 + 4)) {
        $('#id_jkagXGuz8C4UhcFug2dB').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 5 || e.keyCode == key1_2 + 5)) {
        $('#id_ZKFpUa4gp8YjFPQaVEyG').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 6 || e.keyCode == key1_2 + 6)) {
        $('#id_eVAsJjXXn4BHM85Stgu5').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 7 || e.keyCode == key1_2 + 7)) {
        $('#id_ej95zGALBfQuXESwUfnB').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 8 || e.keyCode == key1_2 + 8)) {
        $('#id_ysBV2t3cwKbpf2fWnzdB').click();
     }
     if(e.altKey && (e.keyCode == key1_1 + 9 || e.keyCode == key1_2 + 9)) {
        $('#id_NBz9uPUwmykd6X55eX32').click();
     }
     if(e.altKey && (e.keyCode == key1_1 - 1 || e.keyCode == key1_2 - 1)) {
        $('#id_n9sSKSSBwb38DbWzT8h6').click();
     }
     
  });

  $('body').on("mousedown", function(e){
    mouseDownPointX = e.pageX;
    mouseDownPointY = e.pageY;
  });

  $('body').on("mouseup", function(e){
    mouseUpPointX = e.pageX;
    mouseUpPointY = e.pageY;
  });

  $('body').on("click", function(e){

    var x = 0;
    var y = 0;

    if (mouseDownPointY <= mouseUpPointY){
    	x = mouseDownPointX;
    	y = mouseDownPointY;
    }
    else{
        x = mouseUpPointX;
    	y = mouseUpPointY;
    }

    if (clicked) {
      clicked = false;
      return;
    }
    clicked = true;

    setTimeout(function () {
       clicked = false;
    }, 200);



    if(e.target.id != windowid
    && e.target.id != "id_pTPXdK3sNUtJ5smSWUug"
    && e.target.id != "id_ZKFpUa4gp8YjFPQaVEyG"
    && e.target.id != "id_eVAsJjXXn4BHM85Stgu5"
    && e.target.id != "id_ej95zGALBfQuXESwUfnB"
    && e.target.id != "id_hGDXsBaYLQEDtAY6EnAE"
    && e.target.id != "id_aShGrfNfXESsrDMWxjMy"
    && e.target.id != "id_jkagXGuz8C4UhcFug2dB"
    && e.target.id != "id_ysBV2t3cwKbpf2fWnzdB"
    && e.target.id != "id_NBz9uPUwmykd6X55eX32"
    && e.target.id != "id_n9sSKSSBwb38DbWzT8h6"
    && e.target.id != "id_n9sSKSSBwb38DaabWazaT8ah6_text"
    ){
       $(getSharpwindowId()).remove();

       if(!e.ctrlKey) {
         return;
       }

       setTimeout(function(){
          setWindow(x , y);
       },300);
    }
  });
});

function setWindow(x, y){
   var selectedValue = document.getSelection();

   y = y - 100;
   x = x - 300;

   if(y <= 0){
   	  y = 15;
   }

   if(x <= 0){
   	  x = 15;
   }



   var $weblunchDiv = $("<button></button>", {
    "id": windowid,
     css: {
       border: "1px solid gray",
       "background-color": "#fff",
       "box-shadow":"2px 2px 10px",
       width: "600px",
       height: "80px",
       position:"absolute",
       //top:rect.top + window.pageYOffset - 300 + "px",
       //left:rect.left + window.pageXOffset - 150  + "px"
       top:y + "px",
       left:x + "px",
       "z-index":"9999",
       "display": "inline-block"
     },
     on: {
       click: function() {
         // activeSub();
       }
     }
   });

   // if(selectedValue != ""){
      // テストボタン追加
      $weblunchDiv.append(getInputText());
      $weblunchDiv.append(getButton("id_pTPXdK3sNUtJ5smSWUug","C", "http://dictionary.cambridge.org/search/british/direct/?q=", "+" , ""));
      $weblunchDiv.append(getButton("id_hGDXsBaYLQEDtAY6EnAE","M", "https://www.merriam-webster.com/medical/", "%20", ""));
      $weblunchDiv.append(getButton("id_aShGrfNfXESsrDMWxjMy","W", "http://ejje.weblio.jp/content/", "+", ""));
      $weblunchDiv.append(getButton("id_jkagXGuz8C4UhcFug2dB","ア", "http://eow.alc.co.jp/search?q=", "+", ""));
      $weblunchDiv.append(getButton("id_ZKFpUa4gp8YjFPQaVEyG","Co", "https://www.collinsdictionary.com/dictionary/english/", "-", ""));
      $weblunchDiv.append(getButton("id_eVAsJjXXn4BHM85Stgu5","G翻", "https://translate.google.co.jp/?hl=ja#en/ja/", "%20", ""));
      $weblunchDiv.append(getButton("id_ej95zGALBfQuXESwUfnB", "G検", "https://www.google.co.jp/search?q=", "+", ""));
      $weblunchDiv.append(getButton("id_ysBV2t3cwKbpf2fWnzdB", "G検US", "https://www.google.com/search?gl=us&hl=en&pws=0%2F&q=", "+", ""));
      $weblunchDiv.append(getButton("id_NBz9uPUwmykd6X55eX32", "G画", "https://www.google.co.jp/search?q=", "+", "&tbm=isch"));
      $weblunchDiv.append(getButton("id_n9sSKSSBwb38DbWzT8h6", "G画US", "https://www.google.com/search?gl=us&hl=en&pws=0%2F&q=", "+", "&tbm=isch"));

      $("body").append($weblunchDiv);
      $("#id_n9sSKSSBwb38DaabWazaT8ah6_text").focus();
      $("#id_n9sSKSSBwb38DaabWazaT8ah6_text").select();
      console.log("選択された文字列" + document.getSelection());
   //}
}

function getInputText(){
   var $inputDivtag = $("<div></div>");
   var $inputtag = $("<input></input>", {
     type:"text",
     value:document.getSelection().toString(),
     width: 100,
     height: 15,
     id:"id_n9sSKSSBwb38DaabWazaT8ah6_text",
     css: {
       "font-size": "9px"
     },
     pattern: "^[0-9A-Za-z]+$"
   });

   $inputDivtag.append($inputtag);

   return $inputDivtag;
}

function getButton(buttonid, buttonName, url, sep, suffix){
   var $buttontag = $("<button></button>", {
     width: 30,
     height: 30,
     id:buttonid,
     css: {
       border: "1px solid gray",
       "margin-right": "10px",
       "margin-bottom": "10px",
       "display": "inline-block",
       "font-size": "9px"
     },
     addClass: buttonEnableClass,
     on: {
       click: function() {
         if(isDisable(buttonid)){
           e.preventDefault();
           e.stopImmediatePropagation();
           return;
         }
         setDisable(buttonid, true);
         search(url,sep, suffix)
         setTimeout(function(){
           setDisable(buttonid, false);
         },1000);
     }
   }
   });

   $buttontag.html(buttonName)

   return $buttontag;
}

function search(url, sep, suffix){
   // 選択されたテキストを取得取得
   var selectedValue = $("#id_n9sSKSSBwb38DaabWazaT8ah6_text").val();
   var words = selectedValue.split(" ");
   var params = createParams(words, sep);

   winsub = window.open(url + params + suffix, "win_8VJZ8Mz37RG7TbUs9xbssG", "width=600,height=500,scrollbars=yes, menubar=yes,");
}

function activeSubCheck(){
  if(!winsub){
      return false;
  }
  return true;
}

function activeSub(){
   if(!activeSubCheck()){
      return;
   }
   winsub.focus();
}

function createParams(words, sep){
   // パラメータ文字列を生成する
   var retvalue = "";


   for (var idx = 0; idx < words.length; idx++){
      retvalue = retvalue + words[idx]
      if(idx < words.length - 1){
         retvalue = retvalue + sep;
      }
   }

   return retvalue;
}


function setDisable(id, value){

   if(value){
      $("#" + id).addClass(buttonDisableClass);
      var a = $("#" + id).hasClass(buttonDisableClass);
      $("#" + id).removeClass(buttonEnableClass);
   }
   else{
      $("#" + id).addClass(buttonEnableClass);
      $("#" + id).removeClass(buttonDisableClass);
   }
}

function isDisable(id){
  var a = $("#" + id).hasClass(buttonDisableClass);
  return $("#" + id).hasClass(buttonDisableClass);
}
