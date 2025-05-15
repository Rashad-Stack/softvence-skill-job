import { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const CvUpload = ({ register, errors, setValue }) => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setValue("resume", file); // Update react-hook-form
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setValue("resume", null); // Clear react-hook-form
    inputRef.current.value = null;
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">
        Upload your CV <span className="text-red-500">*</span>
      </label>

      <small className="text-gray-500 mt-2">
         Upload 1 supported file. Max 10 MB.
      </small>

      {/* Hidden file input */}
      <input
        {...register("resume", { required: "Please Upload your Resume" })}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
      />

      {/* Upload area or file preview */}
      {!selectedFile ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-green-500 transition-colors"
        >
          <IoCloudUploadOutline className="w-10 h-10 mx-auto text-gray-400 mb-2" />
          <p className="font-semibold text-gray-700">Upload a File</p>
        </div>
      ) : (
        <div className="flex items-center border rounded-lg p-3 mt-2 justify-between bg-white shadow-sm">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              PDF
            </span>
            <span className="text-sm text-gray-800">{selectedFile.name}</span>
          </div>
          <button onClick={handleRemoveFile}>
            <AiOutlineClose className="text-gray-500 hover:text-red-600 w-5 h-5 cursor-pointer" />
          </button>
        </div>
      )}

      {/* Error message */}
      {errors.resume && !selectedFile && (
        <span className="text-sm text-red-500 mt-1">
          {errors.resume.message}
        </span>
      )}
    </div>
  );
};

export default CvUpload;