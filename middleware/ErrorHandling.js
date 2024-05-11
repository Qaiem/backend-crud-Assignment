export const ErrorHandling = (err, req, res, next) => {
    return res.status(err.status || 500).json({
      error: {
        message: err.message? err.message : err.mymsg,
        randomInfo: "Some additinal information",
        stack: err.stack
      }
    });
  }
