 function $(selector){            // Обьявляем функцию $ , и принимаем принимать в функцию selector 


  var elements = document.querySelectorAll(selector);  // selector этот селектор получил node list массив элементов и загнал их в переменную var elements 
  return new OurJquery(elements); // Функция доллар будет возвращать новый экземпляр класса OurJquery
 }




function OurJquery(elements){  
	                           


   this.elements = elements;   


   /**
   Подвесить любое событие на группу элементов 
   @param string eventname тип события
   @param callable f функция обработчик 
   @return (undefined)
   */

   this.on = function(eventname, f){                                                                                                                          
    for(var i = 0; i < this.elements.length; i++){
      this.elements[i].addEventListener(eventname, f); 
      	                                               
   }    

   return this; // Стиль jQuery включает, что все функции возрващают return this;
                // Любая функция, которая что-то задает, она возвращает нам тоже самое
                // Возвращает нам эту же переменную , то есть цепочка this---> OurJquery---> $--->var jqInputs          

}

//*********************************************************************
// Пояснение как работает jQuery. Пример№ 1 
//*********************************************************************
//****************************************************************************************
// Обьяснение что именно метод .addClass , другими словами работник .addClass возвращает 
//****************************************************************************************
// .addClass  работник name принимает 
// .addClass работник присваивает или добавляет класс 
// .addClass работник  ничего не возращает , так как нет return для возврата. Поєтому вернет значение undefined 
  this.addClass = function(name){ // делаем например такой метод, addClass , и в него принимаем имя класса (name)
    for(var i = 0; i < this.elements.length; i++){  // делаем цикл перебора элемента 
      this.elements[i].classList.add(name);        // то что выбрали , добавляем в (name)
    } 
    return this;  // return this;  В   конструкции this это экземпляр класса OurJquery из конструкции function OurJquery(elements){....}    
                  // Стиль jQuery включает, что все функции возрващают return this;
                // Любая функция, которая что-то задает, она возвращает нам тоже самое
                // Возвращает нам эту же переменную , то есть цепочка this---> OurJquery---> $--->var jqInputs         
  }

  this.removeClass = function(name){ // делаем например такой метод, addClass , и в него принимаем имя класса (name)
    for(var i = 0; i < this.elements.length; i++){  // делаем цикл перебора элемента 
      this.elements[i].classList.remove(name);        // то что выбрали , добавляем в (name)
    } 
    return this; // Стиль jQuery включает, что все функции возрващают return this;
                // Любая функция, которая что-то задает, она возвращает нам тоже самое
                // Возвращает нам эту же переменную , то есть цепочка this---> OurJquery---> $--->var jqInputs 
  }

//****************************************************************************************    
//ПРИМЕР КАК ФУНКЦИИ ПРИНИМАЮТ РАЗНОЕ КОЛИЧЕСТВО ПЕРЕМЕННЫХ В jQuery . ПРИМЕР РАЗНЫЕ ПЕРЕМЕННЫЕ №1 
//****************************************************************************************     
 this.html = function(html){  
   
   if(typeof(html) === "undefined"){   // За счет этого кода можно принимать множешство переменных в jQuery
    return this.elements[0].innerHTML; // За счет этого кода можно принимать множешство переменных в jQuery
   }                                   // За счет этого кода можно принимать множешство переменных в jQuery


   for(var i = 0; i < this.elements.length; i++){
     this.elements[i].innerHTML = html;
   }
   return this; 
                
                
 }

}

                      