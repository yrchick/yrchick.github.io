$(document).ready(function(){

  // jQuery - Авто калькулятор




  var modelSpecs, <!-- это спецификации модели , какая выбрана  -->
      modelPrice, <!-- Цену модели -->
      modelSpecsHolder, <!-- это итоговый div (контейнер ), куда мы будем помещать наши спецификации  -->
      modelPriceHolder; <!-- это div , в которы мы будем помещать цену нашего автомобиля   -->

      modelSpecsHolder = $('#modelSpecs');
      modelPriceHolder = $('#modelPrice');

      modelPrice = 0;
      modelSpecs = '';


       $('#autoForm input').on('change', function(){
        calculatePrice();
        compileSpecs();
      });





      calculatePrice();
      compileSpecs();



      // Выбор цвета - на цену не влияет 

        $('#colorsSelector .colorItem').on('click', function(){
    var imgPath;
    imgPath = $(this).attr('data-img-path');
    $('#imgHolder').attr('src', imgPath);

  });



      function calculatePrice(){    <!-- Таким образом мы самостоятельно создали функцию и назвали ее calculatePrice -->

        var modelPriceEngine = $('input[name=engine]:checked', '#autoForm').val();
        var modelPriceTransmission = $('input[name=transmission]:checked', '#autoForm').val();
        var modelPricePackage = $('input[name=package]:checked', '#autoForm').val();

        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = parseInt(modelPricePackage);

        modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
        // alert(modelPrice);


        modelPriceHolder.text(modelPrice + ' рублей');

      };


      function compileSpecs (){
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';
        // alert(modelSpecs);

        modelSpecsHolder.text( modelSpecs );

      };





     









      // function addSpace(nStr) {
      //   nStr += '';
      //   x = nStr.split('.');
      //   x1 = x[0];
      //   x2 = x.length > 1 ? '.' + x[1] : '';
      //   var rgx = /(\d+)(\d{3})/;
      //   while (rgx.test(x1)) {
      //     x1 = x1.replece(rgx, '$1' + '' + '$2');
      //   }
      //   return x1 + x2;

      // }


      // Получаем курс валют 

      var currencуUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
      var rurUsdRate = 0;

      $.ajax({
        url: currencуUrl,
        cache: false,
        success: function(html){
          console.log(html);
        }
      });









});