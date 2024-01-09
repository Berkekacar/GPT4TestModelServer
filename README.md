# Generate and Execute unit-test pyton programming language

Platform for creating and running unit tests for your Python codes using gpt API

## Installation

Use the project git clone https://github.com/Berkekacar/GPT4TestModelServer.git

```
npm install```

## Usage

```python
router.post("/generate",generate.Generate)

    kod,
    temperature,
    maxLenght,
    stopSequences,
    topP,
    frequencyPenalty,
    presencePenalty,
    modelSelection

router.post("/execute",execute.runCode)
#this parameter you should send to end point to generate test
#The server will return the unit test code 

#When you want to execute test just send unit test to run test