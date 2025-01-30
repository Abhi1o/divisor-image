import { ImageGallery } from "@/components/image-gallery"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">HTML Reference Gallery</h1>
        <ImageGallery />
      </div>
    </main>
  )
}

