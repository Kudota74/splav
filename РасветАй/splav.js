document.addEventListener("DOMContentLoaded", function () {
    'use strict'
    const knopka = document.getElementById("send" );
    const error = document.getElementById("error");
    const form = document.getElementById("form");
    
    // document.getElementById("form").addEventListener("submit", function (event) {
    function formwork (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const members = document.getElementById("members").value.trim();  // переменные формы
        const comment = document.getElementById("comment").value.trim();
        const days = document.getElementById("days").value.trim();
        const date = document.getElementById("date").value;
       

        if(!name || !phone || !email || !members || !days || !date )
            {error.style.display = "flex"}
        else{alert("Спасибо за бронирование, ожидайте обратной связи!")};
        let data = {name, phone, email, members,
                    comment, days, date};


      form.reset();

       
        }
        const burger = document.getElementById("burger")

        function rostics () {
            const ButtonsHead = document.querySelector('.ButtonsHead').
            ButtonsHead.classList.toggle("active");
          }
          burger.addEventListener("click", burger)
       

         

        knopka.addEventListener("click", formwork)
        
    
})