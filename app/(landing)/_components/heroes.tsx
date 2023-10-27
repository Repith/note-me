import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="relative w-[300px] h-[150px] md:w-[600px] md:h-[300px] lg:w-[950px] lg:h-[475px] border border-slate-100 shadow-md mt-4">
      <Image
        src="/intro-light.jpg"
        fill
        alt="Documents"
        className="object-contain dark:hidden rounded-sm border-1"
      />
      <Image
        src="/intro-dark.jpg"
        fill
        alt="Documents"
        className="object-contain hidden dark:block rounded-sm border-1"
      />
    </div>
  );
};
