export const emailValidation = (email) => {
    var regularExpression = /\S+@\S+\.\S+/;
    return regularExpression.test(email)
}