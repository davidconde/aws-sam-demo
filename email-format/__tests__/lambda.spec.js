const app = require('../index.js');
var event, context;

describe('Tests index', function () {
    it('On no body should return a 400', async () => {
        const result = await app.emailHandler(event, context)

        expect(typeof result).toBe('object');
        expect(result.statusCode).toEqual(400);
    });

    it('On valid body should return a 200', async () => {

        event = {};
        event.body = ' { "email": "foo" } ';
        const result = await app.emailHandler(event, context)

        expect(typeof result).toBe('object');
        expect(result.statusCode).toEqual(200);
    });
});
