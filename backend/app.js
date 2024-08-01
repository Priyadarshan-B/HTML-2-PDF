const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); 

app.post('/generate-pdf', async (req, res) => {
  const { htmlContent } = req.body;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

  await browser.close();

  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdfBuffer.length });
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`PDF generation server running at http://localhost:${port}`);
});
