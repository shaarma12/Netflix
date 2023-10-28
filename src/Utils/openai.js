import OpenAI from "openai";
import { REACT_APP_OPENAI_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
