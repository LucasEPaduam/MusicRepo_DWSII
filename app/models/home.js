module.exports = {
    getVideos: (dbConnection, callBack) =>{
        console.log('Model da Home');
        const videos = `select * from videocadastrado;`;
        console.log(videos);
        dbConnection.query(videos, callBack);
    }
}