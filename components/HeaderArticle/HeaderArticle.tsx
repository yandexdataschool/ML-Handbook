import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/shad-logo.svg";
import { imageLoader } from "../../utils/imageLoader";

export const HeaderArticle = () => {
  return (
    <header className="flex w-full px-5 py-3 justify-center shadow-md">
      <div className="absolute left-5 cursor-pointer">
        <Link href="/" passHref>
          <Image loader={imageLoader} src={logo} alt="Логотип Школы Анализа Данных" />
        </Link>
      </div>
      <p className="max-w-3xl w-full">ML–Учебник</p>
    </header>
  );
};
