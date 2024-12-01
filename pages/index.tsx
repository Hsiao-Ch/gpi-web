import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Layout from "@/components/layout/Layout";
import Product from "@/components/home/product";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Product />
      <Contact />
    </Layout>
  );
}
