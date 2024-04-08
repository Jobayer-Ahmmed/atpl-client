import { useForm } from "react-hook-form";
import register_logo from "../../assets/register-logo.png";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { createUser } from "../../app/features/authSlice/authSlice";

const Register = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const {name, username, email, password} = data
    dispatch(createUser({email, password}))
  };
  return (
    <div className="flex flex-col lg:flex-row pb-10">
      {/**********************************
       *********left aside start**********
       ***********************************/}   
    
      <div className=" w-full lg:w-[35%] bg-[rgb(242,216,138)]">
        <h3 className="mx-5 md:mx-0 md:ml-20 mt-16 text-3xl text-[#b69836] font-medium font-rochester">
          diribbble
        </h3>
        <h1 className="mx-5 md:mx-0 md:ml-20 mt-5 text-2xl md:text-3xl text-[#7e6923] font-bold">
          Discover the world&apos;s top <br />
          Designers & Creatives
        </h1>
        <img className="mt-6 md:mt-10 lg:mt-20 w-[320px] md:w-[600px] lg:w-[500px] mx-auto" src={register_logo} alt="" />
      </div>
      {/**********************************
       *********left aside end**********
       ***********************************/}  

      {/**********************************
       *********right aside start*********
       ***********************************/}   
      <div className=" px-[5%] md:px-[12%]  lg:pl-56  w-full lg:w-[65%]">
        <p className="absolute right-10 mt-10">
          Already a member? <Link className="text-blue-500">Sign In</Link>
        </p>
        <h1 className="mt-24 text-2xl font-bold">Sign up to Dribbble</h1>
        <p className="mt-6">.Username has already been taken --it is a message--</p>

        <form className="mt-8 w-full lg:w-[540px] " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between">
            {/* name div */}
            <div>
              <label className="text-xl font-medium">Name</label>
              <br />
              <input
                className="w-full md:w-60 h-[40px] rounded-lg pl-4"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              <br />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            {/* username div */}
            <div className="mt-4  md:mt-0">
              <label className="text-xl font-medium">Username</label>
              <br />
              <input
                className="w-full md:w-60 h-[40px] rounded-lg pl-4"
                {...register("username", { required: true })}
                type="text"
                placeholder="username"
              />
              <br />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
          </div>

          {/* email div */}
          <div className="mt-4 md:mt-5 ">
            <label className="text-xl font-medium">Email</label>
            <br />
            <input
              className="w-full h-[40px] rounded-lg pl-4"
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            />
            <br />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          {/* password div */}
          <div className="mt-4 md:mt-5 ">
            <label className="text-xl font-medium">Password</label>
            <br />
            <input
              className="w-full h-[40px] rounded-lg pl-4"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              type="password"
              placeholder="6+ characters"
            />
            <br />
            {errors.password?.type === "required" && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 6 character
              </span>
            )}
          </div>

          {/* terms and conditions div */}
          <div className="mt-4 md:mt-5  flex items-start">
            <input
              className=" w-8 h-8"
              {...register("terms", { required: true })}
              type="checkbox"
            />
            <span className=" ml-4">Creating an account means you&apos;re okay with our <Link className="text-blue-500">Terms of Service, Privacy Policy,</Link> and our default <Link className="text-blue-500">Notification Settings.</Link></span>
            <br />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          <input
            className="mt-7 cursor-pointer h-[40px] rounded-lg bg-pink-600 px-12 hover:bg-pink-700 active:bg-pink-800 text-white text-lg"
            type="submit"
            value="Create Account"
          />
        </form>
        <div className="mt-8">
          <p>This site is protected by reCAPTHCA and Google <br />
          <Link className="text-blue-500">Privacy Policy</Link> and <Link className="text-blue-500">Terms of Service</Link> apply
          </p>
        </div>
      </div>
      {/***********************************
       *********right aside start**********
       ***********************************/}   
    </div>
  );
};

export default Register;
