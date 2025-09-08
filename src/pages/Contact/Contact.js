import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import Footer from "../../Component/Footer/Footer";
import ContactContent from "../../Component/ContactContent/ContactContent";
import Inbox from "../../Component/Inbox/Inbox";
import Delicious from "../../Component/Delicious/Delicious";

export default function Contact() {
  const contact = CreateElement({ name: "div" });
  const header = Header();
  const contactContent = ContactContent();
  const inbox = Inbox();
  const footer = Footer();
  const delicious = Delicious({
    count: 4,
    caption: "Check out the delicious recipe",
  });

  Append(contact, ...[header, contactContent, inbox, delicious, footer]);

  return contact;
}
