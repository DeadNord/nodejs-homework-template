// const { authMiddleware } = require("../src/middlewares/index");
// const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = process.env;

const { token } = require("morgan");

describe("Authorization service test", () => {
  it("SignIn", () => {
    const schema = 1 + 2;

    const x = 1;
    const y = 2;

    const operation = (a, b) => {
      return a + b;
    };

    const result = operation(x, y);

    expect(result).toEqual(schema);
  });
});

//  unit-тесты для контроллера входа (login/signin)

// ответ должен иметь статус-код 200
// в ответе должен возвращаться токен
// в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String

//  res.status(200).json({
//       code: 200,
//    token: token,
//    user: {
//      email: email
//      subscription:  subscription
//    }
//     });
//   }
