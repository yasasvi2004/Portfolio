exports.handler = async () => {
  const mySecret = process.env.HELLO;
  return {
    statusCode: 200,
    body: ` secret key is ${mySecret}`,
  };
};
