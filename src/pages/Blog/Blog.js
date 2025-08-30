import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header"

export default function Blog() {
  const blog = CreateElement({name:'div'})

  const header = Header()

  Append(blog,...[header])
  return blog;
}
