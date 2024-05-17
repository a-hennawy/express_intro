const express = require("express");
const { mean, median, mode } = require("./formulas");
const ExpressError = require("./expressError");

const app = express();
app.use(express.json());

app.get("/mean", (req, res, next) => {
  try {
    numsArr = req.query.nums.split(",");
    const found = numsArr.find((el) => isNaN(el));
    if (found) throw new ExpressError(`${found} is not a number`, 400);
    let numsMean = mean(numsArr);
    //   return res.send(`The mean is ${numsMean}`);
    return res.json({
      Operation: "Mean",
      Value: numsMean,
    });
  } catch (err) {
    return next(err);
  }
});

app.get("/median", (req, res, next) => {
  try {
    numsArr = req.query.nums.split(",");
    const found = numsArr.find((el) => isNaN(el));
    if (found) throw new ExpressError(`${found} is not a number`, 400);
    let numsMedian = median(numsArr);
    //   return res.send(`The median is ${numsMedian}`);
    return res.json({
      Operation: "Median",
      Value: numsMedian,
    });
  } catch (err) {
    return next(err);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    numsArr = req.query.nums.split(",");
    const found = numsArr.find((el) => isNaN(el));
    if (found) throw new ExpressError(`${found} is not a number`, 400);
    let numsMode = mode(numsArr);
    res.json({
      Operation: "Mode",
      Value: numsMode,
    });
  } catch (err) {}
});

app.get("/all", (req, res, next) => {
  try {
    numsArr = req.query.nums.split(",");
    const found = numsArr.find((el) => isNaN(el));
    if (found) throw new ExpressError(`${found} is not a number`, 400);
    let numsMean = mean(numsArr);
    let numsMedian = median(numsArr);
    let numsMode = mode(numsArr);

    res.json({
      Operation: "All",
      Mean: numsMean,
      Median: numsMedian,
      Mode: numsMode,
    });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message;
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("TEST SERVER");
});
