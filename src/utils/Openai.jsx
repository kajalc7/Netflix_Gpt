import { GoogleGenAI } from "@google/genai";
import {Openai_Key} from "./constants"

const openai = new GoogleGenAI({
  apiKey: Openai_Key,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});


export default openai
