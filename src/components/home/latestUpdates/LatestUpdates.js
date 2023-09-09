import Title from "@/components/ui/title/Title";
import LatestUpdateCard from "../latestUpdateCard/LatestUpdateCard";

const LatestUpdates = ({ data }) => {
  return (
    <div className="container">
      <section className="flex flex-col">
        <Title
          title={data?.title}
        />
        <div className={`mt-[38px] grid grid-cols-2 grid-rows-2 gap-[50px]`}>
          {
            data?.latest_updates.map((data, i) => (
              <LatestUpdateCard data={data} key={i} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default LatestUpdates