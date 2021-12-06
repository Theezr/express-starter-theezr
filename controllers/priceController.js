const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.dummy = catchAsync(async (req, res, next) => {
  console.log('hi');

  res.status(200).json({
    status: 'success',
    results: 'results',
    data: 'data'
  });
});
