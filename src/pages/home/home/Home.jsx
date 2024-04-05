import Register from "../../register/Register"
import {useDispatch, useSelector} from "react-redux"

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user?.email)
  return (
    <div>
      <Register/>
    </div>
  )
}

export default Home
