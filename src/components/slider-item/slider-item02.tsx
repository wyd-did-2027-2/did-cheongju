import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const IMAGES: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk_3.jpg", mobile: "mk_3.png" },
  en: { pc: "pe_3.jpg", mobile: "me_3.jpg" },
};

export default function SliderItem02({ locale }: { locale: string }) {
  const { pc, mobile } = IMAGES[locale] || IMAGES.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/cheongju/${mobile}`}
        alt="청주3"
        fill
        className="object-fill min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/cheongju/${pc}`}
        alt="청주3"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
