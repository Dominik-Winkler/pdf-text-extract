import { Outlet } from "react-router"

export default function Layout() {
  return (
    <div>
      <header className="p-4 text-center">
        <p className="text-4xl">PDF Text Extractor</p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
