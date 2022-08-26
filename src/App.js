import Benefit from "./Components/Benefit";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Service from "./Components/Service";
import Trial from "./Components/Trial";

function App() {
  return (
    <div className="container mx-auto mb-96 bg-slate-50 ">
      <Header />
      <div className="p-4 flex flex-wrap justify-center">
        <Benefit
          img={`Icon1.png`}
          title="Grow your audience"
          desc=" Find new customers and build your email list with lead generation.."
        />
        <Benefit
          img={`Icon2.png`}
          title="Boost online sales"
          desc=" Market your ecommerce business and deliver experiences.."
        />
        <Benefit
          img={`Icon3.png`}
          title="Sell your knowledge"
          desc="Build a following, engage them with your content.."
        />
      </div>
      <div className="p-4 m-4 bg-blue-700 text-white flex flex-col items-center text-center rounded-xl">
        <h1 className="text-center text-xl">Journey of our Success</h1>
        <Card percent="85%" title="manage communication more efficiently" />
        <Card
          percent="95%"
          title="improve communication with customers and clients"
        />
        <Card percent="75%" title="average improvement in team efficiency" />
      </div>
      <Title
        title="Our Features"
        first="Unleash your creativety with a visual collaboration"
        second="plattorm that enables effective ideation"
      />
      <div className="p-4 flex flex-wrap justify-center">
        <Benefit
          img={`flowers.png`}
          title="Choosing a Service"
          desc="Choosing an accountant that matches your needs"
        />
        <Benefit
          img={`person.png`}
          title="Our Clients Say"
          desc="Read the reviews from some of our satisfied clients"
        />
        <Benefit
          img={`masssage.png`}
          title="Initial Consultation"
          desc="Understanding your accountancy requirements"
        />
        <Benefit
          img={`call.png`}
          title="Request a Callback"
          desc="Lets talk at a more convenient time for you"
        />
      </div>
      <Title
        title="Services"
        first="Our support team will get assistance from AI-powered suggestions, "
        second="making it quicker than ever to handle support requests."
      />
      <div className=" flex flex-col mt-6 items-center">
        <Service
          img={`star.png`}
          title="Branding Idendity"
          desc="Our support team will get assistance from AI-powered."
        />

        <Service
          img={`globe.png`}
          title="Branding Idendity"
          desc="Our support team will get assistance from AI-powered."
        />

        <Service
          img={`image.png`}
          title="Branding Idendity"
          desc="Our support team will get assistance from AI-powered."
        />

        <Service
          img={`analyse.png`}
          title="Branding Idendity"
          desc="Our support team will get assistance from AI-powered."
        />
      </div>
      <Trial />
    </div>
  );
}

export default App;
