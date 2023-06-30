

exports.handler = async () => {
  const apiKey = process.env.HELLO;
  console.log('HELLO:', apiKey);

  return {
    statusCode: 200,
    body: `Environment variable HELLO value: ${apiKey}`,
  };
};
