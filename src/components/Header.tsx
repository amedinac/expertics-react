import image from "./images/logo.png"

function Header () {
  return (
    <header className="w-full h-40 bg-blue-900">
      <img src={image} className="pt-9 pl-9 w-72"/>
    </header>
  )
}

export default Header