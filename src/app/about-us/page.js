import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { getPageData } from "@/utils/wordpress";

const getData = async () => {
  const res = await getPageData('about-us');
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const AboutUs = async () => {

  const aboutRes = await getData();
  const aboutContent = aboutRes[0]?.acf;

  return (
    <div className="container">
      <section id="about" className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 gap-5 items-center mb-20 md:h-[80vh]">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">
            {aboutContent?.title}
          </h1>
          <p className="font-light">
            {aboutContent?.short_desc}
          </p>
        </div>
        <div className="hidden md:grid grid-cols-2 place-items-center md:grid-cols-4 gap-4">
          {aboutContent?.image_grid.slice(0, 12).map((imageData, index) => (
            <div key={index} className="grid gap-4">
              <Image
                className="h-full max-w-full rounded-lg"
                src={imageData.image.sizes.medium}
                alt={imageData.image.alt}
                width={200}
                height={400}
              />
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-2 place-items-center md:grid-cols-4 gap-4">
          {aboutContent?.image_grid.slice(0, 6).map((imageData, index) => (
            <div key={index} className="grid gap-4">
              <Image
                className="h-full max-w-full rounded-lg"
                src={imageData.image.sizes.medium}
                alt={imageData.image.alt}
                width={200}
                height={400}
              />
            </div>
          ))}
        </div>
      </section>
      <section id="our_mission" className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 place-items-center gap-5 mb-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">
            {aboutContent?.our_mission.title}
          </h2>
          <p className="font-light">
            {aboutContent?.our_mission.short_desc}
          </p>
        </div>
        <div className="block md:hidden">
          <Separator />
        </div>
        <div className="relative flex items-center w-full h-full md:w-[50%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <Image
            src={aboutContent?.our_mission.narayan_card.narayan_image.sizes.medium}
            width={300}
            height={200}
            alt={aboutContent?.our_mission.narayan_card.narayan_image.alt}
            className="rounded-full w-32 h-32 md:w-52 md:h-52 object-cover mb-5"
          />
          <h3 className="font-bold mt-3 text-xl">
            {aboutContent?.our_mission.narayan_card.name}
          </h3>
          <span className="text-sm">
            {aboutContent?.our_mission.narayan_card.designation}
          </span>
          <div className="flex gap-5 my-5">
            {
              aboutContent?.our_mission.narayan_card.socials.map((social) => (
                <Image
                  src={social.icon.url}
                  width={20}
                  height={20}
                  alt={social.icon.alt}
                  key={social.icon.id}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center flex-col text-left">
          <div className="flex gap-20">
            {
              aboutContent?.our_mission.infos.info.map((content, i) => (
                <div className="w-50 flex flex-col gap-3">
                  <h2 className="text-3xl font-bold">
                    {content?.value}
                  </h2>
                  <span className="font-light">
                    {content?.title}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section id="banner" className="w-full relative h-[400px] mb-20">
        <Image
          src={aboutContent?.our_mission.section_image.sizes.large}
          alt={aboutContent?.our_mission.section_image.alt}
          fill
          className="object-cover object-center rounded-xl"
        />
      </section>
      <section id="our_values" className="flex flex-col gap-10 mb-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">
            {aboutContent?.our_mission.our_values.title}
          </h2>
          <p className="font-light">
            {aboutContent?.our_mission.our_values.short_desc}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-10">
          {
            aboutContent?.our_mission.our_values.value.map((value, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <h3 className="text-xl">
                  {value.title}
                </h3>
                <p className="font-light">
                  {value.short_desc}
                </p>
              </div>
            ))
          }
        </div>
      </section>
      <section id="contact-and-map" className="mb-20">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe src={aboutContent?.our_mission.contact_card.location.url}
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                  allowFullScreen />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                {
                  aboutContent?.our_mission.contact_card.numbers.map((number, i) => (
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12" key={i}>
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <Image
                              src={number.icon.url}
                              width={24}
                              height={24}
                              alt="Phone Icon"
                            />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold ">
                            {number.title}
                          </p>
                          <p className="text-neutral-500 ">
                            {number.contact_info.email}
                          </p>
                          <p className="text-neutral-500 ">
                            {number.contact_info.phone_number}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs