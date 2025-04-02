'use client';
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react';

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='upload-files'>
      {({ open }) => (
        <button onClick={() => open?.()} className='btn btn-primary'>
          Upload a file
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
