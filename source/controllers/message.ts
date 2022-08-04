import { Request, Response, NextFunction } from 'express';
// import axios, { AxiosResponse } from 'axios';
import serviceMessage from '../services/message';

interface DataMessage {
  to: string;
  message: string;
};

const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  const result = await serviceMessage.sendMessage(req.body.data); // chamar serviço que envia mensagem no wpp

  if (!result) {
    return res.status(400).json({ success: false, data: null });
  }

  return res.status(200).json({ success: true, data: result });
};

export default { sendMessage };
