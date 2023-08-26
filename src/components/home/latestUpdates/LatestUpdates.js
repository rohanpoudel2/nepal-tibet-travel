import Title from "@/components/ui/title/Title";
import LatestUpdateCard from "../latestUpdateCard/LatestUpdateCard";

const LatestUpdates = () => {
  return (
    <div className="container">
      <section className="flex flex-col">
        <Title
          title="Latest updates"
        />
        <div className={`mt-[38px] grid grid-cols-2 grid-rows-2 gap-[50px]`}>
          <LatestUpdateCard />
          <LatestUpdateCard />
          <LatestUpdateCard />
        </div>
      </section>
    </div>
  )
}

export default LatestUpdates