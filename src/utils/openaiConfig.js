import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';

const client = new OpenAI({
  apiKey: OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true,
// Api calls are ideally from the sever side environment.
    // Why? So that our data is safe and secure.
// In this project we are trying to make the call from client side which leads to an error as openai doesn't allow that.
// To prevent this, above property is set to 'true' (suggested in openai docs)
});

export default client;  