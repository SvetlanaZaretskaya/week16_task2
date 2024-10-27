const form = document.forms.myForm;
const agreement = document.getElementById('agree');
const button = document.getElementById('button');
// Валидация поля имя
const nameInput = document.forms.myForm.elements.name;
const nameRegex = /^[a-zа-я]{2,20}$/i;
const nameError = document.getElementById('nameError');
nameInput.addEventListener('input', function() {
    const nameValue = nameInput.value;
    if (nameRegex.test(nameValue)) {
        nameInput.classList.remove('error');
        nameError.textContent = ""
    } else {
        nameInput.classList.add('error');
        nameError.textContent = "Длина имени должна быть от 2 до 20 символов, можно использовать только буквы и пробелы"
    }
});

// Валидация поля емейл
const emailInput = document.forms.myForm.elements.email;
const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const emailError = document.getElementById('emailError');
emailInput.addEventListener('input', function(){
    const emailValue = emailInput.value;
    if (emailRegex.test(emailValue)) {
        emailInput.classList.remove('error');
        emailError.textContent = "";
    } else {
        emailInput.classList.add('error');
        emailError.textContent = "Введите емейл типа: example@email.com"
    }
})

// Валидация поля возраст
const ageInput = document.forms.myForm.elements.age;
const ageRegex = /^(1[8-9]|[2-9]\d)$/;
const areError = document.getElementById('ageError');
ageInput.addEventListener('input', function(){
    const ageValue = ageInput.value;
    if (ageRegex.test(ageValue)) {
        ageInput.classList.remove('error');
        areError.textContent = ""
    } else {
        ageInput.classList.add('error');
        areError.textContent = "Возраст должен быть от 18 до 99"
    }
})

// Отмена стандартных действий после валидации формы
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    form.reset();
})

// Валидация поля пароль
const password = document.getElementById('password');
const passwordRegex = /^(?=.*?[А-ЯЁA-Z])(?=.*?[а-яёa-z])(?=.*?\d).{8,}$/;

const passwordError = document.getElementById('passwordError');
password.addEventListener('input', function(){
    const passwordValue =  password.value;
    if (passwordRegex.test(passwordValue)) {
        password.classList.remove('error');
        passwordError.textContent = ""
    }  else {
        password.classList.add('error');
        passwordError.textContent = "Пароль должен быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру."
    }
})



// Кнопка активна
form.addEventListener('input', function(){
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const ageValue = ageInput.value;
    const passwordValue =  password.value;
    if(agreement.checked && nameRegex.test(nameValue) && emailRegex.test(emailValue) && ageRegex.test(ageValue) && passwordRegex.test(passwordValue)) {
        button.disabled = false
    } else {
        button.disabled = true
    }
})



// Вывод данных в консоль

button.addEventListener('click', function() {
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(ageInput.value);

    const genderValue = document.querySelector('[name="gender"]:checked').value;
    console.log(genderValue);

    const select = document.getElementById('occupation');
    console.log(select.value);
    console.log(password.value);
    console.log(agreement.checked);

})

// focus - закомментировала так как более правильно когда в инпуте сразу настраиваются ошибки
// const inputs = document.querySelectorAll('input');
// inputs.forEach(function(input){
//     input.addEventListener('focus', function () {
//         input.style.border = '1px solid orange';
//         input.addEventListener('blur', function () {
//             input.style.border = ''; 
//           }); 
//       });
// })