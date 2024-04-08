import { useForm } from "react-hook-form";
import { BiSolidCameraPlus } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <div className="bg-red-200 w-[320px] md:w-[600px] lg:w-[800px] mx-auto">
      <div>
        <h1 className="text-mediumFont md:text-largeFont font-bold">
          Welcome! Let&apos;s create your profile
        </h1>
      </div>
      <div>
        <p className="text-xl mt-2">
          Let others get know better! You can do these late
        </p>
      </div>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <p className="text-[22px] font-bold text-center md:text-start">Add an avatar</p>
            <div className="group mt-5 flex justify-center items-center w-60 h-60 rounded-full border-2 border-gray-400 border-dashed">
              <span className="text-10xl">
                <BiSolidCameraPlus className="text-5xl text-gray-400 group-hover:text-gray-500" />
              </span>
            </div>
          </div>
          <div className="">
            <input type="file" name="" id="" className="w-60"/>
            <div className="flex justify-start gap-1 mt-8 text-gray-500">
              <FaAngleRight className="mt-[4px]" />
              <p>Or choose one of our defaults</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-5 mt-20 text-xl font-bold">Add your location</p>
          <input type="text" placeholder="Enter a location" className=" px-5 text-xl bg-transparent outline-none border-collapse border-b-2 w-full" />
        </div>
        <input type="submit" value="Next"  disabled={true} className=" mt-20 cursor-pointer h-[40px] rounded-lg bg-pink-600 px-24 font-semibold tracking-wider hover:bg-pink-700 active:bg-pink-800 text-white text-lg"/>
      </form>
    </div>
  );
};

export default Profile;
