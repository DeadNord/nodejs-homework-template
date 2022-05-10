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

- GET http://localhost:3000/api/auth/verify/:verificationToken --- Верификация
  Email по Токену
- POST http://localhost:3000/api/auth/signup --- Регистрация
- POST http://localhost:3000/api/auth/signin --- Авторизация
- GET http://localhost:3000/api/auth/signout --- Лог аут

Users

- GET - http://localhost:3000/api/users/current --- Текущий пользователь
- PATCH - http://localhost:3000/api/users --- Изменить Статус текущего
  пользователя
- PATCH - http://localhost:3000/api/users/avatars --- Изменить аватар текущего
  пользователя

Files

- POST - http://localhost:3000/api/files/upload --- Загрузить файл
- USE - http://localhost:3000/api/files/download/filename.format --- Скачать
  файл по названию
