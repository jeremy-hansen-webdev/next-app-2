'use client';

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
    public_id: string
}

export default function UploadPage() {
  const [publicId, setPublicId] = useState("")

  return (
    <>
        {publicId && 
            <CldImage src={publicId} width={270} height={180} alt='my dog' />
        }
        <CldUploadWidget
        uploadPreset="firstUpload"
        options={{
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // ✅ critical
            sources: ['local', 'url', 'camera'],
        }}
        onSuccess={(result) => {
            if (result.event !== "success") return
            const info = result.info as CloudinaryResult
            setPublicId(info.public_id)
        }}
        >
        {({ open }) => (
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
                open();
            }}
            >
            Upload
            </button>
        )}
        </CldUploadWidget>
    </>
  );
}
