import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="z-10 min-h-screen flex flex-col lg:flex-row justify-center text-center items-center">
      <div className=" lg:pt-14">
        <div className="text-center justify-center items-center my-60 mb-20">
          <h1 className="text-5xl font-hedding font-semibold">
            Why Choose Us?
          </h1>
        </div>
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[url('./assets/img/about.jpg')] bg-cover bg-no-repeat">
          <div className=" bg-backgroundColor py-20 px-20 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] opacity-85">
            <div className="flex flex-row-reverse"></div>
            <h1 className="font-hedding font-semibold text-xl opacity-100 pb-10">
              THIS IS US.
            </h1>
            <p className="opacity-100  pb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.{" "}
            </p>
            <p className="opacity-100">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
            <div className="flex justify-center pt-10">
              <Button title="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
