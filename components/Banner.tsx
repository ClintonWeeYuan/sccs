import { FC } from "react";
import Image from "next/image";
const Banner: FC = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-96 md:h-[36rem]">
        <Image src="/banner-img-1.jpg" layout="fill" alt="Help a child today" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src="/banner-img-3.jpg" layout="fill" alt="Help a child today" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle z-10">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle z-10">
            ❯
          </a>
        </div>
      </div>
    </div>

  );
};
export default Banner;
