import axios from "axios";
const CHATGPT_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_MODEL = "gpt-3.5-turbo";

export const chatGPTMessage = async (prompt, AIkey) => {
  const config = {
    headers: {
      Authorization: `Bearer ${AIkey}`,
    },
  };
  const message = { role: "user", content: prompt };
  const data = {
    model: CHATGPT_MODEL,
    messages: [message],
  };
  try {
    const response = await axios.post(CHATGPT_ENDPOINT, data, config);
    const chatGPTResponse = response?.data?.choices[0]?.message.content;
    return chatGPTResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
};
