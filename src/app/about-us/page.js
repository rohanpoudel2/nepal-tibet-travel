import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="container">
      <section id="about" className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 gap-5 items-center mb-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">
            We're changing the way people experiece Nepal, Tibet and Bhutan.
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur amet ipsum blanditiis saepe fugit enim facilis nemo. Quo praesentium itaque vel quos nemo odio debitis omnis voluptate id perferendis.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1662444500922-b2f09cf80f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1670346044371-509da7ba16e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1678816252509-442fcab5ec4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1673505411785-4fbc99f7f32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1585458859260-2981c2a7b665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1580703602778-c698b50fb26a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
          </div>
          <div className="md:grid gap-4 hidden">
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1616835129664-a963deabdbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1576948238627-b4bf82824ea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1571330177234-54304dac2beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
          </div>
          <div className="md:grid gap-4 hidden">
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1638801427993-664cecf807d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1682760344260-577d05ff1a3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=424&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
            <div>
              <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80" alt="Nepal, Tibet, Bhutan Trek" width={200} height={500} />
            </div>
          </div>
        </div>
      </section>
      <section id="our_mission" className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 gap-5 mb-20">
        <div className="flex flex-col gap-5 order-2 md:order-1">
          <h2 className="text-3xl">
            Our Mission
          </h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur amet ipsum blanditiis saepe fugit enim facilis nemo. Quo praesentium itaque vel quos nemo odio debitis omnis voluptate id perferendis.
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequuntur amet ipsum blanditiis saepe fugit enim facilis nemo. Quo praesentium itaque vel quos nemo odio debitis omnis voluptate id perferendis.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col text-left order-1 md:order-2">
          <div className="flex  md:flex-col gap-5">
            <div className="w-50 flex flex-col gap-3">
              <h2 className="text-3xl font-bold">
                1200+
              </h2>
              <span className="font-light">
                Happy Clients
              </span>
            </div>
            <div className="w-50 flex flex-col gap-3">
              <h2 className="text-3xl font-bold">
                1995
              </h2>
              <span className="font-light">
                Operating Since
              </span>
            </div>
            <div className="w-50 flex flex-col gap-3">
              <h2 className="text-3xl font-bold">
                147,181
              </h2>
              <span className="font-light">
                Square Kilometers Conqured
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="banner" className="w-full relative h-[400px] mb-20">
        <Image
          src="https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Nepal Group Trekking"
          fill
          className="object-cover object-top rounded-xl"
        />
      </section>
      <section id="our_values" className="flex flex-col gap-10 mb-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">
            Our values
          </h2>
          <p className="font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quam assumenda, aperiam nulla cum nostrum! Enim perspiciatis, officiis labore cum quo illo voluptatem saepe magni provident vitae voluptatibus, animi eligendi!
          </p>
        </div>
        <Separator orientation="horizontal" />
        <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">
              Be world-class
            </h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, accusamus similique neque accusantium vero expedita mollitia error.
            </p>
          </div>
        </div>
      </section>
      <section id="contact-and-map" className="mb-20">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28257.464601262716!2d85.27277521083982!3d27.711633199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc0f559497%3A0x2ba85348532b6a5b!2sMac%20Trek%20and%20Expedition%20(P)%20Ltd!5e0!3m2!1sen!2snp!4v1692538458182!5m2!1sen!2snp"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">
                        Technical support
                      </p>
                      <p className="text-neutral-500 ">
                        support@example.com
                      </p>
                      <p className="text-neutral-500 ">
                        +977-9888888888
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">
                        Sales questions
                      </p>
                      <p className="text-neutral-500 ">
                        sales@example.com
                      </p>
                      <p className="text-neutral-500 ">
                        +977-9888888888
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Press</p>
                      <p className="text-neutral-500 ">
                        press@example.com
                      </p>
                      <p className="text-neutral-500 ">
                        +977-9888888888
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Bug report</p>
                      <p className="text-neutral-500 ">
                        bugs@example.com
                      </p>
                      <p className="text-neutral-500 ">
                        +977-9888888888
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs