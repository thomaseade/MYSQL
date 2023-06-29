function errorHandling(err, req, res, nect)
{
    res.status(500).json({message: err.message})
}

module.exports = errorHandling;