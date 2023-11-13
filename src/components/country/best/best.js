import Title from "@/components/ui/title/Title";
import CountryActivityCard from "@/components/ui/country-activity-card";

const Best = ({ data }) => {
  return (
    <div className="container">
      <Title
        title={data.title}
        subtitle={data.subtitle}
      />
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {data.list.map((dd, index) => {
          if (data.toMap) {
            const matchingData = data.toMap.find((d, i) => index === i);
            if (matchingData) {
              return (
                <CountryActivityCard
                  data={[dd, matchingData]}
                  country={data.country}
                  key={index}
                />
              );
            } else {
              return null;
            }
          } else {
            return <CountryActivityCard
              data={dd}
              country={data.country}
              normal={true}
              key={index}
            />
          }
        })}
      </div>
    </div>
  );
};

export default Best;
