import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const IMAGES: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk_1.jpg", mobile: "mk_1.png" },
  en: { pc: "pe_1.jpg", mobile: "me_1.jpg" },
};

export default function SliderItem00({ locale }: { locale: string }) {
  const { pc, mobile } = IMAGES[locale] || IMAGES.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/cheongju/${mobile}`}
        alt="청주1"
        fill
        className="object-fill min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/cheongju/${pc}`}
        alt="청주1"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
