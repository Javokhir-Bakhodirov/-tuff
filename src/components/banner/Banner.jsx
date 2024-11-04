const Banner = ({ img, title, saleCount }) => {
    return (
        <div className="bg-zinc-800 w-[77%] h-[400px] rounded-lg p-4 flex items-end relative ">
            <h2 className="uppercase banner-title font-[900] text-9xl  absolute top-0 left-4  ">
                {" "}
                big sale {saleCount}%
            </h2>
            <div className="flex gap-4">
                <div className="banner_text mb-[70px]">
                    <span className="text-lg font-semibold text-zinc-400">
                        {" "}
                        The best collection of 2024
                    </span>
                    <h2 className=" w-[57%] font-[700] text-3xl mt-[-5px] mb-[16px]  text-zinc-100   ">
                        {title}
                    </h2>
                    <button className="btn btn-primary border-purple-800 hover:border-purple-900 bg-purple-800 hover:bg-purple-900 uppercase text-zinc-100 ">
                        buy now
                    </button>
                </div>

                <img
                    src={img}
                    alt=""
                    width={450}
                    height={450}
                    className="absolute bottom-[-120px] right-[-90px]  "
                />
            </div>
        </div>
    );
};

export default Banner;
