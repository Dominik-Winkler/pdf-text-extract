import { useMutation } from "@tanstack/react-query"
import Dropzone from "~/components/dropzone"

export default function Home() {
  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("http://localhost:3000/api/extract-text", {
        method: "POST",
        body: formData,
      })
      const text = await response.text()
      return text
    },
  })

  return (
    <div className="container mx-auto pt-16">
      <h1 className="text-3xl">Extract Text from your PDF</h1>
      <Dropzone extractText={mutation.mutate} />
      {mutation.isPending && <p>Extracting text...</p>}
      {mutation.isError && (
        <p className="text-red-500">
          Error:{" "}
          {mutation.error instanceof Error
            ? mutation.error.message
            : "Unknown error"}
        </p>
      )}
      {mutation.isSuccess && (
        <div className="mt-4">
          <h2 className="text-2xl">Extracted Text:</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
            {mutation.data}
          </pre>
        </div>
      )}
    </div>
  )
}
