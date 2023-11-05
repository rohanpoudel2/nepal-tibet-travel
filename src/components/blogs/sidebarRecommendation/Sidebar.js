
const Sidebar = ({ top = false }) => {
  return (
    <div className={`mt-8 lg:w-1/4 lg:mt-0 lg:px-6 ${top ? 'hidden lg:block' : "block lg:hidden"}`}>
      <div>
        <h3 className="text-sky-500 capitalize">Design instument</h3>
        <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
          How to raise $100k+ by using blox ui kit on your design
        </a>
      </div>
      <hr className="my-6 border-gray-200 " />
      <div>
        <h3 className="text-sky-500 capitalize">UI Resource</h3>
        <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
          Should you creat UI Product by using Blox?
        </a>
      </div>
      <hr className="my-6 border-gray-200 " />
      <div>
        <h3 className="text-sky-500 capitalize">Premium Collection</h3>
        <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
          Top 10 Blocks you can get on Blox's collection.
        </a>
      </div>
      <hr className="my-6 border-gray-200 " />
      <div>
        <h3 className="text-sky-500 capitalize">Premium kits</h3>
        <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
          Top 10 Ui kit you can get on Blox's collection.
        </a>
      </div>
    </div>
  )
}

export default Sidebar