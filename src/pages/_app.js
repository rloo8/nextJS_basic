import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          nav {
            background-color: tomato;
          }
          .active {
            color: white;
          }
        `}
      </style>
    </>
  );
}
