import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
// import Resumecontent from './ResumeContent';
// import axios from 'axios';
import pdf from '../../Assets/resume-saifbashar.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const resumeLink =
    'https://raw.githubusercontent.com/saifbashar/portfolio/main/src/Assets/resume-saifbashar.pdf';
  // const resumeLink =
  //   'https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Resume_Soumyajit_Behera.pdf';
  return (
    <Container fluid className="resume-section ">
      <Particle />
      <Container className="" style={{ minHeight: '80vh' }}>
        {/* <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        <Row className="mx-auto  d-flex justify-content-center">
          <Document
            file={resumeLink}
            scale={1.5}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
