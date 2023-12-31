
import Menu from "./sidebar/Menu"
import logo from "/src/img/spotify-1.svg"

function Sidebar() {
  return (
    <aside
      className="w-60 py-6 flex flex-col">
      <a href="" className="mb-5 px-6">

        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
    </aside>
  )
}

export default Sidebar