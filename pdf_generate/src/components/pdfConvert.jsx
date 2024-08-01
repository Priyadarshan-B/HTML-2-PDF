import React, { useState, useRef } from 'react';
import axios from 'axios';

const HtmlToPdfAndDocx = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const contentRef = useRef();

  const handleDownloadPdfWithPuppeteer = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate-pdf', { htmlContent }, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'document.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="container">
      <h2>Enter HTML Content Here..</h2>
      <textarea
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        placeholder="Paste your HTML code here"
        className="textarea"
      />
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="html-content"
      />
      <button onClick={handleDownloadPdfWithPuppeteer} className="download-button">Download Selectable PDF</button>
    </div>
  );
};

export default HtmlToPdfAndDocx;
