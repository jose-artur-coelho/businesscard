import LinkedlnLogo from "../images/linkedln-logo.png";
import EmailLogo from "../images/email-logo.png";

export default function Socials() {
  return (
    <nav className="socials">
      <div className="email">
        <img src={EmailLogo} alt=""></img>
        <p>Email</p>
      </div>
      <div className="linkedln">
        <img src={LinkedlnLogo} alt=""></img>
        <p>Linkedln</p>
      </div>
    </nav>
  );
}
