import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikLogo } from '../svg-icon/qwik';
import { SuperHeader } from '../superheader/superheader';
import styles from './header.scss?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <SuperHeader></SuperHeader>
      <section>Put the menu here</section>
    </header>
  );
});
