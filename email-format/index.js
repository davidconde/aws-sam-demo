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
        
        const postedBody = event && event.body ? JSON.parse(event.body) : {};
        const email = postedBody && postedBody.email ? postedBody.email : "";

        const validationResponse = emailValidator(email);

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                email: email,
                result: validationResponse
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
