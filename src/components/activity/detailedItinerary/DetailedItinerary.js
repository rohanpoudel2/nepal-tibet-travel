import Title from "@/components/ui/title/Title";

const DetailedItinerary = ({ data }) => (
  <>
    <div className="flex items-center justify-between relative">
      <Title
        title="Detailed Itinerary"
      />
      <button className="px-6 py-2 font-medium flex items-center gap-2 tracking-wide text-white transition-colors duration-300 transform bg-primary-mac rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80">
        <i className="fa-solid fa-arrow-down" />
        <span className="hidden md:block">Download this Itinerary</span>
      </button>
    </div>
    <div className="mt-10 space-y-8">
      {
        data.itinerary.map((d, i) => (
          <div key={i}>
            <h4 className="bg-gray-50 py-5 px-2">
              Day 0{i + 1} - {d.itinerary.itinerary_title}
            </h4>
            <div className="mt-5 prose max-w-none">
              <p>
                {d.itinerary.itinerary_description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  </>
);

export default DetailedItinerary