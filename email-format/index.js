const { ResponseUtil, BodyParser } = require('dcm-lambda-utils');
const emailValidator = require('./email-validator');

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.emailHandler = async (event, context) => {
    try {
        
        const body = BodyParser(event);

        if (body === null)
            return ResponseUtil.Error(400, { error: true, message: "Invalid request" });

        const validationResponse = emailValidator(body.email);

        return ResponseUtil.OK({
            email: body.email,
            result: validationResponse
        });
    } catch (err) {
        console.log(err);
        return ResponseUtil.Error(500, { error: err });
    }
};
