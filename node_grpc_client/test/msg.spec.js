const request = require("supertest");
const should = require("should");

const app = require("../app");

describe("GET /test 는", () => {
    describe("성공시", () => {
        it("200을 반환한다.", (done) => {
            request(app).get("/test").expect(200).end(done);
        });
    });
});

