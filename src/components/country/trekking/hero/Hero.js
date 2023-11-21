const Hero = ({ activity, country, media, content }) => {
  const bgStyle = {
    backgroundImage: `url(${media})`
  }
  return (
    <div>
      <div className="bg-cover bg-center h-[25vh] md:h-[35vh] lg:h-[50vh] flex items-center justify-start" style={bgStyle}>
        <div className="container">
          <h1 className="text-4xl font-bold md:text-6xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] capitalize">{activity} in {country}</h1>
        </div>
      </div>
      <div className="container my-10">
        <p className="prose max-w-none text-justify" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Hero