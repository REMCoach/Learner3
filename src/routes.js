  
const { Router } = require('express');

const cmscontent = require('./api/cmscontent/cms.routes');

const router = Router();

router.get('https://325yu.csb.app/employee', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'https://difuza.com/');
  res.end();
});

router.use('/cmscontent', cmscontent);

module.exports = router;
