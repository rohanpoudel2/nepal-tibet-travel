import Image from "next/image";
import styles from "./facts.module.scss";
import Fact from "../fact/fact";
import Options from "../options/Options";

const Facts = () => {

  return (
    <div className="container">
      <section className={styles.facts}>
        <Image
          src="/images/nepal-tourist-map.png"
          alt="Tourist Map Nepal"
          width={800}
          height={400}
          className={styles.image}
        />
        <h2 className={styles.main_title}>
          About Nepal
        </h2>
        <div className={styles.factsData}>
          <Fact
            title="Area"
            answer="147,181 Sq. KM"
          />
          <Fact
            title="Capital"
            answer="Kathmandu"
          />
          <Fact
            title="Population"
            answer="30 Million"
          />
        </div>
        <div className={styles.shortDesc}>
          <p>
            Nepal is one of the richest countries in the world in terms of bio-diversity due to its unique geographical position and altitudinal variation. The elevation of the country ranges from 60m above sea level to the highest point on earth, Mt. Everest at 8848m, all within a distance of 150 km resulting into climatic conditions from sub-tropical to Arctic.
          </p>
        </div>
        <Options />
        <div className={styles.content} id="about">
          <p>
            Nepal is one of the richest countries in the world in terms of bio-diversity due to its unique geographical position and altitudinal variation. The elevation of the country ranges from 60m above sea level to the highest point on earth, Mt. Everest at 8848m, all within a distance of 150 km resulting into climatic conditions from sub-tropical to Arctic.



            Area: 147,181 Sq. Km

            Location: Situated between China in the north and India in the South, East and West.

            Capital: Kathmandu

            Population: 23 Million



            Language:

            Nepali is the national language of Nepal. Educated people understand and speak English as well. There are hundreds: of local dialects spoken by people from various ethnic groups.



            Climate:

            Nepal has typical monsoonal two season year. There's the dry season from October to May and there's the wet season, the monsoon, from June to September. September-November, the start of the dry season, is many ways the best time of the Year in Nepal. With the monsoon only recently finished, the countryside is green and lush. Nepal is at its most beautiful and there are some colorful festivals to enjoy.

            Temperature in Kathmandu: In Autumn (September-November):Max.20-28 degree Celsius Min.5-10 degree Celsius. In Winter (December-February):Max.15-20 degree Celsius Min.1-5 degree Celsius. In Spring (March-May):Max.25-30 degree Celsius Min.8-15 degree Celsius. In Summer (June-August): Max.29-32 degree Celsius min.18-22 degree Celsiu



            People and Religion:

            Nepal is secular state with a pre-dominance of Hindus and Buddhist population. Hindu temples and Buddhist shrines are scattered all over the kingdom. Nepal is the birthplace of Lord Buddha, the light of Asia. Hindus and Buddhists live together in harmony. Muslims, Christians and other nature worshipers too exist.



            Currency and Foreign exchange:

            Nepali Rupee notes in Rs.1, 2, 5,10,25,50,100,500 and 1000 denominations. Foreign currencies must have been exchanged only through banks or authorized money exchangers. The receipts of such transaction are to be obtained and retained. Visitors can exchange foreign currency at the foreign exchange counter at the airport upon arrival. Visitor other than the Indian nationals have to make the payment in foreign currency in hotel, trekking agencies or travel agencies. Indian Currency Rs 500 and Rs 1000 note is not allowed to be brought into Nepal and will not be exchanged and will not be accepted for transaction of any kind.

            Banks are open between 10 am to 3 pm from Sunday to Friday in the Kathmandu Valley. Some banks also open whole days in a week. ATM Machines are available in many places in the Valley.



            Political System:
            Federal Democratic Republic

            What to wear:
            Light weight clothing is recommended from May through October. Warm garments are required in October to March. An umbrella or raincoat is a must for the rainy season. For Trekking, Climbing and Expedition equipments list please check individual sections.

            Time:
            Nepal Standard Time is 5 hours 45 minutes ahead of GMT and 15 minutes ahead of Indian Standard Time.


            Official working hours and holiday:

            Except public holidays Saturday is the weekend holiday throughout the country when most government and private business companies are closed on Saturday. Government offices open at 10 am to 5 pm (summer) and from 10 am to 4 pm (winter). Most of the private company or business stores open from 9 am to 7 pm.


            Banks and Credit Card:
            Banks are open between 9.30 to 3 pm from Monday to Friday in Nepal. In main cities, most of the banks are providing extra banking service till late evening nowadays and few hours open at Saturday also. Visa /Mater card is easily acceptable in every bank.  ATM Machines are available most of the places in main cities of Nepal. Most of banks have money transfer services also.

            Facilities:
            Nepal has every category of accommodation facilities. These range from the international standard star hotels to budget hotels and lodges. In order to have an assured quality service, it is advisable to use the facilities and services of government registered hotels, lodges, travel and trekking agencies and govt. licensed tour and trekking guides.



            Post Office :

            The Central Post office (Tel: 4240018) located near Bhimsen Tower, is open from 10 am to 5 from Sunday through Friday. The Counters are open from 7 am to 5 pm and provide stamps, postcards and aero grams. Post Rest ante is available Sunday to Friday 10 am to 5 pm. Express Mail Service (EMS) is available at the GPO and at Thamel,Basantapur and airport postal counters.



            Custom formalities:

            All baggage must be declared and cleared through the customs on arrival at the entry. Personal effects are permitted free entry. A tourist may bring in dutiable goods, such as tobacco and liquors, within the prescribed quantity free of duty. Carrying narcotics, arms and ammunition are strictly prohibited. Visitors can export souvenirs to their respective countries. The export of antiques requires special certificate from the Department of Archaeology, National Archive Building, Ram Shah Path (Tel: 4250686)



            Airport Tax:

            Nrs 700.00 per person for departure to SAARC (South Asian) countries and Rs. 1,000.00 for departure to other international destinations.
          </p>
        </div>
        <div className={styles.content} id="access">
          This is access
        </div>
        <div className={styles.content} id="entry">
          This is entry
        </div>
      </section >
    </div >
  )
}

export default Facts