import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <h1>HI this is Ernie Next APP</h1>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
