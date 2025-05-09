TITLE: Adding Components with shadcn-vue CLI
DESCRIPTION: This command adds a specified component to your project and installs all required dependencies. It can be used with a component name as an argument.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/cli/README.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn-vue add [component]
```

----------------------------------------

TITLE: Adding shadcn-vue Components
DESCRIPTION: Command to add a specific component (Button) from shadcn-vue to the project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_9

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add button
```

----------------------------------------

TITLE: Installing shadcn-vue Component
DESCRIPTION: Command to add a specific shadcn-vue component (Switch) to the project using npx.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/laravel.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add switch
```

----------------------------------------

TITLE: Basic Form Anatomy in Vue
DESCRIPTION: The basic structure of a form using VeeValidate components, showing the proper nesting of Form, FormField, FormItem, FormLabel, FormControl, FormDescription, and FormMessage components.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<template>
  <Form>
    <FormField>
      <FormItem>
        <FormLabel />
        <FormControl>
        <!-- any Form Input component or native input elements -->
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </Form>
</template>
```

----------------------------------------

TITLE: Updating DataTable Component with Expanded State in TanStack Table for Vue
DESCRIPTION: A Vue component that implements a DataTable using TanStack Table, featuring sorting, filtering, pagination, column visibility, and row expansion capabilities. The component manages table state using Vue refs and renders a table with header and body sections.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_17

LANGUAGE: vue
CODE:
```
<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ExpandedState,
} from '@tanstack/vue-table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { valueUpdater } from '@/lib/utils'

import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { h, ref } from 'vue'

import {
    FlexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getExpandedRowModel,
    useVueTable,
} from "@tanstack/vue-table"

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
        get rowSelection() { return rowSelection.value },
        get expanded() { return expanded.value },
    },
})
</script>

<template>
    <div>
        <div class="flex items-center py-4">
            <Input class="max-w-sm" placeholder="Filter emails..."
                :model-value="table.getColumn('email')?.getFilterValue() as string"
                @update:model-value=" table.getColumn('email')?.setFilterValue($event)" />
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" class="ml-auto">
                        Columns
                        <ChevronDown class="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem
                        v-for="column in table.getAllColumns().filter((column) => column.getCanHide())" :key="column.id"
                        class="capitalize" :modelValue="column.getIsVisible()" @update:modelValue="(value) => {
                            column.toggleVisibility(!!value)
                        }">
                        {{ column.id }}
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead v-for="header in headerGroup.headers" :key="header.id">
                            <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                                :props="header.getContext()" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="table.getRowModel().rows?.length">
                      <template v-for="row in table.getRowModel().rows" :key="row.id">
                        <TableRow :data-state="row.getIsSelected() ? 'selected' : undefined">
                            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                            </TableCell>
                        </TableRow>
                        <TableRow v-if="row.getIsExpanded()">
                          <TableCell :colspan="row.getAllCells().length">
                            {{ JSON.stringify(row.original) }}
                          </TableCell>
                        </TableRow>
                      </template>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell :colSpan="columns.length" class="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
```

----------------------------------------

TITLE: Defining Column Definitions with Formatting
DESCRIPTION: TypeScript implementation of column definitions for the data table, including formatting for the amount column.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_3

LANGUAGE: typescript
CODE:
```
import { h } from 'vue'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  }
]
```

----------------------------------------

TITLE: Using a shadcn-vue component in a Vue file
DESCRIPTION: Example Vue component that imports and uses the Button component from shadcn-vue. It demonstrates the proper way to import and use shadcn-vue components in your Vue templates.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_10

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <Button>Click me</Button>
  </div>
</template>
```

----------------------------------------

TITLE: Basic Drawer Component Implementation in Vue
DESCRIPTION: A complete example showing how to implement a drawer component in Vue with trigger, content, header, description, and footer sections. Demonstrates the basic structure and components needed for a functional drawer.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/drawer.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger>Open</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose>
          <Button variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
```

----------------------------------------

TITLE: Implementing FAQ Section with Accordion in Vue
DESCRIPTION: This snippet demonstrates the usage of the imported Accordion components to create a FAQ section. It showcases how to structure multiple accordion items with triggers and content.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/introduction.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<div class="[&_h3]:!mt-0">
<Accordion  type="multiple">

<AccordionItem value="faq-1">
<AccordionTrigger>
Why not packaged as a dependency?
</AccordionTrigger>
<AccordionContent>

The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

Start with some sensible defaults, then customize the components to your needs.

One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. _The design of your components should be separate from their implementation._

</AccordionContent>
</AccordionItem>
<AccordionItem value="faq-2">
<AccordionTrigger>
Which frameworks are supported?
</AccordionTrigger>
<AccordionContent>

This port is built to be used with Vue/Nuxt.

</AccordionContent>
</AccordionItem>
<AccordionItem value="faq-3">
<AccordionTrigger>
Can I use this in my project?
</AccordionTrigger>
<AccordionContent>
Yes. Free to use for personal and commercial projects. No attribution required.

But let us know if you do use it. We'd love to see what you build with it.
</AccordionContent>
</AccordionItem>
</Accordion>
</div>
```

----------------------------------------

TITLE: Creating a Reusable DataTable Component in Vue
DESCRIPTION: Vue component that renders a table using TanStack Table and shadcn-vue UI components. Accepts columns and data as props.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef } from '@tanstack/vue-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}>()

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="border rounded-md">
    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows" :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>
```

----------------------------------------

TITLE: Basic Usage of Input Component in Vue
DESCRIPTION: This snippet demonstrates how to import and use the Input component in a Vue component. It shows the basic setup required to incorporate the Input component into a Vue template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/input.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input />
</template>
```

----------------------------------------

TITLE: Integrating Date Picker in Forms with Vue.js
DESCRIPTION: This snippet illustrates how to use the Date Picker component within a form context in a Vue.js application, demonstrating its integration with form handling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/date-picker.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<ComponentPreview name="DatePickerForm" />
```

----------------------------------------

TITLE: Installing Toggle Component via CLI
DESCRIPTION: Command to install the Toggle component using the shadcn-vue CLI.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add toggle
```

----------------------------------------

TITLE: Installing Toggle Group Component via CLI
DESCRIPTION: Command to install the toggle-group component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle-group.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add toggle-group
```

----------------------------------------

TITLE: Installing Line Chart Component with shadcn-vue CLI
DESCRIPTION: Command to add the line chart component to your Vue project using the shadcn-vue CLI tool. Only works with Vue versions greater than 3.3.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts/line.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add chart-line
```

----------------------------------------

TITLE: Installing Stepper Component with shadcn-vue
DESCRIPTION: Command to add the stepper component to a Vue project using shadcn-vue CLI.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/stepper.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add stepper
```

----------------------------------------

TITLE: Installing Switch Component via CLI
DESCRIPTION: Command to install the Switch component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add switch
```

----------------------------------------

TITLE: Importing and Rendering a Vue Component
DESCRIPTION: This code demonstrates how to import a Vue component using the script setup syntax and then render it in the template. The PlaygroundExample component is imported from the examples/playground directory and used directly in the template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/playground.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import PlaygroundExample from "@/examples/playground/Example.vue"
</script>

<PlaygroundExample />
```

----------------------------------------

TITLE: Installing Separator Component via CLI in shadcn-vue
DESCRIPTION: Command to install the Separator component using the shadcn-vue CLI tool. This is the quickest way to add the component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/separator.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add separator
```

----------------------------------------

TITLE: Installing Donut Chart Component with Shadcn-Vue CLI
DESCRIPTION: Command to add the donut chart component to your Shadcn-Vue project using the CLI tool. This is the first step in setting up the chart component in your application.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts/donut.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add chart-donut
```

----------------------------------------

TITLE: Installing Avatar Component with shadcn-vue
DESCRIPTION: Command to install the Avatar component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/avatar.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add avatar
```

----------------------------------------

TITLE: Importing and Rendering a Vue Component with Script Setup
DESCRIPTION: This code snippet shows how to import a Vue component from a specific path and render it in the template. It uses the script setup syntax which is a feature of Vue 3's Composition API that simplifies component definitions.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/display.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import DisplayExample from "@/examples/forms/Display.vue"
</script>

<DisplayExample />
```

----------------------------------------

TITLE: Installing Area Chart Component with shadcn-vue
DESCRIPTION: Command to install the area chart component using the shadcn-vue CLI tool. Requires Vue version 3.3 or higher.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts/area.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add chart-area
```

----------------------------------------

TITLE: Installing Sidebar Component via CLI
DESCRIPTION: Command to install the sidebar component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add sidebar
```

----------------------------------------

TITLE: Installing Tabs Component with shadcn-vue CLI
DESCRIPTION: This command uses the shadcn-vue CLI to add the Tabs component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tabs.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add tabs
```

----------------------------------------

TITLE: Initializing Dependencies with shadcn-vue CLI
DESCRIPTION: This command initializes dependencies for a new project. It installs required packages, adds the 'cn' util, configures tailwind.config.js, and sets up CSS variables.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/cli/README.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue init
```

----------------------------------------

TITLE: Implementing a Combobox Component in Vue
DESCRIPTION: A complete implementation of a framework selection combobox using shadcn-vue components. This example demonstrates how to combine Popover and Command components to create an autocomplete dropdown with search functionality.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/combobox.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const value = ref('')
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between"
      >
        {{ value ? frameworks.find((framework) => framework.value === value)?.label : 'Select framework...' }}

        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command v-model="value">
        <CommandInput placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="open = false"
            >
              <Check
                :class="cn(
                  'mr-2 h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
              />
              {{ framework.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
```

----------------------------------------

TITLE: Initializing Project with Shadcn-Vue CLI
DESCRIPTION: Command to initialize a new Shadcn-Vue project, which installs dependencies, adds utilities, configures Tailwind, and sets up CSS variables.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Implementing Sortable Columns
DESCRIPTION: Implementation of sortable columns with header cell configuration and state management.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_11

LANGUAGE: typescript
CODE:
```
export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
        },
        cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
    },
]
```

----------------------------------------

TITLE: Implementing a Dark Mode Toggle Component in Vue
DESCRIPTION: A complete Vue component that provides a dropdown menu for toggling between light, dark, and system theme preferences. It uses the useColorMode composable from @vueuse/core to manage the theme state, and includes animated icon transitions between modes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/vite.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Implementing Main App Component with DataTable
DESCRIPTION: Vue component that fetches data and renders the DataTable component with the appropriate columns and data.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { Payment } from './components/columns'
import { onMounted, ref } from 'vue'
import { columns } from './components/columns'
import DataTable from './components/DataTable.vue'

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>
```

----------------------------------------

TITLE: Implementing Basic Dropdown Menu in Vue
DESCRIPTION: Example of how to use the dropdown menu component in a Vue template. It demonstrates importing necessary components and structuring the dropdown menu with a trigger, content, label, separator, and menu items.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/dropdown-menu.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Adding Components with Shadcn-Vue CLI
DESCRIPTION: Command to add components and their dependencies to an existing Shadcn-Vue project, which presents an interactive selection interface.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_3

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add [component]
```

----------------------------------------

TITLE: Using the Separator Component in Vue
DESCRIPTION: Example of how to import and use the Separator component in a Vue component. This shows the basic implementation with a label property set to 'Or'.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/separator.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Separator label="Or" />
</template>
```

----------------------------------------

TITLE: Importing and Rendering Mail Example Component in Vue
DESCRIPTION: This snippet imports a MailExample component from the examples/mail directory and then renders it in the template. It demonstrates the standard pattern for integrating and displaying components in Vue applications.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/mail.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import MailExample from "@/examples/mail/Example.vue"
</script>

<MailExample />
```

----------------------------------------

TITLE: Basic Textarea Component Implementation
DESCRIPTION: Basic example of importing and using the Textarea component in a Vue component
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/textarea.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea />
</template>
```

----------------------------------------

TITLE: Basic Switch Component Usage
DESCRIPTION: Basic implementation of the Switch component in a Vue application. Demonstrates importing and using the component in a template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
  <Switch />
</template>
```

----------------------------------------

TITLE: Implementing Tooltip Component in Vue
DESCRIPTION: Example of how to use the Tooltip component in a Vue application. It imports the necessary components and demonstrates the proper component hierarchy with TooltipProvider as the parent, containing Tooltip with TooltipTrigger and TooltipContent children.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tooltip.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

----------------------------------------

TITLE: Importing and Rendering TasksExample Component in Vue
DESCRIPTION: This code snippet demonstrates how to import a component from the examples directory and render it in a Vue file. The script section handles the import using the script setup syntax, while the template section directly renders the imported component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/tasks.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import TasksExample from "@/examples/tasks/Example.vue"
</script>

<TasksExample />
```

----------------------------------------

TITLE: Creating a Sortable Column Header Component for DataTable in Vue
DESCRIPTION: A reusable column header component that supports sorting and visibility toggling. It provides dropdown options for ascending/descending sorting and hiding columns, and is designed to be used with TanStack Table in Vue applications.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_20

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import { type Task } from '../data/schema'
import ArrowDownIcon from '~icons/radix-icons/arrow-down'
import ArrowUpIcon from '~icons/radix-icons/arrow-up'
import CaretSortIcon from '~icons/radix-icons/caret-sort'
import EyeNoneIcon from '~icons/radix-icons/eye-none'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableColumnHeaderProps {
  column: Column<Task, any>
  title: string
}

defineProps<DataTableColumnHeaderProps>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div v-if="column.getCanSort()" :class="cn('flex items-center space-x-2', $attrs.class ?? '')">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{{ title }}</span>
          <ArrowDownIcon v-if="column.getIsSorted() === 'desc'" class="w-4 h-4 ml-2" />
          <ArrowUpIcon v-else-if=" column.getIsSorted() === 'asc'" class="w-4 h-4 ml-2" />
          <CaretSortIcon v-else class="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <ArrowUpIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <ArrowDownIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <EyeNoneIcon class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class">
    {{ title }}
  </div>
</template>
```

----------------------------------------

TITLE: Command Component Dialog Implementation with Keyboard Shortcut
DESCRIPTION: Example of using the CommandDialog component to display the command menu in a dialog that can be triggered with a keyboard shortcut (⌘+J) using VueUse's useMagicKeys.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/command.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'

import { ref, watch } from 'vue'

const open = ref(false)

const keys = useMagicKeys()
const CmdJ = keys['Cmd+J']

function handleOpenChange() {
  open.value = !open.value
}

watch(CmdJ, (v) => {
  if (v)
    handleOpenChange()
})
</script>

<template>
  <div>
    <p class="text-sm text-muted-foreground">
      Press
      <kbd
        class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
      >
        <span class="text-xs">⌘</span>J
      </kbd>
    </p>
    <CommandDialog :open="open" @update:open="handleOpenChange">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            Calendar
          </CommandItem>
          <CommandItem value="search-emoji">
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator">
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">
            Profile
          </CommandItem>
          <CommandItem value="billing">
            Billing
          </CommandItem>
          <CommandItem value="settings">
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
```

----------------------------------------

TITLE: Complete Form Example with useForm and Input Component
DESCRIPTION: A complete example of a form implementation using the useForm composable from VeeValidate with Zod validation, showing a username input field with validation and submission handling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_8

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Submit
    </Button>
  </form>
</template>
```

----------------------------------------

TITLE: Adding Filtering Functionality
DESCRIPTION: Implementation of table filtering with email search functionality and state management.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_12

LANGUAGE: vue
CODE:
```
<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/vue-table'

import { valueUpdater } from '@/lib/utils'

import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { h, ref } from 'vue'

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
    },
})</script>
```

----------------------------------------

TITLE: Creating Date Range Picker with Independent Months in Vue.js
DESCRIPTION: This snippet demonstrates how to implement a Date Range Picker with independent month selection, providing more flexibility in date range selection.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/date-picker.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<ComponentPreview name="DatePickerWithIndependentMonths" />
```

----------------------------------------

TITLE: Importing and Rendering Shadcn-Vue Account Example Component in Vue
DESCRIPTION: This snippet shows how to import a Shadcn-Vue Account example component and render it in a Vue template. It uses the script setup syntax for composition API and imports the component from a relative path.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/account.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import AccountExample from "@/examples/forms/Account.vue"
</script>

<AccountExample />
```

----------------------------------------

TITLE: Implementing Row Expansion in Column Definition for Vue DataTable
DESCRIPTION: Column definition snippet that adds an actions column with the ability to toggle row expansion. The cell renderer creates a DropdownAction component with an onExpand event handler that calls the row's toggleExpanded method.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_19

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
export const columns: ColumnDef<Payment>[] = [
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        payment,
        onExpand: row.toggleExpanded,
      }))
    },
  },
]
</script>

```

----------------------------------------

TITLE: Responsive Carousel Item Sizing
DESCRIPTION: Example showing how to set responsive widths for carousel items using Tailwind's responsive utility classes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem class="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem class="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem class="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

----------------------------------------

TITLE: Implementing Column Visibility Toggle in Vue.js
DESCRIPTION: This component creates a dropdown menu to toggle the visibility of table columns. It uses the TanStack Table library and custom UI components from Shadcn Vue.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_24

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import { type Task } from '../data/schema'
import MixerHorizontalIcon from '~icons/radix-icons/mixer-horizontal'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableViewOptionsProps {
  table: Table<Task>
}

const props = defineProps<DataTableViewOptionsProps>()

const columns = computed(() => props.table.getAllColumns()
  .filter(
    column =>
      typeof column.accessorFn !== 'undefined' && column.getCanHide(),
  ))
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        size="sm"
        class="hidden h-8 ml-auto lg:flex"
      >
        <MixerHorizontalIcon class="w-4 h-4 mr-2" />
        View
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuCheckboxItem
        v-for="column in columns"
        :key="column.id"
        class="capitalize"
        :modelValue="column.getIsVisible()"
        @update:modelValue="(value) => column.toggleVisibility(!!value)"
      >
        {{ column.id }}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Implementing Date Range Picker in Vue.js
DESCRIPTION: This example shows how to create a Date Range Picker using the Date Picker component. It allows users to select a range of dates.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/date-picker.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<ComponentPreview name="DatePickerWithRange" />
```

----------------------------------------

TITLE: Basic Checkbox Implementation - Vue
DESCRIPTION: Basic implementation of the checkbox component in a Vue component showing component import and basic usage with an ID property
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/checkbox.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <Checkbox id="terms" />
</template>
```

----------------------------------------

TITLE: Creating a Sidebar with Navigation Menu
DESCRIPTION: A complete example of a sidebar with a navigation menu including icons and links. Shows how to structure menu items and create a functional navigation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_6

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
              <SidebarMenuItem v-for="item in items" :key="item.title">
                <SidebarMenuButton asChild>
                    <a :href="item.url">
                      <component :is="item.icon" />
                      <span>{{item.title}}</span>
                    </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Basic App Layout with Sidebar Integration
DESCRIPTION: Setting up the root application component with SidebarProvider and SidebarTrigger for managing the sidebar state.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>
```

----------------------------------------

TITLE: Sidebar Theming CSS Variables
DESCRIPTION: The CSS variables used for theming the sidebar component. Includes variables for background, foreground, primary, accent colors, borders, and rings in both light and dark modes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_36

LANGUAGE: css
CODE:
```
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

----------------------------------------

TITLE: Configuring tsconfig.json for path resolution
DESCRIPTION: TypeScript configuration that adds baseUrl and paths settings to enable path aliases in the project. This allows using the @/ prefix for imports.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_3

LANGUAGE: json
CODE:
```
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

----------------------------------------

TITLE: Implementing Popover Component in Vue
DESCRIPTION: Basic usage example of the Popover component in a Vue.js application. The example shows how to structure the component with PopoverTrigger for the activator and PopoverContent for the content displayed when triggered.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/popover.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>
      Open popover
    </PopoverTrigger>
    <PopoverContent>
      Some popover content
    </PopoverContent>
  </Popover>
</template>
```

----------------------------------------

TITLE: Controlled Form Implementation
DESCRIPTION: Example of implementing a controlled form with useForm hook
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { AutoForm } from '@/components/ui/auto-form'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const schema = z.object({
  username: z.string(),
})
const form = useForm({
  validationSchema: toTypedSchema(schema),
})

form.setFieldValue('username', 'bar')
</script>

<template>
  <AutoForm :form="form" :schema="schema" />
</template>
```

----------------------------------------

TITLE: Implementing Table Pagination Controls in Vue.js
DESCRIPTION: This component adds pagination controls to a table, including page size selection and navigation buttons. It uses the TanStack Table library and custom UI components from Shadcn Vue.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_22

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { type Task } from '../data/schema'
import ChevronLeftIcon from '~icons/radix-icons/chevron-left'
import ChevronRightIcon from '~icons/radix-icons/chevron-right'
import DoubleArrowLeftIcon from '~icons/radix-icons/double-arrow-left'
import DoubleArrowRightIcon from '~icons/radix-icons/double-arrow-right'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DataTablePaginationProps {
  table: Table<Task>
}
defineProps<DataTablePaginationProps>()
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex-1 text-sm text-muted-foreground">
      {{ table.getFilteredSelectedRowModel().rows.length }} of
      {{ table.getFilteredRowModel().rows.length }} row(s) selected.
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">
          Rows per page
        </p>
        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="table.setPageSize"
        >
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }}
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden w-8 h-8 p-0 lg:flex"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <span class="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="w-8 h-8 p-0"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <span class="sr-only">Go to previous page</span>
          <ChevronLeftIcon class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="w-8 h-8 p-0"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <span class="sr-only">Go to next page</span>
          <ChevronRightIcon class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="hidden w-8 h-8 p-0 lg:flex"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <span class="sr-only">Go to last page</span>
          <DoubleArrowRightIcon class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
```

----------------------------------------

TITLE: Implementing Pagination Component in Vue
DESCRIPTION: Example of how to implement the Pagination component in a Vue application. The example demonstrates a pagination interface with first, previous, next, and last page navigation buttons, along with page numbers and ellipsis for skipped pages.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/pagination.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Button,
} from '@/components/ui/button'

import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
</script>

<template>
  <Pagination v-slot="{ page }" :items-per-page="10" :total="100" :sibling-count="1" show-edges :default-page="2">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>
```

----------------------------------------

TITLE: Basic Resizable Component Usage
DESCRIPTION: Example of how to use the Resizable components to create a horizontal panel group with two panels. Shows the basic component import and template structure.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
</template>
```

----------------------------------------

TITLE: Creating a Zod Form Schema with TypeScript
DESCRIPTION: Example of defining a form validation schema using Zod and integrating it with VeeValidate using the toTypedSchema helper for type safety.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))
</script>
```

----------------------------------------

TITLE: Basic Carousel Component Usage in Vue
DESCRIPTION: Demonstrates the basic implementation of the carousel component with previous and next navigation buttons.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
</script>

<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
```

----------------------------------------

TITLE: Importing and Using AspectRatio Component in Vue
DESCRIPTION: Demonstrates how to import the AspectRatio component from the shadcn-vue registry for use in a Vue component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/figma.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import { AspectRatio } from '@/registry/default/ui/aspect-ratio';
</script>
```

----------------------------------------

TITLE: Creating a Row Actions Dropdown Component
DESCRIPTION: Vue component that implements a dropdown menu for row actions in the data table, with options to copy IDs and view details.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_6

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-vue-next'

defineProps<{
  payment: {
    id: string
  }
}>()

function copy(id: string) {
  navigator.clipboard.writeText(id)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="copy(payment.id)">
        Copy payment ID
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View payment details</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Importing and Rendering Vue Form Component
DESCRIPTION: This snippet shows how to import a forms example component using script setup syntax and render it in the template. It uses the modern Vue 3 composition API pattern.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/index.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import FormsExample from "@/examples/forms/Example.vue"
</script>

<FormsExample />
```

----------------------------------------

TITLE: Implementing Pagination in Data Table
DESCRIPTION: Shows how to add pagination functionality to the table using TanStack Table's pagination features.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_8

LANGUAGE: typescript
CODE:
```
import {
    FlexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useVueTable,
} from "@tanstack/vue-table"

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
})
```

----------------------------------------

TITLE: Implementing Basic Dialog Component in Vue
DESCRIPTION: Example of how to use the Dialog component in a Vue.js template, including various sub-components like DialogTrigger, DialogContent, DialogHeader, etc.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/dialog.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>
      Edit Profile
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        Save changes
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

----------------------------------------

TITLE: Importing and Rendering MusicExample Component in Vue
DESCRIPTION: This Vue component imports the MusicExample component from a specific path using the script setup syntax. It then renders the imported component in the template section.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/music.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import MusicExample from "@/examples/music/Example.vue"
</script>

<MusicExample />
```

----------------------------------------

TITLE: Adding a shadcn-vue component
DESCRIPTION: Command to add a specific component (Button) from shadcn-vue to your project. This downloads and sets up the component in your local project structure.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_9

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add button
```

----------------------------------------

TITLE: Adding Specific Component Example with shadcn-vue CLI
DESCRIPTION: An example of adding a specific component (alert-dialog) to the project using the shadcn-vue CLI.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/cli/README.md#2025-04-23_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn-vue add alert-dialog
```

----------------------------------------

TITLE: Manual Installation of VeeValidate Dependencies
DESCRIPTION: Command to manually install the required npm packages for implementing forms with VeeValidate and Zod in a Vue project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_4

LANGUAGE: bash
CODE:
```
npm install reka-ui vee-validate @vee-validate/zod zod
```

----------------------------------------

TITLE: Installing Required Dependencies for Resizable
DESCRIPTION: Command to install the necessary dependency (reka-ui) for the Resizable component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: Customizing Sheet Size with CSS Classes in Vue
DESCRIPTION: Example demonstrating how to adjust the size of the Sheet component using CSS classes to control width, with responsive behavior for different screen sizes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sheet.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent class="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
```

----------------------------------------

TITLE: Installing Label Component Dependencies
DESCRIPTION: Command to install the required Reka UI dependency for the Label component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/label.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: Basic Usage of Skeleton Component in Vue
DESCRIPTION: Example showing how to import and use the Skeleton component in a Vue component. This creates a rounded loading placeholder with specific width and height.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/skeleton.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <Skeleton class="w-[100px] h-5 rounded-full" />
</template>
```

----------------------------------------

TITLE: Basic Select Component Implementation in Vue
DESCRIPTION: A complete example showing how to implement a basic Select component with options grouped by category. The example demonstrates importing the necessary components and structuring them in a template with proper nesting.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/select.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">
          Apple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
```

----------------------------------------

TITLE: Defining a Form with Composition API
DESCRIPTION: Example showing how to use the useForm composable from VeeValidate to create a form with validation schema and handle form submission, with type-safety.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_6

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit="onSubmit">
    ...
  </form>
</template>
```

----------------------------------------

TITLE: Using useSidebar Composable in Vue
DESCRIPTION: Demonstrates how to use the useSidebar composable to control the sidebar state and behavior in a Vue component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_14

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";

const {
  state,
  open,
  setOpen,
  openMobile,
  setOpenMobile,
  isMobile,
  toggleSidebar,
} = useSidebar()
</script>
```

----------------------------------------

TITLE: Using CSS Variables in HTML
DESCRIPTION: Example of using CSS variable-based classes for theming.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/theming.md#2025-04-23_snippet_2

LANGUAGE: html
CODE:
```
<div class="bg-background text-foreground" />
```

----------------------------------------

TITLE: Configuring shadcn-vue in Nuxt
DESCRIPTION: TypeScript configuration to set up the shadcn-vue module in Nuxt, including prefix and component directory settings.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_6

LANGUAGE: typescript
CODE:
```
export default defineNuxtConfig({
  // ...
  modules: ['shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
```

----------------------------------------

TITLE: Using the Progress Component in Vue
DESCRIPTION: Example of how to import and use the Progress component in a Vue component. The component accepts a model-value prop to specify the progress percentage.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/progress.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <Progress :model-value="33" />
</template>
```

----------------------------------------

TITLE: Configuring TypeScript Path Aliases
DESCRIPTION: TypeScript configuration for setting up path aliases to enable '@' imports in the project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#2025-04-23_snippet_1

LANGUAGE: json
CODE:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [".*"]
    }
  }
}
```

----------------------------------------

TITLE: Custom Link Component in Breadcrumb
DESCRIPTION: Example of using a custom router link component (vue-router) within the breadcrumb navigation using the as-child prop.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/breadcrumb.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink as-child>
          <RouterLink to="/">
            Home
          </RouterLink>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <!--  -->
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

----------------------------------------

TITLE: Basic Usage of Navigation Menu Component in Vue.js
DESCRIPTION: Example of how to import and use the Navigation Menu component in a Vue.js template. It demonstrates the basic structure of the menu with a single item and sub-content.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/navigation-menu.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

----------------------------------------

TITLE: Implementing Number Field Component in Vue
DESCRIPTION: This snippet demonstrates how to use the Number Field component in a Vue template. It imports the necessary components and sets up a basic number field with a label, decrement button, input field, and increment button.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/number-field.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
</script>

<template>
  <NumberField>
    <Label>Age</Label>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
```

----------------------------------------

TITLE: Complete Toast Implementation Example
DESCRIPTION: Full example showing toast implementation with a button trigger and custom notification content
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toast.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
</script>

<template>
  <Toaster />
  <Button
    @click="() => {
      toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
    }"
  >
    Add to calendar
  </Button>
</template>
```

----------------------------------------

TITLE: Setting Up Global CSS Styles
DESCRIPTION: Global CSS configuration including theme variables, dark mode support, and custom animations for the application.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#2025-04-23_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... additional CSS variables ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode variables ... */
}

@theme inline {
  /* ... theme variables ... */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

----------------------------------------

TITLE: Configuring Vite for path resolution and plugins
DESCRIPTION: Vite configuration that sets up path aliases and registers the Vue and Tailwind CSS plugins. This allows using @/ imports and ensures proper functioning of Tailwind CSS.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_6

LANGUAGE: typescript
CODE:
```
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

----------------------------------------

TITLE: Responsive Carousel Item Spacing
DESCRIPTION: Example showing how to implement responsive spacing between carousel items for different screen sizes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<template>
  <Carousel>
    <CarouselContent class="-ml-2 md:-ml-4">
      <CarouselItem class="pl-2 md:pl-4">
        ...
      </CarouselItem>
      <CarouselItem class="pl-2 md:pl-4">
        ...
      </CarouselItem>
      <CarouselItem class="pl-2 md:pl-4">
        ...
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
```

----------------------------------------

TITLE: Configuring Tailwind CSS in index.css
DESCRIPTION: CSS configuration that imports Tailwind CSS for use in the Vue application. This replaces the default content in src/index.css.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss";
```

----------------------------------------

TITLE: Defining Payment Interface and Sample Data
DESCRIPTION: TypeScript interface for the Payment model with sample data that will be used throughout the data table implementation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_1

LANGUAGE: typescript
CODE:
```
interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]
```

----------------------------------------

TITLE: Defining a Form with Form Component
DESCRIPTION: Alternative approach to creating a form using the Form component from VeeValidate instead of the useForm composable, showing the component-based approach.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_7

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

function onSubmit(values) {
  console.log('Form submitted!', values)
}
</script>

<template>
  <Form :validation-schema="formSchema" @submit="onSubmit">
    ...
  </Form>
</template>
```

----------------------------------------

TITLE: Basic Usage of Slider Component in Vue
DESCRIPTION: Example of how to import and use the Slider component in a Vue component. The slider is configured with default value, maximum value, and step size.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/slider.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
</script>

<template>
  <Slider
    :default-value="[33]" :max="100" :step="1"
  />
</template>
```

----------------------------------------

TITLE: Implementing Collapsible Component in Vue
DESCRIPTION: Example implementation of a Collapsible component in Vue using the shadcn-vue library. Demonstrates how to create an expandable/collapsible panel with trigger and content sections. Uses v-model binding for controlling the open state.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/collapsible.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution
      required.
    </CollapsibleContent>
  </Collapsible>
</template>
```

----------------------------------------

TITLE: Using Menubar Component in Vue
DESCRIPTION: Example showing how to implement a Menubar with dropdown menus in a Vue component. This demonstrates importing the required components and structuring them with triggers, content, items, and separators.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/menubar.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

----------------------------------------

TITLE: FormField with Input Component Example
DESCRIPTION: An example showing how to use the FormField component with a custom Input component. It demonstrates the proper structure for form validation with VeeValidate.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<template>
  <FormField v-slot="{ componentField }">
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" v-bind="componentField" />
      </FormControl>
      <FormDescription />
      <FormMessage />
    </FormItem>
  </FormField>
</template>
```

----------------------------------------

TITLE: Using shadcn-vue Components in Vue Template
DESCRIPTION: Example of how to use a shadcn-vue component (Button) in a Vue template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_10

LANGUAGE: vue
CODE:
```
<template>
  <div>
    <Button>Click me</Button>
  </div>
</template>
```

----------------------------------------

TITLE: Basic Breadcrumb Implementation in Vue
DESCRIPTION: Basic implementation of a breadcrumb navigation showing a three-level hierarchy with home, components, and current page.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/breadcrumb.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

----------------------------------------

TITLE: Basic Sonner Toast Usage Example
DESCRIPTION: Example demonstrating how to use the toast function from vue-sonner to display notifications with a description and action button.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sonner.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
</script>

<template>
  <Button
    variant="outline" @click="() => {
      toast('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }"
  >
    Add to calendar
  </Button>
</template>
```

----------------------------------------

TITLE: Importing and Rendering AppearanceExample Component in Vue
DESCRIPTION: This snippet shows how to import a Vue component from a specific path and then render it within the template. It uses the script setup syntax introduced in Vue 3.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/appearance.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import AppearanceExample from "@/examples/forms/Appearance.vue"
</script>

<AppearanceExample />
```

----------------------------------------

TITLE: Adding Expand Action to DataTableDropdown Component in Vue
DESCRIPTION: A dropdown menu component for data table rows that provides various actions including a new 'Expand' option. The component emits an 'expand' event when the expand option is clicked and also allows copying the payment ID to clipboard.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_18

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

defineProps<{
  payment: {
    id: string
  }
}>()

defineEmits<{
  (e: 'expand'): void
}>()

function copy(id: string) {
  navigator.clipboard.writeText(id)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="copy(payment.id)">
        Copy payment ID
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('expand')">
        Expand
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View payment details</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Basic Usage of Toggle Component in Vue
DESCRIPTION: Example of how to import and use the Toggle component in a Vue template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle>Toggle</Toggle>
</template>
```

----------------------------------------

TITLE: Using the Label Component in Vue
DESCRIPTION: Example of how to import and use the Label component in a Vue component. The Label is associated with a form control using the 'for' attribute.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/label.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Label } from '@/components/ui/label'
</script>

<template>
  <Label for="email">Your email address</Label>
</template>
```

----------------------------------------

TITLE: Using Button Component in Vue.js
DESCRIPTION: Example of how to import and use the Button component in a Vue.js application.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/button.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Button</Button>
</template>
```

----------------------------------------

TITLE: Implementing Basic Radio Group in Vue
DESCRIPTION: Example of how to use the RadioGroup and RadioGroupItem components with labels in a Vue component. The component sets up two radio options with their associated labels.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/radio-group.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```

----------------------------------------

TITLE: Minimal Sidebar Implementation Example
DESCRIPTION: The simplest implementation of the Sidebar component with just the import and component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_11

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Sidebar } from "@/components/ui/sidebar";
</script>

<template>
  <Sidebar />
</template>
```

----------------------------------------

TITLE: Implementing Accordion Component in Vue
DESCRIPTION: Example of how to use the Accordion component in a Vue component. The code demonstrates importing the necessary components and creating a single-item accordion with collapsible behavior.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/accordion.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

----------------------------------------

TITLE: Implementing Chart Color Customization in Vue
DESCRIPTION: Example of customizing chart colors in Vue components. Shows how to pass an array of color values to the AreaChart component to override the default color scheme.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<template>
  <AreaChart
    :data="data"
    :colors="['blue', 'pink', 'orange', 'red']"
  />
</template>
```

----------------------------------------

TITLE: Custom Link Component with Nuxt in Vue.js Navigation Menu
DESCRIPTION: Demonstrates how to use a custom Nuxt link component within the Navigation Menu, applying the correct trigger styles and handling navigation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/navigation-menu.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<template>
  <NavigationMenuItem>
    <NuxtLink v-slot="{ isActive, href, navigate }" to="/docs" custom>
      <NavigationMenuLink :active="isActive" :href :class="navigationMenuTriggerStyle()" @click="navigate">
        Documentation
      </NavigationMenuLink>
    </NuxtLink>
  </NavigationMenuItem>
</template>
```

----------------------------------------

TITLE: Configuring TypeScript Paths in tsconfig.json
DESCRIPTION: Adds path configurations to the tsconfig.json file to resolve imports from the src directory.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#2025-04-23_snippet_1

LANGUAGE: typescript
CODE:
```
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

----------------------------------------

TITLE: Adding New Tailwind Color in Shadcn-Vue Registry JSON Configuration
DESCRIPTION: This snippet shows how to add a new Tailwind color in the registry configuration. It includes adding the color to cssVars for light and dark modes, and extending the Tailwind config to include the new color. The new color can then be used as utility classes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/faq.md#2025-04-23_snippet_1

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "light": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    },
    "dark": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    }
  },
  "tailwind": {
    "config": {
      "theme": {
        "extend": {
          "colors": {
            "brand": {
              "DEFAULT": "hsl(var(--brand-background))",
              "accent": "hsl(var(--brand-accent))"
            }
          }
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Collapsible SidebarMenu Implementation in Vue
DESCRIPTION: Shows how to create a collapsible SidebarMenu by wrapping it with Collapsible components. This allows for expanding and collapsing submenu sections.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_28

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenu>
    <Collapsible defaultOpen class="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem />
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  </SidebarMenu>
</template>
```

----------------------------------------

TITLE: Project Structure for Data Table Implementation
DESCRIPTION: Recommended file structure for organizing the data table components in a Vue.js project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_2

LANGUAGE: ansi
CODE:
```
 components
    └── payments
          ├── columns.ts
          ├── data-table.vue
          ├── data-table-dropdown.vue
└── app.vue
```

----------------------------------------

TITLE: Implementing Alert Dialog Component
DESCRIPTION: Example of implementing an Alert Dialog component with confirmation message and action buttons. Shows the complete structure including header, description, and footer sections with cancel and continue actions.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/alert-dialog.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

----------------------------------------

TITLE: Initializing shadcn-vue in the project
DESCRIPTION: Command to initialize shadcn-vue in the project, which sets up the necessary configuration files and structure for using shadcn-vue components.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_7

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Implementing Toaster Component in App.vue
DESCRIPTION: Setup for the base Toaster component in the main App.vue file, including optional ClientOnly wrapper for Nuxt applications
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toast.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <Toaster />

  <!-- Nuxt  -->
  <ClientOnly>
    <Toaster />
  </ClientOnly>
</template>
```

----------------------------------------

TITLE: Creating Custom Style from Scratch in shadcn-vue
DESCRIPTION: A registry style item that creates a new style from scratch without extending shadcn-vue. It installs tailwind-merge and clsx, adds utility components, and defines custom CSS variables for a complete theme.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_1

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif",
    }
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000",
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff",
    }
  }
}
```

----------------------------------------

TITLE: Installing shadcn-nuxt Module
DESCRIPTION: Command to add the shadcn-nuxt module to the Nuxt project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_5

LANGUAGE: bash
CODE:
```
npx nuxi@latest module add shadcn-nuxt
```

----------------------------------------

TITLE: Adding Chart-specific CSS Variables to Tailwind Configuration
DESCRIPTION: CSS configuration needed for chart components, defining tooltip styling and color variables to be added to the tailwind.css file. Sets up tooltip appearance and defines primary/secondary colors based on design system variables.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts.md#2025-04-23_snippet_0

LANGUAGE: css
CODE:
```
@layer base {
  :root {
    /* ... */
    --vis-tooltip-background-color: none !important;
    --vis-tooltip-border-color: none !important;
    --vis-tooltip-text-color: none !important;
    --vis-tooltip-shadow-color: none !important;
    --vis-tooltip-backdrop-filter: none !important;
    --vis-tooltip-padding: none !important;

    --vis-primary-color: var(--primary);
    /* change to any hsl value you want */
    --vis-secondary-color: 160 81% 40%;
    --vis-text-color: var(--muted-foreground);
  }
}
```

----------------------------------------

TITLE: Installing PIN Input Component with Shadcn-Vue
DESCRIPTION: Command to install the PIN Input component using Shadcn-Vue CLI. This adds the component to your project for use in your Vue applications.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/pin-input.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add pin-input
```

----------------------------------------

TITLE: Installing Tags Input Component with shadcn-vue CLI
DESCRIPTION: Command to install the Tags Input component using the shadcn-vue CLI tool. This adds the component to your project with all necessary dependencies.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tags-input.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add tags-input
```

----------------------------------------

TITLE: Configuring Tailwind CSS in Nuxt
DESCRIPTION: CSS configuration to import Tailwind CSS in the project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_3

LANGUAGE: css
CODE:
```
@import "tailwindcss";
```

----------------------------------------

TITLE: Implementing Dialog with Context Menu in Vue
DESCRIPTION: Example of how to use the Dialog component within a Context Menu in Vue.js, addressing a specific implementation scenario.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/dialog.md#2025-04-23_snippet_2

LANGUAGE: js
CODE:
```
<Dialog>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Open</ContextMenuItem>
      <ContextMenuItem>Download</ContextMenuItem>
      <DialogTrigger asChild>
        <ContextMenuItem>
          <span>Delete</span>
        </ContextMenuItem>
      </DialogTrigger>
    </ContextMenuContent>
  </ContextMenu>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently
        delete this file from our servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

----------------------------------------

TITLE: Implementing Card Component in Vue
DESCRIPTION: Example of how to use the Card component with its subcomponents in a Vue application. This demonstrates the structure of a complete card with header, title, description, content, and footer sections.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/card.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      Card Content
    </CardContent>
    <CardFooter>
      Card Footer
    </CardFooter>
  </Card>
</template>
```

----------------------------------------

TITLE: Installing Pagination Component with Shadcn-Vue CLI
DESCRIPTION: Command to add the pagination component to a Shadcn-Vue project using the CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/pagination.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add pagination
```

----------------------------------------

TITLE: Installing Label Component via CLI
DESCRIPTION: Command to install the Label component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/label.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add label
```

----------------------------------------

TITLE: Installing AutoForm Components
DESCRIPTION: Commands to install the required form components using shadcn-vue CLI
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest update form
npx shadcn-vue@latest add auto-form
```

----------------------------------------

TITLE: SidebarTrigger Button Implementation in Vue
DESCRIPTION: Example of using the SidebarTrigger component within a SidebarProvider to create a button that toggles the sidebar visibility.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_32

LANGUAGE: vue
CODE:
```
<template>
  <SidebarProvider>
    <Sidebar />
    <main>
      <SidebarTrigger />
    </main>
  </SidebarProvider>
</template>
```

----------------------------------------

TITLE: Installing VeeValidate with CLI
DESCRIPTION: Command to install the form components using the shadcn-vue CLI tool, which automatically adds all necessary form components to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_3

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add form
```

----------------------------------------

TITLE: Implementing Custom Handle in Resizable Panels
DESCRIPTION: Example showing how to add a visible handle to the resizable interface. Uses the with-handle prop on the ResizableHandle component to display a drag handle element.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
</template>
```

----------------------------------------

TITLE: Configuring Carousel Options
DESCRIPTION: Demonstrates how to pass options to the carousel using the opts prop for customizing behavior.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_7

LANGUAGE: vue
CODE:
```
<template>
  <Carousel
    :opts="{
      align: 'start',
      loop: true,
    }"
  >
    <CarouselContent>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
```

----------------------------------------

TITLE: SidebarMenuButton as Link or Anchor in Vue
DESCRIPTION: Shows how to use the SidebarMenuButton with the asChild prop to render it as a different component, specifically an anchor tag for navigation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_22

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenuButton asChild>
    <a href="#">Home</a>
  </SidebarMenuButton>
</template>
```

----------------------------------------

TITLE: Adding Row Selection to Column Definitions in TypeScript
DESCRIPTION: This snippet demonstrates how to add a checkbox column for row selection in the table. It updates the column definitions to include a selectable checkbox for each row and the header.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_14

LANGUAGE: typescript
CODE:
```
import type { ColumnDef } from '@tanstack/vue-table'

import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Payment>[] = [
    {
        id: 'select',
        header: ({ table }) => h(Checkbox, {
            'modelValue': table.getIsAllPageRowsSelected(),
            'onUpdate:modelValue': (value: boolean) => table.toggleAllPageRowsSelected(!!value),
            'ariaLabel': 'Select all',
        }),
        cell: ({ row }) => h(Checkbox, {
            'modelValue': row.getIsSelected(),
            'onUpdate:modelValue': (value: boolean) => row.toggleSelected(!!value),
            'ariaLabel': 'Select row',
        }),
        enableSorting: false,
        enableHiding: false,
    },
]
```

----------------------------------------

TITLE: Implementing Dark Mode Toggle Component in Vue
DESCRIPTION: This Vue component implements a dropdown menu for toggling between light, dark, and system color modes. It uses the useColorMode composable from Nuxt Color Mode and custom UI components for the dropdown and button.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/nuxt.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Adding Actions Column Definition in TypeScript
DESCRIPTION: Demonstrates how to add an actions column with a dropdown component to the table columns definition.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_7

LANGUAGE: typescript
CODE:
```
import DropdownAction from '@/components/DataTableDropDown.vue'
import { ColumnDef } from '@tanstack/vue-table'

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        payment,
      }))
    },
  },
]
```

----------------------------------------

TITLE: Implementing Tabs Component in Vue
DESCRIPTION: This snippet demonstrates how to use the Tabs component in a Vue template. It shows the basic structure with TabsList, TabsTrigger, and TabsContent elements.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tabs.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">
        Account
      </TabsTrigger>
      <TabsTrigger value="password">
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
      Change your password here.
    </TabsContent>
  </Tabs>
</template>
```

----------------------------------------

TITLE: Implementing Sortable Column in TanStack Table Column Definition
DESCRIPTION: A TypeScript snippet showing how to use the DataTableColumnHeader component in a column definition. The header property uses the h() function to render the custom column header with appropriate props for the column and title.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_21

LANGUAGE: typescript
CODE:
```
export const columns = [
  {
    accessorKey: "email",
    header: ({ column }) => (
        h(DataTableColumnHeader, {
            column: column,
            title: 'Email'
        })
    ),
  },
]
```

----------------------------------------

TITLE: Implementing Basic Table Component in Vue
DESCRIPTION: Example implementation of a basic table structure using ShadcnVue components. Demonstrates table layout with header, body, and caption along with sample invoice data.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/table.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>

<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          Invoice
        </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">
          Amount
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">
          INV001
        </TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell class="text-right">
          $250.00
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

----------------------------------------

TITLE: Configuring Zod Schema with Descriptions
DESCRIPTION: Example of using Zod schema with field descriptions for form generation
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_1

LANGUAGE: typescript
CODE:
```
const formSchema = z.object({
  username: z.string().describe('Your username'),
  someValue: z.string(), // Will be "Some Value"
})
```

----------------------------------------

TITLE: Creating a Collapsible SidebarGroup in Vue
DESCRIPTION: Shows how to implement a collapsible SidebarGroup using the Collapsible component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_19

LANGUAGE: vue
CODE:
```
<template>
  <Collapsible defaultOpen class="group/collapsible">
    <SidebarGroup>
      <SidebarGroupLabel asChild>
        <CollapsibleTrigger>
          Help
          <ChevronDown class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent />
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
</template>
```

----------------------------------------

TITLE: FormField with Native Input Element Example
DESCRIPTION: An example showing how to use the FormField component with a native HTML input element instead of a custom component. It demonstrates the usage of the field binding pattern.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/form.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<FormField v-slot="{ field }">
  <FormItem>
    <FormLabel>Username</FormLabel>
    <FormControl>
      <input placeholder="shadcn" v-bind="field" />
    </FormControl>
    <FormDescription />
    <FormMessage />
  </FormItem>
</FormField>
```

----------------------------------------

TITLE: SidebarRail Component Usage in Vue
DESCRIPTION: Shows how to incorporate a SidebarRail component within a Sidebar structure, typically used for a collapsible rail that can toggle the sidebar visibility.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_34

LANGUAGE: vue
CODE:
```
<template>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Installing Radio Group Component with Shadcn-Vue CLI
DESCRIPTION: Command to add the radio-group component to your Shadcn-Vue project using the CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/radio-group.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add radio-group
```

----------------------------------------

TITLE: Installing Shadcn Nuxt Package
DESCRIPTION: Commands for installing the shadcn-nuxt package using different package managers (pnpm, yarn, npm).
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/module/README.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
# Using pnpm
pnpm add -D shadcn-nuxt

# Using yarn
yarn add --dev shadcn-nuxt

# Using npm
npm install --save-dev shadcn-nuxt
```

----------------------------------------

TITLE: Implementing SidebarHeader with DropdownMenu in Vue
DESCRIPTION: Shows how to add a SidebarHeader component with a DropdownMenu to the Sidebar.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_15

LANGUAGE: vue
CODE:
```
<template>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown class="ml-auto" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--bits-dropdown-menu-anchor-width]">
              <DropdownMenuItem>
                <span>Acme Inc</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Acme Corp.</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Importing Date Picker Components in Vue.js
DESCRIPTION: This snippet demonstrates how to import and use the Date Picker component in a Vue.js application. It includes instructions for installing the necessary components like Popover, Calendar, and Range Calendar.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/date-picker.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<ComponentPreview name="DatePickerDemo" />
```

----------------------------------------

TITLE: Implementing Utility Classes in HTML
DESCRIPTION: Example of using Tailwind utility classes for theming with dark mode support.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/theming.md#2025-04-23_snippet_0

LANGUAGE: html
CODE:
```
<div class="bg-zinc-950 dark:bg-white" />
```

----------------------------------------

TITLE: Basic Sheet Component Usage in Vue
DESCRIPTION: Example showing how to use the Sheet component with its various sub-components like SheetTrigger, SheetContent, SheetHeader, SheetTitle, and SheetDescription.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sheet.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
```

----------------------------------------

TITLE: Optional Fields Configuration
DESCRIPTION: Example of making fields optional in Zod schema
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_2

LANGUAGE: typescript
CODE:
```
const formSchema = z.object({
  username: z.string().optional(),
})
```

----------------------------------------

TITLE: Initializing shadcn-vue in Astro Project
DESCRIPTION: Command to run the shadcn-vue initialization in the Astro project setup.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#2025-04-23_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Init Command Options for Shadcn-Vue CLI
DESCRIPTION: Available options for the 'init' command including defaults, force overwrite, confirmation skipping, and working directory specification.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_2

LANGUAGE: txt
CODE:
```
Usage: shadcn-vue init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         the components to add or a url to the component.

Options:
  -d, --defaults    use default values i.e new-york, zinc and css variables. (default: false)
  -f, --force       force overwrite of existing components.json. (default: false)
  -y, --yes         skip confirmation prompt. (default: false)
  -c, --cwd <cwd>   the working directory. defaults to the current directory.
  -h, --help       display help for command
```

----------------------------------------

TITLE: SidebarMenuBadge Example in Vue
DESCRIPTION: Shows how to add a badge within a SidebarMenuItem to display counters or notification indicators alongside menu items.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_29

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenuItem>
    <SidebarMenuButton />
    <SidebarMenuBadge>24</SidebarMenuBadge>
  </SidebarMenuItem>
</template>
```

----------------------------------------

TITLE: Installing Skeleton Component with CLI in shadcn-vue
DESCRIPTION: Command to install the Skeleton component using the shadcn-vue CLI tool. This is the recommended installation method for adding the component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/skeleton.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add skeleton
```

----------------------------------------

TITLE: Tailwind Configuration for Custom Colors
DESCRIPTION: JavaScript configuration to extend Tailwind theme with custom warning colors.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/theming.md#2025-04-23_snippet_5

LANGUAGE: javascript
CODE:
```
module.exports = {
  theme: {
    extend: {
      colors: {
        'warning': 'hsl(var(--warning))',
        'warning-foreground': 'hsl(var(--warning-foreground))',
      },
    },
  },
}
```

----------------------------------------

TITLE: Creating Mode Toggle Component in Vue
DESCRIPTION: This Vue component creates a dropdown menu for toggling between light, dark, and system color modes. It uses @vueuse/core for color mode management and includes icons for visual representation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/astro.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

----------------------------------------

TITLE: Setting Up Import Aliases in jsconfig.json
DESCRIPTION: This snippet demonstrates how to configure import aliases in a JavaScript project using jsconfig.json, allowing you to use the @/* path alias for imports in your code.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation.md#2025-04-23_snippet_1

LANGUAGE: json
CODE:
```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./"]
    }
  }
}
```

----------------------------------------

TITLE: Adding Pagination Controls Component
DESCRIPTION: Implementation of pagination controls using Vue components with previous and next page functionality.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_9

LANGUAGE: vue
CODE:
```
<script lang="ts" generic="TData, TValue">
import { Button } from '@/components/ui/button'

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})
</script>

<template>
  <div>
    <div class="border rounded-md">
      <Table>
        { // .... }
      </Table>
    </div>
    <div class="flex items-center justify-end py-4 space-x-2">
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
        Next
      </Button>
    </div>
  </div>
</template>
```

----------------------------------------

TITLE: Initializing CLI Command for Components.json
DESCRIPTION: Command to create the initial components.json file in your project using the shadcn-vue CLI
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Controlled Sidebar with v-model in Vue
DESCRIPTION: Demonstrates implementing a controlled sidebar using v-model:open to bind the sidebar's open state to a reactive reference, allowing programmatic control of the sidebar state.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_35

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar";
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <SidebarProvider v-model:open="open">
    <Sidebar />
  </SidebarProvider>
</template>
```

----------------------------------------

TITLE: Implementing a Basic Context Menu in Vue
DESCRIPTION: This example demonstrates how to implement a context menu component in Vue. It imports all necessary components and sets up a basic structure with a trigger and menu items for user interaction.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/context-menu.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

----------------------------------------

TITLE: SidebarMenuButton with Icon and Label in Vue
DESCRIPTION: Demonstrates how to include an icon and a truncated label inside a SidebarMenuButton. The label needs to be wrapped in a span tag for proper styling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_23

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
</template>
```

----------------------------------------

TITLE: Installing Slider Component via NPX
DESCRIPTION: Command to add the Slider component to your project using npx and shadcn-vue.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/slider.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add slider
```

----------------------------------------

TITLE: Adding Toaster Component to App.vue
DESCRIPTION: Code snippet showing how to add the Toaster component to your main App.vue file, including a ClientOnly wrapper for Nuxt applications.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sonner.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster />

  <!-- Nuxt  -->
  <ClientOnly>
    <Toaster />
  </ClientOnly>
</template>
```

----------------------------------------

TITLE: Updating CSS Variables for Tailwind v4 in shadcn-vue
DESCRIPTION: This snippet demonstrates how to update CSS variables to work with Tailwind v4's new @theme directive. It shows the initial structure and the recommended changes for better compatibility and ease of use.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#2025-04-23_snippet_3

LANGUAGE: css
CODE:
```
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
}
```

LANGUAGE: css
CODE:
```
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(0 0% 3.9%);
}

.dark {
  --background: hsl(0 0% 3.9%);
  --foreground: hsl(0 0% 98%);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

----------------------------------------

TITLE: Basic Sidebar Usage in Vue
DESCRIPTION: Demonstrates how to use the Sidebar component with different props for side, variant, and collapsible behavior.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_12

LANGUAGE: vue
CODE:
```
<Sidebar side="left | right" />

<Sidebar variant="sidebar | floating | inset" />

<Sidebar collapsible="offcanvas | icon | none" />
```

----------------------------------------

TITLE: Installing Tailwind CSS and Vite Plugin
DESCRIPTION: Command to install Tailwind CSS and its Vite plugin for Nuxt.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_2

LANGUAGE: bash
CODE:
```
npm install tailwindcss @tailwindcss/vite
```

----------------------------------------

TITLE: Tailwind Base Color Configuration
DESCRIPTION: Configuration for setting the default color palette, which cannot be changed after initialization
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_5

LANGUAGE: json
CODE:
```
{
  "tailwind": {
    "baseColor": "gray" | "neutral" | "slate" | "stone" | "zinc"
  }
}
```

----------------------------------------

TITLE: Installing Command Component in shadcn-vue
DESCRIPTION: Command to add the Command component to your shadcn-vue project using the CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/command.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add command
```

----------------------------------------

TITLE: Installing Tailwind CSS dependencies
DESCRIPTION: Command to install Tailwind CSS and its Vite plugin which are required for styling shadcn-vue components.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install tailwindcss @tailwindcss/vite
```

----------------------------------------

TITLE: Updating Nuxt Configuration for Tailwind CSS
DESCRIPTION: TypeScript configuration to add Tailwind CSS and its Vite plugin to Nuxt.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_4

LANGUAGE: typescript
CODE:
```
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ...
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
```

----------------------------------------

TITLE: Configuring registry.json for shadcn-vue Component Registry
DESCRIPTION: This snippet shows how to create and structure the registry.json file, which is required for using the shadcn-vue CLI to build your registry. It includes the schema, name, homepage, and items array.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#2025-04-23_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

----------------------------------------

TITLE: Implementing Hover Card Component in Vue
DESCRIPTION: Example of how to use the Hover Card component in a Vue template. It demonstrates importing the necessary components, setting up the script section, and structuring the template with HoverCard, HoverCardTrigger, and HoverCardContent.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/hover-card.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      The Vue Framework – created and maintained by @vuejs.
    </HoverCardContent>
  </HoverCard>
</template>
```

----------------------------------------

TITLE: Basic Toggle Group Implementation
DESCRIPTION: Example of implementing a basic toggle group component with three items in Vue. Shows how to import and use the ToggleGroup and ToggleGroupItem components with single selection type.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle-group.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="single">
    <ToggleGroupItem value="a">
      A
    </ToggleGroupItem>
    <ToggleGroupItem value="b">
      B
    </ToggleGroupItem>
    <ToggleGroupItem value="c">
      C
    </ToggleGroupItem>
  </ToggleGroup>
</template>
```

----------------------------------------

TITLE: Displaying Selected Rows Count in Vue.js Template
DESCRIPTION: This snippet shows how to display the count of selected rows in the table. It uses the table's getFilteredSelectedRowModel and getFilteredRowModel methods to calculate and show the selection information.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_16

LANGUAGE: vue
CODE:
```
<template>
  <div>
    <div class="border rounded-md">
        <Table />
    </div>

    <div class="flex items-center justify-end space-x-2 py-4">
      <div class="flex-1 text-sm text-muted-foreground">
        {{ table.getFilteredSelectedRowModel().rows.length }} of
        {{ table.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
      <div class="space-x-2">
        <PaginationButtons />
      </div>
    </div>
  </div>
</template>
```

----------------------------------------

TITLE: Installing Sonner Component with shadcn-vue CLI
DESCRIPTION: Command to add the Sonner component to your project using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sonner.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add sonner
```

----------------------------------------

TITLE: Using shadcn-vue Switch Component
DESCRIPTION: Example of importing and using the Switch component in a Vue component template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/laravel.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Switch } from '@/Components/ui/switch'
</script>

<template>
  <div>
    <Switch />
  </div>
</template>
```

----------------------------------------

TITLE: Configuring Component Settings
DESCRIPTION: JSON configuration file for component settings including style preferences, TypeScript usage, and various project aliases.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#2025-04-23_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "new-york",
  "typescript": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "composables": "@/composables",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "iconLibrary": "lucide"
}
```

----------------------------------------

TITLE: Adding Child Elements to AutoForm in Vue
DESCRIPTION: Demonstrates how to add additional elements like buttons and text content below an AutoForm component. Shows the placement of child elements within the AutoForm template.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<template>
  <AutoForm>
    <Button>Send now</Button>
    <p class="text-gray-500 text-sm">
      By submitting this form, you agree to our
      <a href="#" class="text-primary underline">
        terms and conditions
      </a>.
    </p>
  </AutoForm>
</template>
```

----------------------------------------

TITLE: Installing Tooltip Component with shadcn-vue CLI
DESCRIPTION: Command to install the Tooltip component using the shadcn-vue CLI tool. This will add the tooltip component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tooltip.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add tooltip
```

----------------------------------------

TITLE: Configuring Shadcn Nuxt Module
DESCRIPTION: Configuration setup in nuxt.config.ts file to enable the Shadcn module with customizable options for prefix and component directory.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/module/README.md#2025-04-23_snippet_1

LANGUAGE: javascript
CODE:
```
export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
```

----------------------------------------

TITLE: Custom CSS Variable Implementation
DESCRIPTION: Example of custom warning color implementation in CSS with dark mode support.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/theming.md#2025-04-23_snippet_4

LANGUAGE: css
CODE:
```
:root {
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}

.dark {
  --warning: 48 96% 89%;
  --warning-foreground: 38 92% 50%;
}
```

----------------------------------------

TITLE: Basic Usage of Alert Component in Vue
DESCRIPTION: Example showing how to import and use the Alert component with its child components AlertTitle and AlertDescription in a Vue component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/alert.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
</script>

<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>
```

----------------------------------------

TITLE: Implementing a Dark Mode Toggle Component with VueUse in Vitepress
DESCRIPTION: Creates a theme toggle button component using shadcn-vue Button component and VueUse's useToggle hook. The component displays different icons based on the current theme and allows users to switch between light and dark modes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/vitepress.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from '@/registry/default/ui/button'
import { useToggle } from '@vueuse/core'
import { useData } from 'vitepress'

const { frontmatter, isDark } = useData()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button variant="outline">
    <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
```

----------------------------------------

TITLE: Basic SidebarMenu Implementation with Projects List in Vue
DESCRIPTION: Example of a SidebarMenu component that renders a list of projects. Each project is displayed as a menu item with an icon and a name, linking to a specified URL.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_21

LANGUAGE: vue
CODE:
```
<template>
<Sidebar>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
            <SidebarMenuItem v-for="project in projects" :key="project.name">
              <SidebarMenuButton asChild>
                <a :href="project.url">
                  <component :is="project.icon" />
                  <span>{{project.name}}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
</template>
```

----------------------------------------

TITLE: Importing and Using Blocks Component in Vue
DESCRIPTION: This snippet imports the Blocks component from a specific path and sets it up for use in the Vue template. The component is likely responsible for rendering various building blocks or UI elements.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/blocks.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import Blocks from "../../.vitepress/theme/components/Blocks.vue"
</script>

<Blocks />
```

----------------------------------------

TITLE: Initializing shadcn-vue
DESCRIPTION: Command to initialize shadcn-vue and configure the project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_8

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Accessing Carousel API with Template Ref
DESCRIPTION: Shows how to access the carousel API through a template ref on the Carousel component for programmatic control.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_8

LANGUAGE: vue
CODE:
```
<script setup>
const carouselContainerRef = ref<InstanceType<typeof Carousel> | null>(null)

function accessApi() {
  carouselContainerRef.value?.carouselApi.on('select', () => {})
}
</script>

<template>
  <Carousel ref="carouselContainerRef">
    ...
  </Carousel>
</template>
```

----------------------------------------

TITLE: Adding Presets to Date Picker in Vue.js
DESCRIPTION: This example shows how to incorporate preset date options into the Date Picker component, allowing users to quickly select common date ranges.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/date-picker.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<ComponentPreview name="DatePickerWithPresets" />
```

----------------------------------------

TITLE: Basic Stepper Component Implementation in Vue
DESCRIPTION: Example implementation of a basic stepper component with two steps, showing how to structure the component hierarchy with indicators, titles, and descriptions.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/stepper.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
</script>

<template>
  <Stepper>
    <StepperItem :step="1">
      <StepperTrigger>
        <StepperIndicator>1</StepperIndicator>
        <StepperTitle>Step 1</StepperTitle>
        <StepperDescription>This is the first step</StepperDescription>
      </StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger>
        <StepperIndicator>2</StepperIndicator>
        <StepperTitle>Step 2</StepperTitle>
        <StepperDescription>This is the second step</StepperDescription>
      </StepperTrigger>
    </StepperItem>
  </Stepper>
</template>
```

----------------------------------------

TITLE: Using shadcn-vue Components in Astro
DESCRIPTION: Example of how to import and use a shadcn-vue component (Button) in an Astro file.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#2025-04-23_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Button } from "@/components/ui/button"
---

<html lang="en">
	<head>
		<title>Astro</title>
	</head>
	<body>
		<Button>Hello World</Button>
	</body>
</html>
```

----------------------------------------

TITLE: Extending shadcn-vue with Custom Style Registry Item
DESCRIPTION: A registry style item that extends shadcn-vue by installing dependencies, adding components, and setting CSS variables. It installs @iconify/vue, adds Login01 block and calendar component, and sets font and color variables.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@iconify/vue"],
  "registryDependencies": [
    "Login01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

----------------------------------------

TITLE: Components Alias Configuration
DESCRIPTION: Configuration for setting import alias for components
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_9

LANGUAGE: json
CODE:
```
{
  "aliases": {
    "components": "@/components"
  }
}
```

----------------------------------------

TITLE: UI Components Alias Configuration
DESCRIPTION: Configuration for setting import alias for UI components
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_10

LANGUAGE: json
CODE:
```
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

----------------------------------------

TITLE: Lib Functions Alias Configuration
DESCRIPTION: Configuration for setting import alias for lib functions
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_11

LANGUAGE: json
CODE:
```
{
  "aliases": {
    "lib": "@/lib"
  }
}
```

----------------------------------------

TITLE: Installing Required Dependency
DESCRIPTION: Command to install the required reka-ui dependency for manual installation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/aspect-ratio.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: Installing Context Menu Component with Shadcn Vue CLI
DESCRIPTION: This command uses the Shadcn Vue CLI to add the context-menu component to your project. It automatically sets up all the necessary files and dependencies.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/context-menu.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add context-menu
```

----------------------------------------

TITLE: Installing Checkbox Component - shadcn-vue CLI
DESCRIPTION: Command to add the checkbox component to a shadcn-vue project using the CLI tool
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/checkbox.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add checkbox
```

----------------------------------------

TITLE: Installing Menubar Component in Shadcn-Vue
DESCRIPTION: Command to install the Menubar component using the shadcn-vue CLI. This installs all necessary dependencies and adds the component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/menubar.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add menubar
```

----------------------------------------

TITLE: Creating Utility Function for Class Names
DESCRIPTION: TypeScript utility function that combines clsx and tailwind-merge for handling class name combinations.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#2025-04-23_snippet_3

LANGUAGE: typescript
CODE:
```
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

----------------------------------------

TITLE: Installing Sheet Component with shadcn-vue
DESCRIPTION: Command to install the Sheet component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sheet.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add sheet
```

----------------------------------------

TITLE: Creating Complex Utility through Registry Component
DESCRIPTION: A registry component item that adds a complex utility for hiding scrollbars. It defines a scrollbar-hidden utility with nested selectors to hide webkit scrollbars using the &:: syntax.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_11

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Adding Base Styles through Registry Style Item
DESCRIPTION: A registry style item that adds custom base styles for heading elements. It uses the @layer base directive to style h1 and h2 elements with specific font sizes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_8

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Basic Badge Component Usage
DESCRIPTION: Simple example showing how to import and use the Badge component in a Vue component. This demonstrates the most basic implementation with default styling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/badge.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge>Badge</Badge>
</template>
```

----------------------------------------

TITLE: Implementing Persisted Sidebar State with Nuxt
DESCRIPTION: Setting up the SidebarProvider to persist the sidebar state across page reloads using cookies with Nuxt.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_10

LANGUAGE: vue
CODE:
```
<!-- with Nuxt -->
<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar.vue"

const defaultOpen = useCookie<string>('sidebar_state')
</script>

<template>
  <SidebarProvider :defaultOpen="defaultOpen">
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <RouterView />  <!-- or <slot /> -->
    </main>
  </SidebarProvider>
</template>
```

----------------------------------------

TITLE: Installing @nuxtjs/color-mode Module
DESCRIPTION: This snippet shows how to install the @nuxtjs/color-mode module using npm. This module is essential for implementing dark mode functionality in a Nuxt application.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/nuxt.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npm install -D @nuxtjs/color-mode
```

----------------------------------------

TITLE: Tailwind Prefix Configuration
DESCRIPTION: Configuration for setting custom prefix for Tailwind CSS utility classes
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_7

LANGUAGE: json
CODE:
```
{
  "tailwind": {
    "prefix": "tw-"
  }
}
```

----------------------------------------

TITLE: Customizing Switch with Icon in Thumb
DESCRIPTION: Example of adding icons to the Switch component's thumb based on state. Uses a conditional rendering approach with icons for dark and light themes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<template>
  <Switch :model-value="isDark" @update:model-value="toggleTheme">
    <template #thumb>
      <Icon v-if="isDark" icon="lucide:moon" class="size-3" />
      <Icon v-else icon="lucide:sun" class="size-3" />
    </template>
  </Switch>
</template>
```

----------------------------------------

TITLE: Installing Dropdown Menu Component with shadcn-vue
DESCRIPTION: Command to add the dropdown menu component to a Vue project using shadcn-vue.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/dropdown-menu.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add dropdown-menu
```

----------------------------------------

TITLE: Installing Card Component with shadcn-vue CLI
DESCRIPTION: Command to install the Card component using the shadcn-vue CLI tool. This adds the card component and its related files to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/card.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add card
```

----------------------------------------

TITLE: Installing Dark Mode Dependencies for Vue
DESCRIPTION: Commands to install the required dependencies for implementing dark mode functionality in a Vue application. The core dependency is @vueuse/core which provides the useColorMode composable for managing theme state.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/vite.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npm install @vueuse/core
```

----------------------------------------

TITLE: Installing Select Component with shadcn-vue CLI
DESCRIPTION: Command to add the Select component to your shadcn-vue project using the CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/select.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add select
```

----------------------------------------

TITLE: Creating Inline Theme Script in Astro
DESCRIPTION: This snippet demonstrates how to create an inline script in an Astro page to handle theme preference detection and application. It uses localStorage for persistence and MutationObserver to track theme changes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/astro.md#2025-04-23_snippet_0

LANGUAGE: astro
CODE:
```
---
import '../styles/globals.css'
---

<script is:inline>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
</script>

<html lang="en">
	<body>
      <h1>Astro</h1>
	</body>
</html>
</script>
```

----------------------------------------

TITLE: Tailwind CSS Path Configuration
DESCRIPTION: Configuration for specifying the location of the main CSS file that imports Tailwind
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components-json.md#2025-04-23_snippet_4

LANGUAGE: json
CODE:
```
{
  "tailwind": {
    "css": "src/assets/index.css"
  }
}
```

----------------------------------------

TITLE: SidebarMenuSkeleton Loading State in Vue
DESCRIPTION: Demonstrates how to implement a skeleton loading state in SidebarMenu while waiting for data to load, creating placeholder menu items.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_30

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenu>
    <SidebarMenuItem v-for="i in 5" :key="i">
      <SidebarMenuSkeleton />
    </SidebarMenuItem>
  </SidebarMenu>
</template>
```

----------------------------------------

TITLE: Installing Navigation Menu Component with shadcn-vue
DESCRIPTION: Command to install the Navigation Menu component using the shadcn-vue CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/navigation-menu.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add navigation-menu
```

----------------------------------------

TITLE: Basic Command Component Implementation in Vue
DESCRIPTION: Basic implementation of the Command component showing how to structure the command menu with input, list, groups, items, and separators.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/command.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
</script>

<template>
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">
          Calendar
        </CommandItem>
        <CommandItem value="search-emoji">
          Search Emoji
        </CommandItem>
        <CommandItem value="calculator">
          Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="profile">
          Profile
        </CommandItem>
        <CommandItem value="billing">
          Billing
        </CommandItem>
        <CommandItem value="settings">
          Settings
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
```

----------------------------------------

TITLE: Installing Combobox Component with shadcn-vue CLI
DESCRIPTION: Command to add the Combobox component to your shadcn-vue project using the CLI tool.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/combobox.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add combobox
```

----------------------------------------

TITLE: Installing Alert Dialog Component
DESCRIPTION: Command to add the alert dialog component to a Vue project using shadcn-vue CLI
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/alert-dialog.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add alert-dialog
```

----------------------------------------

TITLE: SidebarMenuAction with DropdownMenu in Vue
DESCRIPTION: Demonstrates integrating a DropdownMenu with SidebarMenuAction to create a context menu. The dropdown is triggered by clicking on the menu action with options positioned to the right of the sidebar.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_26

LANGUAGE: vue
CODE:
```
<template>
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SidebarMenuAction>
        <MoreHorizontal />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <DropdownMenuItem>
        <span>Edit Project</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Delete Project</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenuItem>
</template>
```

----------------------------------------

TITLE: SidebarMenuAction with Button and Link in Vue
DESCRIPTION: Example showing how SidebarMenuAction can work independently alongside SidebarMenuButton, allowing for a clickable link alongside an action button.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_25

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenuItem>
    <SidebarMenuButton asChild>
      <a href="#">
        <Home />
        <span>Home</span>
      </a>
    </SidebarMenuButton>
    <SidebarMenuAction>
      <Plus /> <span class="sr-only">Add Project</span>
    </SidebarMenuAction>
  </SidebarMenuItem>
</template>
```

----------------------------------------

TITLE: Configuring Utility Classes in components.json
DESCRIPTION: JSON configuration for enabling Tailwind utility classes by setting cssVariables to false.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/theming.md#2025-04-23_snippet_1

LANGUAGE: json
CODE:
```
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

----------------------------------------

TITLE: Creating Vertical Resizable Panels
DESCRIPTION: Implementation of a vertical resizable panel group. Uses the direction prop set to "vertical" instead of the default horizontal orientation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="vertical">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
</template>
```

----------------------------------------

TITLE: Custom Field Component Implementation
DESCRIPTION: Vue component implementation for custom form field rendering
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { FieldProps } from './interface'
import { AutoFormLabel } from '@/ui/auto-form'
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/ui/form'
import { Input } from '@/ui/input'
import { computed } from 'vue'
import AutoFormLabel from './AutoFormLabel.vue'

const props = defineProps<FieldProps>()
</script>

<template>
  <FormField v-slot="slotProps" :name="fieldName">
    <FormItem v-bind="$attrs">
      <AutoFormLabel v-if="!config?.hideLabel" :required="required">
        {{ config?.label }}
      </AutoFormLabel>
      <FormControl>
        <CustomInput v-bind="slotProps" />
      </FormControl>
      <FormDescription v-if="config?.description">
        {{ config.description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
```

----------------------------------------

TITLE: Custom Sidebar Toggle with useSidebar Composable in Vue
DESCRIPTION: Demonstrates creating a custom sidebar toggle button using the useSidebar composable to access the toggleSidebar function programmatically.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_33

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";
const { toggleSidebar } = useSidebar();
</script>

<template>
  <button @click="toggleSidebar">Toggle Sidebar</button>
</template>
```

----------------------------------------

TITLE: Configuring Nuxt for Dark Mode
DESCRIPTION: This TypeScript code configures the Nuxt application to use the @nuxtjs/color-mode module. It adds the module to the Nuxt configuration and sets the classSuffix option to an empty string for proper CSS class handling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/nuxt.md#2025-04-23_snippet_1

LANGUAGE: typescript
CODE:
```
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
})
```

----------------------------------------

TITLE: Importing and Rendering Cards Component in Vue
DESCRIPTION: This Vue component imports a Cards example component from the examples directory and renders it. It uses the script setup syntax, which is part of Vue's Composition API, to simplify component definitions.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/cards.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import CardsExample from "@/examples/cards/Example.vue"
</script>

<CardsExample />
```

----------------------------------------

TITLE: Dropdown Menu in Breadcrumb
DESCRIPTION: Example of integrating a dropdown menu within a breadcrumb item using DropdownMenu component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/breadcrumb.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { BreadcrumbItem } from '@/components/ui/breadcrumb'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/components/ui/dropdown-menu'

import ChevronDownIcon from '~icons/radix-icons/chevron-down'
</script>

<template>
  <BreadcrumbItem>
    <DropdownMenu>
      <DropdownMenuTrigger class="flex items-center gap-1">
        Components
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Documentation</DropdownMenuItem>
        <DropdownMenuItem>Themes</DropdownMenuItem>
        <DropdownMenuItem>GitHub</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </BreadcrumbItem>
</template>
```

----------------------------------------

TITLE: Importing and Rendering Authentication Component in Vue
DESCRIPTION: This snippet imports an AuthenticationExample component from a specific path and then renders it in the template. It uses the script setup syntax, which is part of Vue's Composition API.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/authentication.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import AuthenticationExample from "@/examples/authentication/Example.vue"
</script>

<AuthenticationExample />
```

----------------------------------------

TITLE: Importing and Rendering a Dashboard Example Component in Vue
DESCRIPTION: This snippet shows how to import a component from a specific path in the project and then render it in the template section. The component uses Vue's script setup syntax for composition API and renders the imported DashboardExample component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/dashboard.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import DashboardExample from "@/examples/dashboard/Example.vue"
</script>

<DashboardExample />
```

----------------------------------------

TITLE: Creating Component Root with Primitive in Vue Button Component
DESCRIPTION: Shows implementation of a Button component using Primitive as root component. Includes prop interface extension, default props configuration, and variant handling with proper type support.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#2025-04-23_snippet_10

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
```

----------------------------------------

TITLE: Installing Dependencies for Dark Mode in Astro
DESCRIPTION: This snippet shows the commands to install necessary dependencies for implementing dark mode. It includes @vueuse/core for color mode management and optional icon-related packages.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/astro.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install @vueuse/core
```

LANGUAGE: bash
CODE:
```
npm install -D @iconify/vue @iconify-json/radix-icons
```

----------------------------------------

TITLE: Basic Sidebar Component Structure
DESCRIPTION: Template for creating a sidebar component with header, content, group, and footer sections.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
</script>

<template>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
</template>
```

----------------------------------------

TITLE: TypeScript Interface for Custom Chart Tooltip Props
DESCRIPTION: TypeScript prop definitions for creating custom chart tooltips. Defines the expected props structure that a custom tooltip component would receive, including title and data array containing name, color and value for each data point.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts.md#2025-04-23_snippet_2

LANGUAGE: ts
CODE:
```
defineProps<{
  title?: string
  data: {
    name: string
    color: string
    value: any
  }[]
}>()
```

----------------------------------------

TITLE: Collapsed Breadcrumb with Ellipsis
DESCRIPTION: Implementation showing how to handle long breadcrumbs using the BreadcrumbEllipsis component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/breadcrumb.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <!-- ... -->
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <!-- ... -->
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

----------------------------------------

TITLE: Using DataTableViewOptions Component in Vue.js
DESCRIPTION: This snippet shows how to use the DataTableViewOptions component within a parent component, passing the table instance as a prop.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_25

LANGUAGE: vue
CODE:
```
<DataTableViewOptions :table="table" />
```

----------------------------------------

TITLE: Configuration Prompts for Shadcn-Vue Initialization
DESCRIPTION: Interactive prompts that appear during initialization to configure components.json, including style selection, base color choice, and CSS variable preferences.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_1

LANGUAGE: txt
CODE:
```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```

----------------------------------------

TITLE: Creating Simple Utility through Registry Component
DESCRIPTION: A registry component item that adds a simple utility for content-visibility. It defines a content-auto utility that sets content-visibility to auto, optimizing rendering performance.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_10

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

----------------------------------------

TITLE: Installing Optional Icon Dependencies for Theme Toggle
DESCRIPTION: Installs Iconify packages for Vue to provide icons for the theme toggle button, including the Radix Icons collection.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/vitepress.md#2025-04-23_snippet_1

LANGUAGE: bash
CODE:
```
npm install -D @iconify/vue @iconify-json/radix-icons
```

----------------------------------------

TITLE: Using Carousel Slot Props for Conditional Rendering
DESCRIPTION: Demonstrates how to use reactive slot props from the Carousel component for conditional rendering of navigation buttons.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_10

LANGUAGE: vue
CODE:
```
<template>
  <Carousel v-slot="{ canScrollNext, canScrollPrev }">
    ...
    <CarouselPrevious v-if="canScrollPrev" />
    <CarouselNext v-if="canScrollNext" />
  </Carousel>
</template>
```

----------------------------------------

TITLE: Adding Components with shadcn-vue CLI
DESCRIPTION: Command to add new components or migrate existing ones from Radix Vue to Reka UI.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/changelog.md#2025-04-23_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add <components>
```

----------------------------------------

TITLE: Implementing Button Component in Vue.js
DESCRIPTION: Vue component implementation for a customizable Button. It uses class-variance-authority for styling variants and supports different sizes and styles.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/button.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
```

----------------------------------------

TITLE: Installing Required Dependencies
DESCRIPTION: Command to install necessary npm packages including class-variance-authority, clsx, tailwind-merge, lucide-vue-next, and tw-animate-css.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npm install class-variance-authority clsx tailwind-merge lucide-vue-next tw-animate-css
```

----------------------------------------

TITLE: Listing Available Components with shadcn-vue CLI
DESCRIPTION: This command, when run without arguments, displays a list of all available components that can be added using the shadcn-vue CLI.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/packages/cli/README.md#2025-04-23_snippet_3

LANGUAGE: bash
CODE:
```
npx shadcn-vue add
```

----------------------------------------

TITLE: Adding Custom Theme Variables to shadcn-vue
DESCRIPTION: A registry theme item that adds custom theme variables such as font-heading and shadow-card. These variables can be used throughout the application for consistent styling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_6

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

----------------------------------------

TITLE: Installing and Updating Dependencies for shadcn-vue Tailwind v4 Upgrade
DESCRIPTION: This bash command installs tw-animate-css and updates several dependencies to their latest versions, which are required for the Tailwind v4 upgrade in a shadcn-vue project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#2025-04-23_snippet_4

LANGUAGE: bash
CODE:
```
pnpm i tw-animate-css
pnpm up reka-ui lucide-vue-next tailwind-merge clsx --latest
```

----------------------------------------

TITLE: Styling Sidebar Group Based on Collapsible State in Vue
DESCRIPTION: This snippet shows how to hide a SidebarGroup component when the sidebar is in 'icon' mode using CSS classes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_37

LANGUAGE: vue
CODE:
```
<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarGroup class="group-data-[collapsible=icon]:hidden" />
    </SidebarContent>
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Custom Separator Breadcrumb Implementation
DESCRIPTION: Implementation showing how to use a custom separator (Slash icon) in the breadcrumb navigation.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/breadcrumb.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Slash } from 'lucide-vue-next'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

----------------------------------------

TITLE: Badge Component Implementation in Vue
DESCRIPTION: Complete Vue component implementation for Badge. It uses class-variance-authority for styling variants including default, secondary, destructive, and outline. The component accepts a variant prop and passes along any class attributes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/badge.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

defineProps<Props>()

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface BadgeVariantProps extends VariantProps<typeof badgeVariants> {}

interface Props {
  variant?: BadgeVariantProps['variant']
}
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $attrs.class ?? '')">
    <slot />
  </div>
</template>
```

----------------------------------------

TITLE: Updating DataTable Component for Row Selection in Vue.js
DESCRIPTION: This snippet updates the DataTable component to support row selection. It adds a new reactive reference for row selection and updates the table configuration to handle row selection changes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_15

LANGUAGE: vue
CODE:
```
<script setup lang="ts" generic="TData, TValue">
const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
        get rowSelection() { return rowSelection.value },
    },
})

</script>

<template>
  <div>
    <div class="border rounded-md">
        <Table />
    </div>
  </div>
</template>
```

----------------------------------------

TITLE: Add Command Options for Shadcn-Vue CLI
DESCRIPTION: Available options for the 'add' command including confirmation skipping, overwrite settings, working directory specification, and path customization.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_5

LANGUAGE: txt
CODE:
```
Usage: shadcn-vue add [options] [components...]

add a component to your project

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -a, --all          add all available components. (default: false)
  -p, --path <path>  the path to add the component to.
  -h, --help         display help for command
```

----------------------------------------

TITLE: Styling Menu Action Based on Menu Button Active State in Vue
DESCRIPTION: This snippet demonstrates how to make a menu action visible when the associated menu button is active using CSS classes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_38

LANGUAGE: vue
CODE:
```
<template>
  <SidebarMenuItem>
    <SidebarMenuButton />
    <SidebarMenuAction
      class="peer-data-[active=true]/menu-button:opacity-100"
    />
  </SidebarMenuItem>
</template>
```

----------------------------------------

TITLE: Using Aspect Ratio Component in Vue
DESCRIPTION: Example showing how to implement the Aspect Ratio component in a Vue component with a 16:9 ratio for an image.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/aspect-ratio.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <div class="w-[450px]">
    <AspectRatio :ratio="16 / 9">
      <img src="..." alt="Image" class="rounded-md object-cover w-full h-full">
    </AspectRatio>
  </div>
</template>
```

----------------------------------------

TITLE: Updating DataTable Component in Vue.js
DESCRIPTION: This snippet shows how to update the DataTable component to include column visibility toggling. It uses the DropdownMenu component to allow users to show/hide table columns.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_13

LANGUAGE: vue
CODE:
```
<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { valueUpdater } from '@/lib/utils'

import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { h, ref } from 'vue'

import {
    FlexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useVueTable,
} from "@tanstack/vue-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})

const table = useVueTable({
    get data() { return props.data },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
    },
})

</script>

<template>
    <div>
        <div class="flex items-center py-4">
            <Input class="max-w-sm" placeholder="Filter emails..."
                :model-value="table.getColumn('email')?.getFilterValue() as string"
                @update:model-value=" table.getColumn('email')?.setFilterValue($event)" />
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" class="ml-auto">
                        Columns
                        <ChevronDown class="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem
                        v-for="column in table.getAllColumns().filter((column) => column.getCanHide())" :key="column.id"
                        class="capitalize" :modelValue="column.getIsVisible()" @update:modelValue="(value) => {
                            column.toggleVisibility(!!value)
                        }">
                        {{ column.id }}
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead v-for="header in headerGroup.headers" :key="header.id">
                            <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                                :props="header.getContext()" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                            :data-state="row.getIsSelected() ? 'selected' : undefined">
                            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell :colSpan="columns.length" class="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
```

----------------------------------------

TITLE: Configuring Sonner with Dialog Components
DESCRIPTION: Solution for using Sonner with Dialog components by adding pointer-events-auto class to the Toaster component, addressing a specific issue in shadcn-vue.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sonner.md#2025-04-23_snippet_3

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster class="pointer-events-auto" />
</template>
```

----------------------------------------

TITLE: Root Page with SidebarProvider Setup
DESCRIPTION: Setting up the SidebarProvider at the root of the application with SidebarTrigger and AppSidebar components.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>
```

----------------------------------------

TITLE: Setting up Dark Mode with Vue Components in VitePress
DESCRIPTION: This Vue script setup block imports the useData hook from VitePress to access the isDark state, and imports framework icons from the icons collection for display in the navigation cards.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode.md#2025-04-23_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
  import { useData } from 'vitepress'
  const { isDark } = useData()
  import ViteIcon from '~icons/simple-icons/vite'
  import NuxtIcon from '~icons/simple-icons/nuxtdotjs'
  import AstroIcon from '~icons/simple-icons/astro'
</script>
```

----------------------------------------

TITLE: Defining Custom Theme in shadcn-vue
DESCRIPTION: A registry theme item that defines custom theme colors using OKLCH color format. It specifies light and dark mode variables for background, foreground, primary, and sidebar elements.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#2025-04-23_snippet_2

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

----------------------------------------

TITLE: Using DataTablePagination Component in Vue.js
DESCRIPTION: This snippet demonstrates how to use the DataTablePagination component within a parent component, passing the table instance as a prop.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/data-table.md#2025-04-23_snippet_23

LANGUAGE: vue
CODE:
```
<DataTablePagination :table="table" />
```

----------------------------------------

TITLE: Creating Laravel Project with Vue
DESCRIPTION: Command to create a new Laravel project with Vue.js and Inertia using the Laravel installer.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/laravel.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
laravel new my-app --vue
```

----------------------------------------

TITLE: Configuring TypeScript Options in components.json
DESCRIPTION: This code snippet shows how to configure components.json to opt-out of TypeScript by setting the 'typescript' flag to false, while maintaining other configuration options like style, tailwind settings, and import aliases.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation.md#2025-04-23_snippet_0

LANGUAGE: json
CODE:
```
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "typescript": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
```

----------------------------------------

TITLE: Monorepo Init Command for Shadcn-Vue
DESCRIPTION: Example of the 'init' command when working in a monorepo environment, specifying a particular workspace path using the '-c' option.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#2025-04-23_snippet_6

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init -c ./apps/www
```

----------------------------------------

TITLE: Creating Astro Project with Tailwind and Vue
DESCRIPTION: Command to create a new Astro project with Tailwind CSS and Vue integration using npx.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx create-astro@latest astro-app  --template with-tailwindcss --install --add vue --git
```

----------------------------------------

TITLE: Rendering Button Components with Vue
DESCRIPTION: This code snippet shows how to render Button components with different styles and link attributes using Vue.js template syntax.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<div class="flex gap-2 items-center mt-6 not-docs">
  <Button asChild size="sm" class="rounded-lg">
    <a href="#try-it-out">Get Started</a>
  </Button>
  <Button asChild size="sm" variant="outline" class="rounded-lg">
    <a href="https://v4.shadcn-vue.com" target="_blank" rel="noopener noreferrer">
      See Demo
    </a>
  </Button>
</div>
```

----------------------------------------

TITLE: Carousel Event Handling with Event Listeners
DESCRIPTION: Example showing how to listen to carousel events using the API obtained through the init-api event.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_9

LANGUAGE: vue
CODE:
```
<script setup>
import { nextTick, ref, watch } from 'vue'
import { useCarousel } from '@/components/ui/carousel'

const api = ref<CarouselApi>()

function setApi(val: CarouselApi) {
  api.value = val
}

const stop = watch(api, (api) => {
  if (!api)
    return

  // Watch only once or use watchOnce() in @vueuse/core
  nextTick(() => stop())

  api.on('select', () => {
    // Do something on select.
  })
})
</script>

<template>
  <Carousel @init-api="setApi">
    ...
  </Carousel>
</template>
```

----------------------------------------

TITLE: Implementing Scroll Area in Vue
DESCRIPTION: Example of how to implement a ScrollArea component in a Vue application. The component creates a scrollable container with custom styling and demonstrates text content overflow handling.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/scroll-area.md#2025-04-23_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and leaving
    jokes all over the place: under the king's pillow, in his soup, even in the
    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
    then, one day, the people of the kingdom discovered that the jokes left by
    Jokester were so funny that they couldn't help but laugh. And once they
    started laughing, they couldn't stop.
  </ScrollArea>
</template>
```

----------------------------------------

TITLE: Preparing Nuxt Project
DESCRIPTION: Command to prepare the Nuxt project and generate necessary files.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_7

LANGUAGE: bash
CODE:
```
npx nuxi prepare
```

----------------------------------------

TITLE: Integrating Carousel Plugins
DESCRIPTION: Example showing how to add plugins to the carousel, specifically the autoplay functionality.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_12

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
</script>

<template>
  <Carousel
    class="w-full max-w-xs"
    :plugins="[Autoplay({
      delay: 2000,
    })]"
  >
    ...
  </Carousel>
</template>
```

----------------------------------------

TITLE: Complete Registry Item JSON Example
DESCRIPTION: A full example of a registry-item.json file showing the basic structure with name, type, title, description, and files configuration.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/registry-item-json.md#2025-04-23_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:block",
  "title": "Hello World",
  "description": "A simple hello world component.",
  "files": [
    {
      "path": "registry/new-york/HelloWorld/HelloWorld.vue",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/HelloWorld/useHelloWorld.ts",
      "type": "registry:hook"
    }
  ]
}
```

----------------------------------------

TITLE: Specifying Items in registry.json for shadcn-vue
DESCRIPTION: This JSON snippet demonstrates how to define items in the registry, following the registry-item schema specification. It includes properties for name, type, title, description, and files.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/registry-json.md#2025-04-23_snippet_4

LANGUAGE: json
CODE:
```
{
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/HelloWorld/HelloWorld.vue",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Carousel Item Sizing with Fixed Width
DESCRIPTION: Example showing how to set fixed width for carousel items using Tailwind's utility classes.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_2

LANGUAGE: vue
CODE:
```
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem class="basis-1/3">...</CarouselItem>
    <CarouselItem class="basis-1/3">...</CarouselItem>
    <CarouselItem class="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

----------------------------------------

TITLE: Carousel Item Spacing Example
DESCRIPTION: Demonstrates how to set spacing between carousel items using padding and negative margin utilities.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/carousel.md#2025-04-23_snippet_4

LANGUAGE: vue
CODE:
```
<template>
  <Carousel>
    <CarouselContent class="-ml-4">
      <CarouselItem class="pl-4">
        ...
      </CarouselItem>
      <CarouselItem class="pl-4">
        ...
      </CarouselItem>
      <CarouselItem class="pl-4">
        ...
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
```

----------------------------------------

TITLE: Setting Sidebar Cookie Name for State Persistence
DESCRIPTION: Defining the name of the cookie used to persist sidebar open/close state between page loads.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_9

LANGUAGE: typescript
CODE:
```
export const SIDEBAR_COOKIE_NAME = "sidebar_state"
```

----------------------------------------

TITLE: Defining Custom Component Registry in JSON for shadcn-vue
DESCRIPTION: This JSON snippet demonstrates the structure of a registry.json file used to define a custom component registry. It includes properties for schema, name, homepage, and a sample item entry.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/registry-json.md#2025-04-23_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-vue.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://shadcn-vue.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/HelloWorld/HelloWorld.vue",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Displaying Mode Toggle in Astro Page
DESCRIPTION: This Astro page snippet demonstrates how to import and display the ModeToggle component created in Vue. It uses the client:load directive to ensure the component is loaded and interactive on the client side.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/dark-mode/astro.md#2025-04-23_snippet_3

LANGUAGE: astro
CODE:
```
---
import '../styles/globals.css'
import ModeToggle from '@/components/ModeToggle.vue';
---

<!-- Inline script -->

<html lang="en">
	<body>
      <h1>Astro</h1>
      <ModeToggle client:load />
	</body>
</html>
```

----------------------------------------

TITLE: Basic SidebarContent Usage in Vue
DESCRIPTION: Shows how to use the SidebarContent component to wrap SidebarGroup components within a Sidebar.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_17

LANGUAGE: vue
CODE:
```
<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Creating a New Nuxt Project
DESCRIPTION: Command to create a new Nuxt project using create-nuxt-app.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npm create nuxt@latest
```

----------------------------------------

TITLE: Implementing Field Dependencies in AutoForm
DESCRIPTION: Shows how to configure field dependencies in AutoForm using the dependencies prop. Includes examples of hiding fields based on age and setting meal options based on dietary preferences. Demonstrates various dependency types including HIDES and SETS_OPTIONS.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/auto-form.md#2025-04-23_snippet_6

LANGUAGE: vue
CODE:
```
<template>
  <AutoForm
    :dependencies="[
      {
        // 'age' hides 'parentsAllowed' when the age is 18 or older
        sourceField: 'age',
        type: DependencyType.HIDES,
        targetField: 'parentsAllowed',
        when: age => age >= 18,
      },
      {
        // 'vegetarian' checkbox hides the 'Beef Wellington' option from 'mealOptions'
        // if its not already selected
        sourceField: 'vegetarian',
        type: DependencyType.SETS_OPTIONS,
        targetField: 'mealOptions',
        when: (vegetarian, mealOption) =>
          vegetarian && mealOption !== 'Beef Wellington',
        options: ['Pasta', 'Salad'],
      },
    ]"
  />
</template>
```

----------------------------------------

TITLE: Embedding Figma Design in Vue Using AspectRatio Component
DESCRIPTION: Shows how to use the AspectRatio component to embed a Figma design with a 16:9 aspect ratio. The iframe links to the shadcn UI Kit created by Pietro Schirano.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/figma.md#2025-04-23_snippet_1

LANGUAGE: html
CODE:
```
<AspectRatio :ratio="16 / 9" class="w-full mt-4">
  <iframe
    src="https://embed.figma.com/file/1203061493325953101/hf_embed?community_viewer=true&embed_host=shadcn&hub_file_id=1203061493325953101&kind=&viewer=1"
    class="h-full w-full overflow-hidden rounded-lg border bg-muted"
  />
</AspectRatio>
```

----------------------------------------

TITLE: Installing Bar Chart Component with Shadcn-Vue CLI
DESCRIPTION: Command to install the bar chart component using the shadcn-vue CLI tool. This adds the chart-bar component to your project.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/charts/bar.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add chart-bar
```

----------------------------------------

TITLE: Creating a new Vue project with Vite
DESCRIPTION: Command to create a new Vue TypeScript project using Vite as the build tool. This initializes a new Vue project with TypeScript support.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#2025-04-23_snippet_0

LANGUAGE: bash
CODE:
```
npm create vite@latest my-vue-app -- --template vue-ts
```

----------------------------------------

TITLE: Adding SidebarGroupAction to SidebarGroup in Vue
DESCRIPTION: Demonstrates how to add a SidebarGroupAction component to a SidebarGroup for additional functionality.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_20

LANGUAGE: vue
CODE:
```
<template>
  <SidebarGroup>
    <SidebarGroupLabel>Projects</SidebarGroupLabel>
    <SidebarGroupAction title="Add Project">
      <Plus /> <span class="sr-only">Add Project</span>
    </SidebarGroupAction>
    <SidebarGroupContent />
  </SidebarGroup>
</template>
```

----------------------------------------

TITLE: Minimal Sidebar Component Template
DESCRIPTION: A minimal sidebar component with just the Sidebar and SidebarContent components.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_5

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
</script>

<template>
  <Sidebar>
    <SidebarContent />
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Implementing SidebarGroup with Action in Vue
DESCRIPTION: Demonstrates how to create a SidebarGroup with a label, action, and content within a Sidebar.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#2025-04-23_snippet_18

LANGUAGE: vue
CODE:
```
<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupAction>
          <Plus /> <span class="sr-only">Add Project</span>
        </SidebarGroupAction>
        <SidebarGroupContent></SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
```

----------------------------------------

TITLE: Adding Scale Background Effect to the Drawer
DESCRIPTION: HTML code showing how to add a zoom effect to the background when the drawer is opened by adding the 'vaul-drawer-wrapper' attribute to the root component.
SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/drawer.md#2025-04-23_snippet_2

LANGUAGE: html
CODE:
```
<div vaul-drawer-wrapper id="app"></div>
```