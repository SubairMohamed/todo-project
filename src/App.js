function App() {
 return (
  <div className="flex min-h-screen w-screen">
    {/* aside left */}
    <aside id="left" className="bg-sky-300 w-20 lg:w-28 flex-none">left</aside>

    {/* Main */}
    <section className="bg-teal-500 grow">
      <header>header</header>
      <main>main</main>
    </section>

    {/* aside right */}
    <aside id="right" className="bg-gray-400  sm:hidden md:block md:w-60 lg:w-96">right</aside>
  </div>
 );
}

export default App;
