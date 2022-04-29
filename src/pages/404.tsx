import { Link } from '../components/link';
import { Section } from '../components/section';

export default function Custom404() {
  return (
    <Section title="Hier gibts leider nichts zu sehen.">
      <div className="mb-24">
        <p>
          Möchtest Du dir vielleicht <Link href="/presskit">unser Presskit anschauen</Link> oder{' '}
          <Link href="/newsletter">unseren Newsletter abbonieren</Link>?
        </p>
      </div>
    </Section>
  );
}
