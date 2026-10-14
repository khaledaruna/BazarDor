import AllProducts from "@/components/home/AllProducts";
import FallingPrice from "@/components/home/FallingPrice";
import Hero from "@/components/home/Hero";
import RisingPrice from "@/components/home/RisingPrice";
import { getProducts } from "@/lib/api";

const HomePage = async () => {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-bazar-bg">
      <Hero />

      <RisingPrice products={products} />

      <FallingPrice products={products} />

      <AllProducts products={products} />
    </main>
  );
};

export default HomePage;