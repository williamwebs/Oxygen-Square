import { teamList } from "@/constants/contstants";
import Image from "next/image";

const Team = () => {
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {teamList.map((t, index) => (
          <div
            className="relative rounded-xl max-w-[300px] overflow-hidden mx-auto shadow"
            key={index}
          >
            <Image src={t.image} width={300} height={100} alt={t.name} className="hover:grayscale" />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/20 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">{t.name}</h5>
                <p className="font-medium text-[12px] text-white">{t.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
