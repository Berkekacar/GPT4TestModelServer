const dotenv = require('dotenv')
const OpenAI = require('openai')
const express = require("express")
const fs = require('fs')

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

async function sendQuery(
    kod,
    temperature,
    maxLenght,
    stopSequences,
    topP,
    frequencyPenalty,
    presencePenalty,
    modelSelection) {
    const SYSTEM_PROMPT =
        'Provide a Python unit test for a given function using the unittest framework. The response should consist solely of Python code without any additional explanations or comments..DO NOT INCLUDE \`\`\`python IN YOUR ANSWER!.';

    const PROMPT =
        'Generate a unit test in Python using the unittest library for the following code. The response should only include the Python code without any additional comments or explanations. The test should cover typical and edge case scenarios. Finally, combine the test and focal code.Answer me as code' + kod;

    const chatCompletion = await openai.chat.completions.create({
        model: modelSelection,
        messages: [
            {
                role: 'system',
                content: SYSTEM_PROMPT,
            },
            {
                role: 'user',
                content: PROMPT,
            },
        ],
        max_tokens: maxLenght,
        temperature: temperature,
        top_p: topP,
        frequency_penalty: frequencyPenalty,
        presence_penalty: presencePenalty,
        stop: stopSequences
    });
    let total_tokens = chatCompletion.usage.total_tokens;
    fs.appendFile('./total_tokens.txt', total_tokens.toString() + '\n', (err) => { });
    let tempPythonFile = './temp_script.py';
    fs.writeFileSync(tempPythonFile, kod);
    return chatCompletion.choices[0].message.content;
}

async function Generate(req, res) {
    try {
        const { focalCode, modelSettings } = req.body
        let testFunction = await sendQuery(
            focalCode,
            parseFloat(modelSettings.temperature),
            parseInt(modelSettings.maxLength),
            modelSettings.stopSequences,
            parseFloat(modelSettings.topP),
            parseFloat(modelSettings.frequencyPenalty),
            parseFloat(modelSettings.presencePenalty),
            modelSettings.modelSelection).catch(console.error);

        const responseObject = {
            code: "200",
            testFunction,
        }
        console.log(responseObject);
        res.json(responseObject)
        
    } catch (error) {
        const catchErrorResponse = {
            code : "500"
        }
        console.log(error.message);

        res.json(catchErrorResponse)
    }

}

module.exports = {Generate}