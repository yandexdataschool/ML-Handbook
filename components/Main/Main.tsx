import Image from "next/image";
import Link from "next/link";

import * as Styles from "./Main.styles";

import logo from "../../public/images/shad-logo-full.png";

export type Chapter = {
  title: string;
  slug: string;
};

export type Section = {
  title: string;
  slug?: string;
  chapters?: Chapter[];
};

const Chapter = ({ title, slug }: Chapter) => {
  return (
    <Styles.Section className="list-inside">
      <Link href={slug}>{title}</Link>
    </Styles.Section>
  );
};

const Section = ({ title, slug, chapters }: Section) => {
  if (slug) {
    return (
      <Styles.Chapter>
        <Link href={slug}>{title}</Link>
      </Styles.Chapter>
    );
  }

  return (
    <>
      <Styles.Chapter>
        <p className="inline-block">{title}</p>
      </Styles.Chapter>
      <ol type="1">
        {chapters.map((chapter) => (
          <Chapter key={chapter.slug} title={chapter.title} slug={chapter.slug} />
        ))}
      </ol>
    </>
  );
};

type Props = {
  sections: Section[];
};

export const Main = ({ sections }: Props) => {
  return (
    <main className="container mx-auto max-w-4xl py-24">
      <div className="max-w-full flex flex-col align-middle">
        <h1 className="font-serif text-4xl py-4 text-center font-normal">Курс по теории машинного обучения</h1>
        <div className="mx-auto  max-w-full py-16">
          <Image src={logo} alt="Логотип Школы Анализа Данных" />
        </div>
        <p className="prose max-w-full font-sans text-xl py-16">
          Перед вами учебник по машинному обучению. Он состоит из двух частей — основного курса теории, который надлежит
          читать подряд, и набора статей отвечающих на вопросы возникающие в реальной практике аналитика или
          ML-инженера.
        </p>
        <div className="container py-6">
          <ol start={0} className="list-inside">
            {sections.map((section) => (
              <Section key={section.title} slug={section.slug} title={section.title} chapters={section.chapters} />
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};
