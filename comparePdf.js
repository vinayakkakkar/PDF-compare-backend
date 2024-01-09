const pdfParse = require('pdf-parse');
const fs = require('fs');

async function comparePdf(req, res) {
  let file1, file2; 

  try {
    file1 = req.files['file1'];
    file2 = req.files['file2'];

    if (!file1 || !file1[0].path || !file2 || !file2[0].path) {
      return res.status(400).json({ error: 'Invalid request payload' });
    }

    const file1Buffer = fs.readFileSync(file1[0].path);
    const file2Buffer = fs.readFileSync(file2[0].path);

    const file1Data = await pdfParse(file1Buffer);
    const file2Data = await pdfParse(file2Buffer);

    if (!file1Data || !file2Data) {
      return res.status(400).json({ error: 'Unable to parse PDF files' });
    }

    if (file1Data.numpages !== file2Data.numpages) {
      return res.json({ result: 'Files are different: Page count mismatch' });
    }

    for (let i = 0; i < file1Data.numpages; i++) {
      const page1Text = file1Data.text[i];
      const page2Text = file2Data.text[i];

      if (page1Text !== page2Text) {
        return res.json({
          result: `Files are different: Content mismatch on page ${i + 1}`,
        });
      }
    }

    return res.json({ result: 'Files are identical' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    if (file1 && file1[0].path) {
      fs.unlinkSync(file1[0].path);
    }
    if (file2 && file2[0].path) {
      fs.unlinkSync(file2[0].path);
    }
  }
}

module.exports = comparePdf;
