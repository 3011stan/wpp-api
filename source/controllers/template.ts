import { Request, Response, NextFunction } from "express";
import serviceTemplate from '../services/template';

const registerTemplate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, language, category, components } = req.body.data;

    if (!name || !language || !category || !components) {
      return res.status(400).json({ success: false, error: 'Required fields: name, language, category, components' });
    }

    const result = await serviceTemplate.registerTemplate({ name, language, category, components });

    if (!result) {
      return res.status(400).json({ success: false, data: null });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Erro interno.' });
  }
}

export default { registerTemplate };
