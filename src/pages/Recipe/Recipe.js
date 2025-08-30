import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";

export default function Recipe() {
  const recipe = CreateElement({name:"div"})
  const header = Header()

  Append(recipe, ...[recipe])

  return header;
}
