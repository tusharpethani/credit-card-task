const {
    validateCardNumber,
    validateCardExpiryDate,
    validateCardCvv
} = require('../services/cardValidation');

const addCard = (req, res, next) => {
    const {cardNumber, cardExpiryDate, cardCvv} = req.body;
    if (!cardNumber) {
        return res.json({status: false, err: {type: 'validation', field: 'cardNumber', message: 'Please enter card number'}});
    }
    if (!validateCardNumber(cardNumber)) {
        return res.json({status: false, err: {type: 'validation', field: 'cardNumber', message: 'Please enter valid card number'}});
    }
    if (!cardExpiryDate) {
        return res.json({status: false, err: {type: 'validation', field: 'cardExpiryDate', message: 'Please enter card expiry date'}});
    }
    if (!validateCardExpiryDate(cardExpiryDate)) {
        return res.json({status: false, err: {type: 'validation', field: 'cardExpiryDate', message: 'Please enter valid card expiry date'}});
    }
    if (!cardCvv) {
        return res.json({status: false, err: {type: 'validation', field: 'cardCvv', message: 'Please enter card CVV'}});
    }
    if (!validateCardCvv(cardCvv)) {
        return res.json({status: false, err: {type: 'validation', field: 'cardCvv', message: 'Please enter valid card CVV'}});
    }
    res.json({status: true, message: 'Card added successfully'});
};

module.exports = {
    addCard
};