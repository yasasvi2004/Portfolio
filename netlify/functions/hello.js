// hello-world.js

exports.handler = async (event, context) => {
  const apiKey = process.env.API_KEY;
  console.log('API_KEY:', apiKey);

  return {
    statusCode: 200,
    body: `Environment variable API_KEY value: ${apiKey}`,
  };
};
