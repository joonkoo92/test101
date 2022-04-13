var links = {
  setColor:function(color) {
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i < alist.length){
      //   alist[i].style.color = color;
      //   i=i+1;
      // }
      $('a').css('color', color);
      // css('arg', param)
    }
  }
var body = {
  setFontColor:function (color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBGColor:function (color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setBorderColor1:function (color) {
    $('h1').css('borderColor', color)
  },
  setBorderColor2:function (color) {
    $('ol').css('borderColor', color)
  }
}

function darkModeHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'Darkmode'){
    body.setBGColor('black');
    body.setFontColor('white');
    body.setBorderColor1('white');
    body.setBorderColor2('white');
    self.value = 'Lightmode';
    links.setColor('powderblue');
  }
  else{
    body.setBGColor('white');
    body.setFontColor('black');
    self.value = 'Darkmode';
    links.setColor('blue');
  }
}
