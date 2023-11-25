import GalleryImages from "@/components/gallery/GalleryImages";
import { getGallery } from "@/utils/wordpress";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await getGallery(id);
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Gallery = async ({ params }) => {

  if (!params.id) {
    return notFound();
  }
  const gallery = await getData(params.id);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12 container">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{gallery.title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <GalleryImages gallery={gallery.data} />
        </div>
      </div>
    </section>
  )
}

export default Gallery