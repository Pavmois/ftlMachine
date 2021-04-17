/* Блок время, меняется цвет кружочка при нажатии на кнопку "НЕ ВЫБРАНО" */
var colorArray = [ "#EF483E", "#ffffff" ];
var i = 0; 

(function changeColor(){
    var colorArray = [ "#EF483E", "#ffffff" ];
    var i = 0; 
    document.getElementById('circle').style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
})();
(function changeColor2(){
    var colorArray = [ "#EF483E", "#ffffff" ];
    var i = 0; 
    document.getElementById('circle2').style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
})();

/* Температурный режим  */
  (function main() {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded);
    function DOMContentLoaded() {
          var buttonNode = document.querySelector('.js-show-form');
          buttonNode.addEventListener('click', showForm);
    } 
    function showForm() {
        var node = document.querySelector('.js-form');
        node.classList.remove('hidden');
    }
  })();

  (function main2() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', hideForm);
    function hideForm() {
        var no = document.querySelector('.js-form');
        no.classList.toggle('hidden');
    }
  })();