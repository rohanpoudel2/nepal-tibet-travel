import Image from "next/image";
import Fact from "../fact/fact";
import Options from "../options/Options";

const Facts = ({ data }) => {

  const createID = (title) => {
    return title.toLowerCase().split(' ').join('_');
  }

  return (
    <div className="container">
      <Image
        src={data.map.sizes.large}
        alt={data.map.alt}
        width={800}
        height={400}
        className=""
      />
      <h2 className="">
        About {data.title}
      </h2>
      <Options data={data?.information} />
      <div id="about">
        {
          data?.information_content.map((information_content, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-black sm:text-2xl my-5">
                {information_content.title}
              </h3>
              <div id={createID(information_content.title)} className="prose prose-slate lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: information_content.content }} />
            </div>
          ))
        }
      </div>
      <div className="" id="access">
        This is access
      </div>
      <div className="" id="entry">
        This is entry
      </div>
    </div >
  )
}

export default Facts