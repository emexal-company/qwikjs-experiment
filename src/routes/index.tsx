import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Dropdown } from '~/components/dropdown/dropdown';
import { DropdownItem } from '~/components/dropdown/dropdown-item';
import { SuperHeader } from '~/components/superheader/superheader';
import { TextField } from '~/components/textfield/textfield';

export default component$(() => {
  return (
    <div>
      <Dropdown>
        <span q:slot="button">Dropdown</span>
        <DropdownItem q:slot="item">Item1</DropdownItem>
        <DropdownItem q:slot="item">Item2</DropdownItem>
      </Dropdown>

      <TextField label="Email address" help="We'll never share your email with anyone else."></TextField>
      
      <h1>Link to google</h1>
      <Button variant="danger" size="small" href="https://google.com" class="blabla">Google</Button>
      
      <h1>Small</h1>
      <Button variant="primary" size="small">Primary button</Button>
      <Button variant="secondary" size="small">Secondary button</Button>
      <Button variant="primary" outline size="small">Primary outline button</Button>
      <Button variant="secondary" outline size="small">Secondary outline button</Button>
      <Button variant="primary" size="small" disabled>Disabled</Button>    
      <br/>

      <h1>Medium</h1>
      <Button variant="primary">Primary button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="primary" outline>Primary outline button</Button>
      <Button variant="secondary" outline>Secondary outline button</Button>
      <br/>

      <h1>Large</h1>
      <Button variant="primary" size="large">Primary button</Button>
      <Button variant="secondary" size="large">Secondary button</Button>
      <Button variant="primary" outline size="large">Primary outline button</Button>
      <Button variant="secondary" outline size="large">Secondary outline button</Button>     

      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>

      <h2>Commands</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static-node</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Community</h2>

      <ul>
        <li>
          <span>Questions or just want to say hi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li>
          <span>Follow </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li>
          <span>Open issues and contribute on </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            Github
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
