
const emailValidator = require('./../email-validator');

describe('Email validation', function () {
    it('Can handle empty string', async () => {
        const response = emailValidator('');
        expect(response).toBe(false);
    });

    it('Can handle an email', async () => {
        const response = emailValidator('dcm@dcm.com');
        expect(response).toBe(true);
    });
});