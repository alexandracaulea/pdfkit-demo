const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('dist/hello-world.pdf'));
doc.fontSize(50).fillColor('#1C77CD').text('Hello World');
doc.end();
