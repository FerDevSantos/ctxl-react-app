const { Router } = require('express');
const BaselineTable = require('../baseline/table');

const router = new Router();


router.post('/baseline-add', (req, res, next) => {
    const {
        user_id, baseline_date, first_name, last_name, date_of_birth,
        gender, race, p_height, p_weight, hair_color, dominant_hand, smoker, pregnant, drug_user
     } = req.body;

     
    BaselineTable.storeBaseline({ 
        user_id, baseline_date, first_name, last_name, date_of_birth,
        gender, race, p_height, p_weight, hair_color, dominant_hand, smoker, pregnant, drug_user
    }).then(() => res.json({ message: 'success!' }))
    .catch(error => next(error));
});



module.exports = router;