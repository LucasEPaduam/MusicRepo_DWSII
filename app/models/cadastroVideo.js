module.exports = {
    addVideo:(video, userId, dbConnection, callback) => {
        const sql = `insert into videocadastrado (artista, musica, ano, categoria, id_usuario, url) VALUES ("${video.artista}", "${video.musica}", "${video.ano}", "${video.categoria}", "${userId}", "${video.url}");`;
        dbConnection.query(sql, callback);        
    }
    }