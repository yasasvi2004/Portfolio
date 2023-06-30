exports.handler = async () => {
  const mySecret = process.env.HELLO;
  return {
    statusCode: 200,
    body: `hello world! I have a ${mySecret}`,
  };
};
