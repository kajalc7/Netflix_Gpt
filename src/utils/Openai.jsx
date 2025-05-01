import OpenAI from 'openai';
import {Openai_Key} from "./constants"

const openai = new OpenAI({
  apiKey: Openai_Key,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});


export default openai
