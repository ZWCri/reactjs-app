import { HomeComponent } from "../components/HomeComponent";
import { ServicesComponent } from "../components/ServicesComponent";
import TittleComponent from '../components/TittleComponent';

function ServicesPage() {
  const title  = "Services Page";
  return (
    <>
      <ServicesComponent />
      <HomeComponent />
      <TittleComponent data  = {title} />
    </>
  );
}

export default ServicesPage;
