let express = require('express');
let fileUpload = require('express-fileupload');
let app = express();
const index = require('./index');

app.use(fileUpload({}));
app.use(express.static('public'));

app.get('/', function (req, res) {

  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.write('<form action="/upload" method="POST" enctype="multipart/form-data" >');
  res.write('<input type="file" name="fileJSON">');
  res.write('<input type="submit">');
  res.write('</form>');
  res.end();
})

app.post('/upload', function(req, res) {
  // console.log('req.files', req.files);
  console.log(index.parseJSON(req.files.fileJSON))
  req.files.fileJSON.mv('public/files/'+req.files.fileJSON.name);
  res.end(req.files.fileJSON.data);
  console.log(req.files.fileJSON); // the uploaded file object
});

let server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port);

});

//https://dmitrytinitilov.gitbooks.io/strange-javascript/content/express/file_uploading_on_express.html
