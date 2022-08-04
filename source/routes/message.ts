import express from 'express';
import controller from '../controllers/message';
import controllerTemplate from '../controllers/template';

const router = express.Router();

router.post('/message', controller.sendMessage);
router.post('/template', controllerTemplate.registerTemplate);

export = router;
