import "../styles/index.scss"
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="home__hero">
        <div>
          <h1>Discover Your Urban Escape</h1>
          <span>Fresh Food, Local Flavour, and Crafted Drinks</span>
          <Button variant='secondary' title='Order Online' href="/order" />
          <Button variant='primary' title='Book A Table' href="/bookings" />
        </div>
      </section>
    </main>
  );
}
