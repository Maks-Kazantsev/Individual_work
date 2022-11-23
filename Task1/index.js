// Напишите код, который будет спрашивать логин с помощью prompt.
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – пок
//     азать «Отменено», в противном случае отобразить «Я вас не знаю».
//
// Пароль проверять так:
//
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».


let users = prompt('Кто там?', '');

if (users === '' || users === null)
{
    alert('cancelled');
}
else if (users !== 'Admin')
{
    alert('Unknown user');
}
if (users === 'Admin')
{
    let password = prompt('Enter the password', '');

    if (password === '' || password === null)
    {
        alert('Go fuck yourself');
    }
    else if (password !== 'Boss')
    {
        alert('Fuck you');
    }
    else if (password === 'Boss')
    {
        alert('Hello Boss!');
    }
}


