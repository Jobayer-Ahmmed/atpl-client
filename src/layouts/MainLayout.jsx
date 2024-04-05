import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="text-textColor">
        <Outlet/>
    </div>
  )
}

export default MainLayout

