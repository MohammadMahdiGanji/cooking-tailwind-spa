import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import Footer from "../../Component/Footer/Footer";
import ContactContent from "../../Component/ContactContent/ContactContent";
import Inbox from "../../Component/Inbox/Inbox";
import Delicious from "../../Component/Delicious/Delicious";
import NotFound from "../../Component/NotFound/NotFound";

export default function Contact() {
  // create variables
  let contact, header, contactContent, inbox, footer, delicious;

  try {
    // create elements
    contact = CreateElement({ name: "div" });
    header = Header();
    contactContent = ContactContent();
    inbox = Inbox();
    footer = Footer();
    delicious = Delicious({
      count: 4,
      caption: "Check out the delicious recipe",
    });

    // aadd elements
    Append(contact, ...[header, contactContent, inbox, delicious, footer]);
  } catch (err) {
    NotFound(`Error in content page ${err.message}`);
    throw new Error(`Error in content page ${err.message}`);
  }

  return contact;
}
