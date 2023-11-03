import React from "react";
import ProductGrid from "./modules/products/ProductGrid";
import ShopProvider from "./providers/ShopProvider";
import Billing from "./modules/cart/Billing";

function App() {
  return (
    <ShopProvider>
    <main>
      <header className="bg-neutral text-neutral-content">
        <nav className="navbar max-w-screen-xl m-auto">
          <span className="btn btn-ghost normal-case text-xl px-0">Plates Co</span>
        </nav>
      </header>
      <section className="mt-2 flex max-w-screen-xl m-auto gap-4">
        <div className="basis-3/4">
          <ProductGrid />
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <aside className="basis-1/4">
          <Billing />
        </aside>
      </section>
    </main>
    </ShopProvider>
  );
}

export default App;
