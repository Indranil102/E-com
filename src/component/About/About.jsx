
import login from '../../assets/loginn.avif'
const About = () => {
  return (
    <div>
       <div className="relative">
  <img
    src={login}
    alt="login"
    className="object-cover w-full object-center h-[200px]"
  />
  <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
  <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
    About Us
  </h2>
</div>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded w-3/4 h-auto mx-[200px]"
        alt="hero"
        src="https://corporate.flipkart.net/assets/images/1706011302507WeBelongYellowandWhiteBG12.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Who we are?
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-2 leading-relaxed">
        Mech Workplace Equality charter is built on the pillars of trust,
        inclusion, support, recognition and genuine care. Our emphasis on
        seeing every employee as a unique individual with unique needs, and
        supporting them in the best possible way allows them to set their own
        benchmarks and bring their best selves to work. We ensure that
        everyone, irrespective of their gender, faith, belief, ethnicity, caste
        or sexual orientation, gets an equally powerful seat on the table.
      </p>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Innovation
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-5 leading-relaxed">
        Mech Shop drives path-breaking, customer-focused innovation that makes
        high quality products accessible to Indian shoppers, besides making the
        online shopping experience convenient, intuitive and seamless.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://corporate.flipkart.net/assets/images/technology-image.png"
      />
    </div>
  </div>
</section>

  </div>

  )
}

export default About
