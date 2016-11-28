var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/services/guarding', function(req, res, next) {
  res.render('pages/guarding', {
        title: 'Guarding Services',
        description: 'Custom Guarding Services including Patrolling, Access Control and Providing Information ',
        highlight: ['Specialised Services','Custom Trained','Patrolling','Access Control', 'Providing Information'],
        photos:['image6','image10','image1','image4']

    });

});


router.get('/services/firearm-training', function(req, res, next) {
  res.render('pages/firearmtraining', {
        title: 'Firearm Training',
        description: 'Accredited firearms training for proficiency with handguns, rifles, shotguns and semi automatic',
        highlight: ['Accredited with SAPS','Accredited with SAPFTC','Handgun', 'Rifle','Shotgun','Semi Auto'],
        photos:['image1','image2','image3','image4']

    });

});


router.get('/services/dog-unit', function(req, res, next) {
  res.render('pages/dogunit', {
        title: 'Dog Unit',
        description: 'Well trained tracker dogs with Skilled handelers',
        highlight: ['Well Trained Tracker Dogs','Skilled Handelers'],
        photos:['image11','image10','image5','image6','image7','image9']

    });

});


router.get('/services/section-21', function(req, res, next) {
  res.render('pages/page', {
        title: 'Section 21',
        description: 'We provide section 21 for Businesses',
        highlight: ['Section 21'],
        photos:['']

    });

});

router.get('/contact-us', function(req, res, next) {
  res.render('pages/contactus', {
        title: 'Contact Us',
        description: 'We look forward to doing business with you and invite you to contact us to find out more about how we can make the safety of you and your assets our priority. For a customised quotation, please contact us',
        highlight: ['072 709 4682','076 866 4496'],

    });

});

router.get('/about-us', function(req, res, next) {
    res.render('pages/about', {
        title: 'About Us',
        description: 'Read our company profile',
        highlight: [
            'Company Overview',
            'Services Offered',
            'Guard Motivation',
            'Guarding Equipment',
            'References'
        ],

    });

});


module.exports = router;
