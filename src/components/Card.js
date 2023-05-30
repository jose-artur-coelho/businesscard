import ProfilePhoto from "../images/profile-photo.jpg";
import Socials from "./Socials";
import Me from "./Me";
import About from "./About";
import Interests from "./Interests";
export default function Card() {
  return (
    <div classname="card">
      <img src={ProfilePhoto} alt="foto de perfil"></img>
      <Me />
      <Socials />
      <About />
      <Interests />
    </div>
  );
}
