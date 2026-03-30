import { Upload } from "lucide-react"
import { useDropzone } from "react-dropzone"

export default function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: { "application/pdf": [".pdf"] },
    onDropAccepted: (files) => {
      console.log("Accepted files:", files)
    },
  })

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.name} - {file.size} bytes
    </li>
  ))

  return (
    <section className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
      <div
        {...getRootProps({
          className: "dropzone",
        })}
      >
        <div className="flex justify-center">
          <Upload />
        </div>
        <p>Drop PDF here or click to upload</p>
        <input {...getInputProps()} />
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  )
}
