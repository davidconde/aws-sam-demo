const app = require('../index.js');
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.emailHandler(event, context)

        expect(typeof result).toBe('object');
        expect(result.statusCode).toEqual(200);
        expect(typeof result.body).toBe('string');
    });
});
