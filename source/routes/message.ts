import express from 'express';
import controller from '../controllers/message';

const router = express.Router();

router.post('/message', controller.sendMessage);

export = router;
