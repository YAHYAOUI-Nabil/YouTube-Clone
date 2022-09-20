const Video = require('../models/video')

exports.addVideo = async (req, res) => {
    const newVideo = new Video(req.body);

    try {
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
      } catch (err) {
        res.status(500).json(err);
      }
}
exports.getVideos = async (req, res) => {
  try {
    
    const videos = await Video.find()
    
    res.status(200).json(videos)
} catch (err) {
    res.status(500).json({message : 'Something went wrong?'})
}
}
exports.getOneVideo = (req, res) => {
    res.send('hello get one video')
}