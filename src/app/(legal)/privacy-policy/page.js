import InformationPage from "@/components/informationPage/InformationPage"
import { getPageData } from "@/utils/wordpress"

async function getData() {
  const res = await getPageData('privacy-policy');
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Privacy = async () => {

  const privacyRes = await getData();
  const privacyContent = privacyRes[0];

  return (
    <>
      <InformationPage
        title={privacyContent.title.rendered}
        updatedOn={privacyContent.modified_gmt}
        content={privacyContent.content.rendered}
      />
    </>
  )
}

export default Privacy