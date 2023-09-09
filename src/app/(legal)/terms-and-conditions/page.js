import InformationPage from "@/components/informationPage/InformationPage"
import { getPageData } from "@/utils/wordpress"

async function getData() {
  const res = await getPageData('terms-and-conditions');
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Terms = async () => {

  const TermsRes = await getData();
  const termsContent = TermsRes[0];

  return (
    <>
      <InformationPage
        title={termsContent.title.rendered}
        updatedOn={termsContent.modified_gmt}
        content={termsContent.content.rendered}
      />
    </>
  )
}

export default Terms