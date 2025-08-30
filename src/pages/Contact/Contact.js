import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
export default function Contact() {
  const contact = CreateElement({ name: "div" });
  const header = Header();

  Append(contact, ...[header]);

  return contact;
}
