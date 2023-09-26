const dotenv = require("dotenv");
dotenv.config();



const { Configuration, OpenAIApi } = require("openai");
// An instance of the Configuration class is created, passing the OpenAI API key from the environment variables.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// An instance of the OpenAIApi class is created, using the previously created configuration.
const openai = new OpenAIApi(configuration);


exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body; 
    console.log("I am in the 25%"); 
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,   
      max_tokens: 2049,
      temperature: 1.0,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.summaryController1 = async (req, res) => {
  try {
    const { text } = req.body; 
    console.log("I am in the 50%"); 
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,   
      max_tokens: 2049,
      temperature: 0.2,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.summaryController2 = async (req, res) => {
  try {
    const { text } = req.body; 
    console.log("I am in the 75%");
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,   
      max_tokens: 2049,
      temperature: 0.01,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 2049,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    console.log("User input:", text);

    const prompt = `Me: 'what is your name?'\nBaySuzi: 'Bay Suzi is my name'\nMe: ${text}\nBaySuzi:`;

    const response = await openai.Completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.7,
    });

    return res.status(200).json(response.choices[0].text.trim());
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "An error occurred.",
    });
  }
};
// exports.chatbotController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const { data } = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `Answer question similar to how BaySuzi from star war would.
//       Me: 'what is your name?'
//       BaySuzi: 'Bay Suzi is my name'
//       Me: ${text}`,
//       max_tokens: 300,
//       temperature: 0.7,
//     });
//     if (data) {
//       if (data.choices[0].text) {
//         return res.status(200).json(data.choices[0].text);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(404).json({
//       message: err.message,
//     });
//   }
// };
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `/* convert these instruction into javascript code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `generate a scifi image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if (data) {
      if (data.data[0].url) {
        return res.status(200).json(data.data[0].url);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};