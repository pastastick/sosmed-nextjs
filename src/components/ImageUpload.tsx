"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, value, onChange }: ImageUploadProps) {
  if (value)
    return (
      <div className="relative h-40 w-40">
        <img
          src={value}
          alt="Upload"
          className="rounded-md size-40 object-cover"
        />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-w w-4 text-white" />
        </button>
      </div>
    );

  return (
    <UploadDropzone
      className="bg-slate-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => console.log(error)}
    />
  );
}

export default ImageUpload;
