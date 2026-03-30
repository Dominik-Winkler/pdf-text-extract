import Dropzone from "~/components/dropzone"

export default function Home() {
  return (
    <div className="container mx-auto pt-16">
      <h1 className="text-3xl">Extract Text from your PDF</h1>
      <Dropzone />
    </div>
  )
}
