'use client';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import React, { useState } from 'react';

interface CldUploadResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage alt='...' src={publicId} width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset='upload-files'
        onSuccess={(result) => {
          if (result.event !== 'success') return;
          const info = result.info as CldUploadResult;
          setPublicId(info.public_id);
        }}
        options={{ sources: ['local'], multiple: false, maxFiles: 5 }}
      >
        {({ open }) => (
          <button onClick={() => open?.()} className='btn btn-primary'>
            Upload a file
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
