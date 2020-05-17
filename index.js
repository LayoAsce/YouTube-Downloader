//requiring the 3 packages to be used
//and making the server listing to port 4000
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server Works !!! At port ${port}`);
});

//we need to make the server listen for get request on the path /download
app.get('/download', (req,res) => {
    const URL = req.query.URL;
    // res.json({url:URL});

//so, when the user sends a GET request to the server at the path /download 
//then the server will respond with the query inserted with the request

//Now we need to use ytdl-core which stand for YouTube DownLoader core which will download the video for us
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});
