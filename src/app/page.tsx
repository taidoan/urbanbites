import "../styles/index.scss"
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1>Discover Your Urban Escape</h1>
          <span>Fresh Food, Local Flavour, and Crafted Drinks</span>
          <Button variant='secondary' title='Order Online' href="/order" />
          <Button variant='primary' title='Book A Table' href="/bookings" />
          <Button variant='tertiary' title='Tertiary Button' />
          <Button variant='danger' title='Danger Button' />
          <Button variant='success' title='Warning Button' />
          <Button variant='disabled' title='Disabled' />
        </div>
      </section>
    </main>
  );
}
