document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  const knopka = document.getElementById("send");
  const error = document.getElementById("error");
  const form = document.getElementById("form");
  const burger = document.getElementById("burger");

  // Функция обработки формы
  function formwork(event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const members = document.getElementById("members").value.trim();
      const comment = document.getElementById("comment").value.trim();
      const days = document.getElementById("days").value.trim();
      const date = document.getElementById("date").value;

      if (!name || !phone || !email || !members || !days || !date) {
          error.style.display = "flex";
      } else {
          alert("Спасибо за бронирование, ожидайте обратной связи!");
      }

      let data = { name, phone, email, members, comment, days, date };
      console.log(data); // Для проверки данных в консоли

      form.reset(); // Сброс формы
  }

  // Функция для работы с бургер-меню
  function rostics() {
      const buttonsHead = document.querySelector('.ButtonsHead');
      if (buttonsHead) {
          buttonsHead.classList.toggle("active");
      } else {
          console.error('Элемент .ButtonsHead не найден.');
      }
  }

  // Добавляем обработчики событий
  if (knopka) {
      knopka.addEventListener("click", formwork);
  } else {
      console.error('Кнопка с ID "send" не найдена.');
  }

  if (burger) {
      burger.addEventListener("click", rostics);
  } else {
      console.error('Элемент с ID "burger" не найден.');
  }


const picture = document.querySelectorAll('img [data-src]')
picture.forEach(element => {
     element.addEventListener("click", ()=>{const full = element.src;
        
     })  
    

});


});