  
const { Router } = require('express');

const cmscontent = require('./api/cmscontent/cms.routes');

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'https://difuza.com/');
  res.end();
});

router.use('/cmscontent', cmscontent);

module.exports = router;
