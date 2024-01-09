#Using Technologies
https://www.ntuclearninghub.com/documents/51786/4216795/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476?t=1679043970578
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
