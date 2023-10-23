import image1 from "../../../../assets/images/banner/1.jpg";
import image2 from "../../../../assets/images/banner/2.jpg";
import image3 from "../../../../assets/images/banner/3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full mt-2">

        <div id="slide1" className="carousel-item relative h-[65vh] lg:h-[75vh] w-full">
          <img src={image1} className="w-full rounded-lg " />

          <div className="absolute flex justify-between items-center lg:rounded-lg bg-gradient-to-r from-[#0a0a0a] to-[#15151500] top-0 bottom-0">

          <div className="text-white space-y-7 lg:w-[503px] p-4 lg:p-7 lg:ml-6">
              <h1 className=" text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="font-medium text-[17px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form{" "}
              </p>
              <div className="">
                <button className="bg-[#FF3811] text-white font-semibold px-3 lg:px-5 py-3 rounded-md mr-2">Discover More</button>
                <button className="bg-transparent border text-white font-semibold px-5 py-3 rounded-md ">Latest Projects</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-white mr-4"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>




        </div>

        <div id="slide2" className="carousel-item relative h-[65vh] lg:h-[75vh] w-full">
          <img src={image2} className="w-full rounded-lg " />

          <div className="absolute flex justify-between items-center lg:rounded-lg bg-gradient-to-r from-[#0a0a0a] to-[#15151500] top-0 bottom-0">

          <div className="text-white space-y-7 lg:w-[503px] p-4 lg:p-7 lg:ml-6">
              <h1 className=" text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="font-medium text-[17px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form{" "}
              </p>
              <div className="">
                <button className="bg-[#FF3811] text-white font-semibold px-3 lg:px-5 py-3 rounded-md mr-2">Discover More</button>
                <button className="bg-transparent border text-white font-semibold px-5 py-3 rounded-md ">Latest Projects</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white mr-4"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>




        </div>


        <div id="slide3" className="carousel-item relative h-[65vh] lg:h-[75vh] w-full">
          <img src={image3} className="w-full rounded-lg " />

          <div className="absolute flex justify-between items-center lg:rounded-lg bg-gradient-to-r from-[#0a0a0a] to-[#15151500] top-0 bottom-0">

          <div className="text-white space-y-7 lg:w-[503px] p-4 lg:p-7 lg:ml-6">
              <h1 className=" text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="font-medium text-[17px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form{" "}
              </p>
              <div className="">
                <button className="bg-[#FF3811] text-white font-semibold px-3 lg:px-5 py-3 rounded-md mr-2">Discover More</button>
                <button className="bg-transparent border text-white font-semibold px-5 py-3 rounded-md ">Latest Projects</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white mr-4"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>




        </div>


        <div id="slide4" className="carousel-item relative h-[65vh] lg:h-[75vh] w-full">
          <img src={image1} className="w-full rounded-lg " />

          <div className="absolute flex justify-between items-center lg:rounded-lg bg-gradient-to-r from-[#0a0a0a] to-[#15151500] top-0 bottom-0">

          <div className="text-white space-y-7 lg:w-[503px] p-4 lg:p-7 lg:ml-6">
              <h1 className=" text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="font-medium text-[17px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form{" "}
              </p>
              <div className="">
                <button className="bg-[#FF3811] text-white font-semibold px-3 lg:px-5 py-3 rounded-md mr-2">Discover More</button>
                <button className="bg-transparent border text-white font-semibold px-5 py-3 rounded-md ">Latest Projects</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white mr-4"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>




        </div>

      </div>
    </div>
  );
};

export default Banner;
