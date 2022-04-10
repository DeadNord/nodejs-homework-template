const request = require("supertest");
const app = require("../app");

describe("Authorization service test", () => {
  it("Sign In", () => {
    const testUser = {
      email: "emailTest@gmail.com",
      password: "g52g2523523",
    };

    const mRes = {
      status: "success",
      code: 200,
      data: {
        token: String,
        user: {
          email: testUser.email,
          subscription: "starter" || "pro" || "business",
        },
      },
    };

    request(app)
      .post("/api/auth/signin")
      .send(testUser)
      .set("Accept", "application/json")
      .expect(200)
      .expect(function (res) {
        res.body.data.token = mRes.data.token;
        res.body.data.user.email = mRes.data.user.email;
        res.body.data.user.subscription = mRes.data.user.subscription;
      });
  });
});
