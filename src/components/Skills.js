import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Versatile front-end developer with expertise in Vue.js, React.js, and modern UI frameworks like Tailwind, PrimeVue, and Kendo UI. Proficient in backend technologies such as Node.js, AWS Lambda, and Step Functions, ensuring scalable and high-performance applications.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="ImageFrontend" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ImageBackend" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="ImageAws" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="ImageLogo" />
                                <h5>Logo Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="backgroundImage" />
    </section>
  )
}
