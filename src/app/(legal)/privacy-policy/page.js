import InformationPage from "@/components/informationPage/InformationPage"

const Privacy = () => {

  const PrivacyContent = () => {
    return (
      <>
        <h1>Nepal Tibet Travel: Privacy Policy</h1>
        <p>Welcome to Nepal Tibet Travel! We value your privacy and are committed to protecting your personal information. This
          Privacy Policy explains how we collect, use, and safeguard your data. By using our services, you consent to the
          practices described below:</p>

        <h2>1. Information Collection:</h2>
        <ul>
          <li>1.1. We may collect personal information, such as your name, contact details, and preferences, when you make a booking
            or inquire about our services.</li>
          <li>1.2. We may also collect non-personal information, such as browser type, IP address, and usage patterns, to improve
            our website and services.</li>
        </ul>

        <h2>2. Use of Information:</h2>
        <ul>
          <li>2.1. We use your personal information to process bookings, provide customer support, and communicate with you about our
            services.</li>
          <li>2.2. Non-personal information is used for analytics, website improvement, and to better understand user behavior.</li>
        </ul>

        <h2>3. Data Security:</h2>
        <ul>
          <li>3.1. We implement industry-standard security measures to protect your information from unauthorized access, disclosure,
            or alteration.</li>
          <li>3.2. Despite our efforts, no method of transmission over the internet is completely secure, and we cannot guarantee
            the absolute security of your data.</li>
        </ul>
      </>
    )
  }

  return (
    <>
      <InformationPage
        title="Privacy Policy"
        updatedOn="27 Aug, 2023"
        content={PrivacyContent}
      />
    </>
  )
}

export default Privacy