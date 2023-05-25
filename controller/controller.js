const db = require('../config/database');

exports.getRequest = (req, res) => {
    res.send('get method is runing ');
}

exports.postRequest = (req, res) => {
    res.send('post method is runing ');
}
exports.putRequest = (req, res) => {
    res.send('put method is runing ');
}

exports.deleteRequest = (req, res) => {
    res.send('delete method is runing ');
}
exports.patchRequest = (req, res) => {
    res.send('patch method is runing ');
}
exports.insertData = (req, res) => {
    const { title, body } = req.body;
    const sql = "INSERT INTO posts (title, body) VALUES (?,?)";
    db.query(sql, [title, body], (err, result) => {
        if (err) throw err;
        res.json({
            status: true,
            msg: 'Data saved.',
            data: result
        });
    });
}

exports.readData = (req, res) => {
    const sql = "SELECT * FROM `posts`";
    db.query(sql, (err, results, fields) => {
        if (err) throw err;
        console.log(fields);
        res.json({
            status: true,
            data: results
        });
    });

}
exports.selectOne = (req, res) => {
    const { id } = req.body;
    const sql = "SELECT * FROM `posts` WHERE `id` = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({
            status: true,
            data: result
        });
    });
}
exports.deleteRecord = (req, res) => {
    const { id } = req.body;
    const sql = "DELETE FROM `posts` WHERE `id` = ?";
    db.query(sql, [id], (err, result,) => {
        if (err) throw err;
        res.json({
            status: true,
            data: result
        });
    });
}
exports.updateRecord = (req, res) => {
    const { id, title, body } = req.body;
    const sql = "UPDATE posts SET title = ?, body = ? WHERE id = ?";
    db.query(sql, [title, body, id], (err, result) => {
        if (err) throw err;
        res.json({
            status: true,
            msg: 'Update Successfull',
            data: result
        });
    });
}