import axios from "axios";
const FormData = require('form-data');

const sendMessage = async (data: { to: string; message: string }) => {
  try {
    if (!data) {
      return null;
    }
    // testar passando um JSON simples com stringfy.
    const bodyFormData = new FormData();
    bodyFormData.append('to', data.to);
    bodyFormData.append('messaging_product', 'whatsapp');
    bodyFormData.append('type', 'template');
    bodyFormData.append('template', JSON.stringify({ name: 'welcome_greetings', language: { 'code': 'pt_BR' } }));

    const result: any = await axios({
      method: 'post',
      url: `${process.env.API_FACEBOOK}/${process.env.FROM_NUMBER_ID}/messages`,
      data: bodyFormData,
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_WPP}`
      }
    });

    if (result.status === 200) {
      return result.data;
    }

    return null;
  } catch (error) {
    console.log('@ error', error);
    return error;
  }
}

export default { sendMessage };
