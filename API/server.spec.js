const request = require("supertest");

const server = require("./server.js");

describe("server.js", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server) //return makes it async
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    // another way to write the same above test with async and await
    it("should return 200 OK (async version)", async function() {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    it("should return JSON", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('should respond with {api: "up"}', function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.api).toBe("up");
        });
    });
  });
});