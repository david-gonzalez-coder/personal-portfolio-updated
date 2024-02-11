import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'


const UploadFilesArea = ({ submitFunction = () => {}, minFiles = 1, maxFiles, accept="image/png, image/jpg, image/jpeg", content={buttonText: "Send"} }) => {
  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [status, setStatus] = useState("") //submitted - error - uploading

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const validate  = () => {
    
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)

    const acceptedTypes = accept.split(',');

    const droppedImages = Array.from(e.dataTransfer.files).filter((file) => {
      // Verificar si el tipo de archivo está entre los tipos aceptados
      const fileType = file.type || '';
      return acceptedTypes.some((acceptedType) => fileType.includes(acceptedType.trim()));
    });


    setImages((prevImages) => [...prevImages, ...droppedImages])

    const droppedPreviewImages = droppedImages.map((image) =>
      URL.createObjectURL(image)
    )

    setPreviewImages((prevPreviewImages) => [
      ...prevPreviewImages,
      ...droppedPreviewImages,
    ])
  }

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files)

    setImages((prevImages) => [...prevImages, ...selectedImages])

    const selectedPreviewImages = selectedImages.map((image) =>
      URL.createObjectURL(image)
    )

    setPreviewImages((prevPreviewImages) => [
      ...prevPreviewImages,
      ...selectedPreviewImages,
    ])
  }

  const handleRemoveImage = (index) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)

    const updatedPreviewImages = [...previewImages]
    updatedPreviewImages.splice(index, 1)

    setImages(updatedImages)
    setPreviewImages(updatedPreviewImages)
  }

  const handleSumbit = () => {
    

    //validate
    if(minFiles){
      if(images.length < minFiles) {
        setError(true)
        setErrorMessage(`Minimum files: ${minFiles}`)
        return
      }
    }

    if(maxFiles){
      if(images.length > maxFiles) {
        setErrorMessage(`Maximum files: ${maxFiles}`)
        setError(true)

        return
      }
    }
    //submit
    setSubmitted(true)
    submitFunction(images)
    setImages([])
    setPreviewImages([])

    setTimeout(() => {
      setSubmitted(false)
    }, 1000)
  }

  return (
    <div className='text-slate-600 rounded-xl p-4 bg-white flex flex-col items-center transition-transform'>
      {submitted ? (
        <div className='border-2 rounded-2xl border-dashed w-full duration-150 max-w-[600px] p-4 text-center font-bold flex flex-col justify-center items-center aspect-[15/5]'>
          <span className='text-[2.8rem]'>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            File succesfully <span className='text-[#2095F4]'>Uploaded</span>!
          </p>
          <span></span>
        </div>
      ) : (
        <div className=' flex flex-col items-center gap-4 w-full'>
          <div
            className={`  border-dashed border-2 ${error ? "border-red-300 bg-red-100" : "border-slate-300"} ${
              dragging ? 'bg-[#2095F4] text-white border-white' : ''
            } w-full rounded-2xl relative overflow-hidden  flex items-center justify-center flex-col gap-2 transition duration-300 max-w-[600px] m-auto aspect-[15/5]`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label className=' w-full h-full'>
              {!dragging ? (
                <div className='p-4 cursor-pointer h-full   text-center font-bold flex flex-col items-center justify-center'>
                  <span className='text-[2.8rem]'>
                    <MdOutlineCloudUpload />
                  </span>
                  <p>
                    Drag and drop{' '}
                    <span className='text-[#2095F4]'>images, videos</span> or{' '}
                    <span className='text-[#2095F4]'>any file</span>
                  </p>
                  <span className='font-normal'>
                    or click here to browse on your computer
                  </span>
                  <p className={`transition-all absolute ${errorMessage ? "-top-4" : "-top-[100%]"}  right-0 mt-4 bg-red-500 font-normal text-white rounded py-1 w-full`}>{errorMessage}</p> 

                </div>
              ) : (
                <div className='p-4 text-center w-full h-full font-bold flex flex-col items-center justify-center'>
                  <span className='text-[2.8rem]'>
                    <MdOutlineCloudUpload />
                  </span>
                  <p>Drop them right here!</p>
                </div>
              )}

              <input
                type='file'
                multiple
                accept={accept}
                onChange={handleImageChange}
                className='hidden'
              />
            </label>
          </div>

          {/* preview */}
          {previewImages.length > 0 && (
            <div className='transition-all mt-4  gap-4 bg-white p-4 rounded-xl grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid w-full'>
              {previewImages.map((preview, index) => (
                <div
                  key={index}
                  className='relative rounded-xl overflow-hidden'
                >
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className='w-full h-full aspect-square object-cover rounded-md bg-slate-100'
                  />
                  <button
                    type='button'
                    onClick={() => handleRemoveImage(index)}
                    className='absolute bg-white top-2 right-2  text-slate-400 text-2xl rounded-full  cursor-pointer'
                  >
                    <IoClose />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleSumbit}
            className='rounded-full text-white  py-2 px-14 bg-[#2095F4] '
          >
            {content.buttonText}
          </button>
        </div>
      )}
    </div>
  )
}

export default UploadFilesArea
