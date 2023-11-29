import Image from "next/image";

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
    <>
      <div className="container">
        <section id="about" className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 gap-20 items-center mb-40 md:h-[80vh]">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">
              We're changing the way people experiece <span className="underline decoration-sky-500">Nepal, Tibet and Bhutan</span>.
            </h1>
            <p className="font-light">
              {aboutContent?.short_desc}
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">

                <img
                  src={aboutContent?.image_grid[0].image.sizes.medium_large}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  src={aboutContent?.image_grid[1].image.sizes.medium_large}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  src={aboutContent?.image_grid[2].image.sizes.medium_large}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  src={aboutContent?.image_grid[3].image.sizes.medium_large}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  src={aboutContent?.image_grid[4].image.sizes.medium_large}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white mb-20">
          <div className="mt-8 sm:mt-12">
            <dl
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
            >
              {
                aboutContent?.our_mission.infos.info.map((content, i) => (
                  <div
                    className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                    key={i}
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      {content?.title}
                    </dt>

                    <dd className="text-4xl font-extrabold text-sky-600 md:text-5xl">
                      {content?.value}
                    </dd>
                  </div>
                ))
              }
            </dl>
          </div>
        </section>
      </div>
      <section className="py-8 sm:py-12 lg:py-16 mb-20 bg-gray-50">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 container">
          <div className="rounded-lg md:col-span-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl">
                Our <span className="underline decoration-sky-500">Mission</span>
              </h2>
              <p className="font-light">
                {aboutContent?.our_mission.short_desc}
              </p>
            </div>
          </div>
          <div className="rounded-lg">
            <div className="relative flex items-center justify-center flex-col w-full h-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg space-y-3 py-5">
              <Image
                src={aboutContent?.our_mission.narayan_card.narayan_image.sizes.medium}
                width={300}
                height={200}
                alt={aboutContent?.our_mission.narayan_card.narayan_image.alt}
                className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover"
              />
              <h3 className="font-semibold text-xl md:text-2xl">
                {aboutContent?.our_mission.narayan_card.name}
              </h3>
              <span className="text-sm">
                {aboutContent?.our_mission.narayan_card.designation}
              </span>
              <div className="flex gap-5">
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
          </div>
        </div>
      </section>
      <div className="container">
        <section id="banner" className="w-full relative h-[400px] mb-20">
          <Image
            src={aboutContent?.our_mission.section_image.sizes.large}
            alt={aboutContent?.our_mission.section_image.alt}
            fill
            className="object-cover object-center rounded-xl"
          />
        </section>
      </div>
      <section className="mb-20 bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="container px-6 mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">Our <span className="underline decoration-sky-500">Values</span></h1>
          <p className="mt-4 text-gray-500 xl:mt-6 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quam assumenda, aperiam nulla cum nostrum! Enim perspiciatis, officiis labore cum quo illo voluptatem saepe magni provident vitae voluptatibus, animi eligendi!
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {
              aboutContent?.our_mission.our_values.value.map((value, i) => (
                <div className="p-8 space-y-3 border-2 border-sky-400  rounded-xl" key={i}>
                  <span className="inline-block text-sky-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </span>
                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">{value.title}</h1>
                  <p className="text-gray-500">
                    {value.short_desc}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="bg-white mb-20 px-6 mx-auto">
        <div className="container">
          <div>
            <h1 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl ">
              <span className="underline decoration-sky-500">Get in touch</span>
            </h1>
            <p className="mt-3 text-gray-500 ">Our friendly team would love to hear from you.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-sky-500 rounded-full bg-sky-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                <p className="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-sky-500 font-medium ">{aboutContent?.our_mission.contact_card.email}</p>
              </div>
              <div>
                <span className="inline-block p-3 text-sky-500 rounded-full bg-sky-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
                <p className="mt-2 text-sm text-gray-500 ">Come say hello at our office.</p>
                <p className="mt-2 text-sm text-sky-500  font-medium">{aboutContent?.our_mission.contact_card.location}</p>
              </div>
              <div>
                <span className="inline-block p-3 text-sky-500 rounded-full bg-sky-100/80">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                <p className="mt-2 text-sm text-gray-500 ">Mon-Fri from 10am to 5pm.</p>
                <p className="mt-2 text-sm text-sky-500  font-medium">{aboutContent?.our_mission.contact_card.phone_number}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe src={aboutContent?.our_mission.contact_card.map_url}
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                allowFullScreen />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs