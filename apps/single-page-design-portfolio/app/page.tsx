import {
  About,
  Help,
  Projects,
  Welcome,
} from '@single-page-design-portfolio/components/home';

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Welcome />
      <About />
      <Projects />
      <Help />
    </main>
  );
}
