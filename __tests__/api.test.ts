var express = require("express")
    , request = require("supertest-as-promised");

describe("CRUD operations", () => {
    beforeAll(() => {
        return request("http://localhost:3000")
            .post('/temp')
            .set('Content-Type', 'application/json')
            .send('{"origin":"XYZ","value":"1"}')
            .expect(200);
    });

    it("Read from specific origin", () => {
        return request("http://localhost:3000")
            .get("/origin/XYZ")
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then((res: any) => {
                expect(Object.keys(res.body).length > 0).toBe(true);
                expect(res.body[0]['value']).toBe(1);
            });
    });
    it("Read all records", () => {
        return request("http://localhost:3000")
            .get("/times")
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then((res: any) => {
                expect(Object.keys(res.body).length > 0).toBe(true);
            });
    });
});
