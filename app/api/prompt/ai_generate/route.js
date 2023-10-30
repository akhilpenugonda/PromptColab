import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const data = { userId, prompt, tag };

    try {
        console.log(process.env.PALM_API_URL);
        const response = await fetch(process.env.PALM_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: request
        });

        if (!response.ok) {
            throw new Error('Failed to call it');
        }
        console.log(response);
        const newPrompt = await response.json();
        return new Prompt(newPrompt);
    } catch (error) {
        console.error(error);
        return null;
    }
};