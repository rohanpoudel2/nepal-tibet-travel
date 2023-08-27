import InformationPage from "@/components/informationPage/InformationPage"

const Terms = () => {

  const TermsContent = () => {
    return (
      <>
        <h1>Nepal Tibet Travel: Terms and Conditions</h1>
        <p>Welcome to Nepal Tibet Travel! Before you embark on an unforgettable trekking experience with us, please take a
          moment to review our terms and conditions. By accessing and using our website and booking our services, you agree
          to adhere to the following terms:</p>

        <h2>1. Booking and Payment:</h2>
        <ul>
          <li>1.1. A non-refundable deposit is required to confirm your booking.</li>
          <li>1.2. Full payment must be received before the start of your trek.</li>
          <li>1.3. Payments can be made through our secure online payment system or via bank transfer.</li>
        </ul>

        <h2>2. Cancellations and Refunds:</h2>
        <ul>
          <li>2.1. Cancellations made by participants:
            <ul>
              <li>2.1.1. The initial deposit is non-refundable.</li>
              <li>2.1.2. Cancellations made after full payment will incur a cancellation fee based on the time of cancellation.</li>
            </ul>
          </li>
          <li>2.2. Cancellations made by Nepal Tibet Travel Adventures:
            <ul>
              <li>2.2.1. In the unlikely event we need to cancel your trek, a full refund will be provided.</li>
              <li>2.2.2. We are not liable for any additional expenses incurred due to our cancellation.</li>
            </ul>
          </li>
        </ul>

        <h2>3. Health and Insurance:</h2>
        <ul>
          <li>3.1. Participants are required to be in good health and physical condition to undertake the trek.</li>
          <li>3.2. It is mandatory to obtain comprehensive travel and health insurance before the trek.</li>
          <li>3.3. Nepal Tibet Travel Adventures is not liable for medical expenses or evacuation costs incurred during the trek.</li>
        </ul>

        <h2>4. Itinerary Changes:</h2>
        <ul>
          <li>4.1. Nepal Tibet Travel Adventures reserves the right to alter the itinerary due to unforeseen circumstances, such as
            weather, natural disasters, or other external factors.</li>
          <li>4.2. Participants acknowledge that such changes may occur and agree to cooperate and be flexible in such situations.</li>
        </ul>
      </>
    )
  }

  return (
    <>
      <InformationPage
        title="Terms and Condition"
        updatedOn="27 Aug, 2023"
        content={TermsContent}
      />
    </>
  )
}

export default Terms