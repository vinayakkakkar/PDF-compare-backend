const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const comparePdf = require('./comparePdf');
const fs = require('fs');

const app = express();
const PORT = 3001;

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(bodyParser.json());

app.post('/compare-pdfs', upload.fields([{ name: 'file1' }, { name: 'file2' }]), comparePdf);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
