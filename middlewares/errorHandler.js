export const handleError = (err, req, res, next) => {
  console.log(err);
  res.json(err);
};
