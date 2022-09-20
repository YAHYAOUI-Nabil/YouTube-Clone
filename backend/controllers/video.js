const Video = require('../models/video')

exports.addVideo = async (req, res) => {
    const newVideo = new Product(req.body);

    try {
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
      } catch (err) {
        res.status(500).json(err);
      }
}
exports.getVideos = (req, res) => {
    res.send('hello get videos')
}
exports.getOneVideo = (req, res) => {
    res.send('hello get one video')
}