import axios, { AxiosInstance } from "axios";
const API_FACEBOOK = 'https://graph.facebook.com/v13.0';
const FROM = process.env.FROM_NUMBER_ID; // ID do numero de test fornecido pelo Meta
// const TO = '5527997807463';
const FormData = require('form-data');
// const graphiql: AxiosInstance | null = axios.create({
//   baseURL: `${API_FACEBOOK}/${FROM}/messages`,
// });

// graphiql.defaults.headers.common = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${process.env.TOKEN_WPP}`
// };


const sendMessage = async (data: { to: string; message: string }) => {
  try {
    if (!data) {
      return null;
    }

    // chamar API's do facebook
    // const body = {
    //   messaging_product: 'whatsapp',
    //   preview_url: false,
    //   recipient_type: 'individual',
    //   to: data.to,
    //   type: 'text',
    //   text: {
    //     body: data.message
    //   }
    // };

    const bodyFormData = new FormData();
    // bodyFormData.append('name', 'hello_world');
    bodyFormData.append('to', data.to);
    bodyFormData.append('messaging_product', 'whatsapp');
    bodyFormData.append('type', 'template');
    bodyFormData.append('template', JSON.stringify({ name: 'hello_world', language: { 'code': 'en_US' } }));
    // bodyFormData.append('text', JSON.stringify({ body: 'Testeeee Tegrus.' }));

    // bodyFormData.append('language', "{ code: 'en_US' }");

    // const headers = {
    //   'Authorization': `Bearer ${process.env.TOKEN_WPP}`,
    //   'Content-Type': 'application/json'
    // }
    // console.log('@ body', body);
    // console.log('@headers', headers);

    // const result: any = await axios.post(`${API_FACEBOOK}/${FROM}/messages?access_token=${process.env.TOKEN_WPP}`, body, { headers });
    // const result = 'teste';
    const result: any = await axios({
      method: 'post',
      url: `${API_FACEBOOK}/${FROM}/messages`,
      data: bodyFormData,
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_WPP}`
      }
    });

    console.log('@@ result', result);
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
