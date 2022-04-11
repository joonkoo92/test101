var links = {
  setColor:function(color) {
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i  <alist.length){
        alist[i].style.color =color;
        i=i+1;
      }
    }
  }
var body = {
  setFontColor:function (color) {
    document.querySelector('body').style.color = color;
  },
  setBGColor:function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
function bodySetFontColor(color) {
  document.querySelector('body').style.color = color;
}
function bodySetBGColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
function darkModeHandler(siwon){
    var target = document.querySelector('body');
    if(siwon.value === 'Darkmode'){
    body.setBGColor('black');
    body.setFontColor('white');
    siwon.value = 'Lightmode';
    links.setColor('powderblue');
  }
  else{
    body.setBGColor('white');
    body.setFontColor('black');
    siwon.value = 'Darkmode';
    links.setColor('blue');
  }
}
