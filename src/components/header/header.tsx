import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import { SuperHeader } from '../superheader/superheader';
import styles from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <SuperHeader></SuperHeader>
      <section>Menu</section>
    </header>
  );
});
