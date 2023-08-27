import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //   <div className="container">
    //     <div className={styles.top}>
    //       <ScrollToTop />
    //       <div className={styles.socials}>
    //         <span className={styles.title}>
    //           Find us on
    //         </span>
    //         <div className={styles.social_icons}>
    //           <Image
    //             src="/images/facebook.png"
    //             width={25}
    //             height={25}
    //             alt="Facebook"
    //             className={styles.icon_image}
    //           />
    //           <Image
    //             src="/images/instagram.png"
    //             width={25}
    //             height={25}
    //             alt="Instagram"
    //             className={styles.icon_image}
    //           />
    //           <Image
    //             src="/images/twitter.png"
    //             width={25}
    //             height={25}
    //             alt="Twitter"
    //             className={styles.icon_image}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.content}>
    //       <div className={styles.items}>
    //         <div className={styles.item}>
    //           <h5 className={styles.title}>
    //             Address
    //           </h5>
    //           <p className={styles.address}>
    //             Post Box Number:21187 <br />
    //             J.P. Marg, Chhetrapati, Thamel, Kathmandu, Nepal <br />
    //             Landline: +977-1-5348972, 5360219 <br />
    //             Mobile/Whatsapp: +977-9851038450
    //           </p>
    //         </div>
    //         <div className={styles.item}>
    //           <h5 className={styles.title}>
    //             Company
    //           </h5>
    //           <div className={styles.links}>
    //             <Link href="/about-us">
    //               <span className={styles.link}>
    //                 About us
    //               </span>
    //             </Link>
    //             <Link href="/career" className={styles.link}>
    //               Work with us
    //             </Link>
    //             <Link href="/blogs" className={styles.link}>
    //               Blogs
    //             </Link>
    //           </div>
    //         </div>
    //         <div className={styles.item}>
    //           <h5 className={styles.title}>
    //             Legal
    //           </h5>
    //           <div className={styles.links}>
    //             <Link href="/terms-and-conditions" className={styles.link}>
    //               Terms and Conditions
    //             </Link>
    //             <Link href="/privacy-policy" className={styles.link}>
    //               Privacy Policy
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.featuredWebsite}>
    //         <Image
    //           src="/images/ebc.jpeg"
    //           alt="Great Himalaya Trek"
    //           width={400}
    //           height={100}
    //           className={styles.image}
    //         />
    //         <div className={styles.titles}>
    //           <h4 className={styles.featuredWebsites}>
    //             Great Himalaya Trek
    //           </h4>
    //           <span className={styles.featuredWebsite_subtitle}>1,700 km trek through the Himalayas</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.companystrip}>
    //     <div className="container">
    //       <div className={styles.companyStripItems}>
    //         <div className={styles.logo} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
    //           <Image
    //             src="/images/mactrek_small.svg"
    //             alt="MacTrek Logo"
    //             width={50}
    //             height={50}
    //             className={styles.image}
    //           />
    //           <span>MacTrek, 2023 ©</span>
    //         </div>
    //         <div className={styles.affiliated}>
    //           <span className={styles.title}>
    //             Affiliated with:
    //           </span>
    //           <div className={styles.affiliate}>
    //             <Image
    //               src="/images/ntb.jpeg"
    //               alt="Nepal Tourism Board"
    //               width={50}
    //               height={50}
    //               className={styles.affiliate_Image}
    //             />
    //             <Image
    //               src="/images/nma.png"
    //               alt="Nepal Mountaineering Association"
    //               width={50}
    //               height={50}
    //               className={styles.affiliate_Image}
    //             />
    //             <Image
    //               src="/images/tann.jpeg"
    //               alt="Trekking Agencies Association of Nepal"
    //               width={50}
    //               height={50}
    //               className={styles.affiliate_Image}
    //             />
    //           </div>
    //         </div>
    //         <div className={styles.partners}>
    //           <span>We accept:</span>
    //           <div className={styles.partnerList}>
    //             <Image
    //               src="/images/visa.png"
    //               width={50}
    //               height={50}
    //               alt="Visa"
    //             />
    //             <Image
    //               src="/images/master_card.png"
    //               width={50}
    //               height={50}
    //               alt="Visa"
    //             />
    //             <Image
    //               src="/images/american_express.png"
    //               width={50}
    //               height={50}
    //               alt="Visa"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-white">
      <Separator />
      <div className="container">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="https://nepaltibettravel.com/" className="flex items-center">
                <Image
                  src="/images/mactrek_small.svg"
                  alt="MacTrek Logo"
                  width={50}
                  height={50}
                  className={styles.image}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">MacTrek ©</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Company</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <Link href="/about-us" className="hover:underline">About us</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/career" className="hover:underline">Work with us</Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="hover:underline ">Blogs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="https://whatsapp.com" target="_blank" className="hover:underline">Whatsapp</Link>
                  </li>
                  <li>
                    <Link href="https://reddit.com" target="_blank" className="hover:underline">Reddit</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">© 2023 <Link href="https://nepaltibettravel.com/" className="hover:underline">Mactrek™</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-900 ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer