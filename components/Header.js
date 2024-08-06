import Head from "next/head";

export default function Header({ title, name, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
