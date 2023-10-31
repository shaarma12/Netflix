import OpenAI from "openai";
import { API_KEY_OPENAI } from "./constant";
const openai = new OpenAI({
  apiKey: API_KEY_OPENAI,
  dangerouslyAllowBrowser: true,
});

export default openai;
