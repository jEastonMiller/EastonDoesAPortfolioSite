'use client'

// import * as PDFJS from 'pdfjs-dist/build/pdf';

// PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

const showPDFInViewer = async (url) => {

  const WebViewer = (await (import('@pdftron/pdfjs-express'))).default;
  
  WebViewer(
    {
      path: '/webviewer/lib',
      initialDoc: url
    }, pageRenderRef.current).then((instance) => {
      const { docViewer, Annotations } = instance;
      var FitMode = instance.FitMode;
      
      instance.setHeaderItems((header) => {
      header.update([]);
    });
  
    var iframeWindow = instance.iframeWindow;
    const headerItems = iframeWindow.document.querySelector('.HeaderToolsContainer');
    headerItems.style.display = 'none';

    docViewer.on('documentLoaded', () => {
    instance.setFitMode(FitMode.FitWidth);
    
    });
  
  });
  
}

export default function Viewer() {

  return (
    <div className='guide'>
      {showPDFInViewer(".../public/assets/test.pdf")}
    </div>

  )
}
  