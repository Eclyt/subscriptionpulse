const Joi = require('joi');
var userService = require('../service/user.service');
exports.contactUs = async(req,res)=>{
    try {
        const schema = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'org'] } }).required(),
            sender_name: Joi.string().min(3).max(50).required(),          
            country_code: Joi.number().min(1).max(999).required(),
            mobile_number: Joi.number().min(1000000000).max(9999999999).required(), 
            message: Joi.string().min(10).required(), 
        })

        let da = await schema.validateAsync(req.body);

        let userServiceData = await userService.contactUs(req.body);
        if (userServiceData.status == 1) {
            res.status(200).json({
                message: userServiceData.message,
                response: userServiceData.response
            })
        } else {
            res.status(500).json({
                message: userServiceData.message
            })
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
exports.askForQuote = async(req,res)=>{
    try {
        const schema = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'org'] } }).allow(null, ""),
            sender_name: Joi.string().min(3).max(50).required(),          
            country_code: Joi.number().min(1).max(999).required(),
            mobile_number: Joi.number().min(1000000000).max(9999999999).required(), 
            city: Joi.string().min(3).required(),
            property_type: Joi.string().min(3).required(),
            message: Joi.string().min(10).required(),
        })

        let da = await schema.validateAsync(req.body);

        let userServiceData = await userService.askForQuote(req.body);

        if (userServiceData.status == 1) {
            res.status(200).json({
                message: userServiceData.message,
                response: userServiceData.response
            })
        } else {
            res.status(500).json({
                message: userServiceData.message
            })
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
exports.subscribeNewLetter = async(req,res)=>{
    try {
        const schema = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'org'] } }).allow(null, ""),
      
        })

        let da = await schema.validateAsync(req.body);

        let userServiceData = await userService.subscribeNewLetter(req.body);

        if (userServiceData.status == 1) {
            res.status(200).json({
                message: userServiceData.message,
                response: userServiceData.response
            })
        } else {
            res.status(500).json({
                message: userServiceData.message
            })
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}