import React from "react";
import hazzadImg from "../../../assets/hazzad.png";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import MagnaticButton from "../Home/MagnaticButton";
import Button from "../Buttons/Button";

const Contect = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("Name", "Email", "Text"));

  return (
    <section className="w-[80%] mx-auto ">
      <div className="flex gap-5  pt-20 items-center">
        <div className="md:w[2/3] w-full text-3xl md:text-4xl lg:text-6xl text-white font-medium">
          <h1>Lets Start A</h1>
          <h1>Project Together</h1>
        </div>
        <div className="hidden  w-[1/3]  md:flex flex-col gap-8">
          <img className="h-20 w-20 rounded-full" src={hazzadImg} alt="" />
          {/* <BsArrowDownRight/> */}
          <div>
            <FaArrowRight className="rotate-90 text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 pt-20 ">
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full"
          >
            {/* register your input into the hook by invoking the "register" function */}
            <div className="divider my-3"></div>
            <input
              placeholder="Your Name"
              type="Name"
              {...register("Name", { required: true })}
              className="bg-transparent font-medium py-6"
            />
            <div className="divider my-2"></div>

            {/* include validation with required or other standard HTML validation rules */}
            <input
              placeholder="Your Email"
              type="Email"
              {...register("Email", { required: true })}
              className="bg-transparent font-medium py-6"
            />
            <div className="divider my-2"></div>

            <textarea
              placeholder="Message For me"
              type="Text"
              {...register("text", { required: true })}
              className="bg-transparent font-medium py-6"
            />
            <div className="divider my-2"></div>

            {/* errors will return when field validation fails  */}
            {(errors.Name && <span>This field is required</span>) ||
              (errors.email && <span>This field is required</span>) ||
              (errors.text && <span>This field is required</span>)}

            <div className="my-28 relative">
              <div className="divider "></div>
              <div className="absolute right-10 -top-10 z-10 cursor-pointer">
                <button type="submit">
                  <Button buttonName={"Send"} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <h1>Contact Details</h1>
          <div className="flex flex-col gap-4 py-5">
            <p className="text-xl font-semibold text-white">
              hazzadmdap@gamil.com
            </p>
            <p className="text-xl font-semibold text-white">+966494921</p>
          </div>
          <h1 className="pt-6">Social Media</h1>
          <div className="flex flex-col gap-4 py-5">
            <a
              href="https://www.linkedin.com/in/mohammedhazzad/"
              className="text-xl font-semibold text-white"
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/Mohammedhazzadh"
              className="text-xl font-semibold text-white"
            >
              Facebook
            </a>
            <a
              href="https://github.com/moHazzad"
              className="text-xl font-semibold text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
