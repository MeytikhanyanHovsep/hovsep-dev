import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  style?: string;
};

export default function Container({ children, id, style = "" }: Props) {
  return (
    <section
      id={id}
      className={
        "max-w-7xl mr-auto relative max-md:pl-5 max-md:pr-5 max-md:pt-25 max-md:-mt-5 ml-auto pr-6  pt-30 pl-6" +
        style
      }
    >
      {children}
    </section>
  );
}
