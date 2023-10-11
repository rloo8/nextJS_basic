import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link className={router.pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>
        <Link
          className={router.pathname === "/about" ? "active" : ""}
          href="/about"
        >
          About
        </Link>
      </div>
      <style jsx global>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        nav div a {
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
