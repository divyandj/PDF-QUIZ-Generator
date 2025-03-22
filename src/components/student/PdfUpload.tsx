
import React, { useState } from 'react';
import { FileUp, AlertCircle, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const PdfUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [generateLoading, setGenerateLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    if (selectedFile.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
      toast.error('File size should be less than 10MB');
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    setUploading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setUploading(false);
    setUploaded(true);
    toast.success('PDF uploaded successfully');
  };

  const handleGenerateMCQ = async () => {
    if (!uploaded) {
      toast.error('Please upload a PDF file first');
      return;
    }

    setGenerateLoading(true);
    
    // Simulate MCQ generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setGenerateLoading(false);
    toast.success('MCQs generated successfully! Check the "Take Test" section');
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-card p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Upload PDF Document</h2>
        <p className="text-white/70 mb-6">
          Upload your study materials in PDF format, and our AI will automatically generate multiple-choice questions 
          based on the content. You can then take a test on these generated questions to test your knowledge.
        </p>

        <div className="bg-white/5 border border-dashed border-white/20 rounded-lg p-8 mb-6 text-center">
          {uploaded ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-light-teal/20 flex items-center justify-center mb-4">
                <Check size={24} className="text-light-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">File Uploaded Successfully</h3>
              <p className="text-white/70 mb-4 max-w-md mx-auto">
                {file?.name}
              </p>
              <button
                className="text-white/70 hover:text-white underline text-sm"
                onClick={() => {
                  setFile(null);
                  setUploaded(false);
                }}
              >
                Upload a different file
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <FileUp size={28} className="text-white/70" />
              </div>
              <h3 className="text-lg font-medium mb-2">Drop your PDF file here</h3>
              <p className="text-white/70 mb-4 max-w-md mx-auto">
                Supported format: PDF only. Maximum file size: 10MB.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <input
                  type="file"
                  id="pdfUpload"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="pdfUpload"
                  className="btn-outline cursor-pointer"
                >
                  Select File
                </label>

                {file && (
                  <button
                    className="btn-primary"
                    onClick={handleUpload}
                    disabled={uploading}
                  >
                    {uploading ? (
                      <>
                        <Loader2 size={16} className="animate-spin mr-2" />
                        Uploading...
                      </>
                    ) : (
                      'Upload File'
                    )}
                  </button>
                )}
              </div>
              
              {file && (
                <div className="mt-4 text-light-teal flex items-center">
                  <Check size={16} className="mr-2" />
                  {file.name}
                </div>
              )}
            </div>
          )}
        </div>

        {uploaded && (
          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Generate MCQ Questions</h3>
              <div className="flex items-center text-white/70 text-sm">
                <AlertCircle size={14} className="mr-1" />
                This may take a few moments
              </div>
            </div>
            
            <p className="text-white/70 mb-6">
              Click the button below to generate multiple-choice questions based on the uploaded PDF. 
              Our AI will analyze the content and create relevant questions to help you test your knowledge.
            </p>
            
            <div className="flex justify-end">
              <button
                className="btn-primary"
                onClick={handleGenerateMCQ}
                disabled={generateLoading}
              >
                {generateLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Generating Questions...
                  </>
                ) : (
                  'Generate MCQ Questions'
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {uploaded && (
        <div className="glass-card p-6">
          <h3 className="text-xl font-medium mb-4">How it works</h3>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-light-teal">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Upload PDF</h4>
                <p className="text-white/70">Upload your study materials in PDF format.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-light-teal">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">AI Processing</h4>
                <p className="text-white/70">Our AI analyzes the document content to understand the subject matter.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-light-teal">3</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Question Generation</h4>
                <p className="text-white/70">The system generates relevant multiple-choice questions with answer options.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-light-teal">4</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Take the Test</h4>
                <p className="text-white/70">Go to the "Take Test" section to start your personalized quiz and test your knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
