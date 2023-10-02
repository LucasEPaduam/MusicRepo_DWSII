module.exports = {
    getVideos: (dbConnection, callBack) =>{
        const videos = `select * from videocadastrado;`;
        dbConnection.query(videos, callBack);
    }
}