import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const email = "test@test.com";

  generateToken(email, (err, token) => {
    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2); //wrong assertion
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate a token value", () => {
  const email = "test@test.com";

  return expect(generateTokenPromise(email)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const email = "test@test.com";

  const token = await generateTokenPromise(email);

  expect(token).toBeDefined();
});
