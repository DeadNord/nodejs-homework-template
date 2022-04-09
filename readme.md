- hw02 - +
- hw03 - +
- hw04 - ?
- hw05 -
- hw06 -

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо
  выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими
  исправлениями простых ошибок

### Рауты:

Contacts

- GET - http://localhost:3000/api/contacts --- Получить Контакты
- GET - http://localhost:3000/api/contacts/:id --- Получить Контакты по ID
- POST - http://localhost:3000/api/contacts --- Записать контакт
- DELETE - http://localhost:3000/api/contacts/:id --- Удалить контакт
- PUT - http://localhost:3000/api/contacts/:id --- Перезаписать контакт
- PATCH - http://localhost:3000/api/contacts/:id/favorite --- Изменить статус
  контакта

Auth

- POST http://localhost:3000/api/auth/signup --- Регистрация
- POST http://localhost:3000/api/auth/signin --- Авторизация
- GET http://localhost:3000/api/auth/signout --- Лог аут

Users

- GET - http://localhost:3000/api/users/current --- Текущий пользователь
- PATCH - http://localhost:3000/api/users --- Изменить текущего пользователя
