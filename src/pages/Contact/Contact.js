import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import Footer from "../../Component/Footer/Footer";
import ContactContent from "../../Component/ContactContent/ContactContent";

export default function Contact() {
  const contact = CreateElement({ name: "div" });
  const header = Header();
  const contactContent = ContactContent();
  const footer = Footer();

  Append(contact, ...[header, contactContent, footer]);

  return contact;
}
