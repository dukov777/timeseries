var express = require("express")
    , request = require("supertest-as-promised");

// describe("GET /times", function () {
//     it("should work", function () {
//         return request("http://localhost:3000")
//             .get("/origin/govedarci")
//             .expect(200)
//             // .expect('Content-Type', 'application/json')
//             .then((res:any) => {
//                 expect(Object.keys(res.body).length > 1).toBe(true);
//                 expect(res.body[0]['origin']).toBe('govedarci');
//             });    
//         });
// });

describe("Simple expression tests", () => {
    test("Check literal value", () => {
        request("http://localhost:3000")
            .get("/origin/govedarci")
            .expect(200)
            // .expect('Content-Type', 'application/json')
            .then((res: any) => {
                expect(Object.keys(res.body).length > 1).toBe(true);
                expect(res.body[0]['origin']).toBe('govedarci');
            });
    });
});
