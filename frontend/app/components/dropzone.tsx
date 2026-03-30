import { useMutation } from "@tanstack/react-query"
import { Upload } from "lucide-react"
import { useDropzone } from "react-dropzone"

export default function Dropzone() {
  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("http://localhost:3000/api/extract-text", {
        method: "POST",
        body: formData,
      })
      return response.json() as Promise<string>
    },
  })

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: { "application/pdf": [".pdf"] },
    onDropAccepted: (files) => {
      if (files.length > 0 && files[0].type === "application/pdf") {
        mutation.mutate(files[0])
      }
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
