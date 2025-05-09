TITLE: Updating HTML Classes for New Utility Names
DESCRIPTION: Example of updating HTML classes to use renamed utility classes in v4.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_5

LANGUAGE: html
CODE:
```
<input class="shadow-xs" />

<input class="shadow-sm" />
```

----------------------------------------

TITLE: Updating Tailwind CLI Commands
DESCRIPTION: Updated CLI commands using the new @tailwindcss/cli package for building CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_3

LANGUAGE: sh
CODE:
```
npx @tailwindcss/cli -i input.css -o output.css
```

----------------------------------------

TITLE: Installing Latest Tailwind CSS Version
DESCRIPTION: Command to update to the latest version of Tailwind CSS via npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_20

LANGUAGE: shell
CODE:
```
npm install tailwindcss@latest
```

----------------------------------------

TITLE: Updating Tailwind CSS to the latest version
DESCRIPTION: This command updates Tailwind CSS to the latest version using npm. It installs the latest version as a development dependency.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-3/index.mdx#_snippet_37

LANGUAGE: sh
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Migrating to Dialog.Panel for Improved Scrollable Dialogs in Headless UI
DESCRIPTION: Code diff showing how to update existing Dialog implementations to use the new Dialog.Panel component, which improves scrolling behavior and click-outside handling in modal dialogs.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_4

LANGUAGE: jsx
CODE:
```
<Dialog
  open={isOpen}
  onClose={closeModal}
  className="fixed inset-0 flex items-center justify-center ..."
>
   <Dialog.Overlay className="fixed inset-0 bg-black/25" /> /* [!code --] */
   <div className="fixed inset-0 bg-black/25" /> /* [!code ++] */

   <div className="bg-white shadow-xl rounded-2xl ..."> /* [!code --] */
   <Dialog.Panel className="bg-white shadow-xl rounded-2xl ..."> /* [!code ++] */
    <Dialog.Title>Payment successful</Dialog.Title>
    {/* ... */}
  </div> /* [!code --] */
  </Dialog.Panel> /* [!code ++] */
</Dialog>
```

----------------------------------------

TITLE: Importing Components and Assets in Next.js
DESCRIPTION: Import statements for various assets and components used in the blog post, including author information, images, and Next.js components.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2023-04-24-new-changelog-template-and-the-biggest-tailwind-ui-update-ever/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import twitterCard from "./twitter-card.png";
import Link from "next/link";
import { Image } from "@/components/media";
import commitTemplate from "./commit-template.png";
import commitTemplateDarkMode from "./commit-template-dark-mode.png";
import commitTemplateForMotionOne from "./commit-template-for-motion-one.png";
import tailwindUiRefresh from "./tailwind-ui-refresh.png";
import tailwindUiRedesignedComponents from "./tailwind-ui-redesigned-components.png";
import tailwindUiSubtleImprovements from "./tailwind-ui-subtle-improvements.png";
import tailwindUiNewComponents from "./tailwind-ui-new-components.png";
import tailwindUiNewPageExamples from "./tailwind-ui-new-page-examples.png";
import tailwindUiDarkComponents from "./tailwind-ui-dark-components.png";
```

----------------------------------------

TITLE: Installing Latest TailwindCSS Version
DESCRIPTION: Command to update TailwindCSS to the latest version using npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_16

LANGUAGE: sh
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Updating Outline-none to Outline-hidden in HTML
DESCRIPTION: Demonstrates the rename of outline-none to outline-hidden for maintaining accessibility in forced colors mode.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_7

LANGUAGE: html
CODE:
```
<input class="focus:outline-none" />
<input class="focus:outline-hidden" />
```

----------------------------------------

TITLE: Defining Blog Post Metadata in Next.js
DESCRIPTION: Export of metadata object containing blog post information including title, description, date, authors, and featured image. Uses JSX for the excerpt content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2023-04-24-new-changelog-template-and-the-biggest-tailwind-ui-update-ever/index.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: "New changelog template + the biggest Tailwind UI update ever",
  description: `Over the last four months we've probably done more work on Tailwind UI than we ever have, and having finally wrapped up what we set out to achieve I'm excited to lay it all out for you.`,
  date: "2023-04-24T14:00:00.000Z",
  authors: [adamwathan],
  image: twitterCard,
  excerpt: (
    <>
      Over the last four months we've probably done more work on Tailwind UI than we ever have, and having finally
      wrapped up what we set out to achieve I'm excited to lay it all out for you.
    </>
  ),
};
```

----------------------------------------

TITLE: Updating Ring Width Default in HTML
DESCRIPTION: Shows how to migrate ring utility usage from the default 3px to explicit ring-3 declaration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_8

LANGUAGE: html
CODE:
```
<input class="ring ring-blue-500" />
<input class="ring-3 ring-blue-500" />
```

----------------------------------------

TITLE: Inline Author Definition in Blog Post
DESCRIPTION: Example of adding a guest author directly in a blog post's metadata without needing to update the central authors file, demonstrating the flexibility of the metadata approach.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_4

LANGUAGE: javascript
CODE:
```
export const meta = {
  title: "An example of a guest post by someone not on the team",
  authors: [
    {
      name: "Simon Vrachliotis",
      twitter: "@simonswiss",
      avatar: "https://pbs.twimg.com/profile_images/1160929863/n510426211_274341_6220_400x400.jpg",
    },
  ],
  // ...
};
```

----------------------------------------

TITLE: Installing Headless UI v1.4 via npm
DESCRIPTION: Shows the npm commands to install the latest version of Headless UI for both React and Vue projects. This is a minor update with no breaking changes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1-4/index.mdx#2025-04-22_snippet_8

LANGUAGE: sh
CODE:
```
# For React
npm install @headlessui/react

# For Vue
npm install @headlessui/vue
```

----------------------------------------

TITLE: HTML Form Field Serialization for Object Values in Headless UI
DESCRIPTION: Example of how Headless UI serializes object values into multiple hidden input fields using square bracket notation for HTML form submissions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<input type="hidden" name="assignee[id]" value="1" />
<input type="hidden" name="assignee[name]" value="Durward Reynolds" />
```

----------------------------------------

TITLE: Updating PostCSS Configuration
DESCRIPTION: Changes required in PostCSS configuration when upgrading to v4, including removing postcss-import and autoprefixer, and using the new @tailwindcss/postcss package.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_1

LANGUAGE: javascript
CODE:
```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

----------------------------------------

TITLE: Updating Tailwind CSS Imports
DESCRIPTION: New way to import Tailwind CSS in v4 using standard CSS import syntax instead of @tailwind directives.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_4

LANGUAGE: css
CODE:
```
@import "tailwindcss";
```

----------------------------------------

TITLE: Creating a Nullable Combobox in Headless UI with React
DESCRIPTION: Example showing how to implement a Combobox with the 'nullable' prop, which allows users to clear the input without restoring the previously selected value when tabbing away.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
function MyCombobox({ items }) {
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    // [!code highlight:2]
    <Combobox value={selectedItem} onChange={setSelectedItem} nullable>
      <Combobox.Input />
      <Combobox.Options>
        {items.map((item) => (
          <Combobox.Option key={item} value={item}>
            {item}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
```

----------------------------------------

TITLE: Updating Outline Color Transition in Tailwind CSS v4
DESCRIPTION: Shows how to update the outline color transition to avoid unintended color transitions when using focus styles in Tailwind CSS v4.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_16

LANGUAGE: HTML
CODE:
```
<button class="transition hover:outline-2 hover:outline-cyan-500"></button>
<button class="outline-cyan-500 transition hover:outline-2"></button>
```

----------------------------------------

TITLE: Creating Description Lists with Catalyst Components
DESCRIPTION: Implementation of Catalyst's DescriptionList component system for displaying key-value information pairs in a responsive layout. Uses DescriptionTerm and DescriptionDetails child components to structure the content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/description-list";

function Example() {
  return (
    <DescriptionList>
      <DescriptionTerm>Customer</DescriptionTerm>
      <DescriptionDetails>Michael Foster</DescriptionDetails>

      <DescriptionTerm>Event</DescriptionTerm>
      <DescriptionDetails>Bear Hug: Live in Concert</DescriptionDetails>

      {/* ... */}
    </DescriptionList>
  );
}
```

----------------------------------------

TITLE: Installing Tailwind CSS v3.3
DESCRIPTION: Command to install the latest version of Tailwind CSS using npm. This command updates the project's dev dependencies with the newest Tailwind CSS release.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-3/index.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Using Object Comparison with Headless UI Listbox Component
DESCRIPTION: Example showing how to use the new 'by' prop in Headless UI v1.7 to control object comparisons in a Listbox component. This makes it easier to bind an object as the form value without having to manually handle object equality.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-09-09-new-personal-website-heroicons-2-headless-ui-v17/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { Listbox } from "@headlessui/react";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

function DepartmentPicker({ selectedDepartment, onChange }) {
  return (
    <Listbox value={selectedDepartment} by="id" onChange={onChange}>
      <Listbox.Button>{selectedDepartment.name}</Listbox.Button>
      <Listbox.Options>
        {departments.map((department) => (
          <Listbox.Option key={department.id} value={department}>
            {department.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
```

----------------------------------------

TITLE: Updating Variable Syntax in Arbitrary Values for Tailwind CSS v4
DESCRIPTION: Demonstrates the change in syntax for using CSS variables as arbitrary values in Tailwind CSS v4. The new syntax uses parentheses instead of square brackets.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_13

LANGUAGE: HTML
CODE:
```
<div class="bg-[--brand-color]"></div>
<div class="bg-(--brand-color)"></div>
```

----------------------------------------

TITLE: Integrating Headless UI Listbox with HTML Forms in React
DESCRIPTION: Code snippet demonstrating how to connect Headless UI form components with HTML forms using the 'name' prop, which automatically creates hidden inputs for server-side form submissions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
<form action="/projects/1/assignee" method="post">
  <Listbox
    value={selectedPerson}
    onChange={setSelectedPerson}
    // [!code highlight:2]
    name="assignee"
  >
    {/* ... */}
  </Listbox>
  <button>Submit</button>
</form>
```

----------------------------------------

TITLE: React Divider Component Implementation
DESCRIPTION: Demonstrates how to import and use the Divider component from the Catalyst library in a React application. Shows a simple implementation of the component with minimal setup.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_5

LANGUAGE: jsx
CODE:
```
import { Divider } from "@/components/divider";

function Example() {
  return <Divider />;
}
```

----------------------------------------

TITLE: Implementing Hover Styles for Desktop-only in Tailwind CSS v4
DESCRIPTION: Shows the updated implementation of the hover variant in Tailwind CSS v4, which now only applies when the primary input device supports hover.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_14

LANGUAGE: CSS
CODE:
```
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration: underline;
  }
}
```

----------------------------------------

TITLE: Initializing React Component with Meta Data
DESCRIPTION: React component setup with meta information for a blog post about Tailwind CSS Typography plugin updates.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-typography-v0-5/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
export const meta = {
  title: "Effortless Typography, Even in Dark Mode",
  description: `Today we're announcing the next version of the Tailwind CSS Typography plugin, which brings easy dark mode support and a brand new customization API.`,
  date: "2021-12-17T18:50:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Today we're announcing the next version of the{" "}
      <Link href="https://v3.tailwindcss.com/docs/typography-plugin">Tailwind CSS Typography plugin</Link>, which brings
      easy dark mode support, a brand new customization API, and the `not-prose` class I wasn't sure we'd ever figure
      out how to support.
    </>
  ),
};
```

----------------------------------------

TITLE: Using Headless UI Data Attributes with Tailwind CSS
DESCRIPTION: Demonstrates the usage of the new @headlessui/tailwindcss plugin with data-headlessui-state attributes for styling component states using Tailwind CSS classes. Shows implementation with Listbox.Option component including active and selected states.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-09-09-new-personal-website-heroicons-2-headless-ui-v17/index.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
<Listbox.Option
  key={person.id}
  value={person}
  className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
>
  <CheckIcon className="ui-selected:block hidden" />
  {person.name}
</Listbox.Option>
```

----------------------------------------

TITLE: Vue Component Using Script Setup Syntax
DESCRIPTION: Example of a Vue component using the new <script setup> syntax with Headless UI Listbox component integration. Demonstrates simplified component registration and reduced boilerplate compared to traditional Vue component syntax.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_5

LANGUAGE: html
CODE:
```
<template>
  <Listbox as="div" v-model="selected">
    <!-- ... -->
  </Listbox>
</template>

<script setup>
  import { ref } from "vue";
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
  import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

  const people = [
    { id: 1, name: "Wade Cooper" },
    // ...
  ];

  const selected = ref(people[3]);
</script>
```

----------------------------------------

TITLE: Using Headless UI Listbox as an Uncontrolled Component
DESCRIPTION: Example demonstrating how to use Headless UI v1.7's Listbox as an uncontrolled component with the new 'defaultValue' prop. This approach simplifies code when working with traditional HTML forms or FormData-based APIs.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-09-09-new-personal-website-heroicons-2-headless-ui-v17/index.mdx#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function Example() {
  return (
    <form action="/projects/1/assignee" method="post">
      <Listbox name="assignee" defaultValue={people[0]}>
        <Listbox.Button>{({ value }) => value.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <button>Submit</button>
    </form>
  );
}
```

----------------------------------------

TITLE: Implementing Multiselect Support in Headless UI Combobox Component with React
DESCRIPTION: Code example showing how to use the new 'multiple' prop in the Headless UI Combobox component to enable selecting multiple items. The component manages selected items in an array state and renders them in a list.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
function MyCombobox({ items }) {
  // [!code highlight:2]
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    // [!code highlight:9]
    <Combobox value={selectedItems} onChange={setSelectedItems} multiple>
      {selectedItems.length > 0 && (
        <ul>
          {selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <Combobox.Input />
      <Combobox.Options>
        {items.map((item) => (
          <Combobox.Option key={item} value={item}>
            {item}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
```

----------------------------------------

TITLE: Static Props Generation for Post Navigation
DESCRIPTION: Implementation of getStaticProps to load all post previews and map them to lightweight objects containing post titles and URLs.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_8

LANGUAGE: javascript
CODE:
```
import getAllPostPreviews from "@/getAllPostPreviews";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostPreviews().map((post) => ({
        title: post.module.meta.title,
        link: post.link.substr(1),
      })),
    },
  };
}
```

----------------------------------------

TITLE: Using @supports Queries with Arbitrary Variants
DESCRIPTION: Shows how to use @supports queries with arbitrary variants to conditionally apply styles based on browser feature support.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_17

LANGUAGE: html
CODE:
```
<div
  class="bg-white [@supports(backdrop-filter:blur(0))]:bg-white/50 [@supports(backdrop-filter:blur(0))]:backdrop-blur"
>
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Using Heading Components from Catalyst
DESCRIPTION: Example of using Catalyst's Heading and Subheading components to create consistent page titles and subtitles in a React application. These components provide responsive styling with built-in dark mode support.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_3

LANGUAGE: jsx
CODE:
```
import { Heading, Subheading } from "@/components/heading";

function Example() {
  return (
    <div>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
    </div>
  );
}
```

----------------------------------------

TITLE: Importing Dependencies and Defining Metadata for Tailwind Plus Blog Post
DESCRIPTION: This snippet imports necessary dependencies and defines metadata for the blog post, including title, description, authors, and image. It also includes an excerpt of the post content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwind-plus/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import Link from "next/link";
import { Image } from "@/components/media";

export const meta = {
  title: "Tailwind UI is now Tailwind Plus",
  description: `We just shipped a huge rebrand project, turning what was previously known as Tailwind UI into Tailwind Plus. Tailwind Plus is the all same high-quality resources you know from Tailwind UI, but with all-new possibilities and potential.`,
  date: "2025-03-04T16:00:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      We just shipped a huge rebrand project, turning what was previously known as Tailwind UI into Tailwind Plus.
      Tailwind Plus is the all same high-quality resources you know from Tailwind UI, but with all-new possibilities and
      potential.
    </>
  ),
};
```

----------------------------------------

TITLE: Importing Dependencies for Blog Post
DESCRIPTION: Imports required components and assets including YouTube video component, Next.js Link component, author data, and card image.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-from-zero-to-production/index.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { YouTubeVideo } from "@/components/media";
import Link from "next/link";

import { simonswiss } from "@/app/blog/authors";
import card from "./card.jpg";
```

----------------------------------------

TITLE: Author Data Structure for Tailwind Blog
DESCRIPTION: Implementation of centralized author data that can be imported into blog posts, containing each team member's name, Twitter handle, and avatar image reference.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_3

LANGUAGE: javascript
CODE:
```
import adamwathanAvatar from "./img/adamwathan.jpg";
import bradlcAvatar from "./img/bradlc.jpg";
import steveschogerAvatar from "./img/steveschoger.jpg";

export const adamwathan = {
  name: "Adam Wathan",
  twitter: "@adamwathan",
  avatar: adamwathanAvatar,
};

export const bradlc = {
  name: "Brad Cornes",
  twitter: "@bradlc",
  avatar: bradlcAvatar,
};

export const steveschoger = {
  name: "Steve Schoger",
  twitter: "@steveschoger",
  avatar: steveschogerAvatar,
};
```

----------------------------------------

TITLE: Implementing HTML/CSS Divider with TailwindCSS
DESCRIPTION: Creates a horizontal divider line using TailwindCSS classes with support for both light and dark modes. The divider is styled with a subtle border color that adapts to the theme.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<div className="bg-white py-8 dark:bg-zinc-900">
  <hr className="w-full border-t border-zinc-950/10 dark:border-white/10" />
</div>
```

----------------------------------------

TITLE: Upgrading Tailwind CSS via NPM
DESCRIPTION: Command to upgrade to Tailwind CSS v2.1 using npm
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-1/index.mdx#2025-04-22_snippet_5

LANGUAGE: bash
CODE:
```
npm install tailwindcss@latest
```

----------------------------------------

TITLE: Package Installation Commands
DESCRIPTION: Commands for upgrading to Tailwind CSS v1.9 using npm or yarn package managers.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-9/index.mdx#2025-04-22_snippet_4

LANGUAGE: bash
CODE:
```
# npm
npm install tailwindcss@^1.9

# yarn
yarn add tailwindcss@^1.9
```

----------------------------------------

TITLE: Blog Post Excerpt Definition Using HTML Comments
DESCRIPTION: How to define blog post excerpts using HTML comments as markers, allowing separation of preview content from the full post content while keeping everything in a single file.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_6

LANGUAGE: markdown
CODE:
```
export const meta = {
  // ...
}

This is the beginning of the post, and what we'd like to
show on the homepage.

<!--​more-->

Anything after that is not included in the bundle unless
you are actually viewing that post.
```

----------------------------------------

TITLE: Upgrading Tailwind CSS using npm (Bash)
DESCRIPTION: Provides the standard command-line instruction to upgrade Tailwind CSS to the latest version using the npm package manager. The `-D` flag installs it as a development dependency, which is typical for Tailwind CSS projects.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-2/index.mdx#_snippet_12

LANGUAGE: bash
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Configuring Blog Post Metadata and Content in Next.js
DESCRIPTION: This code sets up the blog post metadata and content using Next.js components. It imports author information, images, and the Next.js Link component, then exports a meta object containing all the post details including title, description, date, authors, featured image, and an excerpt.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/welcoming-james-mcdonald-to-tailwind-labs/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import { Image } from "@/components/media";
import Link from "next/link";
import card from "./card.jpg";
import jamesWorkExamples from "./james-work.jpg";
import tailwindUiExamples from "./tailwindui-work.jpg";

export const meta = {
  title: "Welcoming James McDonald to Tailwind Labs",
  description: `Many years ago I got a message from Steve that said something like: "Have I ever shared this guy's Dribbble profile with you before? Been following him forever, some of my absolute favorite work I've ever found." That person was James McDonald, and today we're totally over the moon to share that James is joining our team full-time.`,
  date: "2021-03-08T19:00:00.0Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Many years ago I got a message from <Link href="https://twitter.com/steveschoger">Steve</Link> that said something
      like{" "}
      <em>
        "Have I ever shared this guy's Dribbble profile with you before? Been following him forever, some of my absolute
        favorite work I've ever found"
      </em>
      . That person was <Link href="https://dribbble.com/james">James McDonald</Link>, and today we're totally over the
      moon to share that James is joining our team full-time.
    </>
  ),
};
```

----------------------------------------

TITLE: Implementing Stacked Layout Component in React with Catalyst
DESCRIPTION: Example of using the StackedLayout component from Catalyst to create a horizontal navigation menu-based layout suitable for applications with fewer pages. Shows integration with Navbar and Sidebar components.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
import { StackedLayout } from "@/components/stacked-layout";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

function Example({ children }) {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Top navigation menu */}</Navbar>}
      sidebar={<Sidebar>{/* Sidebar content for mobile menu */}</Sidebar>}
    >
      {/* Your page content */}
    </StackedLayout>
  );
}
```

----------------------------------------

TITLE: Blog Post Metadata Configuration in Next.js
DESCRIPTION: Exports metadata configuration for a blog post including title, description, date, authors, image, and excerpt. Uses Next.js and React components for content structuring.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-08-17-tailwind-framer-motion-template-and-tailwind-jobs/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import { Figure } from "@/components/figure.tsx";
import { Image } from "@/components/media";
import Link from "next/link";

import tailwindJobs from "./tailwind-jobs.jpg";
import card from "./card.jpg";
import pocketPreview from "./pocket-preview.png";

export const meta = {
  title: "New Tailwind CSS + Framer Motion template and Tailwind Jobs",
  description: `All about the brand new Tailwind UI template we just shipped, the official Tailwind CSS job board, and a bunch of new projects coming out in the next few weeks.`,
  date: "2022-08-19T12:45:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      All about the brand new Tailwind UI template we just shipped, the official Tailwind CSS job board, and a bunch of
      new projects coming out in the next few weeks.
    </>
  ),
};
```

----------------------------------------

TITLE: Upgrading Tailwind CSS with the CLI
DESCRIPTION: Command to install the latest version of Tailwind CSS using the Tailwind CLI. This upgrades the project to Tailwind CSS v4.1.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_0

LANGUAGE: sh
CODE:
```
# [!code filename:Using the Tailwind CLI]
npm install tailwindcss@latest @tailwindcss/cli@latest
```

----------------------------------------

TITLE: Implementing Sidebar Layout Component in React with Catalyst
DESCRIPTION: Example of using the SidebarLayout component from Catalyst to create a responsive application layout with a sidebar that collapses into a mobile menu on smaller screens. Demonstrates how to integrate Navbar and Sidebar components.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-24-catalyst-application-layouts/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { SidebarLayout } from "@/components/sidebar-layout";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

function Example({ children }) {
  return (
    <SidebarLayout
      sidebar={<Sidebar>{/* Sidebar menu */}</Sidebar>}
      navbar={<Navbar>{/* Navbar for mobile screens */}</Navbar>}
    >
      {/* Your page content */}
    </SidebarLayout>
  );
}
```

----------------------------------------

TITLE: Installing Tailwind CSS v3.1 via npm
DESCRIPTION: Command to upgrade a project to the latest version of Tailwind CSS using npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_0

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest
```

----------------------------------------

TITLE: Importing Dependencies for a Next.js Blog Post
DESCRIPTION: Imports necessary components and assets for a blog post in a Next.js application, including author information, card image, YouTube video component, and Next.js Link component.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/welcoming-david-luhr-to-tailwind-labs/index.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { YouTubeVideo } from "@/components/media";
import Link from "next/link";
```

----------------------------------------

TITLE: Upgrading Tailwind CSS with Vite
DESCRIPTION: Command to install the latest version of Tailwind CSS using Vite. This upgrades the project to Tailwind CSS v4.1 with Vite integration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_1

LANGUAGE: sh
CODE:
```
# [!code filename:Using Vite]
npm install tailwindcss@latest @tailwindcss/vite@latest
```

----------------------------------------

TITLE: Custom Webpack Loader for Post Previews
DESCRIPTION: A webpack loader configuration that enables loading blog posts in two formats: full content for post pages and preview-only content for the homepage, helping optimize bundle size.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_5

LANGUAGE: javascript
CODE:
```
{
  resourceQuery: /preview/,
  use: [
    ...mdx,
    createLoader(function (src) {
      if (src.includes('<!--​more​-->')) {
        const [preview] = src.split('<!--​more​-->')
        return this.callback(null, preview)
      }

      const [preview] = src.split('<!--​/excerpt​-->')
      return this.callback(null, preview.replace('<!--​excerpt​-->', ''))
    }),
  ],
}
```

----------------------------------------

TITLE: Installing Headless UI
DESCRIPTION: Command to install the latest version of Headless UI using npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-06-21-headless-ui-v2-1/index.mdx#2025-04-22_snippet_3

LANGUAGE: sh
CODE:
```
npm i @headlessui/react@latest
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in JavaScript/JSX
DESCRIPTION: Exports metadata for a blog post about David Luhr joining Tailwind Labs, including title, description, date, authors, image, and an excerpt with JSX markup containing links.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/welcoming-david-luhr-to-tailwind-labs/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: "Welcoming David Luhr to Tailwind Labs",
  description: `We started working with David Luhr last summer to help us develop a Figma version of Tailwind UI, as well as to leverage his accessibility expertise, ensuring we were following best practices and delivering markup that would work for everyone. Today we're excited to share that David has joined the team full-time!`,
  date: "2021-02-01T13:35:00.0Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      We started working with <Link href="https://twitter.com/david_luhr">David Luhr</Link> last summer on a
      project-by-project basis to help us develop a Figma version of{" "}
      <Link href="https://tailwindui.com">Tailwind UI</Link> (almost ready!), as well as to leverage his accessibility
      expertise when building Tailwind UI templates, ensuring we were following best practices and delivering markup
      that would work for everyone, no matter what tools they use to browse the web.
    </>
  ),
};
```

----------------------------------------

TITLE: Project Directory Structure for Next.js Blog
DESCRIPTION: The file organization structure for the Tailwind blog, showing how each post has its own folder with an index.mdx file and associated assets like images co-located in the same directory.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_1

LANGUAGE: plaintext
CODE:
```
public/
src/
├── components/
├── css/
├── img/
└── pages/
    ├── building-the-tailwindcss-blog/
    │   ├── index.mdx
    │   └── card.jpeg
    ├── introducing-linting-for-tailwindcss-intellisense/
    │   ├── index.mdx
    │   ├── css.png
    │   ├── html.png
    │   └── card.jpeg
    ├── _app.js
    ├── _document.js
    └── index.js
next.config.js
package.json
postcss.config.js
README.md
tailwind.config.js
```

----------------------------------------

TITLE: Importing Dependencies and Setting Metadata for Tailwind CSS Blog Post in JSX
DESCRIPTION: This code imports necessary dependencies for a blog post, including author information, images, and media components. It then sets metadata for the post including title, description, publication date, authors, image, and an excerpt highlighting the journey from alpha to beta.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-beta/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { Image } from "@/components/media";

export const meta = {
  title: "Tailwind CSS v4.0 Beta 1",
  description: `After a long alpha period, we're excited to release the first public beta of Tailwind CSS v4.0.`,
  date: "2024-11-21T18:30:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      About eight months ago we{" "}
      <a href="https://tailwindcss.com/blog/tailwindcss-v4-alpha">open-sourced our progress</a> on Tailwind CSS v4.0.
      Hundreds of hours of fixing bugs, soul-crushing backward compatibility work, and troubleshooting Windows CI
      failures later, I'm excited to finally tag the first public beta release.
    </>
  ),
};
```

----------------------------------------

TITLE: Upgrading Tailwind CSS with PostCSS
DESCRIPTION: Command to install the latest version of Tailwind CSS using PostCSS. This upgrades the project to Tailwind CSS v4.1 with PostCSS integration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_2

LANGUAGE: sh
CODE:
```
# [!code filename:Using PostCSS]
npm install tailwindcss@latest @tailwindcss/postcss@latest
```

----------------------------------------

TITLE: Installing Tailwind CSS v3.2 via NPM
DESCRIPTION: Command to upgrade existing Tailwind CSS projects to the latest version using npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_0

LANGUAGE: sh
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Client-side Post Navigation Component
DESCRIPTION: React component implementation that determines next and previous posts based on the current route using the Next.js router.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_9

LANGUAGE: javascript
CODE:
```
export default function Post({ meta, children, posts }) {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];

  // ...
}
```

----------------------------------------

TITLE: Checked Variant Usage
DESCRIPTION: Example of using the new checked variant for styling checkboxes and radio buttons.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_8

LANGUAGE: html
CODE:
```
<input type="checkbox" class="bg-white checked:bg-blue-500" />
```

----------------------------------------

TITLE: Blog Post Metadata Structure in Next.js with MDX
DESCRIPTION: Implementation of post metadata in MDX files using an exported meta object that contains information like title, description, publish date, authors, and Open Graph image details.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_2

LANGUAGE: javascript
CODE:
```
import { bradlc } from "@/app/blog/authors";
import openGraphImage from "./card.jpeg";

export const meta = {
  title: "Introducing linting for Tailwind CSS IntelliSense",
  description: `Today we're releasing a new version of the Tailwind CSS IntelliSense extension for Visual Studio Code that adds Tailwind-specific linting to both your CSS and your markup.`,
  date: "2020-06-23T18:52:03Z",
  authors: [bradlc],
  image: openGraphImage,
  discussion: "https://github.com/tailwindcss/tailwindcss/discussions/1956",
};

// Post content goes here
```

----------------------------------------

TITLE: Initializing Blog Post Metadata with React/Next.js
DESCRIPTION: Configuration of blog post metadata including title, description, authors, and image imports. Uses Next.js components and custom imports for media handling.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/from-900-to-1-how-we-hired-robin-malfait/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Figure } from "@/components/figure.tsx";
import { Image } from "@/components/media";
import Link from "next/link";
import { adamwathan } from "@/app/blog/authors";
import robinImage from "./robin.jpg";
import cardImage from "./card.jpg";

export const meta = {
  title: "From Nine Hundred to One: How We Hired Robin Malfait",
  description: `Back in May we published our first job posting for a full-stack developer to join our team. This is the story of how we worked through almost 900 applications, and eventually hired Robin Malfait, a talented developer from Belgium who is starting with us today.`,
  date: "2020-08-10T13:30:00.000Z",
  authors: [adamwathan],
  image: cardImage,
  excerpt: (
    <>
      Back in May we published{" "}
      <Link href="https://jobs.tailwindui.com/full-stack-developer">our first job posting</Link> to help us find a
      full-stack developer to join our team. After receiving almost 900 applications and interviewing dozens of talented
      people, we're excited to finally share that <Link href="https://twitter.com/malfaitrobin">Robin Malfait</Link>{" "}
      accepted our offer for the position and is officially part of the Tailwind Labs team as of today!
    </>
  ),
};
```

----------------------------------------

TITLE: Running Tailwind CSS Upgrade Tool
DESCRIPTION: Command to run the automated upgrade tool that handles migration from v3 to v4. Requires Node.js 20 or higher.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_0

LANGUAGE: sh
CODE:
```
$ npx @tailwindcss/upgrade
```

----------------------------------------

TITLE: Rendering Author Information with Dynamic Images
DESCRIPTION: React component that displays post metadata including publication date and author information with dynamically sized profile images from Sanity.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-09-12-radiant-a-beautiful-new-marketing-site-template/index.mdx#2025-04-22_snippet_6

LANGUAGE: jsx
CODE:
```
<div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
</div>
{post.author && (
  <div className="mt-2.5 flex items-center gap-3">
    {post.author.image && (
      <img
        className="aspect-square size-6 rounded-full object-cover"
        src={image(post.author.image).width(64).height(64).url()}
        alt=""
      />
    )}
    <div className="text-sm/5 text-gray-700">
      {post.author.name}
    </div>
  </div>
)}
```

----------------------------------------

TITLE: Importing Components and Assets for a Next.js Blog Post
DESCRIPTION: Imports necessary components, authors data, and image assets for use in a Next.js blog post. This includes importing image files, Next.js Link component, and custom components from the application.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/welcoming-brad-cornes-to-the-tailwind-team/index.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { Image } from "@/components/media";
import Link from "next/link";
import image from "../introducing-linting-for-tailwindcss-intellisense/card.jpg";
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in React/JSX
DESCRIPTION: JSX code for configuring metadata for a blog post about Tailwind UI templates and all-access package. The code imports author information, images, and components, then exports a meta object containing the post's title, description, date, authors, image, and excerpt with a link to thoughtbot.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-06-23-tailwind-templates-and-all-access/index.mdx#2025-04-22_snippet_0

LANGUAGE: JSX
CODE:
```
export const meta = {
  title: "Tailwind UI: Site templates and all-access",
  description: `Today we're releasing our first batch of official Tailwind CSS website templates — beautiful designs engineered into production-quality codebases, powered by Tailwind CSS and Next.js.`,
  date: "2022-06-23T19:40:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      When I was early in my programming career, I loved following{" "}
      <Link href="https://thoughtbot.com/">thoughtbot</Link>. They were always writing interesting programming articles
      and producing fantastic screencasts.
    </>
  ),
};
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in Next.js/React
DESCRIPTION: Exports metadata configuration for a blog post including title, description, date, authors, image, and JSX excerpt with links. Uses imports from local components and author data.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/simon-vrachliotis-joins-tailwind-labs/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import { YouTubeVideo } from "@/components/media";
import Link from "next/link";
import card from "./card.jpg";

export const meta = {
  title: "Simon Vrachliotis Joins Tailwind Labs",
  description: `Today we are super excited to share that Simon Vrachliotis has joined the development team at Tailwind Labs.`,
  date: "2020-07-19T19:00:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Today we are super excited to share that <Link href="https://twitter.com/simonswiss">Simon Vrachliotis</Link> has
      joined the development team at Tailwind Labs! (We just finalized that new business name by the way, pretty cool
      right?)
    </>
  ),
};
```

----------------------------------------

TITLE: Focus Indicator Implementation
DESCRIPTION: Demonstrates implementation of improved focus indicators with outline utilities for better accessibility.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-9/index.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<button class="focus:shadow-outline focus:outline-none ...">
  <!-- ... -->
</button>
```

LANGUAGE: html
CODE:
```
<!-- Use `outline-white` on dark backgrounds -->
<div class="bg-gray-900">
  <button class="focus:outline-white ...">
    <!-- ... -->
  </button>
</div>

<!-- Use `outline-black` on light backgrounds -->
<div class="bg-white">
  <button class="focus:outline-black ...">
    <!-- ... -->
  </button>
</div>
```

----------------------------------------

TITLE: Implementing Details Content Variant
DESCRIPTION: Shows how to style details element content container using the new details-content variant
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_18

LANGUAGE: html
CODE:
```
<details class="rounded-lg border border-transparent p-6 details-content:mt-3 details-content:-ml-0.5" open>
  <summary class="text-sm leading-6 font-semibold text-gray-900 select-none dark:text-white">
    Why do they call it Ovaltine?
  </summary>
  <div class="border-gray-200 bg-gray-50 py-3 pl-3 dark:border-white/10 dark:bg-gray-800/50 ...">
    <p>The mug is round. The jar is round. They should call it Roundtine.</p>
  </div>
</details>
```

----------------------------------------

TITLE: Extending Variants (New Method) JS
DESCRIPTION: Illustrates the new method using `extend` within the `variants` configuration in `tailwind.config.js`. This simplified approach allows adding extra variants for a property without needing to redefine all the default ones.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_23

LANGUAGE: js
CODE:
```
module.exports = {
  // ...
  variants: {
    extend: {
      backgroundColor: ["focus-visible"],
    },
  },
};
```

----------------------------------------

TITLE: Initializing Meta Data for Tailwind CSS Blog Post
DESCRIPTION: React/Next.js component that defines metadata for a blog post about Tailwind CSS v1.8.0 release, including title, description, authors, and image imports.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-8/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import { Image } from "@/components/media";
import Link from "next/link";
import card from "./card.jpg";

export const meta = {
  title: "Tailwind CSS v1.8.0",
  description: `Tailwind CSS v1.8.0 is now available, with font-variant-numeric support, experimental dark mode, and more!`,
  date: "2020-09-04T20:15:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Tailwind CSS v1.8 is now available with a handful of new utilities, a couple new features, and an exciting new
      experiment!
    </>
  ),
};
```

----------------------------------------

TITLE: Plugin API Array Shorthand
DESCRIPTION: Demonstrates the array shorthand syntax for adding component variants using the plugin API.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_2

LANGUAGE: javascript
CODE:
```
plugin(function ({ addComponents })) {
  addComponents({
    '.card': {
      // ...
    }
  }, ['responsive'])
})
```

----------------------------------------

TITLE: Initializing Blog Post Metadata in JavaScript
DESCRIPTION: Exports metadata configuration for a blog post including title, description, date, authors, and image properties. Uses React components for excerpt content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2023-07-18-tailwind-connect-2023-recap/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
export const meta = {
  title: "Tailwind Connect 2023: Recap of our first in-person event",
  description: `Last month, over 200 people got together in my hometown of Cambridge, Ontario to hang out, talk shop, and get a peek behind the curtain at some of the new stuff we've been working on.`,
  date: "2023-07-19T17:00:00.000Z",
  authors: [adamwathan],
  image: twitterCard,
  excerpt: (
    <>
      Last month, over 200 people got together in my hometown of Cambridge, Ontario to hang out, talk shop, and get a
      peek behind the curtain at some of the new stuff we've been working on.
    </>
  ),
};
```

----------------------------------------

TITLE: Creating Dynamic Variants with matchVariant
DESCRIPTION: Demonstrates how to create custom dynamic variants using the matchVariant plugin API, including sorting functionality.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_11

LANGUAGE: javascript
CODE:
```
let plugin = require("tailwindcss/plugin");

module.exports = {
  // ...
  plugins: [
    plugin(function ({ matchVariant }) {
      matchVariant(
        "placement",
        (value) => {
          return `&[data-placement=${value}]`;
        },
        {
          values: {
            t: "top",
            r: "right",
            b: "bottom",
            l: "left",
          },
        },
      );
    }),
  ],
};
```

----------------------------------------

TITLE: Responsive Container Usage
DESCRIPTION: Example of using the new responsive container variants feature.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<!-- Only lock the width at `md` sizes and above -->
<div class="md:container">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Styling Email Input and Validation Message with Peer Classes in HTML
DESCRIPTION: This snippet demonstrates how to use the 'peer' class and 'peer-invalid' variant to show a validation message for an email input field.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_20

LANGUAGE: HTML
CODE:
```
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

----------------------------------------

TITLE: Migrating Outline Utility Changes in HTML
DESCRIPTION: Shows the changes to outline utility usage where outline-width now defaults to 1px and outline-<number> utilities include outline-style:solid by default.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<input class="outline outline-2" />
<input class="outline-2" />
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in Next.js
DESCRIPTION: Sets up the metadata for a blog post including title, description, date, authors, image, and excerpt. Uses JSX for the excerpt content and imports necessary dependencies.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/whats-new-in-tailwindcss-on-youtube/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { simonswiss } from "@/app/blog/authors";
import { YouTubeVideo } from "@/components/media";
import Link from "next/link";
import card from "./card.jpg";

export const meta = {
  title: `"What's new in Tailwind CSS?" on YouTube`,
  description: `A lot of cool stuff has been added to Tailwind since the last time we published any screencasts, so we thought it would be a great idea to record a little series that covers all of the new additions.`,
  date: "2020-09-23T18:30:00.000Z",
  authors: [simonswiss],
  image: card,
  excerpt: (
    <>
      A lot of cool stuff has been added to Tailwind since the last time we published any screencasts, so we thought it
      would be a great idea to record a little series that covers all of the new additions.
    </>
  ),
};
```

----------------------------------------

TITLE: Browser Support Styling with supports-* Variant
DESCRIPTION: Example of using the new supports-[...] variant to conditionally apply styles based on browser feature support, which generates @supports rules.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="flex supports-[display:grid]:grid ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Initializing Blog Post Metadata in Next.js
DESCRIPTION: Exports metadata configuration for a blog post about job openings, including title, description, authors, and image imports. Uses Next.js components and JSX for content formatting.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/hiring-a-design-engineer-and-staff-engineer/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { Image } from "@/components/media";
import Link from "next/link";
import designEngineer from "./design-engineer.jpg";
import staffEngineer from "./staff-engineer.jpg";

export const meta = {
  title: "We're hiring a Design Engineer + Staff Engineer",
  description: `We just tagged the first public v4.0.0-alpha so you can start experimenting with it and help us get to a stable release later this year.`,
  date: "2024-03-19T18:00:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      We're hiring a Design Engineer and Staff Software Engineer to work on some ambitious new projects with us. Both
      roles are fully remote, with a salary of $275,000 USD.
    </>
  ),
};
```

----------------------------------------

TITLE: Installing Headless UI React v2
DESCRIPTION: Provides the command-line instruction to add the latest version of the @headlessui/react package to a project using npm. This is the first step to using the new v2.0 features.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install @headlessui/react@latest
```

----------------------------------------

TITLE: Importing Components and Assets in Next.js
DESCRIPTION: Initial imports for the blog post including components, authors, images and Next.js dependencies.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { DynamicViewportExample } from "@/components/dynamic-viewport-example";
import { Figure } from "@/components/figure";
import { Example } from "@/components/example";
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import Link from "next/link";
import { Image } from "@/components/media";
```

----------------------------------------

TITLE: Migrating Gap Utilities in HTML
DESCRIPTION: Example showing how to migrate from deprecated col-gap/row-gap utilities to the new gap-x/gap-y utilities in Tailwind CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_5

LANGUAGE: html
CODE:
```
<div class="col-gap-4 row-gap-2 ..."> <!-- [!code --] -->
<div class="gap-x-4 gap-y-2 ..."> <!-- [!code ++] -->
</div>
```

----------------------------------------

TITLE: Importing Heroicons Dependencies and Components
DESCRIPTION: Module imports for Heroicons and related components including author information, images, and icon assets
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/heroicons-micro/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import * as icons from "@heroicons/react/16/solid";
import Link from "next/link";
import { Image } from "@/components/media";
import miniVsMicroDetails from "./mini-vs-micro-details.jpg";
import miniVsMicroDropdown from "./mini-vs-micro-dropdown.jpg";
```

----------------------------------------

TITLE: Container Query Examples
DESCRIPTION: Demonstrates the new built-in container query support including min, max and range queries.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_11

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="grid grid-cols-1 @sm:grid-cols-3 @lg:grid-cols-4">
    <!-- ... -->
  </div>
</div>
```

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="grid grid-cols-3 @max-md:grid-cols-1">
    <!-- ... -->
  </div>
</div>
```

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex @min-md:@max-xl:hidden">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Combining Motion Variants with Responsive and Pseudo-class Variants
DESCRIPTION: Examples demonstrating how to combine motion variants with responsive and pseudo-class variants for more complex conditional styling based on motion preferences.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-6/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<!-- With responsive variants -->
<div class="sm:motion-reduce:translate-y-0"></div>

<!-- With pseudo-class variants -->
<div class="motion-reduce:hover:translate-y-0"></div>

<!-- With responsive and pseudo-class variants -->
<div class="sm:motion-reduce:hover:translate-y-0"></div>
```

----------------------------------------

TITLE: Percentage-based Translation Example
DESCRIPTION: Shows how to use fraction-based translation utilities to move elements by percentages of their size.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/translate.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<img class="-translate-1/4 ..." src="/img/mountains.jpg" />
<img class="translate-1/6 ..." src="/img/mountains.jpg" />
<img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

----------------------------------------

TITLE: Importing Blog Metadata and Media Components in JSX
DESCRIPTION: This code imports author information, card image, and media components needed for a blog post about Tailwind CSS's Prettier plugin. It also defines metadata for the blog post including title, description, date, and authors.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-30-prettier-plugin-collapse-whitespace/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { Image, Video } from "@/components/media";

export const meta = {
  title: "Automatically clean up whitespace and duplicate class names",
  description:
    "We just released a new version of prettier-plugin-tailwindcss which adds support for removing unnecessary whitespace and duplicate classes when sorting.",
  date: "2024-05-31T16:30:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      We just released a new version of `prettier-plugin-tailwindcss` which adds support for removing unnecessary
      whitespace and duplicate classes when sorting.
    </>
  ),
};
```

----------------------------------------

TITLE: Defining Blog Post Metadata
DESCRIPTION: Export configuration for blog post metadata including title, description, date, authors, and excerpt with JSX content
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/heroicons-micro/index.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: "Heroicons Micro: What are these, icons for ants?",
  description: `We just released Heroicons v2.1 which includes a brand new micro style — a full set of almost three hundred 16×16 icons designed for tighter, higher density UIs.`,
  date: "2023-12-18T16:30:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      We just released <Link href="https://heroicons.com">Heroicons v2.1</Link> which includes a brand new micro style —
      a full set of almost three hundred 16&times;16 icons designed for tighter, higher density UIs.
    </>
  ),
};
```

----------------------------------------

TITLE: Configuring Blog Post Metadata with React JSX
DESCRIPTION: Defines the metadata for a blog post using React JSX. The metadata includes the title, description, publication date, authors, featured image, and an excerpt with a Next.js Link component.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/welcoming-brad-cornes-to-the-tailwind-team/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: "Welcoming Brad Cornes to the Team",
  description: `Back in June, Brad Cornes joined our company as our very first team member. We didn't have a blog to announce it back then, but better late than never right?`,
  date: "2020-07-18T15:43:02.988Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Back in June, <Link href="https://twitter.com/bradlc">Brad Cornes</Link> joined our company as our very first team
      member. We didn't have a blog to announce it back then, but better late than never right?
    </>
  ),
};
```

----------------------------------------

TITLE: Implementing contrast-more variants in HTML forms with Tailwind CSS
DESCRIPTION: This snippet demonstrates how to use the new contrast-more variant in Tailwind CSS to enhance accessibility for users with contrast preferences. It shows how to improve form element visibility by adjusting borders, placeholder text, and opacity when the user has enabled high contrast mode.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_12

LANGUAGE: html
CODE:
```
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Social Security Number</span>
    <!-- [!code word:contrast-more\:border-slate-400] -->
    <!-- [!code word:contrast-more\:placeholder-slate-500] -->
    <!-- [!code word:contrast-more\:opacity-100] -->
    <input
      class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
    />
    <p class="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100">We need this to steal your identity.</p>
  </label>
</form>
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in React/Next.js
DESCRIPTION: Exports metadata configuration for a blog post including title, description, date, authors, image, and a JSX excerpt component describing the Tailwind CSS video series.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-from-zero-to-production/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: `"Tailwind CSS: From Zero to Production" on YouTube`,
  description: `Today we're excited to release Tailwind CSS: From Zero to Production, a new screencast series that teaches you everything you need to know to go from zero to production with Tailwind CSS v2.0.`,
  date: "2021-02-16T16:05:00.000Z",
  authors: [simonswiss],
  image: card,
  excerpt: (
    <>
      Today we're excited to release{" "}
      <Link href="https://www.youtube.com/watch?v=elgqxmdVms8&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=1">
        Tailwind CSS: From Zero to Production
      </Link>
      , a new screencast series that teaches you everything you need to know to get up and running with Tailwind CSS
      v2.0 from scratch.
    </>
  ),
};
```

----------------------------------------

TITLE: Implementing Isolation Utilities in HTML
DESCRIPTION: Example demonstrating the usage of the new isolation utility class in Tailwind CSS
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-1/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<div class="isolate ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Checked Variant Configuration
DESCRIPTION: Configuration example for enabling the checked variant in tailwind.config.js.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_9

LANGUAGE: javascript
CODE:
```
module.exports = {
  // ...
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "checked"],
  },
};
```

----------------------------------------

TITLE: Responsive Forced Color Adjustment
DESCRIPTION: Example showing how to implement responsive forced color adjustment using both forced-color-adjust-none and forced-color-adjust-auto utilities with breakpoint conditions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/forced-color-adjust.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<form>
  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
    <legend>Choose a color:</legend>
    <select class="hidden lg:block">
      <option value="White">White</option>
      <option value="Gray">Gray</option>
      <option value="Black">Black</option>
    </select>
    <div class="lg:hidden">
      <label>
        <input class="sr-only" type="radio" name="color-choice" value="White" />
        <!-- ... -->
      </label>
      <!-- ... -->
    </div>
  </fieldset>
</form>
```

----------------------------------------

TITLE: Installing Latest Tailwind CSS via npm (Shell)
DESCRIPTION: Command to install the latest version of the `tailwindcss` package as a dev dependency using npm. This is the standard way to upgrade or install Tailwind CSS for a project. Requires Node.js and npm.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-2/index.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install -D tailwindcss@latest
```

----------------------------------------

TITLE: Property-Only Browser Support Checks with supports-* Variant
DESCRIPTION: Example demonstrating how to use the supports-[...] variant to check if a CSS property is supported without specifying a value, allowing for cleaner conditional styling.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<div class="bg-black/75 supports-[backdrop-filter]:bg-black/25 supports-[backdrop-filter]:backdrop-blur ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in Next.js with JSX
DESCRIPTION: This code defines the metadata for a blog post about Tailwind UI Ecommerce using Next.js. It configures the title, description, date, authors, featured image, and an excerpt with a link to the product.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwind-ui-ecommerce/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
export const meta = {
  title: "Introducing Tailwind UI Ecommerce",
  description: `Almost 6 months in the making, we finally released Tailwind UI Ecommerce — the first all-new component kit for Tailwind UI since the initial launch back in February 2020.`,
  date: "2021-08-11T19:30:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Almost 6 months in the making, we finally released{" "}
      <Link href="https://tailwindui.com/#product-ecommerce">Tailwind UI Ecommerce</Link> — the first all-new component
      kit for Tailwind UI since the initial launch back in February 2020.
    </>
  ),
};
```

----------------------------------------

TITLE: Implementing Custom MDX Loader in Next.js
DESCRIPTION: Custom loader configuration that prepends necessary imports and exports to MDX files, handling both post previews and full post content with static props integration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_7

LANGUAGE: javascript
CODE:
```
{
  use: [
    ...mdx,
    createLoader(function (src) {
      const content = [
        'import Post from "@/components/Post"',
        'export { getStaticProps } from "@/getStaticProps"',
        src,
        'export default (props) => <Post meta={meta} {...props} />',
      ].join('\n')

      if (content.includes('<!--​more-->')) {
        return this.callback(null, content.split('<!--​more-->').join('\n'))
      }

      return this.callback(null, content.replace(/<!--​excerpt-->.*<!--\/excerpt-->/s, ''))
    }),
  ],
}
```

----------------------------------------

TITLE: Using Large Typography Utility HTML
DESCRIPTION: Illustrates the application of a new, larger typography utility like `text-9xl`. The default typography scale has been extended with larger sizes (7xl, 8xl, 9xl) for more impact.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_19

LANGUAGE: html
CODE:
```
<h1 class="text-9xl font-bold">What is this, an Apple website?</h1>
```

----------------------------------------

TITLE: Implementing Component Variants with Plugin API
DESCRIPTION: Shows how to use the new variants option in the addComponents plugin API to create responsive component classes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_1

LANGUAGE: javascript
CODE:
```
plugin(function ({ addComponents })) {
  addComponents({
    '.card': {
      // ...
    }
  }, {
    variants: ['responsive']
  })
})
```

----------------------------------------

TITLE: Styling Child Elements with Arbitrary Variants
DESCRIPTION: Demonstrates using arbitrary variants to target and style child elements uniformly within a parent container.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_18

LANGUAGE: html
CODE:
```
<ul role="list" class="space-y-4 [&>*]:rounded-lg [&>*]:bg-white [&>*]:p-4 [&>*]:shadow">
  <li class="flex">
    <img class="h-10 w-10 rounded-full" src="..." alt="" />
    <div class="ml-3 overflow-hidden">
      <p class="text-sm font-medium text-slate-900">Kristen Ramos</p>
      <p class="truncate text-sm text-slate-500">kristen.ramos@example.com</p>
    </div>
  </li>
  <!-- ... -->
</ul>
```

----------------------------------------

TITLE: Complex @apply Usage with Variants
DESCRIPTION: Example of using @apply with responsive variants and pseudo-class variants in CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_8

LANGUAGE: css
CODE:
```
.btn {
  @apply bg-indigo hover:bg-indigo-700 sm:text-lg;
}
```

----------------------------------------

TITLE: Migrating Space Utilities to Flex Gap in HTML
DESCRIPTION: Shows how to replace space utilities with flex layout and gap properties.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_10

LANGUAGE: html
CODE:
```
<div class="space-y-4 p-4">
<div class="flex flex-col gap-4 p-4">
  <label for="name">Name</label>
  <input type="text" name="name" />
</div>
```

----------------------------------------

TITLE: Comparing wrap-break-word and wrap-anywhere Utilities in HTML
DESCRIPTION: Illustrates the difference between 'wrap-break-word' and 'wrap-anywhere' utilities in flex containers, showing how 'wrap-anywhere' handles intrinsic sizing better.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_11

LANGUAGE: html
CODE:
```
<div class="flex max-w-sm">
  <img class="size-16 rounded-full" src="/img/profile.jpg" />
  <div class="wrap-break-word">
    <p class="font-medium">Jay Riemenschneider</p>
    <p>jason.riemenschneider@vandelayindustries.com</p>
  </div>
</div>
<div class="flex max-w-sm">
  <img class="size-16 rounded-full" src="/img/profile.jpg" />
  <div class="wrap-anywhere">
    <p class="font-medium">Jay Riemenschneider</p>
    <p>jason.riemenschneider@vandelayindustries.com</p>
  </div>
</div>
```

----------------------------------------

TITLE: Basic Container Query Implementation
DESCRIPTION: Demonstrates basic usage of container queries with Tailwind's @container class and responsive variants.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_12

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Authoring MDX Content for Next.js Blog
DESCRIPTION: An example of MDX syntax showing how to embed React components directly within markdown content, which enables interactive elements to be included alongside regular content in blog posts.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-the-tailwind-blog/index.mdx#2025-04-22_snippet_0

LANGUAGE: markdown
CODE:
```
# My first MDX post

MDX is a really cool authoring format because it lets
you embed React components right in your markdown:

<MyComponent myProp={5} />

How cool is that?
```

----------------------------------------

TITLE: Enabling New Color Palette
DESCRIPTION: Configuration to enable the new Tailwind 2.0 color palette with uniform perceived brightness.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_10

LANGUAGE: javascript
CODE:
```
module.exports = {
  experimental: {
    uniformColorPalette: true,
  },
};
```

----------------------------------------

TITLE: Installing Latest Tailwind CSS via NPM
DESCRIPTION: Command to install the latest version of Tailwind CSS using npm package manager.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_13

LANGUAGE: bash
CODE:
```
$ npm install tailwindcss@latest
```

----------------------------------------

TITLE: Rendering Tailwind Plus Image Link in JSX
DESCRIPTION: This snippet creates a clickable image link using Next.js Link component and a custom Image component. The link directs to the Tailwind Plus page and displays the card image.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwind-plus/index.mdx#2025-04-22_snippet_1

LANGUAGE: JSX
CODE:
```
<Link href="https://tailwindcss.com/plus">
  <Image src={card} alt="Tailwind Plus" />
</Link>
```

----------------------------------------

TITLE: Initializing Blog Post Meta Data with React/Next.js
DESCRIPTION: Defines meta information for a blog post including title, description, authors, image, and formatted excerpt with links.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-typography/index.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
export const meta = {
  title: "Introducing Tailwind CSS Typography",
  description: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. That's why today we're excited to release @tailwindcss/typography — a plugin that lets you easily style vanilla HTML content with beautiful typographic defaults.`,
  date: "2020-07-13T16:35:02.037Z",
  authors: [adamwathan],
  image,
  excerpt: (
    <>
      Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required
      a keen eye for typography and a lot of complex custom CSS.
      <br />
      That's why today we're excited to release{" "}
      <Link href="https://github.com/tailwindcss/typography">@tailwindcss/typography</Link> — a plugin that lets you
      easily style vanilla HTML content with beautiful typographic defaults.
    </>
  ),
};
```

----------------------------------------

TITLE: Single Breakpoint Example
DESCRIPTION: Demonstrates how to target a single breakpoint by combining responsive and max-* variants.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<div class="md:max-lg:flex">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Linear Gradient Angle Example
DESCRIPTION: Demonstrates the new angle-based linear gradient utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_13

LANGUAGE: html
CODE:
```
<div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500"></div>
```

----------------------------------------

TITLE: Arbitrary Container Query Values in TailwindCSS
DESCRIPTION: Demonstrates using arbitrary values for container queries using the @[...] syntax.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_14

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="block @[618px]:flex">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Rendering Will-Change API Table
DESCRIPTION: Defines an API table showcasing different 'will-change' utility classes provided by Tailwind CSS. Each row represents a class and its respective CSS property value.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/will-change.mdx#2025-04-22_snippet_1

LANGUAGE: JavaScript
CODE:
```
<ApiTable
  rows=[
    ["will-change-auto", "will-change: auto;"],
    ["will-change-scroll", "will-change: scroll-position;"],
    ["will-change-contents", "will-change: contents;"],
    ["will-change-transform", "will-change: transform;"],
    ["will-change-<custom-property>", "will-change: var(<custom-property>);"],
    ["will-change-[<value>]", "will-change: <value>;"],
  ]
/>
```

----------------------------------------

TITLE: Installing the latest Tailwind CSS Prettier plugin
DESCRIPTION: This command installs the latest version of the prettier-plugin-tailwindcss, which includes the new features for whitespace cleanup and duplicate class removal.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-05-30-prettier-plugin-collapse-whitespace/index.mdx#2025-04-22_snippet_1

LANGUAGE: sh
CODE:
```
npm i prettier-plugin-tailwindcss@latest
```

----------------------------------------

TITLE: Basic ARIA Checked Variant Example
DESCRIPTION: Demonstrates using the aria-checked variant to conditionally style a checkbox background color based on its checked state.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<span class="bg-gray-600 aria-checked:bg-blue-600" aria-checked="true" role="checkbox">
  <!-- ... -->
</span>
```

----------------------------------------

TITLE: Installing Tailwind CSS v3.4
DESCRIPTION: NPM command to install the latest version of Tailwind CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_2

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest
```

----------------------------------------

TITLE: Defining Blog Post Metadata in JSX
DESCRIPTION: JSX code defining the metadata for the Tailwind CSS v4.1 release blog post, including title, description, authors, and other properties used for rendering the blog post.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_6

LANGUAGE: jsx
CODE:
```
export const meta = {
  title: "Tailwind CSS v4.1: Text shadows, masks, and tons more",
  description:
    "I wasn't sure it would ever happen but we did it — we released a version of Tailwind CSS that includes text shadow utilities. Tailwind CSS v4.1 is here and it's packed with improvements that will help you (or your LLM, you coward) build even better interactive experiences.",
  date: "2025-04-03T20:00:00.000Z",
  authors: [adamwathan, danhollick],
  image: card,
  excerpt: (
    <>
      I wasn't sure it would ever happen but we did it — we released a version of Tailwind CSS that includes text shadow
      utilities. Tailwind CSS v4.1 is here and it's packed with improvements that will help you (or your LLM, you
      coward) build even better interactive experiences.
    </>
  ),
};
```

----------------------------------------

TITLE: Installing Tailwind CSS v4.0
DESCRIPTION: Three-step installation process for Tailwind CSS v4.0, showing how to install the package, add the PostCSS plugin, and import Tailwind in your CSS file.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_1

LANGUAGE: shell
CODE:
```
npm i tailwindcss @tailwindcss/postcss;
```

LANGUAGE: javascript
CODE:
```
export default {
  plugins: ["@tailwindcss/postcss"],
};
```

LANGUAGE: css
CODE:
```
@import "tailwindcss";
```

----------------------------------------

TITLE: Importing TailwindCSS Components
DESCRIPTION: Imports required components for API documentation and responsive design examples.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/break-after.mdx#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Implementing feature detection with Tailwind CSS @supports variants
DESCRIPTION: This snippet demonstrates how to conditionally apply styles based on browser feature support using the supports-[...] variant. It tests for grid display support and applies appropriate styles.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_47

LANGUAGE: html
CODE:
```
<!-- [!code classes:supports-[display:grid]:grid] -->
<div class="flex supports-[display:grid]:grid ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Responsive Flex Basis Example
DESCRIPTION: Shows how to implement responsive flex basis utilities with different breakpoint variants
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/flex-basis.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<div class="flex flex-row">
  <div class="basis-1/4 md:basis-1/3">01</div>
  <div class="basis-1/4 md:basis-1/3">02</div>
  <div class="basis-1/2 md:basis-1/3">03</div>
</div>
```

----------------------------------------

TITLE: HTML Variant Comparison in Tailwind CSS v4
DESCRIPTION: Demonstrates the new composable variants feature in Tailwind CSS v4.0, showing how to replace custom selectors like 'group-has-[&:focus]' with simpler variants like 'group-has-focus' that compose naturally.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-alpha/index.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<div class="group">
  <div class="group-has-[&:focus]:opacity-100"> <!-- [!code --] -->
  <div class="group-has-focus:opacity-100"> <!-- [!code ++] -->
      <!-- ... -->
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: CSS Modules with @apply Example
DESCRIPTION: Demonstrates how to use @apply in CSS modules by importing global styles as reference.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_5

LANGUAGE: css
CODE:
```
@reference "../app.css";

button {
  @apply bg-blue-500;
}
```

----------------------------------------

TITLE: Using the important modifier in HTML/CSS
DESCRIPTION: Demonstrates how to use the `!` suffix on a Tailwind class in HTML to make it `!important` in the generated CSS, overriding conflicting styles.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_34

LANGUAGE: HTML
CODE:
```
<!-- [!code filename:HTML] -->
<!-- [!code classes:bg-red-500!] -->
<!-- prettier-ignore -->
<div class="bg-teal-500 bg-red-500!">
  <!-- ... -->
</div>
```

LANGUAGE: CSS
CODE:
```
/* [!code filename: Generated CSS] */
/* [!code word:!important] */
.bg-red-500\! {
  background-color: var(--color-red-500) !important;
}
.bg-teal-500 {
  background-color: var(--color-teal-500);
}
```

----------------------------------------

TITLE: Safelisting Utilities with Source Inline
DESCRIPTION: Examples of using @source inline() to force generation of specific utility classes and their variants
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_17

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@source inline("underline");
```

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@source inline("{hover:,}bg-red-{50,{100..900..100},950}");
```

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@source not inline("container");
```

----------------------------------------

TITLE: Blog Post Metadata Configuration
DESCRIPTION: Export configuration for blog post metadata including title, description, date, authors and excerpt with linked content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_1

LANGUAGE: javascript
CODE:
```
export const meta = {
  title: "Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced headlines, subgrid, and more",
  description: `There's nothing like building a major new product for finding all the features you wish you had in your own tools, so we capitalized on that inspiration and turned it into this — Tailwind CSS v3.4.`,
  date: "2023-12-19T17:45:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      There's nothing like building{" "}
      <Link href="https://twitter.com/steveschoger/status/1732143245696639167">a major new product</Link> for finding
      all the features you wish you had in your own tools, so we capitalized on some of that inspiration and turned it
      into this — Tailwind CSS v3.4.
    </>
  ),
};
```

----------------------------------------

TITLE: Basic Scale Example
DESCRIPTION: HTML example showing how to use basic scale utilities with different percentages (75%, 100%, 125%) to resize images.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/scale.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<img class="scale-75 ..." src="/img/mountains.jpg" />
<img class="scale-100 ..." src="/img/mountains.jpg" />
<img class="scale-125 ..." src="/img/mountains.jpg" />
```

----------------------------------------

TITLE: JSX Blog Post Metadata Configuration
DESCRIPTION: Sets up metadata for a blog post about Tailwind CSS v4.0, including title, description, author, date, image, and a JSX excerpt with a link to a YouTube video.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-alpha/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
export const meta = {
  title: "Open-sourcing our progress on Tailwind CSS v4.0",
  description: `We just tagged the first public v4.0.0-alpha so you can start experimenting with it and help us get to a stable release later this year.`,
  date: "2024-03-06T16:30:00.000Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Last summer at Tailwind Connect{" "}
      <Link href="https://www.youtube.com/watch?v=CLkxRnRQtDE&t=2146s">I shared a preview of Oxide</Link> — a new
      high-performance engine for Tailwind CSS that we've been working on, designed to simplify the developer experience
      and take advantage of how the web platform has evolved since Tailwind was first released.
    </>
  ),
};
```

----------------------------------------

TITLE: Using New Color Shades HTML
DESCRIPTION: Demonstrates the use of the new `50` shade utility class (`bg-gray-50`) from the expanded color palette introduced in Tailwind CSS v2.0. This class applies a very light gray background.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<div class="bg-gray-50">I can't believe it's not white.</div>
```

----------------------------------------

TITLE: Using Component Variants with HTML
DESCRIPTION: Example of using the new component variants feature with the prose classes from @tailwindcss/typography plugin.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_0

LANGUAGE: html
CODE:
```
<article class="prose md:prose-lg">
  <!-- Content -->
</article>
```

----------------------------------------

TITLE: Styling Native Form Controls with Tailwind CSS
DESCRIPTION: Demonstrates how to style file inputs and checkboxes using Tailwind CSS's new file: modifier and accent-color property. Includes custom styling for file upload buttons and checkbox accent colors.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3/index.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<form>
  <div class="flex items-center space-x-6">
    <div class="shrink-0">
      <img
        class="h-16 w-16 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
        alt="Current profile photo"
      />
    </div>
    <label class="block">
      <span class="sr-only">Choose profile photo</span>
      <input
        type="file"
        class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
      />
    </label>
  </div>
  <label class="mt-6 flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">
    <input type="checkbox" class="accent-violet-500" checked />
    <span>Yes, send me all your stupid updates</span>
  </label>
</form>
```

----------------------------------------

TITLE: Mobile-First Incorrect Example
DESCRIPTION: Example showing incorrect usage of sm: prefix for targeting mobile screens.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<div class="sm:text-center"></div>
```

----------------------------------------

TITLE: Using not-supports Query in Tailwind CSS
DESCRIPTION: Demonstrates using the not-* variant with @supports queries for feature detection negation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_18

LANGUAGE: html
CODE:
```
<div class="not-supports-hanging-punctuation:px-4">
  <!-- ... -->
</div>
```

LANGUAGE: css
CODE:
```
.not-supports-hanging-punctuation\:px-4 {
  @supports not (hanging-punctuation: var(--tw)) {
    padding-inline: calc(var(--spacing) * 4);
  }
}
```

----------------------------------------

TITLE: Applying Variants with @apply CSS
DESCRIPTION: Demonstrates the improved `@apply` directive which now supports applying utilities with variants like `hover` and `focus:ring`. This allows bundling utility classes, including state variants, into custom CSS classes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_21

LANGUAGE: css
CODE:
```
.btn {
  @apply focus:ring-opacity-50 bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-200;
}
```

----------------------------------------

TITLE: Implementing Safe Content Alignment in HTML
DESCRIPTION: Demonstrates the usage of safe alignment utilities that automatically adjust alignment to prevent bi-directional overflow in containers
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_15

LANGUAGE: html
CODE:
```
<ul class="flex justify-center gap-2 ...">
  <li>Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
  <!-- ... -->
</ul>
```

LANGUAGE: html
CODE:
```
<ul class="flex justify-center-safe gap-2 ...">
  <li>Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
  <!-- ... -->
</ul>
```

----------------------------------------

TITLE: Displaying Featured Image in Tailwind CSS Blog Post using JSX
DESCRIPTION: This code renders the featured image for the blog post using the Image component imported from the media components. It displays the card image with an alt text describing it as 'Tailwind CSS v4.0-beta'.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-beta/index.mdx#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
<Image src={card} alt="Tailwind CSS v4.0-beta" />
```

----------------------------------------

TITLE: React Combobox Implementation
DESCRIPTION: Example of implementing a filtered combobox component using Headless UI in React. Shows basic string comparison filtering with a list of people names.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1-5/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]

function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
```

----------------------------------------

TITLE: Building Form with Fieldset and Disabled State (React/JSX)
DESCRIPTION: Provides an example of building a shipping details form using `Fieldset`, `Legend`, `Field`, `Label`, `Input`, and `Select` components. It illustrates how to dynamically disable a `Field` based on state (`country` selection) and how the `data-disabled` attribute is exposed for styling.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
import { Button, Description, Field, Fieldset, Input, Label, Legend, Select } from "@headlessui/react";
import { regions } from "./countries";

export function Example() {
  const [country, setCountry] = useState(null);

  return (
    <form action="/shipping">
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Field>
          <Label>Street address</Label>
          <Input name="address" />
        </Field>
        <Field>
          <Label>Country</Label>
          <Description>We currently only ship to North America.</Description>
          <Select name="country" value={country} onChange={(event) => setCountry(event.target.value)}>
            <option></option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>United States</option>
          </Select>
        </Field>
        // [!code highlight:4]
        <Field disabled={!country}>
          <Label className="data-[disabled]:opacity-40">State/province</Label>
          <Select name="region" className="data-[disabled]:opacity-50">
            <option></option>
            {country && regions[country].map((region) => <option>{region}</option>)}
          </Select>
        </Field>
        <Button>Submit</Button>
      </Fieldset>
    </form>
  );
}
```

----------------------------------------

TITLE: Native HTML Form Field Example (React/JSX)
DESCRIPTION: This snippet presents a standard HTML approach within a React/JSX context for creating a form input with a label and description. It demonstrates the manual wiring required for `id`, `for`, `aria-labelledby`, and `aria-describedby` attributes, serving as a comparison point for the new Headless UI form components.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<div>
  <label id="name-label" for="name-input">
    Name
  </label>
  <input id="name-input" aria-labelledby="name-label" aria-describedby="name-description" />
  <p id="name-description">Use your real name so people will recognize you.</p>
</div>
```

----------------------------------------

TITLE: Blog Post Metadata Configuration in Next.js
DESCRIPTION: Exports metadata configuration for a blog post about Tailwind UI Ecommerce, including title, description, authors, date, and image information
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/designing-tailwind-ui-ecommerce/index.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import card from "./card.jpg";
import { Image } from "@/components/media";
import Link from "next/link";

export const meta = {
  private: true,
  title: "Designing Tailwind UI Ecommerce",
  description: `Hey! We've been working on this new Tailwind UI Ecommerce kit for months now and are finally closing in on the finish line so I thought I'd write up a bit about the process and give you an update on where things are at.`,
  date: "2021-08-07T12:45:00.0Z",
  authors: [adamwathan],
  image: card,
  excerpt: (
    <>
      Hey! We've been working on this new Tailwind UI Ecommerce kit for months now and are finally closing in on the
      finish line so I thought I'd write up a bit about the process and give you an update on where things are at.
    </>
  ),
};
```

----------------------------------------

TITLE: Implementing Payment Method Selection with :has() Variant in Tailwind CSS
DESCRIPTION: HTML markup showing how to use the has-checked variant to style radio button labels based on their checked state. The code demonstrates styling payment method options with different visual states for selected and unselected options, including dark mode support.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_9

LANGUAGE: html
CODE:
```
<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay

```

----------------------------------------

TITLE: Adjusting Color Opacity with the theme() Function
DESCRIPTION: Example showing the new feature that allows adjusting opacity of colors when using the theme() function in CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_5

LANGUAGE: css
CODE:
```
.select2-dropdown {
  border-radius: theme(borderRadius.lg);
  background-color: theme(colors.gray.100 / 50%);
  color: theme(colors.gray.900);
}
/* ... */
```

----------------------------------------

TITLE: Closing Disclosures with Headless UI in React
DESCRIPTION: Demonstrates how to use Disclosure.Button within a Disclosure panel to close the panel when clicking a link or button inside it. This is useful for mobile navigation implementations.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1-4/index.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
import { Disclosure } from '@headlessui/react'
import MyLink from './MyLink'

function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button>Open mobile menu</Disclosure.Button>
      <Disclosure.Panel>
        <Disclosure.Button as={MyLink} href="/home">
          Home
        </Disclosure.Button>
        {/* ... */}
      </Disclosure.Panel>
    </Disclosure>
  )
}
```

----------------------------------------

TITLE: Flex Items with Shrink Example
DESCRIPTION: HTML example showing how to allow flex items to shrink using the shrink utility class.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/flex-shrink.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<div class="flex ...">
  <div class="h-14 w-14 flex-none ...">01</div>
  <div class="h-14 w-64 shrink ...">02</div>
  <div class="h-14 w-14 flex-none ...">03</div>
</div>
```

----------------------------------------

TITLE: Installing Tailwind CSS JIT Dependencies
DESCRIPTION: Command to install the required dependencies for using Tailwind CSS JIT compiler, including @tailwindcss/jit, tailwindcss, postcss, and autoprefixer packages.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/just-in-time-the-next-generation-of-tailwind-css/index.mdx#2025-04-22_snippet_0

LANGUAGE: shell
CODE:
```
npm install -D @tailwindcss/jit tailwindcss postcss autoprefixer
```

----------------------------------------

TITLE: Customizing Container Utility in CSS
DESCRIPTION: Demonstrates the new way to customize container utility using the @utility directive in v4.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_11

LANGUAGE: css
CODE:
```
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
```

----------------------------------------

TITLE: Dynamic Grid Columns Example
DESCRIPTION: Shows how arbitrary grid column values can be used directly without configuration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_8

LANGUAGE: html
CODE:
```
<div class="grid grid-cols-15">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Using Arbitrary Variants in HTML
DESCRIPTION: Demonstrates the new arbitrary variants feature that allows creating custom variants directly in HTML markup. Shows targeting the third child element.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_16

LANGUAGE: html
CODE:
```
<div class="[&:nth-child(3)]:py-0">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Named Container Queries Usage
DESCRIPTION: Shows how to implement named containers for complex nested container query scenarios.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_15

LANGUAGE: html
CODE:
```
<div class="@container/main">
  <!-- ... -->
  <div class="flex flex-row @sm/main:flex-col">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Focus-Visible Variant Usage
DESCRIPTION: Example of using the new focus-visible variant for keyboard-only focus styles.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<button class="focus-visible:shadow-outline focus-visible:outline-none ...">Click me</button>
```

----------------------------------------

TITLE: Enabling Extended Spacing Scale
DESCRIPTION: Configuration to enable the extended spacing scale with micro values and percentage-based fractions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_11

LANGUAGE: javascript
CODE:
```
module.exports = {
  experimental: {
    extendedSpacingScale: true,
  },
};
```

----------------------------------------

TITLE: Styling with Peer-Has Variant
DESCRIPTION: Shows how to use the peer class and peer-has-checked variant to hide an SVG icon when a checkbox is checked.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_12

LANGUAGE: html
CODE:
```
<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ..."><!-- ... --></svg>
</div>
```

----------------------------------------

TITLE: CSS Modules with Variables Example
DESCRIPTION: Shows alternative approach using CSS variables instead of @apply in CSS modules.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_6

LANGUAGE: css
CODE:
```
button {
  background: var(--color-blue-500);
}
```

----------------------------------------

TITLE: Round Background Repeat Example
DESCRIPTION: Demonstrates the bg-repeat-round utility for repeating backgrounds without gaps.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-repeat.mdx#2025-04-22_snippet_5

LANGUAGE: html
CODE:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-round ..."></div>
```

----------------------------------------

TITLE: Using Arbitrary Breakpoint Values in HTML
DESCRIPTION: Shows how to use arbitrary breakpoint values for one-off responsive designs using min and max variants.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_11

LANGUAGE: html
CODE:
```
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Importing Components for Forced Color Documentation
DESCRIPTION: Import statements for required components and assets used in the documentation page.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/forced-color-adjust.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
import Image from "next/image";
import tshirtImage from "./img/t-shirt.jpg";
```

----------------------------------------

TITLE: Customizing Shiki Syntax Highlighting Colors (CSS)
DESCRIPTION: This CSS snippet defines variables used by Shiki's `css-variables` theme for syntax highlighting.
Modifying these variables allows developers to easily customize the code block colors to match their brand without writing a full custom theme, using Tailwind CSS theme values.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-12-15-protocol-api-documentation-template/index.mdx#_snippet_3

LANGUAGE: css
CODE:
```
:root {
  --shiki-color-text: theme("colors.white");
  --shiki-token-constant: theme("colors.emerald.300");
  --shiki-token-string: theme("colors.emerald.300");
  --shiki-token-comment: theme("colors.zinc.500");
  --shiki-token-keyword: theme("colors.sky.300");
  --shiki-token-parameter: theme("colors.pink.300");
  --shiki-token-function: theme("colors.violet.300");
  --shiki-token-string-expression: theme("colors.emerald.300");
  --shiki-token-punctuation: theme("colors.zinc.200");
}
```

----------------------------------------

TITLE: Extended Grid Rows Implementation in HTML with Tailwind CSS
DESCRIPTION: Demonstrates the expanded grid-rows-* scale which now supports up to 12 rows instead of the previous limit of 6 rows.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_10

LANGUAGE: html
CODE:
```
<div class="grid grid-rows-9">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Enabling All Experimental Features
DESCRIPTION: Configuration to enable all experimental features in Tailwind CSS v1.7.0.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_7

LANGUAGE: javascript
CODE:
```
module.exports = {
  experimental: "all",
};
```

----------------------------------------

TITLE: Data Attribute Styling with Tailwind CSS
DESCRIPTION: Demonstrates how to use data-* variants to conditionally style elements based on data attributes. Shows both basic usage and generated CSS output.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_8

LANGUAGE: html
CODE:
```
<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

LANGUAGE: css
CODE:
```
.data-\[size\=large\]\:p-8[data-size="large"] {
  padding: 2rem;
}
```

----------------------------------------

TITLE: Applying Target Styling with Tailwind CSS
DESCRIPTION: Demonstrates how to use the 'target' variant to style an element if its ID matches the current URL fragment.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_89

LANGUAGE: HTML
CODE:
```
<div id="about" class="target:shadow-lg ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Implementing not-* Variant in Tailwind CSS
DESCRIPTION: Shows usage of the new not-* variant for CSS :not() pseudo-class and media query negation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_17

LANGUAGE: html
CODE:
```
<div class="not-hover:opacity-75">
  <!-- ... -->
</div>
```

LANGUAGE: css
CODE:
```
.not-hover\:opacity-75:not(*:hover) {
  opacity: 75%;
}

@media not (hover: hover) {
  .not-hover\:opacity-75 {
    opacity: 75%;
  }
}
```

----------------------------------------

TITLE: Using Inline Styles for Complex Arbitrary Values
DESCRIPTION: Suggests using inline styles for very complicated arbitrary values that are difficult to read when formatted as a Tailwind class name, comparing a complex grid class with an equivalent inline style.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_25

LANGUAGE: HTML
CODE:
```
<!-- [!code filename:HTML] -->
<!-- prettier-ignore -->
<div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]"> <!-- [!code --] -->
<!-- prettier-ignore -->
<div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)"> <!-- [!code ++] -->
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Defining Blog Post Metadata with React Components in JavaScript
DESCRIPTION: This code defines the metadata for a blog post about Tailwind CSS IntelliSense linting. It imports necessary components and authors, sets the title, description, date, authors, and includes an excerpt with a link to the extension marketplace.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/introducing-linting-for-tailwindcss-intellisense/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { bradlc } from "@/app/blog/authors";
import image from "./card.jpg";
import { Image, Video } from "@/components/media";
import Link from "next/link";

export const meta = {
  title: "Introducing linting for Tailwind CSS IntelliSense",
  description:
    "Today we're releasing a new version of the Tailwind CSS IntelliSense extension for Visual Studio Code that adds Tailwind-specific linting to both your CSS and your markup.",
  date: "2020-06-23T18:52:03Z",
  authors: [bradlc],
  image,
  excerpt: (
    <>
      Today we're releasing a new version of the{" "}
      <Link href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
        Tailwind CSS IntelliSense extension for Visual Studio Code
      </Link>{" "}
      that adds Tailwind-specific linting to both your CSS and your markup.
    </>
  ),
};
```

----------------------------------------

TITLE: Mobile-First Correct Example
DESCRIPTION: Example showing correct mobile-first approach using unprefixed utility for mobile and override for larger screens.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<div class="text-center sm:text-left"></div>
```

----------------------------------------

TITLE: Basic Background Repeat Example
DESCRIPTION: Demonstrates basic background image repetition using the bg-repeat utility class.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-repeat.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat ..."></div>
```

----------------------------------------

TITLE: Creating MDX Endpoint Documentation Example
DESCRIPTION: This extensive MDX snippet demonstrates how to structure API endpoint documentation using custom components like <Row>, <Col>, <Properties>, and <CodeGroup>.
It includes nested code examples for request (cURL, JavaScript) and response (JSON), providing a comprehensive view of how content is organized and presented.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-12-15-protocol-api-documentation-template/index.mdx#_snippet_0

LANGUAGE: mdx
CODE:
```
## Create a message {{ tag: 'POST', label: '/v1/messages' }}

<Row>
  <Col>

    Publishes a new message to a specific conversation.

    ### Required attributes

    <Properties>
      <Property name="conversation_id" type="string">
        Unique identifier for the conversation the message belongs to.
      </Property>
      <Property name="message" type="string">
        The message content.
      </Property>
    </Properties>

  </Col>
  <Col sticky>

    <CodeGroup title="Request" tag="POST" label="/v1/messages">

    ```bash {{ title: 'cURL' }}
    curl https://api.protocol.chat/v1/messages \
      -H "Authorization: Bearer {token}" \
      -d conversation_id="xgQQXg3hrtjh7AvZ" \
      -d message="You're what the French call 'les incompetents.'"
    ```

    ```js
    import ApiClient from '@example/protocol-api'
    const client = new ApiClient(token)
    await client.messages.create({
      conversation_id: 'xgQQXg3hrtjh7AvZ',
      message: 'You\'re what the French call \'les incompetents.\'',
    })
    ```

    </CodeGroup>

    ```json {{ title: 'Response' }}
    {
      "id": "gWqY86BMFRiH5o11",
      "conversation_id": "xgQQXg3hrtjh7AvZ",
      "message": "You're what the French call 'les incompetents.'",
      "reactions": [],
      "created_at": 692233200,
    }
    ```

  </Col>
</Row>
```

LANGUAGE: bash
CODE:
```
curl https://api.protocol.chat/v1/messages \
  -H "Authorization: Bearer {token}" \
  -d conversation_id="xgQQXg3hrtjh7AvZ" \
  -d message="You're what the French call 'les incompetents.'"
```

LANGUAGE: javascript
CODE:
```
import ApiClient from '@example/protocol-api'
const client = new ApiClient(token)
await client.messages.create({
  conversation_id: 'xgQQXg3hrtjh7AvZ',
  message: 'You\'re what the French call \'les incompetents.\'',
})
```

LANGUAGE: json
CODE:
```
{
  "id": "gWqY86BMFRiH5o11",
  "conversation_id": "xgQQXg3hrtjh7AvZ",
  "message": "You're what the French call 'les incompetents.'",
  "reactions": [],
  "created_at": 692233200,
}
```

----------------------------------------

TITLE: Implementing Gradient Interpolation in Tailwind CSS
DESCRIPTION: Demonstrates using sRGB and OKLCH color interpolation modifiers for linear gradients with the new bg-linear-to-r utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_14

LANGUAGE: html
CODE:
```
<div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400">...</div>
<div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400">...</div>
```

----------------------------------------

TITLE: Configuring Variants (Old Method) JS
DESCRIPTION: Shows the previous method in `tailwind.config.js` for enabling extra variants for a property (e.g., `backgroundColor`). This required listing all desired variants, including the default ones, alongside the new ones.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_22

LANGUAGE: js
CODE:
```
module.exports = {
  // ...
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-visible"],
  },
};
```

----------------------------------------

TITLE: Dynamic Spacing Utilities
DESCRIPTION: Shows how spacing utilities are dynamically derived from a single spacing scale variable.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_10

LANGUAGE: css
CODE:
```
@layer theme {
  :root {
    --spacing: 0.25rem;
  }
}

@layer utilities {
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .w-17 {
    width: calc(var(--spacing) * 17);
  }
  .pr-29 {
    padding-right: calc(var(--spacing) * 29);
  }
}
```

----------------------------------------

TITLE: Applying bg-fixed utility in HTML
DESCRIPTION: This snippet shows how to apply the `bg-fixed` utility class to a `div` element. When this class is used, the background image (`bg-[url(...)]`) will remain fixed in place relative to the viewport even when the content inside the `div` or the page itself is scrolled.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-attachment.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<!-- [!code classes:bg-fixed] -->
<div class="bg-[url(/img/mountains.jpg)] bg-fixed ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Creating Image Preview Link with Next.js Components
DESCRIPTION: This JSX snippet creates a clickable image link using Next.js Link and Image components. It links to a specific component page and displays a product page preview image with descriptive alt text.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwind-ui-ecommerce/index.mdx#2025-04-22_snippet_2

LANGUAGE: JSX
CODE:
```
<Link href="https://tailwindui.com/components/ecommerce/page-examples/product-pages">
  <Image alt="Preview one of the new product page examples" src={productPagePreview} />
</Link>
```

----------------------------------------

TITLE: Handling JavaScript disabled states with Tailwind CSS noscript variant
DESCRIPTION: This snippet demonstrates how to provide alternative content when JavaScript is disabled in the user's browser using the noscript variant. It displays a notification message only when JavaScript is not available.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_45

LANGUAGE: html
CODE:
```
<!-- [!code classes:noscript:block] -->
<div class="hidden noscript:block">
  <p>This experience requires JavaScript to function. Please enable JavaScript in your browser settings.</p>
</div>
```

----------------------------------------

TITLE: Annotating MDX Elements with Props
DESCRIPTION: This snippet shows how to use the mdx-annotations library to pass props directly to Markdown-like elements within MDX.
An object `{ tag: 'POST', label: '/v1/messages' }` is appended to the heading, allowing data to be associated with the element for later processing.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2022-12-15-protocol-api-documentation-template/index.mdx#_snippet_1

LANGUAGE: mdx
CODE:
```
## Create a message { tag: 'POST', label: '/v1/messages' }
```

----------------------------------------

TITLE: Space-between Selector Changes in CSS
DESCRIPTION: Illustrates the change in space utility implementation for better performance on large pages.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_9

LANGUAGE: css
CODE:
```
/* Before */
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
}

/* Now */
.space-y-4 > :not(:last-child) {
  margin-bottom: 1rem;
}
```

----------------------------------------

TITLE: Responsive Image Width Example
DESCRIPTION: Demonstrates using responsive utility classes to adjust image width across different breakpoints. Width starts at 16 units, increases to 32 at medium screens, and 48 at large screens.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

----------------------------------------

TITLE: Using not-forced-colors Variant in Tailwind CSS
DESCRIPTION: Example showing how to apply styles when forced colors mode is not active using the not-forced-colors variant.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_41

LANGUAGE: html
CODE:
```
<div class="not-forced-colors:appearance-none ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Closing Disclosures with Headless UI in Vue
DESCRIPTION: Shows how to use DisclosureButton within a Disclosure panel in Vue to close the panel when clicking a link or button inside it. This is particularly useful for mobile navigation implementations.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1-4/index.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<template>
  <Disclosure>
    <DisclosureButton>Open mobile menu</DisclosureButton>
    <DisclosurePanel>
      <DisclosureButton :as="MyLink" href="/home">Home</DisclosureButton>
      <!-- ... -->
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'
  import MyLink from './MyLink'

  export default {
    components: { Disclosure, DisclosureButton, DisclosurePanel, MyLink },
  }
</script>
```

----------------------------------------

TITLE: Data Attribute Targeting Example
DESCRIPTION: Demonstrates targeting custom boolean data attributes without configuration.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#2025-04-22_snippet_9

LANGUAGE: html
CODE:
```
<div data-current class="opacity-75 data-current:opacity-100">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Responsive Pointer Events Example
DESCRIPTION: Shows how to use pointer-events utilities with responsive modifiers to control pointer event behavior at different breakpoints.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/pointer-events.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="pointer-events-none md:pointer-events-auto ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Rendering Elements in a Loop with Tailwind CSS (Svelte)
DESCRIPTION: This Svelte snippet shows how to use the `#each` block to iterate over a list of contributors and render an image tag for each. The Tailwind CSS classes are applied once within the loop template, avoiding manual duplication of the class list.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_29

LANGUAGE: Svelte
CODE:
```
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <!-- prettier-ignore -->
    <!-- [!code highlight:4] -->
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
    {/each}
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

----------------------------------------

TITLE: Applying Tailwind variants with @variant directive
DESCRIPTION: Shows how to use the @variant directive to apply a Tailwind variant to styles in your CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/functions-and-directives.mdx#2025-04-22_snippet_4

LANGUAGE: CSS
CODE:
```
.my-element {
  background: white;

  @variant dark {
    background: black;
  }
}
```

----------------------------------------

TITLE: Aspect Ratio Implementation with Tailwind CSS
DESCRIPTION: Demonstrates the usage of the new native aspect-ratio property through Tailwind CSS's aspect-video utility class for responsive video embedding.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3/index.mdx#2025-04-22_snippet_8

LANGUAGE: html
CODE:
```
<iframe class="aspect-video w-full ..." src="https://www.youtube.com/..."></iframe>
```

----------------------------------------

TITLE: RTL/LTR Layout Support in Tailwind CSS
DESCRIPTION: Shows implementation of right-to-left and left-to-right layout support using rtl and ltr modifiers for multi-directional layouts.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3/index.mdx#2025-04-22_snippet_10

LANGUAGE: html
CODE:
```
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  >
  <div class="ltr:ml-3 rtl:mr-3">
    <p class="text-sm font-medium text-slate-700 group-hover:text-slate-900">...</p>
    <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">...</p>
  </div>
</div>
```

----------------------------------------

TITLE: Container Variants Configuration
DESCRIPTION: Configuration example for enabling additional container variants in tailwind.config.js.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_5

LANGUAGE: javascript
CODE:
```
module.exports = {
  // ...
  variants: {
    container: ["responsive", "focus", "group-hover"],
  },
};
```

----------------------------------------

TITLE: Named Container Queries in TailwindCSS
DESCRIPTION: Shows how to use named containers with container queries using the /name syntax.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_15

LANGUAGE: html
CODE:
```
<div class="@container/main">
  <!-- ... -->
  <div>
    <div class="block @lg/main:flex">
      <!-- ... -->
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Sticky Header Table with TailwindCSS
DESCRIPTION: Implementation of a table with sticky headers using TailwindCSS utilities. Features border-spacing-0, sticky positioning, and responsive design with hidden columns at different breakpoints.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_11

LANGUAGE: jsx
CODE:
```
<div className="isolate h-72 overflow-auto rounded-xl">
  <table className="min-w-full border-separate border-spacing-0">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="bg-opacity-75 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
          <>Name</>
        </th>
        <th scope="col" className="bg-opacity-75 sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
          <>Email</>
        </th>
        <th scope="col" className="bg-opacity-75 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
          <>Role</>
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <!-- Table body content -->
    </tbody>
  </table>
</div>
```

----------------------------------------

TITLE: Using Extended Opacity Utility HTML
DESCRIPTION: Shows an example of using a new opacity utility like `opacity-5`. The default opacity scale has been extended with steps of 10, as well as 5 and 95 values, providing more granular control over element transparency.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_20

LANGUAGE: html
CODE:
```
<figure class="opacity-5">
  <blockquote>You can't see me.</blockquote>
  <figcaption>John Cena</figcaption>
</figure>
```

----------------------------------------

TITLE: Configuring Blog Post Metadata in JSX
DESCRIPTION: Meta configuration for a blog post about Tailwind UI's React and Vue support. Defines the title, description, publication date, author, and excerpt for the blog post.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/building-react-and-vue-support-for-tailwind-ui/index.mdx#2025-04-22_snippet_0

LANGUAGE: JSX
CODE:
```
import { adamwathan } from "@/app/blog/authors";
import stackedListExample from "./stacked-list-example.png";
import { Image } from "@/components/media";
export const meta = {
  private: true,
  title: "Building React + Vue support for Tailwind UI",
  description: `Hey! We're getting really close to releasing React + Vue support for Tailwind UI, so I thought it would be interesting to share some of the behind-the-scenes efforts that have gone into even making it possible.`,
  date: "2021-04-12T19:45:00.0Z",
  authors: [adamwathan],
  excerpt: (
    <>
      Hey! We're getting _really_ close to releasing React + Vue support for Tailwind UI, so I thought it would be
      interesting to share some of the behind-the-scenes efforts that have gone into even making it possible.
    </>
  ),
};
```

----------------------------------------

TITLE: Installing Tailwind CSS Typography Plugin
DESCRIPTION: NPM installation command for the latest version of the Tailwind CSS Typography plugin.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-typography-v0-5/index.mdx#2025-04-22_snippet_1

LANGUAGE: sh
CODE:
```
npm install -D @tailwindcss/typography@latest
```

----------------------------------------

TITLE: Demonstrating Basic Caret Color Usage in HTML
DESCRIPTION: Shows a basic example of using the caret-pink-500 utility class to change the color of a textarea's cursor.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/caret-color.mdx#2025-04-22_snippet_2

LANGUAGE: HTML
CODE:
```
<!-- [!code classes:caret-pink-500] -->
<textarea class="caret-pink-500 ..."></textarea>
```

----------------------------------------

TITLE: Adding Forms Plugin to Config JS
DESCRIPTION: Shows how to include the official `@tailwindcss/forms` plugin in your `tailwind.config.js` file. Adding the plugin is a prerequisite for utilizing the utility-friendly form styling normalization provided by Tailwind v2.0.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_12

LANGUAGE: js
CODE:
```
module.exports = {
  // ...
  plugins: [require("@tailwindcss/forms")],
};
```

----------------------------------------

TITLE: Using Extended Inset Utility HTML
DESCRIPTION: Demonstrates the use of an extended `inset` utility (like `top-8`). The `inset` and `translate` plugins now include the full extended spacing scale, offering more positioning and translation options.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_18

LANGUAGE: html
CODE:
```
<div class="top-8">
  <!-- .... -->
</div>
```

----------------------------------------

TITLE: Custom CSS Component Variants
DESCRIPTION: Shows how to use the @layer directive to implement component variants in custom CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-5/index.mdx#2025-04-22_snippet_3

LANGUAGE: css
CODE:
```
@layer components {
  @responsive {
    .card {
      /* ... */
    }
  }
}
```

----------------------------------------

TITLE: Implementing Menu Transitions with Data Attributes in React
DESCRIPTION: Example showing how to use the new transition API with Menu component using data attributes for different transition stages.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-06-21-headless-ui-v2-1/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Example() {
  return (
    <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems
        transition
        className={`
          transition ease-out
          data-[closed]:scale-95 data-[closed]:opacity-0
          data-[enter]:duration-200 data-[leave]:duration-300
        `}
      >
        {/* Menu items… */}
      </MenuItems>
    </Menu>
  );
}
```

----------------------------------------

TITLE: Demonstrating Conflicting Tailwind Utility Classes
DESCRIPTION: Shows an example where two conflicting utility classes (`grid` and `flex`) are applied to the same HTML element. The accompanying CSS illustrates that the class defined later in the stylesheet (`.grid`) takes precedence, regardless of the order in the HTML `class` attribute.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_32

LANGUAGE: html
CODE:
```
<!-- [!code filename:HTML] -->
<!-- prettier-ignore -->
<div class="grid flex">
  <!-- ... -->
</div>
```

LANGUAGE: css
CODE:
```
/* [!code filename: CSS] */
.flex {
  display: flex;
}
.grid {
  display: grid;
}
```

----------------------------------------

TITLE: Forced Color Adjust Utilities Implementation in HTML
DESCRIPTION: Demonstrates the usage of forced-color-adjust-none utility for controlling forced colors mode behavior, particularly useful for color selection interfaces.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_12

LANGUAGE: html
CODE:
```
<fieldset>
  <legend>Choose a color</legend>
  <div class="forced-color-adjust-none ...">
    <label>
      <input class="sr-only" type="radio" name="color-choice" value="white" />
      <span class="sr-only">White</span>
      <span class="size-6 rounded-full bg-white"></span>
    </label>
    <label>
      <input class="sr-only" type="radio" name="color-choice" value="gray" />
      <span class="sr-only">Gray</span>
      <span class="size-6 rounded-full bg-gray-300"></span>
    </label>
    <!-- ... -->
  </div>
</fieldset>
```

----------------------------------------

TITLE: Installation Commands for Tailwind CSS v4.1
DESCRIPTION: Terminal commands for installing Tailwind CSS v4.1 with different build tools
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_19

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest @tailwindcss/cli@latest
```

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest @tailwindcss/vite@latest
```

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest @tailwindcss/postcss@latest
```

----------------------------------------

TITLE: Importing Tailwind Components
DESCRIPTION: Import statements for required components used in the flex-basis documentation
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/flex-basis.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { CustomizingYourTheme, ResponsiveDesign, UsingACustomValue } from "@/components/content.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
```

----------------------------------------

TITLE: Responsive Card Layout Component
DESCRIPTION: Complete example of a responsive card component that changes from stacked to side-by-side layout at medium breakpoints using flex utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Simplified CSS Variable Color Configuration
DESCRIPTION: The new, simplified approach to configuring colors as CSS variables in Tailwind using format strings with placeholders.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_9

LANGUAGE: javascript
CODE:
```
module.exports = {
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      // ...
    },
  },
};
```

----------------------------------------

TITLE: Configuring Tailwind CSS with CSS Variables
DESCRIPTION: Demonstrates the new CSS-based configuration approach for Tailwind CSS, showing how to import the framework and configure custom colors and fonts using CSS variables.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2023-07-18-tailwind-connect-2023-recap/index.mdx#2025-04-22_snippet_1

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "./fonts" layer(base);

:theme {
  --colors-neon-pink: oklch(71.7% 0.25 360);
  --colors-neon-lime: oklch(91.5% 0.258 129);
  --colors-neon-cyan: oklch(91.3% 0.139 195.8);

  --font-family-sans: "Inter", sans-serif;
  --font-family-display: "Satoshi", sans-serif;
}
```

----------------------------------------

TITLE: Installing Headless UI
DESCRIPTION: NPM installation commands for adding Headless UI to React or Vue projects.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1-5/index.mdx#2025-04-22_snippet_2

LANGUAGE: sh
CODE:
```
# For React
npm install @headlessui/react

# For Vue
npm install @headlessui/vue
```

----------------------------------------

TITLE: Creating Image Links with Next.js Components
DESCRIPTION: This JSX snippet creates a clickable image link using Next.js Link component and an Image component. It links to the Tailwind UI website and displays a card image with alt text.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwind-ui-ecommerce/index.mdx#2025-04-22_snippet_1

LANGUAGE: JSX
CODE:
```
<Link href="https://tailwindui.com">
  <Image alt="Tailwind UI Ecommerce available now" src={card} />
</Link>
```

----------------------------------------

TITLE: Applying RTL and LTR Variants for Multi-Directional Layouts in HTML
DESCRIPTION: Shows how to use the rtl and ltr variants in Tailwind CSS to conditionally add styles for right-to-left and left-to-right layouts.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_62

LANGUAGE: html
CODE:
```
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  <div class="ltr:ml-3 rtl:mr-3">
    <p class="text-gray-700 group-hover:text-gray-900 ...">...</p>
    <p class="text-gray-500 group-hover:text-gray-700 ...">...</p>
  </div>
</div>
```

----------------------------------------

TITLE: Colored Box Shadow Examples in Tailwind CSS
DESCRIPTION: HTML example demonstrating the new colored box shadow feature in Tailwind CSS v3.0 with cyan, blue, and indigo shadow variations.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3/index.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
```

----------------------------------------

TITLE: Implementing Backdrop Filters in HTML
DESCRIPTION: Example demonstrating the usage of backdrop filter utilities with the backdrop-filter class
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-1/index.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="backdrop-blur backdrop-brightness-50 backdrop-filter ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Normal Case Text Example
DESCRIPTION: Example showing how to use the normal-case utility class to reset text casing to its original form.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/text-transform.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<!-- [!code classes:normal-case] -->
<p class="normal-case">The quick brown fox ...</p>
```

----------------------------------------

TITLE: Using Spaces in Arbitrary Variants with Tailwind CSS
DESCRIPTION: Illustrates how to use underscores to represent spaces in arbitrary variant selectors for more complex targeting.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_70

LANGUAGE: html
CODE:
```
<div class="[&_p]:mt-4">
  <p>Lorem ipsum...</p>
  <ul>
    <li>
      <p>Lorem ipsum...</p>
    </li>
    <!-- ... -->
  </ul>
</div>
```

----------------------------------------

TITLE: Spacing Scale Translation Example
DESCRIPTION: Demonstrates how to use spacing scale translation utilities with different values like -translate-6, translate-2, and translate-8.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/translate.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<img class="-translate-6 ..." src="/img/mountains.jpg" />
<img class="translate-2 ..." src="/img/mountains.jpg" />
<img class="translate-8 ..." src="/img/mountains.jpg" />
```

----------------------------------------

TITLE: Using not- Variant with Feature Queries in Tailwind CSS
DESCRIPTION: Shows how to combine the not- variant with feature queries to apply styles based on browser support conditions. Uses the supports feature query for grid display.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_14

LANGUAGE: html
CODE:
```
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Setting Columns by Width Example
DESCRIPTION: HTML example demonstrating how to use the columns-3xs utility to create responsive column layouts based on width
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/columns.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="columns-3xs ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Importing Components for Place-Self Documentation
DESCRIPTION: Import statements for React components used in the place-self documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/place-self.mdx#2025-04-22_snippet_0

LANGUAGE: typescript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
import { Stripes } from "@/components/stripes.tsx";
```

----------------------------------------

TITLE: Applying fallback styles with Tailwind CSS not-supports variant
DESCRIPTION: This snippet shows how to provide fallback styles when a feature is not supported using the not-supports-[...] variant. It applies flex layout when grid display is not supported by the browser.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_49

LANGUAGE: html
CODE:
```
<!-- [!code classes:not-supports-[display:grid]:flex] -->
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: CSS Variable List Image Implementation
DESCRIPTION: Demonstrates how to use CSS custom properties (variables) with the list-image utility.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/list-style-image.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<ul class="list-image-(--my-list-image)">
  <!-- ... -->
</ul>
```

----------------------------------------

TITLE: Enabling Deprecated Gap Utilities Removal
DESCRIPTION: Configuration to opt-in to new gap utility names by removing deprecated ones in tailwind.config.js.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_6

LANGUAGE: javascript
CODE:
```
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
```

----------------------------------------

TITLE: Applying Dark Mode Responsive Styles HTML
DESCRIPTION: Shows how to combine the `dark:` variant with responsive prefixes like `lg:` (`lg:dark:bg-black`) to apply dark mode styles that are also scoped to a specific breakpoint. Requires `darkMode` enabled and the responsive variant.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_5

LANGUAGE: HTML
CODE:
```
<div class="lg:bg-white lg:dark:bg-black ...">
```

----------------------------------------

TITLE: Importing Tailwind Components
DESCRIPTION: Import statements for required components used in the text-transform documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/text-transform.mdx#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Basic List Image Implementation
DESCRIPTION: Shows how to use the list-image utility with a URL to add custom marker images to list items.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/list-style-image.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<ul class="list-image-[url(/img/checkmark.png)]">
  <li>5 cups chopped Porcini mushrooms</li>
  <!-- ... -->
</ul>
```

----------------------------------------

TITLE: Applying Styles Based on Data Attributes in HTML
DESCRIPTION: Demonstrates how to use the data-* variant in Tailwind CSS to conditionally apply styles based on the presence of data attributes or specific attribute values.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_59

LANGUAGE: html
CODE:
```
<div data-active class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>

<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Container Query Ranges Implementation
DESCRIPTION: Demonstrates how to target specific container size ranges using combined min and max container queries.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_14

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Exporting Page Metadata Constants (TSX)
DESCRIPTION: Exports string constants `title` and `description` which likely serve as metadata for the documentation page, defining its title ('width') and a brief description of the utilities covered.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/width.mdx#2025-04-22_snippet_1

LANGUAGE: typescript
CODE:
```
export const title = "width";
export const description = "Utilities for setting the width of an element.";
```

----------------------------------------

TITLE: Basic Transition Component Usage
DESCRIPTION: Shows how to use the Transition component with the new data attribute API for simple fade effects.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-06-21-headless-ui-v2-1/index.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
import { Transition } from "@headlessui/react";
import { useState } from "react";

function Example() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>Toggle</button>
      <Transition show={isShowing}>
        <div className="transition duration-300 data-[closed]:opacity-0">I will fade in and out</div>
      </Transition>
    </>
  );
}
```

----------------------------------------

TITLE: Preventing Flex Items from Shrinking
DESCRIPTION: HTML example demonstrating how to prevent flex items from shrinking using the shrink-0 utility class.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/flex-shrink.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="flex ...">
  <div class="h-16 flex-1 ...">01</div>
  <div class="h-16 w-32 shrink-0 ...">02</div>
  <div class="h-16 flex-1 ...">03</div>
</div>
```

----------------------------------------

TITLE: Implementing Headless Checkbox (React/JSX)
DESCRIPTION: Illustrates the usage of the new `Checkbox` component along with `Field`, `Label`, and `Description` to create a custom-styled checkbox input with proper accessibility attributes. It shows how state (`data-checked`, `data-focus`) can be used for styling via CSS classes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import { Checkbox, Description, Field, Label } from "@headlessui/react";
import { CheckmarkIcon } from "./icons/checkmark";
import clsx from "clsx";

function Example() {
  return (
    <Field>
      // [!code highlight:11]
      <Checkbox
        defaultChecked
        className={clsx(
          "size-4 rounded border bg-white dark:bg-white/5",
          "data-[checked]:border-transparent data-[checked]:bg-blue-500",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",
        )}
      >
        <CheckmarkIcon className="stroke-white opacity-0 group-data-[checked]:opacity-100" />
      </Checkbox>
      <div>
        <Label>Enable beta features</Label>
        <Description>This will give you early access to any awesome new features we're developing.</Description>
      </div>
    </Field>
  );
}
```

----------------------------------------

TITLE: Styling List Markers (HTML)
DESCRIPTION: Example HTML applying styles to the `::marker` pseudo-element of list items within an ordered list using the `marker:` variant. It makes the list markers have medium font weight and gray-500 text color. This variant also cascades from the parent. Requires Tailwind CSS with JIT mode enabled.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-2/index.mdx#_snippet_8

LANGUAGE: html
CODE:
```
<h1>WrestleMania XII Results</h1>

<ol class="marker:font-medium marker:text-gray-500">
  <li>The British Bulldog, Owen Hart, and Vader defeated Ahmed Johnson, Jake Roberts, and Yokozuna</li>
  <li>Roddy Piper defeated Goldust</li>
  <li>Stone Cold Steve Austin defeated Savio Vega</li>
  <li>The Ultimate Warrior defeated Hunter Hearst Helmsley</li>
  <li>The Undertaker defeated Diesel</li>
  <li>Shawn Michaels defeated Bret Hart</li>
</ol>
```

----------------------------------------

TITLE: Bounce Animation Example
DESCRIPTION: Implementation of a bouncing arrow indicator using the animate-bounce utility.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/animation.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<svg class="size-6 animate-bounce ...">
  <!-- ... -->
</svg>
```

----------------------------------------

TITLE: Using the important flag in Tailwind CSS import
DESCRIPTION: Shows how to add the `important` flag to the `@import "tailwindcss"` rule to make all generated utility classes `!important`.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_35

LANGUAGE: CSS
CODE:
```
/* [!code filename:app.css] */
/* [!code word:important] */
@import "tailwindcss" important;
```

LANGUAGE: CSS
CODE:
```
/* [!code filename:Compiled CSS] */
/* [!code word:!important] */
@layer utilities {
  .flex {
    display: flex !important;
  }
  .gap-4 {
    gap: 1rem !important;
  }
  .underline {
    text-decoration-line: underline !important;
  }
}
```

----------------------------------------

TITLE: Implementing Form Field with Headless UI Components (React/JSX)
DESCRIPTION: Shows how the new Headless UI form components (`Field`, `Label`, `Input`, `Description`) simplify the creation of accessible form fields in React. These components automatically handle the necessary ID and `aria-*` attribute wiring, reducing boilerplate code.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
import { Description, Field, Input, Label } from "@headlessui/react";

function Example() {
  return (
    <Field>
      <Label>Name</Label>
      <Input name="your_name" />
      <Description>Use your real name so people will recognize you.</Description>
    </Field>
  );
}
```

----------------------------------------

TITLE: Implementing Text Shadow Utilities in HTML
DESCRIPTION: HTML example demonstrating the usage of different text shadow utilities from text-shadow-2xs to text-shadow-lg. Shows how to apply these new utilities to text elements.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-1/index.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<!-- [!code classes:text-shadow-2xs,text-shadow-xs,text-shadow-sm,text-shadow-md,text-shadow-lg,text-shadow-xl] -->
<p class="text-shadow-2xs ...">The quick brown fox...</p>
<p class="text-shadow-xs ...">The quick brown fox...</p>
<p class="text-shadow-sm ...">The quick brown fox...</p>
<p class="text-shadow-md ...">The quick brown fox...</p>
<p class="text-shadow-lg ...">The quick brown fox...</p>
```

----------------------------------------

TITLE: Importing Components in TSX
DESCRIPTION: Import statements for various React components used in the documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/word-break.mdx#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Building Tailwind CSS without an Input File
DESCRIPTION: CLI command example showing how to generate Tailwind CSS without needing to create an input file, a new feature in v1.6.0 that simplifies the build process when no custom CSS is needed.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-6/index.mdx#2025-04-22_snippet_8

LANGUAGE: bash
CODE:
```
npx tailwindcss build -o compiled.css
```

----------------------------------------

TITLE: Importing Components in JavaScript
DESCRIPTION: Imports required components for the documentation page from local component files.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/list-style-image.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Advanced Arbitrary Peer Variant with Nth-of-type Selector in HTML and CSS
DESCRIPTION: This example shows how to use the '&' character in arbitrary peer variants for more complex selectors like nth-of-type.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_23

LANGUAGE: HTML
CODE:
```
<div>
  <input type="text" class="peer" />
  <div class="hidden peer-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

LANGUAGE: CSS
CODE:
```
.peer-\[\:nth-of-type\(3\)_\&\]\:block {
  &:is(:nth-of-type(3) :where(.peer) ~ *) {
    display: block;
  }
}
```

----------------------------------------

TITLE: Enabling Complex @apply Classes
DESCRIPTION: Configuration to enable the use of complex classes with @apply directive.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-1-7/index.mdx#2025-04-22_snippet_9

LANGUAGE: javascript
CODE:
```
module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
};
```

----------------------------------------

TITLE: Accessing CSS Variable Values in JavaScript for Tailwind CSS v4
DESCRIPTION: Demonstrates how to access resolved CSS variable values in JavaScript using getComputedStyle for Tailwind CSS v4 theme variables.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#2025-04-22_snippet_21

LANGUAGE: JavaScript
CODE:
```
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```

----------------------------------------

TITLE: Using Arbitrary Variants for Custom Selectors
DESCRIPTION: Shows how to use arbitrary variants to apply styles based on any CSS selector, useful for complex scenarios or styling HTML you don't control.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_23

LANGUAGE: HTML
CODE:
```
<!-- [!code filename:HTML] -->
<!-- [!code classes:[&>[data-active]+span]:text-blue-600] -->
<div class="[&>[data-active]+span]:text-blue-600 ...">
  <span data-active><!-- ... --></span>
  <!-- [!code highlight:2] -->
  <span>This text will be blue</span>
</div>
```

LANGUAGE: CSS
CODE:
```
/* [!code filename:Simplified CSS] */
div > [data-active] + span {
  color: var(--color-blue-600);
}
```

----------------------------------------

TITLE: Styling ::before and ::after Pseudo-Elements in Tailwind CSS
DESCRIPTION: Demonstrates how to style the ::before and ::after pseudo-elements using the 'after' variant to add required field indicators and decorative elements.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_24

LANGUAGE: html
CODE:
```
<!-- [!code classes:after:content-['*']] -->
<!-- [!code classes:after:ml-0.5] -->
<!-- [!code classes:after:text-red-500] -->
<label>
  <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
  <input type="email" name="email" class="..." placeholder="you@example.com" />
</label>
```

----------------------------------------

TITLE: Basic Break-After Column Example
DESCRIPTION: Demonstrates the usage of break-after-column utility in a two-column layout to control content flow. The example shows how to force a column break after a specific paragraph element.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/break-after.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<!-- [!code classes:break-after-column] -->
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

----------------------------------------

TITLE: Importing Components and Utilities for Caret Color Documentation
DESCRIPTION: Imports necessary components and utilities for the caret color documentation page, including API table, content components, examples, and color utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/caret-color.mdx#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { CustomizingYourThemeColors } from "@/components/content.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { UsingACustomValue } from "@/components/content.tsx";
import colors from "./utils/colors";
```

----------------------------------------

TITLE: Styling Radio Button Parent with :has() in HTML
DESCRIPTION: Example showing how to style a label element based on the checked state of its radio button input using Tailwind CSS :has() variant classes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-500 ...">
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="accent-indigo-500 ..." />
</label>
```

----------------------------------------

TITLE: Importing Dependencies in JSX
DESCRIPTION: Import statements for required components and utilities used in the documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/max-width.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import dedent from "dedent";
import { ApiTable } from "@/components/api-table.tsx";
import { CustomizingYourSpacingScale, ResponsiveDesign, UsingACustomValue } from "@/components/content.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { Stripes } from "@/components/stripes.tsx";
```

----------------------------------------

TITLE: Using 2XL Breakpoint HTML
DESCRIPTION: Shows how to use the new `2xl:` breakpoint prefix (`2xl:text-9xl`) to apply styles that only take effect at viewport widths of 1536px and above, targeting extra-wide screens.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_7

LANGUAGE: HTML
CODE:
```
<h1 class="2xl:text-9xl ...">Godzilla</h1>
```

----------------------------------------

TITLE: Implementing Subgrid Layout System
DESCRIPTION: Shows how to use the new subgrid feature to inherit grid properties from parent elements and maintain alignment across nested components.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_9

LANGUAGE: html
CODE:
```
<div class="grid grid-cols-4 gap-4">
  <!-- ... -->
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div class="col-start-2">06</div>
  </div>
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Using Arbitrary Values in HTML
DESCRIPTION: Shows how to use arbitrary values directly in HTML classes for precise styling control. This example demonstrates setting a specific top position value.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_15

LANGUAGE: html
CODE:
```
<div class="top-[117px]">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Applying Focus Ring Offset Utility HTML
DESCRIPTION: Extends the basic ring example by adding the `focus:ring-offset-2` utility. This creates a visual gap between the element's border and the ring, producing a "halo" effect when the element is focused, enhancing accessibility and visibility.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_9

LANGUAGE: HTML
CODE:
```
<button class="focus:ring-opacity-50 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:outline-none ...">
```

----------------------------------------

TITLE: HTML Example with LTR/RTL and Logical Properties
DESCRIPTION: This HTML snippet demonstrates the use of logical properties in Tailwind CSS for handling layout in both LTR and RTL directions. It shows how `ms-3` (margin-inline-start) can replace the need for separate `ltr:ml-3` and `rtl:mr-3` classes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-3/index.mdx#_snippet_6

LANGUAGE: HTML
CODE:
```
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  <div class="ltr:ml-3 rtl:mr-3"><!-- [!code --] -->
    <div class="ms-3"><!-- [!code ++] -->
      <p
        class="text-sm font-medium text-slate-700 group-hover:text-slate-900"
        dark-class="text-sm font-medium text-slate-300 group-hover:text-white"
      >
        ...
      </p>
      <p
        class="text-sm font-medium text-slate-500 group-hover:text-slate-700"
        dark-class="text-sm font-medium text-slate-500 group-hover:text-slate-300"
      >
        ...
      </p>
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Importing Tailwind Components
DESCRIPTION: Import statements for various components used in the documentation page
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/columns.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
import { CustomizingYourTheme } from "@/components/content.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { Stripes } from "@/components/stripes.tsx";
import { UsingACustomValue } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Touch Action Examples Implementation
DESCRIPTION: HTML example showing implementation of different touch-action utilities including auto, none, pan-x and pan-y with image containers.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/touch-action.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<!-- [!code classes:overflow-auto,touch-auto,touch-none,touch-pan-x,touch-pan-y] -->
<div class="h-48 w-full touch-auto overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-none overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-pan-x overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-pan-y overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
```

----------------------------------------

TITLE: Styling Heroicons with Tailwind CSS Classes
DESCRIPTION: An example of an SVG icon from Heroicons styled with Tailwind CSS utility classes. The example shows how to set the icon size and color using Tailwind's h-6, w-6, and text-indigo-500 classes, demonstrating how these icons can be easily integrated with Tailwind projects.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/introducing-heroicons/index.mdx#2025-04-22_snippet_0

LANGUAGE: html
CODE:
```
<svg
  class="h-6 w-6 text-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
```

----------------------------------------

TITLE: Implementing Disclosure Component in Vue
DESCRIPTION: Example of using the Disclosure component in Vue to create expandable/collapsible content sections with proper accessibility support.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v1/index.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<template>
  <Disclosure>
    <DisclosureButton> Is team pricing available? </DisclosureButton>
    <DisclosurePanel> Yes! You can purchase a license that you can share with your entire team. </DisclosurePanel>
  </Disclosure>
</template>

<script>
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

  export default {
    components: { Disclosure, DisclosureButton, DisclosurePanel },
  };
</script>
```

----------------------------------------

TITLE: Implementing Tailwind CSS Play CDN
DESCRIPTION: Shows how to include the Tailwind CSS Play CDN in an HTML document. This script allows using all Tailwind features directly in the browser without compilation, intended for development purposes only.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3/index.mdx#2025-04-22_snippet_13

LANGUAGE: html
CODE:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example</title>
    <script src="https://cdn.tailwindcss.com/"></script> <!-- [!code ++] -->
  </head>
  <body>
    <!-- -->
  </body>
</html>
```

----------------------------------------

TITLE: Styling Radio Buttons and Labels with Named Peer Classes in HTML
DESCRIPTION: This example shows how to use named peer classes to style radio buttons and their associated labels based on their checked state.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_21

LANGUAGE: HTML
CODE:
```
<fieldset>
  <legend>Published status</legend>

  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>
  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

----------------------------------------

TITLE: Styling Even-Numbered Children with Tailwind CSS in Svelte
DESCRIPTION: Illustrates the use of the 'even' variant to style evenly numbered child elements in a Svelte component.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_94

LANGUAGE: Svelte
CODE:
```
<table>
  {#each people as person}
    <tr class="bg-white even:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
```

----------------------------------------

TITLE: Implementing Parent-Child Variant Propagation in Framer Motion for React Components
DESCRIPTION: This snippet demonstrates how to use Framer Motion's variant propagation system to trigger animations in child components when a parent is hovered. The BentoCard component sets up empty variants that children can reference.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-09-12-radiant-a-beautiful-new-marketing-site-template/index.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
// [!code filename:bento-card.tsx]
export function BentoCard() {
  return (
    // [!code highlight:7]
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
    >
      /* ... */
    </motion.div>
  );
}
```

----------------------------------------

TITLE: Inlining utility classes with @apply directive
DESCRIPTION: Demonstrates how to use the @apply directive to inline existing utility classes into custom CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/functions-and-directives.mdx#2025-04-22_snippet_6

LANGUAGE: CSS
CODE:
```
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}

.select2-search {
  @apply rounded border border-gray-300;
}

.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

----------------------------------------

TITLE: Styling Visited Links with Tailwind CSS
DESCRIPTION: Illustrates the use of the 'visited' variant to style a link when it has already been visited.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_88

LANGUAGE: HTML
CODE:
```
<a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 ..."> Inspiration </a>
```

----------------------------------------

TITLE: Styling with Group-Has Variant
DESCRIPTION: Demonstrates using the group class and group-has-[a] variant to show/hide an SVG icon based on whether the group contains an anchor tag.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_11

LANGUAGE: html
CODE:
```
<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>
```

----------------------------------------

TITLE: CSS Nesting Input Example
DESCRIPTION: Demonstrates nested CSS syntax that Tailwind processes using Lightning CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_2

LANGUAGE: css
CODE:
```
.typography {
  p {
    font-size: var(--text-base);
  }
  img {
    border-radius: var(--radius-lg);
  }
}
```

----------------------------------------

TITLE: Using At-Rules in Arbitrary Variants with Tailwind CSS
DESCRIPTION: Shows how to incorporate at-rules like @media or @supports within arbitrary variants for conditional styling.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_71

LANGUAGE: html
CODE:
```
<div class="flex [@supports(display:grid)]:grid">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Basic Container Query Usage in TailwindCSS
DESCRIPTION: Demonstrates the basic syntax for using container queries with TailwindCSS, using the new @ prefix to differentiate from media queries.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_12

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="block @lg:flex">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Breakpoint Range Example
DESCRIPTION: Shows how to target a specific breakpoint range using responsive and max-* variants.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_5

LANGUAGE: html
CODE:
```
<div class="md:max-xl:flex">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Importing Tailwind CSS Components
DESCRIPTION: Import statements for required components used in the outline width documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/outline-width.mdx#2025-04-22_snippet_0

LANGUAGE: jsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign, TargetingSpecificStates, UsingACustomValue } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Responsive Isolation Component Implementation
DESCRIPTION: JSX code implementing a responsive design component to demonstrate isolation utility usage across different breakpoints.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/isolation.mdx#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
<ResponsiveDesign property="isolation" defaultClass="isolate" featuredClass="isolation-auto" />
```

----------------------------------------

TITLE: Max-width Container Queries Example
DESCRIPTION: Shows how to use max-width container queries for styles that apply below specific container sizes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#2025-04-22_snippet_13

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-row @max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Group ARIA Modifiers Example
DESCRIPTION: Shows how to use group-aria-* modifiers to style child elements based on parent ARIA states.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_7

LANGUAGE: html
CODE:
```
<table>
  <thead>
    <tr>
      <th aria-sort="ascending" class="group">
        Invoice #
        <svg
          class="group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"
        >
          <!-- ... -->
        </svg>
      </th>
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... -->
</table>
```

----------------------------------------

TITLE: Importing Components - React/TSX
DESCRIPTION: Import statements for React components used in the documentation page.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/clear.mdx#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Vertical Background Repeat Example
DESCRIPTION: Demonstrates vertical-only background image repetition using bg-repeat-y.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-repeat.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-y ..."></div>
```

----------------------------------------

TITLE: Using theme() in Arbitrary Values for HTML Elements
DESCRIPTION: Example demonstrating how to use the theme function with arbitrary values directly in HTML class attributes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_7

LANGUAGE: html
CODE:
```
<div class="bg-[image:linear-gradient(to_right,theme(colors.red.500)_75%,theme(colors.red.500/25%))]">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Importing TailwindCSS Documentation Components
DESCRIPTION: Imports required components and assets for the background-repeat documentation page.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-repeat.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import cloudsImg from "@/docs/img/clouds.svg";
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Applying Will-Change Scroll Utility in HTML
DESCRIPTION: Illustrates the use of 'will-change-scroll' utility class in an HTML div element. It's used to improve performance by informing the browser to prepare for upcoming changes in the scroll position.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/will-change.mdx#2025-04-22_snippet_2

LANGUAGE: HTML
CODE:
```
<!-- [!code classes:will-change-scroll] -->
<div class="overflow-auto will-change-scroll">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Styling Basic Element with Has Variant
DESCRIPTION: Example of using checked:border-indigo-500 class to style a radio input element when checked.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_10

LANGUAGE: html
CODE:
```
<input type="radio" class="checked:border-indigo-500 ..." />
```

----------------------------------------

TITLE: Vue Component with @apply Example
DESCRIPTION: Demonstrates using @apply in Vue component styles with reference import.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_7

LANGUAGE: html
CODE:
```
<template>
  <button><slot /></button>
</template>

<style scoped>
  @reference "../app.css";

  button {
    @apply bg-blue-500;
  }
</style>
```

----------------------------------------

TITLE: Logical Properties Example - HTML
DESCRIPTION: Example demonstrating the use of logical properties clear-start and clear-end with RTL text direction.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/clear.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<article dir="rtl">
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/green-mountains.jpg" />
  <p class="clear-end ...">...ربما يمكننا العيش بدون مكتبات،</p>
</article>
```

----------------------------------------

TITLE: Importing Components for break-inside Documentation in TSX
DESCRIPTION: Imports necessary components for the break-inside utility documentation page, including ApiTable for displaying available utilities and ResponsiveDesign for showing responsive examples.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/break-inside.mdx#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";

export const title = "break-inside";
export const description = "Utilities for controlling how a column or page should break within an element.";
```

----------------------------------------

TITLE: Compiling Tailwind CSS with CLI in JIT Watch Mode (Shell)
DESCRIPTION: Command to compile Tailwind CSS using the new CLI. It outputs the compiled CSS to `dist/tailwind.css`, watches for file changes (`--watch`), enables Just-in-Time mode (`--jit`), and purges unused styles by scanning HTML files in the `./src/` directory (`--purge`). Requires Node.js and npx.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-2-2/index.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
npx tailwindcss -o dist/tailwind.css --watch --jit --purge="./src/**/*.html"
```

----------------------------------------

TITLE: Complex ARIA Sorting Example with Arbitrary Values
DESCRIPTION: Demonstrates using arbitrary ARIA values for sort states with background image styling in a table header.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-2/index.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<table>
  <thead>
    <tr>
      <th
        aria-sort="ascending"
        class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"
      >
        Invoice #
      </th>
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... -->
</table>
```

----------------------------------------

TITLE: Resetting Numeric Variants in TailwindCSS
DESCRIPTION: Demonstrates how to reset numeric font variants using the normal-nums utility class with responsive design.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/font-variant-numeric.mdx#2025-04-22_snippet_9

LANGUAGE: html
CODE:
```
<p class="slashed-zero tabular-nums md:normal-nums ..."><!-- ... --></p>
```

----------------------------------------

TITLE: Example of Repeated Utility Classes in HTML
DESCRIPTION: This HTML snippet demonstrates the issue of utility class duplication by applying the same set of Tailwind CSS classes (inline-block h-12 w-12 rounded-full ring-2 ring-white) to multiple image elements representing avatars.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_27

LANGUAGE: html
CODE:
```
<!-- [!code classes:inline-block,h-12,w-12,rounded-full,ring-2,ring-white] -->
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

----------------------------------------

TITLE: Importing Tailwind Documentation Components
DESCRIPTION: Import statements for React components used in the Tailwind CSS documentation system.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/list-style-position.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Importing Components in Tailwind CSS
DESCRIPTION: This snippet imports necessary React components for rendering a custom API table and examples. These components are used in conjunction with Tailwind CSS utilities for demonstration purposes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/will-change.mdx#2025-04-22_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { UsingACustomValue } from "@/components/content.tsx";
```

----------------------------------------

TITLE: Implementing All-Direction Resizing with Tailwind CSS
DESCRIPTION: Example of making a textarea element resizable in both horizontal and vertical directions using the 'resize' utility class in Tailwind CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/resize.mdx#2025-04-22_snippet_0

LANGUAGE: html
CODE:
```
<!-- [!code classes:resize] -->
<textarea class="resize rounded-md ..."></textarea>
```

----------------------------------------

TITLE: API Table Component Import and Configuration
DESCRIPTION: Imports required components and configures the translate utility API table with various translation options including spacing scale, fractions, and custom values.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/translate.mdx#2025-04-22_snippet_0

LANGUAGE: javascript
CODE:
```
import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign, UsingACustomValue } from "@/components/content.tsx";

export const title = "translate";
export const description = "Utilities for translating elements.";
```

----------------------------------------

TITLE: Using Tailwind Typography Classes Example
DESCRIPTION: Demonstrates how to apply the prose classes from @tailwindcss/typography plugin to format HTML content with proper typography styling.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-typography/index.mdx#2025-04-22_snippet_1

LANGUAGE: html
CODE:
```
<article class="prose lg:prose-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the
    food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around
    the country.
  </p>
  <!-- ... -->
</article>
```

----------------------------------------

TITLE: Clear Right Example - HTML
DESCRIPTION: Example showing how to use the clear-right utility to position an element below right-floated elements.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/clear.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<article>
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/snow-mountains.jpg" />
  <p class="clear-right ...">Maybe we can live without libraries...</p>
</article>
```

----------------------------------------

TITLE: Adjusting color opacity with --alpha() function
DESCRIPTION: Demonstrates how to use the --alpha() function to adjust the opacity of a color in Tailwind CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/functions-and-directives.mdx#2025-04-22_snippet_8

LANGUAGE: CSS
CODE:
```
.my-element {
  color: --alpha(var(--color-lime-300) / 50%);
}
```

----------------------------------------

TITLE: Utility Classes HTML Example
DESCRIPTION: Shows recommended way to use Tailwind's utility classes for styling buttons.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_4

LANGUAGE: html
CODE:
```
<button class="bg-indigo-500 hover:bg-indigo-600 ...">
  <!-- ... -->
</button>
```

----------------------------------------

TITLE: Page Metadata Configuration
DESCRIPTION: Exports the page title and description as constants for the documentation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/mask-origin.mdx#2025-04-22_snippet_1

LANGUAGE: javascript
CODE:
```
export const title = "mask-origin";
export const description =
  "Utilities for controlling how an element's mask image is positioned relative to borders, padding, and content.";
```

----------------------------------------

TITLE: Percentage-based Max-Width Example
DESCRIPTION: HTML example demonstrating percentage-based maximum widths using Tailwind's fraction utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/max-width.mdx#2025-04-22_snippet_2

LANGUAGE: html
CODE:
```
<div class="w-full max-w-9/10 ...">max-w-9/10</div>
<div class="w-full max-w-3/4 ...">max-w-3/4</div>
<div class="w-full max-w-1/2 ...">max-w-1/2</div>
<div class="w-full max-w-1/3 ...">max-w-1/3</div>
```

----------------------------------------

TITLE: Removing List Image Markers
DESCRIPTION: Shows how to remove existing marker images from list items using the list-image-none utility.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/list-style-image.mdx#2025-04-22_snippet_3

LANGUAGE: html
CODE:
```
<ul class="list-image-none">
  <!-- ... -->
</ul>
```

----------------------------------------

TITLE: Forced Colors Mode Variant Usage in HTML with Tailwind CSS
DESCRIPTION: Shows how to use the new forced-colors variant to adjust styles specifically for forced colors mode, particularly useful for custom form controls.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#2025-04-22_snippet_11

LANGUAGE: html
CODE:
```
<form>
  <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." />
</form>
```

----------------------------------------

TITLE: Legacy Approach for CSS Variable Color Configuration
DESCRIPTION: The old, more verbose way of configuring colors as CSS variables in Tailwind using functions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#2025-04-22_snippet_8

LANGUAGE: javascript
CODE:
```
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  theme: {
    colors: {
      primary: withOpacityValue("--color-primary"),
      secondary: withOpacityValue("--color-secondary"),
      // ...
    },
  },
};
```

----------------------------------------

TITLE: No-Repeat Background Example
DESCRIPTION: Shows how to prevent background image repetition using bg-no-repeat.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/background-repeat.mdx#2025-04-22_snippet_6

LANGUAGE: html
CODE:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-no-repeat ..."></div>
```

----------------------------------------

TITLE: CSS Build-time Import Example
DESCRIPTION: Demonstrates how Tailwind automatically bundles CSS imports without requiring additional preprocessing tools.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/compatibility.mdx#2025-04-22_snippet_0

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "./typography.css";
```

----------------------------------------

TITLE: Using prefers-contrast Variant in Tailwind CSS
DESCRIPTION: Example showing how to use the contrast-more variant to enhance form input contrast based on user preferences. Demonstrates applying different border colors, placeholder text colors, and opacity levels.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#2025-04-22_snippet_39

LANGUAGE: html
CODE:
```
<label class="block">
  <span class="block text-sm font-medium text-gray-700">Social Security Number</span>
  <input
    class="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
  />
  <p class="text-gray-600 opacity-10 contrast-more:opacity-100 ...">We need this to steal your identity.</p>
</label>
```