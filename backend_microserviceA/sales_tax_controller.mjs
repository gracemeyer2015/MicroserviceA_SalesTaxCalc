import asyncHandler from 'express-async-handler';
import {body, validationResult} from 'express-validator'
import {Router} from 'express'
import calcSalesTaxTotal from './sales_tax_model.mjs'

const router = Router

router.post('/taxCalc', [
    body('total').isFloat({min: 0}),
    body('state').isString().notEmpty()
], asyncHandler(async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({Error:'Invalid Request',  Details: errors.array() })
    }
    const {total, state} = req.body

    const taxResult = calcSalesTaxTotal(total, state)
    if(!taxResult){
        return res.status(400).json({error: 'state is not defined'})
    }
    res.status(200).json(taxResult)

}))

export default router
