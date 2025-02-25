let bars = document.querySelector('.bars'),
    menu = document.querySelector('#menu'),
    formOne = document.querySelector('#one'),
    formTwo = document.querySelector('#two'),
    formThree = document.querySelector('#three'),
    sendBtn = document.querySelector('#sendBtn'),
    form = document.querySelector('#form'),
    title = document.querySelector('.loader')

    setTimeout(()=>(
        title.style.display='none'
    ), 3200)

sendBtn.addEventListener("click", function () {
    if (formOne.value == "" || formTwo.value == "" || formThree.value == "") {
        alert("Пожалуйста, введите информацию!");
    } else {
        alert('Ваша заявка принята!')
        form.submit();
        formOne.value = ""
        formTwo.value = ""
        formThree.value = ""
    }
});
bars.addEventListener('click', () => {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        menu.style.display = "none";
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
})