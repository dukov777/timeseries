var express = require("express")
    , request = require("supertest-as-promised");

//var app = express();

// describe('Flow API', () => {
//     it('hello test', () => {
//         return request(app).get('/')
//             .expect(200)
//             .then((res) => {
//                 expect(typeof res.body.message).toBe('string');
//                 expect(res.body.message).toBe('Hello Flow!');
//             });
//     });
// });

describe("GET /times", function () {
    it("should work", function () {
        return request("http://localhost:3000")
            .get("/origin/govedarci")
            .expect(200)
            // .expect('Content-Type', 'application/json')
            .then((res) => {
                expect(Object.keys(res.body).length > 1).toBe(true);
                expect(res.body[0]['origin']).toBe('govedarci');
            });    
        });
});
