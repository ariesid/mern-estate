export const test = (req, res) => {
  res.json({
    message: "Hello World from controller",
    name: "John Doe",
    age: 30,
  });
};
