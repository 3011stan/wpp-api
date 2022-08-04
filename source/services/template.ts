import axios from "axios"

const registerTemplate = async (templateData: { name: string; language: string; category: string; components: any[] }) => {
  try {
    // fazer requisição POST p/ rota "message_templates"
    console.log('@ templateData', templateData);
    console.log('env.API_FACEBOOK', process.env.API_FACEBOOK);
    console.log('env.FROM_NUMBER_ID', process.env.FROM_NUMBER_ID);
    console.log()
    const response = await axios.post(`${process.env.API_FACEBOOK}/${process.env.WPP_BUSINESS_ID}/message_templates`, JSON.stringify(templateData), {
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_WPP}`,
        'Content-Type': 'application/json'
      }
    });
    // const response: any = {};
    if (response.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log('@ error', error);
    return error;
  }
}

export default { registerTemplate };
