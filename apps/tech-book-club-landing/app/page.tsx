import {
  About,
  Options,
  Services,
  Steps,
  Testimonials,
} from '@tech-book-club-landing/components/home';

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-32">
      <Services />
      <About />
      <Steps />
      <Options />
      <Testimonials />
    </main>
  );
}
