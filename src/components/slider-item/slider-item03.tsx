import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const IMAGES: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk_4.jpg", mobile: "mk_4.png" },
  en: { pc: "pe_4.jpg", mobile: "me_4.jpg" },
};

export default function SliderItem03({ locale }: { locale: string }) {
  const { pc, mobile } = IMAGES[locale] || IMAGES.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/cheongju/${mobile}`}
        alt="청주4"
        fill
        className="object-fill min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/cheongju/${pc}`}
        alt="청주4"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
