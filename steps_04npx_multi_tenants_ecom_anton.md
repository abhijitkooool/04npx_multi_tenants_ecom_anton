## [A/01] setup of MultiTenantECOM by Antonio

@codewithantonio Suggests using bun as it is faster than npm.

bunx in place of npx
install Bun on mac/linux using the
```bash
 ~ ❯ curl -fsSL https://bun.com/install | bash
 ~ ❯ bunx --version
1.2.20

```
## Not Continued with BUN NPM is Used for the entire project

### nextjs installation we will be using specific versions i.e installing the version after checking it
```bash
 ~/nextjs/04Anton ❯ npx create-next-app@latest --version
15.4.6

 ~/nextjs/04Anton ❯ npx create-next-app@15.4.6 

Need to install the following packages:
create-next-app@15.4.6
Ok to proceed? (y) y

✔ What is your project named? … npx_multi_tenants_ecom_anton
✔ Would you like to use TypeScript? …  Yes
✔ Would you like to use ESLint? …  Yes
✔ Would you like to use Tailwind CSS? …  Yes
✔ Would you like your code inside a `src/` directory? …  Yes
✔ Would you like to use App Router? (recommended) …  Yes
✔ Would you like to use Turbopack for `next dev`? …  Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No 
Creating a new Next.js app in /Users/kriz/nextjs/04Anton/npx_multi_tenants_ecom_anton.

Using bun.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

bun install v1.2.20 (6ad208bc)

+ @eslint/eslintrc@3.3.1
+ @tailwindcss/postcss@4.1.12
+ @types/node@20.19.11 (v24.3.0 available)
+ @types/react@19.1.10
+ @types/react-dom@19.1.7
+ eslint@9.33.0
+ eslint-config-next@15.2.4 (v15.4.6 available)
+ tailwindcss@4.1.12
+ typescript@5.9.2
+ next@15.2.4 (v15.4.6 available)
+ react@19.1.1
+ react-dom@19.1.1

330 packages installed [23.76s]

Blocked 2 postinstalls. Run `bun pm untrusted` for details.
Initialized a git repository.

Success! Created 04multi_tenants_ecom_anton at /Users/kriz/nextjs/04Anton/04multi_tenants_ecom_anton
```

### upgraded tailwind to 4.1.12 latest from 4 of what anton used originally
```bash

 ~/n/04/0   main ❯ npx @tailwindcss/upgrade
≈ tailwindcss v4.1.12

│ Searching for CSS files in the current directory and its subdirectories… 

│ Migrating stylesheets… 

│ ↳ Migrated stylesheet: `./src/app/globals.css` 

│ Updating dependencies… 

│ ↳ Updated package: `tailwindcss` 

│ ↳ Updated package: `@tailwindcss/postcss` 

│ Migrating templates… 

│ ↳ Migrated templates for: `./src/app/globals.css` 

│ Verify the changes and commit them to your repository. 
```

### First running of the dev server using bun
```bash
npm run dev
```

### installing the ShadcnUI library all the component at once for better developer experience

This is not a component library. It is how you build your component library.

```bash
#check the latest version
 ~/n/04/0   main !3 ❯ bunx --bun shadcn@latest --version                                 5m 28s
2.10.0

 ~/n/04/0   main !3 ❯ bunx --bun shadcn@2.10.0 init                                         10s
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
✔ Which color would you like to use as the base color? › Neutral
✔ Writing components.json.
✔ Checking registry.
✔ Updating CSS variables in src/app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.
```

#### after the installation we now have a "04multi_tenants_ecom_anton/src/lib/utils.ts" 
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
//where the cn() method which is short for class name is useful for conditionally merge custom classed in components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### we also get "04multi_tenants_ecom_anton/components.json" which store all the we chose during the installation of shadcnui 
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```


### next we will import all the components from shadcnui

it is better to import or install all the components of the version at once because this way we do not have to remember the version of each time thus we now import all the component
```bash
 ~/n/04/0   main !4 ?3 ❯ bunx --bun shadcn@2.10.0 add --all
✔ Checking registry.
✔ Updating CSS variables in src/app/globals.css
✔ Installing dependencies.
✔ Created 47 files:
  - src/components/ui/accordion.tsx
  - src/components/ui/alert.tsx
  - src/components/ui/alert-dialog.tsx
  - src/components/ui/button.tsx
  - src/components/ui/aspect-ratio.tsx
  - src/components/ui/avatar.tsx
  - src/components/ui/badge.tsx
  - src/components/ui/breadcrumb.tsx
  - src/components/ui/calendar.tsx
  - src/components/ui/card.tsx
  - src/components/ui/carousel.tsx
  - src/components/ui/chart.tsx
  - src/components/ui/checkbox.tsx
  - src/components/ui/collapsible.tsx
  - src/components/ui/command.tsx
  - src/components/ui/dialog.tsx
  - src/components/ui/context-menu.tsx
  - src/components/ui/drawer.tsx
  - src/components/ui/dropdown-menu.tsx
  - src/components/ui/form.tsx
  - src/components/ui/label.tsx
  - src/components/ui/hover-card.tsx
  - src/components/ui/input.tsx
  - src/components/ui/input-otp.tsx
  - src/components/ui/menubar.tsx
  - src/components/ui/navigation-menu.tsx
  - src/components/ui/pagination.tsx
  - src/components/ui/popover.tsx
  - src/components/ui/progress.tsx
  - src/components/ui/radio-group.tsx
  - src/components/ui/resizable.tsx
  - src/components/ui/scroll-area.tsx
  - src/components/ui/select.tsx
  - src/components/ui/separator.tsx
  - src/components/ui/sheet.tsx
  - src/components/ui/sidebar.tsx
  - src/components/ui/tooltip.tsx
  - src/hooks/use-mobile.ts
  - src/components/ui/skeleton.tsx
  - src/components/ui/slider.tsx
  - src/components/ui/sonner.tsx
  - src/components/ui/switch.tsx
  - src/components/ui/table.tsx
  - src/components/ui/tabs.tsx
  - src/components/ui/textarea.tsx
  - src/components/ui/toggle.tsx
  - src/components/ui/toggle-group.tsx
```

### git add and commit 
```bash
 ~/n/04/0   main !4 ?5 ❯ ./aa.sh 
Enter commit messege..
01 Setup of NextApp as multi tenants ecom by anton using BUN and installed shadcnUI
[main a67d4a6] 01 Setup of NextApp as multi tenants ecom by anton using BUN and installed shadcnUI
 Committer: Kz <kriz@Kzs-MA.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 54 files changed, 5755 insertions(+), 25 deletions(-)
 create mode 100755 aa.sh
 create mode 100644 components.json
 create mode 100644 src/components/ui/accordion.tsx
 create mode 100644 src/components/ui/alert-dialog.tsx
 create mode 100644 src/components/ui/alert.tsx
 create mode 100644 src/components/ui/aspect-ratio.tsx
 create mode 100644 src/components/ui/avatar.tsx
 create mode 100644 src/components/ui/badge.tsx
 create mode 100644 src/components/ui/breadcrumb.tsx
 create mode 100644 src/components/ui/button.tsx
 create mode 100644 src/components/ui/calendar.tsx
 create mode 100644 src/components/ui/card.tsx
 create mode 100644 src/components/ui/carousel.tsx
 create mode 100644 src/components/ui/chart.tsx
 create mode 100644 src/components/ui/checkbox.tsx
 create mode 100644 src/components/ui/collapsible.tsx
 create mode 100644 src/components/ui/command.tsx
 create mode 100644 src/components/ui/context-menu.tsx
 create mode 100644 src/components/ui/dialog.tsx
 create mode 100644 src/components/ui/drawer.tsx
 create mode 100644 src/components/ui/dropdown-menu.tsx
 create mode 100644 src/components/ui/form.tsx
 create mode 100644 src/components/ui/hover-card.tsx
 create mode 100644 src/components/ui/input-otp.tsx
 create mode 100644 src/components/ui/input.tsx
 create mode 100644 src/components/ui/label.tsx
 create mode 100644 src/components/ui/menubar.tsx
 create mode 100644 src/components/ui/navigation-menu.tsx
 create mode 100644 src/components/ui/pagination.tsx
 create mode 100644 src/components/ui/popover.tsx
 create mode 100644 src/components/ui/progress.tsx
 create mode 100644 src/components/ui/radio-group.tsx
 create mode 100644 src/components/ui/resizable.tsx
 create mode 100644 src/components/ui/scroll-area.tsx
 create mode 100644 src/components/ui/select.tsx
 create mode 100644 src/components/ui/separator.tsx
 create mode 100644 src/components/ui/sheet.tsx
 create mode 100644 src/components/ui/sidebar.tsx
 create mode 100644 src/components/ui/skeleton.tsx
 create mode 100644 src/components/ui/slider.tsx
 create mode 100644 src/components/ui/sonner.tsx
 create mode 100644 src/components/ui/switch.tsx
 create mode 100644 src/components/ui/table.tsx
 create mode 100644 src/components/ui/tabs.tsx
 create mode 100644 src/components/ui/textarea.tsx
 create mode 100644 src/components/ui/toggle-group.tsx
 create mode 100644 src/components/ui/toggle.tsx
 create mode 100644 src/components/ui/tooltip.tsx
 create mode 100644 src/hooks/use-mobile.ts
 create mode 100644 src/lib/utils.ts
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
# add it to the cloud

 ~/n/04/0   main ❯ git remote add origin https://github.com/abhijitkooool/04MultiTenantECommAnton.git
git branch -M main
git push -u origin main
Enumerating objects: 84, done.
Counting objects: 100% (84/84), done.
Delta compression using up to 8 threads
Compressing objects: 100% (80/80), done.
Writing objects: 100% (84/84), 110.28 KiB | 13.78 MiB/s, done.
Total 84 (delta 14), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (14/14), done.
To https://github.com/abhijitkooool/04MultiTenantECommAnton.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

### commit msg
```git
01 Setup of NextApp as multi tenants ecom by anton using NPM and installed shadcnUI and Tailwindcss version of ^4 by default not upgraded
```

|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

## [B/02] Theme customization
### NeoBrutalism inspired by [NeoBrutalism](neobrutalism.dev) using tailwindcss
### next we go to [Layout.tsx](04multi_tenants_ecom_anton/src/app/layout.tsx) || to switch the font
```tsx
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; //default comment
//1
import { DM_Sans } from "next/font/google";
import "./globals.css";

// 2.1
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// 2.2
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//3
const dmSans = DM_Sans({
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4 
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      {/* 4 add the font to the body */}
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### to achieve neobrutalism theme we need to make the borders of our elements completely black using globals.css and also reduce the border radius or the roundness of the components also

### in [globals.css](04multi_tenants_ecom_anton/src/app/globals.css) efficient way to change the border of all the component
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  /* default to change for neobrutalism 
  --radius-md: calc(var(--radius) - 2px); reduced to -4px, for md for all components we want less round */
 --radius-md: calc(var(--radius) - 4px); 
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
/* default to change for neobrutalism 
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0); */
  --border: oklch(0 0 0);
  --input: oklch(0 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
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


### to implement that in [Homepage](04multi_tenants_ecom_anton/src/app/page.tsx)
```tsx
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      hello world
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Button variant={"elevated"}>i am a button</Button>
        </div>
        <div>
          <Input type="text" placeholder="I am in input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea name="" id="" value={"i am a textarea"} />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
```

### in [button component](src/components/ui/button.tsx) || add a variant 
```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border cursor-pointer",
  //added border, cursor-pointer, remove shadow from all buttons and text size to text-base from text-sm by abhi //Modifications for neobrutalism
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground  hover:bg-primary/90",
        destructive:
          "bg-destructive text-white  hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background  hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground  hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        // added new variant elevated abhi //Modifications for neobrutalism
        elevated:
          "bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[4px] hover:-translate-y-[4px]",
      },
      size: {
        default: "h-12 px-4 py-2 has-[>svg]:px-3", // h-12 from 9
        sm: "h-10 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5", // h-10 from 8
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4", // h-12 from 10
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```
### in [input components](src/components/ui/input.tsx) || modify for neobrutalism theme
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        //Modifications for neobrutalism
        "h-12 bg-white font-medium md:text-base",
        className
      )}
      {...props}
    />
  )
}

export { Input }
```

### in [progress component](src/components/ui/progress.tsx) || modify for neobrutalism theme
```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full",
        // modification for neobrutalism by abhi remove bg-primary/20 and replace h-3 with h-2
        "border bg-transparent",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        // replacing bg-primary from indicator with pink-400
        className="bg-pink-400 h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
```

### in [textarea component](src/components/ui/textarea.tsx) || modify for neobrutalism theme
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base  transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        //by abhi //Modifications for neobrutalism
        "md:text-base",
        className
      )}
      {...props}
    />
  );
}

export { Textarea }
```

### commit msg
```git
02 Theme Customization by modifying the shadcn ui library components
```

#### git version management tips by antonio
```bash
# add all the changes
git add .

# create a new branch of all the changes before committing and merging all the changes to the master or the main branch

git checkout -b 02_Theme_Customization
# add again 
git add .
# commit all the changes to the new branch
git commit -m "02 Theme Customization by modifying the shadcn ui library components"
# push the commit to origin 02_Theme_Customization branch
git push -u origin 02_Theme_Customization
```
### in the repo on github.com we can see the new push of the branch, github will now ask to "compare and pull request" for the branch and after checking all the changes then -> merge pull request and then -> confirm merge. we may delete the new "02_Theme_Customization" branch or keep to review or fork it for further modification

```bash
# after merging the new branch and changes with the main branch in our editor change to the main branch 
 ~/n/04/n   02_Theme_Customization ❯ git checkout main
Switched to branch 'main'
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

# then sync the local main branch with the remote main branch
 ~/n/04/n   main ⇣2 ❯ git pull origin main
From https://github.com/abhijitkooool/04npx_multi_tenants_ecom_anton
 * branch            main       -> FETCH_HEAD
Updating 61fa775..6f44808
Fast-forward
 src/app/globals.css            |  4 +++-
 src/components/ui/button.tsx   | 21 ++++++++++-----------
 src/components/ui/input.tsx    |  4 +++-
 src/components/ui/progress.tsx |  7 +++++--
 src/components/ui/textarea.tsx |  6 ++++--
 5 files changed, 25 insertions(+), 17 deletions(-)
```
### that is the git workflow

|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

## [C/03] Home Layout ||  Goal -> Navbar, Sidebar, Main Content Area, Footer
### C1.1 make sure we are on main branch
```bash
 ~/n/04/npx_multi_tenants_ecom_anton   main ❯ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

#### C1.2 in the "src/app/test/page.tsx" || creating a new route by creating a a new folder || folder/file based routing || "page" has to there with either .tsx, jsx, ts or js
```tsx
const Test = () => {
return (
    <div>Test</div>
  );
}
export default Test;
```

#### C1.3 in (home)/foo/page.tsx || Route Group i.e. organizing files in folder without creating a new route || the url http://localhost:3000/(home)/foo -> 404 error but http://localhost:3000/foo -> the foo page content
```tsx
const Foo = () => {
  return (
    <div>The Foo Page Content</div>
  );
}
export default Foo;
```

### C2 Using Route Groupe to organize the home or the default entry level page
1. stop the dev server and
2. delete the "src/app/test" folder and the "src/app/(home)/foo" folder
3. make a copy of the "src/app/page.tsx" in the "src/app/(home)/" folder and delete the original "src/app/page.tsx"
i.e. in src/app/(home)/page.tsx
```tsx
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      hello world
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Button variant={"elevated"}>i am a button</Button>
        </div>
        <div>
          <Input type="text" placeholder="I am in input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea name="" id="" value={"i am a textarea"} />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
```

### C3 in src/app/(home)/layout.tsx || Next we will also define a custom layout for the "(home)" route group i.e.
1. src/app/layout.tsx -> is the base level layout lets say it is devoid of navbar or sidebar or footer section etc
2. for the "(home)" route group, i.e. all the common pages, we may want to have a navbar for that we need a create a separate layout.tsx file

in src/app/(home)/layout.tsx
```tsx
//2.2 define Props as an Interface
interface Props {
  //2.3 define children are defined as ReactNode given by React
  children: React.ReactNode;
}
//1. define layout
//2.1  pass the children component or page component as props
const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* common content */}
      <nav className="bg-red-400 w-full text-white">
        <div className=" bg-green-600 w-[200px]">
          hello
        </div>
      </nav>
      {/* pass the contents of the children page component */}
      {children}
    </div>
  );
};
export default Layout;
```

### C4 in src/app/globals.css || define new root, dark and theme variable for the color bg-srjt-accent: pink-400 oklch(71.8% 0.202 349.761) = #fb64b6  as per funroad by anton || this to be done so that the modification of the theme later is easier || replace all instance of "bg-pink-400" with "bg-srjt-accent"
```css
@theme inline {
  --color-srjt-accent: var(--srjt-accent);
}
:root {
  --srjt-accent: oklch(71.8% 0.202 349.761);
}
.dark {
  --srjt-accent: oklch(71.8% 0.202 349.761);
}
```

### C5 in ~/Library/Application Support/Code/User/snippets/typescriptreact.json || create a new tsx custom snippet 
```json
{
	"Page Component ": {
		"prefix": "rafpage",
		"body": [
		"const page$1 = () => {",
		"\treturn (",
		"\t\t<div>page$1</div>",
		"\t);",
		"}",
		"export default page$1;",
		],
		"description": "default page component"
	},
}
```

### C6 in src/app/(home)/navbar.tsx || first component || the navbar || a component should be a named export instead of a default export to reduce error
```tsx
// C6.5.14.2
"use client";
//global imports i.e. npm packages
//C6.3.0 import font Poppins from google font
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

//alias imports 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

// C6.3.1 prepare the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

// C6.5.02 lets create an Interface for the navarItems
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean; //optional
}

// C6.5.01 we are going to define our NavbarItem component i.e. repeating individual link item or component
const NavbarItem = ({
  // C6.5.03 destructuring the interface
  href,
  children,
  isActive,
}: NavbarItemProps) => {
  //C6.5.04 return the button element for the navbarItem
  return (
    <Button
      // C6.5.12 this basically implies that the <Link>{children}</Link> will be treated as the component itself
      asChild
      // C6.5.09 introducing the variant
      variant="outline"
      className={
        // C6.5.10 using the cn() to define default classes and also pass optional or logically applied style classes
        cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", 
          isActive && "bg-black text-white hover:bg-black hover:text-white",
        )
      }
    >
      {/* C6.5.05 the children which can be either a string or nested button link object which we will define later*/}
      {/* C6.5.11  wrap the children inside of a <Link> and also need to pass an "asChild prop to the button"*/}
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}; 

// C6.5.06 lets define an array of navbarItem object, elements apart from home are purely for SEO purpose until business or programme logic is incorporated
const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/discover", children: "Discover" },
  { href: "/blog", children: "Blog" },
  { href: "/features", children: "Features" },
  { href: "/contact", children: "Contact" },
];

// C6.1
export const Navbar = () => {
  // C6.5.13 in order to properly implement the isActive prop we need to use the "usePathname()" hook provided by "next/navigation" lib
  const pathname = usePathname();
  // C6.5.14.1 after importing "usePathname()" hook we will surely get an error "importing a component that needs `usePathname`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive" -> thus we need to introduce the directive in the very top // C6.5.14.2
  // C6.5.14.3 it is like opening a portal, i.e. in Nextjs all components and pages inside "app" or "src/app" folder is by default a sever component. that means when we have to go and use the client component we have to open a portal using "use client"; directive. this error can also be fixed by using "use client"; in the parent component in our case "src/app/(home)/layout.tsx" but doing so all the children component now will be served as client component, which we do not want in this implementation.
  // C6.5.14.4 (@T1:15:00/11:16:33->multiTenant-multi-vendor-CWAnton) but one more thing that has to be remembered that if we use "use client" directive in the "src/app/(home)/layout.tsx" on contrary to popular misconception all component will treated as client except for the component that are passed through {children} prop then this will not be passed through the portal to be used as a client from the parent component, in that case that particular file needs to have the "use client" directive of its own.
  // C6.5.14.5 it also should be noted that it a component is marked with "use client" directive that does not means that it not server side rendered but it only implies that the component is a server client component and not a server component

  // c6.7.2 defining the state "isSidebarOpen" with a default value of "false" using useState() from react, then need to pass these state to the element
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // C6.2
    <nav className="h-16 flex justify-between border-b font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        {/* C6.4. cn() is provided by nextjs which gives us the ability to use className programmatically*/}
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          NextEcom
        </span>
      </Link>

      {/* c6.6 from c7.5.2 lets place the <NavbarSidebar /> here */}
      {/* c6.7.1 we need to define states for the NavbarSidebar open and close states  */}
      <NavbarSidebar
        //c6.8.1 we pass the navbarItems as items next we can use the items in NavbarSidebar.tsx
        items={navbarItems}
        // c6.8.2 we pass the states as here
        open={isSidebarOpen}
        //c6.8.2.1 here we use the dispatch of the setAction i.e. setIsSidebarOpen to toggle the value of the isSidebarOpen for an action or trigger event   
        onOpenChange={setIsSidebarOpen}
        // c6.8.3 we can go to the frontend and see that we cannot see the mobile or NavbarSidebar but if we change the state of isSidebarOpen to true by useState(true) we can see it || next we need to create a button that only appears on mobile in c6.9 
      />

      {/* C6.5.07. now we are going to utilize the navbarItems by map() method */}
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          // C6.5.08 calling the NavBarItem component
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* C6.5.15 now we are going to create the link buttons for login(sigin)/register(sinup) as shown below */}
      <div className="hidden items-center lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white text-primary hover:bg-srjt-accent transition-colors text-lg cursor-pointer"
        >
          <Link href="/signin">Login</Link>
        </Button>
        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-srjt-accent hover:text-black transition-colors text-lg"
        >
          <Link href="/signup">Start Selling</Link>
        </Button>
      </div>

      {/* C6.9 */}
      <div className="flex lg:hidden items-center justify-center">
        <Button
          // c6.9.1 
          variant="ghost"
          className="size-14 border-transparent bg-white"
          // c6.9.2
          onClick={() => setIsSidebarOpen(true)}
          // c6.9.3 we now go to NavbarSidebar.tsx to iterate the nav items
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>

    </nav>
  );
};

// C6.5.16 (@T1:23:00/11:16:33->multiTenant-multi-vendor-CWAnton) in C7 || next we are going to create another component for the mobile navigation inside the (home) route group folder 
```
### C7 in src/app/(home)/navbar-sidebar.tsx || Mobile Navigation component
```tsx 
//c7.6.x
import Link from "next/link";
// c7.4.2
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// c7.4.3 we also need the ScrollArea as well
import { ScrollArea } from "@/components/ui/scroll-area";


//c7.1
interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

// c7.2
interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

//c7.3
export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  // c7.4.1 we are going to import and use the sheet component from shadcnUI we can also use the sidebar component but anton demo used sheet

  // c7.5.0 we need to return a sheet component
  return (
    <Sheet
      // c7.5.1
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          {/* c7.5.2 we can now place <NavbarSidebar /> in the "src/app/(home)/navbar.tsx" anywhere from within the nav markup  */}
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {/* c7.6 from c6.9.3 we use the scroll area and within it iterate the nav items*/}
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              // c7.7 lets also make sure that when we click on any link in the NavbarSidebar the sidebar closes
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          {/* login & start selling button  */}
          <div className="border-t">
            <Link
              onClick={() => onOpenChange(false)}
              href="/signin"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Login
            </Link>
            <Link
              onClick={() => onOpenChange(false)}
              href="/signup"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
```
### C8 Footer for the Home Route group
```tsx
export const Footer = () => {
  return (
    <footer className=" border-t flex items-center justify-center font-medium p-6">
      <div className="flex items-center gap-2">
        <p>&copy; 2025 NextEcom</p>
      </div>
    </footer>
  );
};
```

### C9 in src/app/(home)/layout.tsx || bring in the footer
```tsx
import { Footer } from "./footer";
import { Navbar } from "./navbar";

//2.2 define Props as an Interface
interface Props {
  //2.3 define children are defined as ReactNode given by React
  children: React.ReactNode;
}
//1. define layout
//2.1  pass the children component or page component as props
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {/* pass the contents of the children page component bg color to bg-[#f4f4f0] and the content to take the max space i.e. at extreme bottom, we can see the background colors of the textarea is getting messed up  */}
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
```

### commit msg
```git
[C/03] Home Layout initial design with Navbar, functioning NavbarSidebar for mobile and Footer component layout and home page all inside the (home) route group also.
```


|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

## [D/04] Payload Integration - MongoDB

### create mongoDB Atlas account free || create cluster || create user || add IP address for network access
user: admin_at_multi-tenant

### Payload is the Next.js fullstack framework. Write a Payload Config and instantly get:

- A full Admin Panel using React server / client components, matching the shape of your data and completely extensible with your own React components
- Automatic database schema, including direct DB access and ownership, with migrations, transactions, proper indexing, and more
- Instant REST, GraphQL, and straight-to-DB Node.js APIs
- Authentication which can be used in your own apps
- A deeply customizable access control pattern
- File storage and image management tools like cropping / focal point selection
- Live preview - see your frontend render content changes in realtime as you update

### payload installation
```bash
 ~/n/04/n   main ❯ npx create-payload-app@3.52.0 --use-npm                          25s
Need to install the following packages:
create-payload-app@3.52.0
Ok to proceed? (y) y


┌   create-payload-app 
│
◇   ────────────────────────────────────────────╮
│                                                   │
│  Welcome to Payload. Let's create a project!      │
│                                                   │
├──────────────────────────────────────────────╯
│
◇   ▲ Next.js  project detected!
│
◇  Install Payload in this project?
│  Yes
│
▲  
│  Next Steps:
│  
│  Payload does not support a top-level layout.tsx file in the app directory.
│  
│  To continue:
│  
│  - Create a new directory in ./src/app such as ./src/app/(app)
│  - Move all files from ./src/app into that directory
│  
│  It is recommended to do this from your IDE if your app has existing file references.
│  
│  Once moved, rerun the create-payload-app command again.
│  
│
└   Have feedback?  Visit us on GitHub.
```

### create a new folder "src/app/(app)" and move all the content of "src/app/" folder including the "(home)" folder, favicon, globals.css and the most important the layout.tsx


### D1 in src/app/(app)/(home)/layout.tsx
```tsx
import { Footer } from "./footer";
import { Navbar } from "./navbar";

//2.2 define Props as an Interface
interface Props {
  //2.3 define children are defined as ReactNode given by React
  children: React.ReactNode;
}
//1. define layout
//2.1  pass the children component or page component as props
const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      {/* pass the contents of the children page component bg color to bg-[#f4f4f0] and the content to take the max space i.e. at extreme bottom, we can see the background colors of the textarea is getting messed up  */}
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
```
### before proceeding with the payload installation run "npm run dev" make sure every thing is functioning as it was before the (app)

### then proceed with the payload installation
```bash
we provide the mongodb server database collection to the payload installation
```

### After the installation of payload cms we get
src/app/(frontend)/
src/app/(frontend)/layout.tsx
src/app/(frontend)/page.tsx
src/app/(frontend)/styles.css
src/app/(payload)
src/app/(payload)/admin
src/app/(payload)/api
src/app/(payload)/custom.scss
src/app/(payload)/layout.tsx
src/app/my-route
src/app/my-route/route.ts
src/collections
src/collections/Media.ts
src/collections/Users.ts
src/payload-types.ts
src/payload.config.ts
.env

### [Never_Touch_or_Modify_the_content_of_(payload)_folder] "src/app/(payload)" folder

### [it_is_a_handy_example_of_how_to_fetch_any_thing_from_payload] specifically the users collection

### we also have the collection folder || with predefined by payload -> user and media
in Media.ts
```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
```

in Users.ts
```ts
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
```
### in src/app/my-route/route.ts 
```ts
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })
  
  return Response.json({
    message: 'This is an example of a custom route.',
  })
}
```

### in .env
```json
# Added by Payload
PAYLOAD_SECRET=46821e3a3s4d4809a4bc071b
DATABASE_URI=mongodb+srv://admin_:admin_@cluster0.vmqm2in.mongodb.net/multiecom
```


these are the new files and folder that came with payload

### then when we run the "npm run dev" then on refreshing the page we are prompted with an error i.e. 
- ./src/app/(frontend)
- You cannot have two parallel pages that resolve to the same path. Please check /(app)/(home) and /(frontend).


### thus we now need to do some cleanup as we do not need the new (fronted) folder, as it and the (app) folder both are trying to access the same route the home route. So we need to DELETE the (frontend) folder

### run npm dev

### now we can visit http://localhost:3000/admin || to access the payload interface || then register with an email id first user the admin user || 
loverboy........@gmail.com
lover8923ybx

### D2 in [categories_collection](src/collections/Categories.ts) || how to create a New Collection called "Categories" [@T2:01:00/11:16:33]
```ts
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ]
};
```

above we defined the simplest form of a new collection definition

now if we move to the admin dashboard then do not get to see the new defined collection of categories to fix that we need to include it in 

1. src/app/my-route/route.ts
2. src/payload.config.ts
3. src/payload-types.ts // we can search but fail to find categories but we have users and media so how can we have it

### in D3. src/app/my-route/route.ts now if we 
```ts
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  //2 this file facilitate to get a whatever collect we want for the open world from the database as shown below it returns an jSON collection

  const data = await payload.find({
    collection: 'users'
  })


  return Response.json(data)

  //1 came by default commenting it
  // return Response.json({
  //   message: 'This is an example of a custom route.',
  // })
}
```

### D4 in [src/payload.config.ts](src/payload.config.ts) || define or introduce the new collection while the dev server is running
```ts
// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
```

### TS Types for the new collections (in this case categories and tags) are needed to be generated in order to access the categories from both my-route as well as the admin CMS pay of payload or from the frontend to fetch data

### the generate TS Types for the collections we need to add new script "payload generate:types" command in the package.json file as suggested by the payload docs
```json
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "generate:types": "payload generate:types"
  },
```

### in "src/app/my-route/route.ts" || Getting the following error
```ts
Type '"pages"' is not assignable to type 'CollectionSlug'.ts(2322)
find.d.ts(9, 5): The expected type comes from property 'collection' which is declared here on type 'Options<CollectionSlug, SelectFromCollectionSlug<CollectionSlug>>'
(property) collection: CollectionSlug
the Collection slug to operate against.
```

### Getting an error to run the script to generate the types for the collection 
```bash
 ~/n/04/n   main !17 ?6 ❯ npx payload generate:types
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/kriz/nextjs/04Anton/npx_multi_tenants_ecom_anton/src/collections/Users' imported from /Users/kriz/nextjs/04Anton/npx_multi_tenants_ecom_anton/src/payload.config.ts
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:932:10)
    at defaultResolve (node:internal/modules/esm/resolve:1056:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:654:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:603:25)
    at ModuleLoader.getModuleJobForRequire (node:internal/modules/esm/loader:353:53)
    at new ModuleJobSync (node:internal/modules/esm/module_job:341:34)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:326:11)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1414:24)
    at Module._compile (node:internal/modules/cjs/loader:1547:5) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/kriz/nextjs/04Anton/npx_multi_tenants_ecom_anton/src/collections/Users'
}

Node.js v22.12.0
``` 
### To fix the Error of [ERR_MODULE_NOT_FOUND] by googling is that we need to add "types":"module" in package.json
```json
{
  "name": "npx_multi_tenants_ecom_anton",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "generate:types": "payload generate:types"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@payloadcms/db-mongodb": "^3.52.0",
    "@payloadcms/next": "^3.52.0",
    "@payloadcms/payload-cloud": "^3.52.0",
    "@payloadcms/richtext-lexical": "^3.52.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "graphql": "^16.11.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.539.0",
    "next": "15.4.6",
    "next-themes": "^0.4.6",
    "payload": "^3.52.0",
    "react": "19.1.0",
    "react-day-picker": "^9.9.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "react-resizable-panels": "^3.0.4",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2",
    "zod": "^4.0.17"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.4.6",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.7",
    "typescript": "^5"
  }
}
```

### now if we run "npx payload generate:types" in the console we can see the compilation of the TS Types for the collection
```bash
 ~/n/04/n   main !17 ?6 ❯ npx payload generate:types    
[17:55:29] INFO: Compiling TS types for Collections and Globals...
[17:55:29] INFO: Types written to /Users/kriz/nextjs/04Anton/npx_multi_tenants_ecom_anton/src/payload-types.ts
```

### D5 in [HomePage](src/app/(app)/(home)/page.tsx) || Next We are going to modify the homepage to display the desired data collections from the database using payload
```tsx
// D5.1 as shown in "src/app/my-route/route.ts" we import "configPromise", "getPayload" 
import configPromise from "@payload-config";
import { getPayload } from "payload";

// D5.2 convert it to an async function
export default async function Home() {
  // D5.3 we establish a connection with getPayload by passing configPromise
  const payload = await getPayload({
    config: configPromise,
  })

  // D5.4 bring in the collection of categories
  const data = await payload.find({
    collection: "categories",
  })

  return (
    // D5.5 display using JSON.stringify
    <div>
      {JSON.stringify(data,null,2)}
    </div>
  );
}
```

### D6 in [Categories::Model/Schema](src/collections/Categories.ts) || adding an access props to the categories collections
```ts
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  //D6.1 adding access prop for the extending functionality of access control based on role of the user
  access: {
    // create: ()=>false,
    // read: ()=>false,
    // update: ()=>false,
    // delete: ({req})=> req.user.isAdmin, // destructuring the request, & check
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ]
};
```


### commit msg || git checkout -b 04_payload_integration
```git
D/04 headless payload CMS integration, tried creation of models or table schema very shallowly, generated the types for the collection using the script "npx payload generate:types, troubleshooted for not working types generation by including a prop of "type":"modules" in package.json
```



|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

## [E/05] Search Filter || Basic Search Input || A category link navigation bar || dropdown list of subcategories of a main parent category from scratch || View all button for a page of all category 


### E1 in [Categories::Collection](src/collections/Categories.ts) Enhance the Categories Collection with the following fields or props
- slug
- color
- parent
- subcategories
```ts
```

### E2 in [payload-admin-dashboard::password-reset](package.json) || Script addition to facilitate password reset in case we forgot admin dashboard password ||
```json
{
  "name": "npx_multi_tenants_ecom_anton",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    .
    .
    "generate:types": "payload generate:types",
    "db:fresh":"payload migrate:fresh"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@payloadcms/db-mongodb": "^3.52.0",
    "@payloadcms/next": "^3.52.0",
    .
    .
    .
    "zod": "^4.0.17"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    .
    .
    .
    "typescript": "^5"
  }
}
```

### E3 in [HomePage](src/app/(app)/(home)/page.tsx) || we now want to display the data from the database through payload in a more human readable way
```tsx
  const data = await payload.find({
    collection: "categories",
  })
```
#### o/p of the above -> we are getting both the categories parent and subcategory. with no relationship detail
```json 
{ "docs": [ { "createdAt": "2025-08-22T05:07:47.547Z", "updatedAt": "2025-08-22T05:10:27.907Z", "name": "Sedan", "slug": "sedan", "parent": { "createdAt": "2025-08-22T05:06:27.565Z", "updatedAt": "2025-08-22T05:06:27.565Z", "name": "Cars", "slug": "cars", "color": "#51a2ff", "subcategories": { "docs": [ "68a7fb234ee733ac35d2e20b" ], "hasNextPage": false }, "id": "68a7fad34ee733ac35d2e1cf" }, "subcategories": { "docs": [], "hasNextPage": false }, "id": "68a7fb234ee733ac35d2e20b" }, { "createdAt": "2025-08-22T05:06:27.565Z", "updatedAt": "2025-08-22T05:06:27.565Z", "name": "Cars", "slug": "cars", "color": "#51a2ff", "subcategories": { "docs": [ { "createdAt": "2025-08-22T05:07:47.547Z", "updatedAt": "2025-08-22T05:10:27.907Z", "name": "Sedan", "slug": "sedan", "parent": "68a7fad34ee733ac35d2e1cf", "subcategories": { "docs": [], "hasNextPage": false }, "id": "68a7fb234ee733ac35d2e20b" } ], "hasNextPage": false }, "id": "68a7fad34ee733ac35d2e1cf" } ], "hasNextPage": false, "hasPrevPage": false, "limit": 10, "nextPage": null, "page": 1, "pagingCounter": 1, "prevPage": null, "totalDocs": 2, "totalPages": 1 }
```
#### but we do not want both or all the hierarchy of categories, we only want to see the top level categories only. for that we use "where" "parent" doesn't(i.e. false) "exist" o/p->in the console we are getting both the categories parent and subcategory. 
```tsx
  const data = await payload.find({
    collection: "categories",
    where: {
      parent: {
        exists:false
      }
    }
  })
```
o/p-> we do get an object of the parent but another separate object of the subcategories with all the info of its parent categories as well
```json
{ "docs": [ { "createdAt": "2025-08-22T05:06:27.565Z", "updatedAt": "2025-08-22T05:06:27.565Z", "name": "Cars", "slug": "cars", "color": "#51a2ff", "subcategories": { "docs": [ { "createdAt": "2025-08-22T05:07:47.547Z", "updatedAt": "2025-08-22T05:10:27.907Z", "name": "Sedan", "slug": "sedan", "parent": "68a7fad34ee733ac35d2e1cf", "subcategories": { "docs": [], "hasNextPage": false }, "id": "68a7fb234ee733ac35d2e20b" } ], "hasNextPage": false }, "id": "68a7fad34ee733ac35d2e1cf" } ], "hasNextPage": false, "hasPrevPage": false, "limit": 10, "nextPage": null, "page": 1, "pagingCounter": 1, "prevPage": null, "totalDocs": 1, "totalPages": 1 }
```

#### we are also provided with a prop of "depth" by payload and nextjs where if depth = 0 it gives a flat representation of the top level categories only with the id of the subcategory
```tsx

```

```json
{"docs":[{"createdAt":"2025-08-22T05:06:27.565Z","updatedAt":"2025-08-22T05:06:27.565Z","name":"Cars","slug":"cars","color":"#51a2ff","subcategories":{"docs":["68a7fb234ee733ac35d2e20b"],"hasNextPage":false},"id":"68a7fad34ee733ac35d2e1cf"}],"hasNextPage":false,"hasPrevPage":false,"limit":10,"nextPage":null,"page":1,"pagingCounter":1,"prevPage":null,"totalDocs":1,"totalPages":1}
```
#### depth = 1  it then it populates all the fields of the subcategory as well
```json
{"docs":[{"createdAt":"2025-08-22T05:06:27.565Z","updatedAt":"2025-08-22T05:06:27.565Z","name":"Cars","slug":"cars","color":"#51a2ff","subcategories":{"docs":[{"createdAt":"2025-08-22T05:07:47.547Z","updatedAt":"2025-08-22T05:10:27.907Z","name":"Sedan","slug":"sedan","parent":"68a7fad34ee733ac35d2e1cf","subcategories":{"docs":[],"hasNextPage":false},"id":"68a7fb234ee733ac35d2e20b"}],"hasNextPage":false},"id":"68a7fad34ee733ac35d2e1cf"}],"hasNextPage":false,"hasPrevPage":false,"limit":10,"nextPage":null,"page":1,"pagingCounter":1,"prevPage":null,"totalDocs":1,"totalPages":1}
```

#### in [HomePage](src/app/(app)/(home)/page.tsx) 
```tsx
// D5.1 as shown in "src/app/my-route/route.ts" we import "configPromise", "getPayload" 
import configPromise from "@payload-config";
import { getPayload } from "payload";

// D5.2 convert it to an async function
export default async function Home() {
  // D5.3 we establish a connection with getPayload by passing configPromise
  const payload = await getPayload({
    config: configPromise,
  })

  // D5.4 bring in the collection of categories
  const data = await payload.find({
    collection: "categories",
    // E3.3 depth
    // depth:0, //depth = 0 // provides a flat view i.e. only the id of the subcategory items
    depth:2, //depth=1 // provides or populates the values of all the fields of the subcategories as well 
    // E3.2
    where: {
      parent: {
        exists:false
      }
    }
  })

  // E3.1 
  console.log(data)

  return (
    // D5.5 display using JSON.stringify
    <div className="">
      {JSON.stringify(data, null, 4)}
    </div>
  );
}
```

### E4 in [search-filter](src/app/(app)/(home)/search-filters/index.tsx) next we need to create an index.tsx file in search-filter folder in the (home) group folder
```tsx
import { Categories } from "./search-categories";
import { SearchInput } from "./search-input";

// E4.2 lets create an interface of SearchFilterProps
interface SearchFilterProps {
  data: any;
};

//E4.1 initialize and export a very simple SearchFilter component and render this component inside of the "src/app/(app)/(home)/layout.tsx" by bringing in the async logic of "categories" data that we are fetching in the (home)/page.tsx to (home)/layout.tsx and further modify the "src/app/(app)/(home)/page.tsx" by removing the data fetching part and making simple non-async home page 
export const SearchFilters = ({
  // E4.3 lets destructure the props
  data,
}:SearchFilterProps) => {
  return (
    // E4.5 now design the search filter markup
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      {/* E4.6 lets bring in a search input component */}
      <SearchInput disabled={true} />
      {/* E4.4 display the json data as a string */}
      {/* {JSON.stringify(data, null, 2)} from E7.6 remove this JSON stringification now */}
      {/* E4.7 now we display the categories for the search */}
      <Categories data={data} />
    </div>
  );
};
```

### E5 [(home)layout.tsx](src/app/(app)/(home)/layout.tsx) || we bring in the search-filter in the layout of the (home) route group
```tsx
// E5.5 we should also make sure there is no "use client"; directive
// E5.2 import the configPromise and getPayload 
import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {



  

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      {/* E5.1 pass the Data as prop to the SearchFilter component */}
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
```

### E6 [the home Page](src/app/(app)/(home)/page.tsx)
```tsx
export default function Home() {
return (
    <div className="">
      Home Page
    </div>
  );
}
```

### E7 [Search-Input component](src/app/(app)/(home)/search-filters/search-input.tsx) ||
```tsx
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

// E7.1 define the interface Props to be received 
interface Props {
  disabled:boolean
}

// E7.2
export const SearchInput = ({
  disabled,
}:Props) => {
  return (
    // E7.3 we design the search input box as shown
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
        <Input
          className="px-10 lg:py-4 text-lg"
          placeholder="Search products..."
          disabled={disabled}
        />
      </div>
      {/* E7.4 TODO: Add categories view all button, visible only in the mobile view, for later */}
      {/* E7.5 TODO: Add library button, visible only when the user is logged in, for later */}
      {/* E7.6 these above states, we are yet to have, for now we are going to create the categories buttons, in "src/app/(app)/(home)/search-filters/index.tsx" that will act as a search-filter for that categories */}
    </div>
  );
}
```

### E8 [Search-filter categories](src/app/(app)/(home)/search-filters/categories.tsx)
```tsx 
import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

// E8.1
interface Props{
  data: any;
}

// E8.2
export const Categories = ({
  data
}: Props) => {


  console.log(data);
  

  return (
    <div className="flex flex-nowrap items-center gap-4">
      {/* {JSON.stringify(data, null, 2)} */}
      {/* now we reached to this milestone as did before */}
      {/*  E8.3 we want to receive the data from the db in a specific way so we next go to the "src/app/(app)/(home)/layout.tsx" to modify it the way we want ->T@2:36:00/11:16:33 multi tenant ecom anton*/}
      {/* E9.12 now we can stringify the json data within formattedData from layout.tsx and form the button/link component to display all the product belong to that category */}
      {/* E8.4 after E9.12 we now use map() to data received and with it pass the payload-type::Category to a new CategoryDropdown component */}
      {/* E8.6 map() method syntax =>  array.map((type:Type)=>()) */}
      {data.map((category: Category) => (
        <div key={category.id}>
          {/* E8.5.1 pass the category to the CategoryDropdown component as well pass few other required props */}
          <CategoryDropdown
            category={category}
            // E8.5.2 optional implement later
            isActive={false}
            // E8.5.3 optional implement later
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};
```

### E9 in [(home)/layout.tsx](src/app/(app)/(home)/layout.tsx) || to modify the data before receiving it in the <Categories /> below the <SearchInput /> in the layout.tsx || we need to formate the data such that the we get an object of the top level categories and another object of the immediate children i.e. the subcategories object
```tsx
// E5.5 we should also make sure there is no "use client"; directive
// E5.2 import the configPromise and getPayload 
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  // E5.3 establish a connection with getPayload by passing configPromise
  const payload = await getPayload({
    config: configPromise,
  });

  // E5.4 bring in the top level categories from the DB through payload
  const data = await payload.find({
    collection: "categories",
    depth: 1, // E9.07.1 "depth=0"-> will populate subcategories as type of string 
    // E9.07.2 but "depth=1"-> will populate subcategories as type of categories 
    // E9.01 we disable the pagination
    pagination: false,
    sort: "createdAt", // sort: "-createdAt" i.e. prefix(-) provides descending order
    where: {
      parent: {
        exists: false,
      },
    },
  });

  // E9.02 next we are going to format the data as an ARRAY of object of the top level categories and the immediate children of the top level category i.e. the subcategories as an ARRAY of object of type category that are subcategory to the top level one. // E9.03 for that we are using the spread operator
  const formattedData = data.docs.map((doc) => ({
    // E9.04 the first doc collection from the data is mapped using a spread operator
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // E9.05 then the subcategories are processed but as subcategories for a top level category is optional i.e. its doc collection may either be a string or array, it needs to be considered
      // E9.06 Because of "depth=1" we are confidant, doc will be a type of "category", to confirm we check by changing the depth=0 we see that the subcategories becomes an object of numbers and alphabets formed of the string of ids of categories which are subcategory of the parent === BREAKS THE APP
      ...(doc as Category),
      // E9.08 and explicitly defining the subcategories of the 2nd level categories to "undefined"
      subcategories: undefined,
      // E9.09 now we can finally send this formattedData to the <Categories /> component via the <SearchFilter />
    })),
  }));

// console.log({
//   data,
//   formattedData
//   });

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      {/* E5.1 pass the Data as prop to the SearchFilter component */}
      {/*  E9.10 send the formattedData to SearchFilters  */}
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
```

#### Data as an object of docs, where docs are an array of category object, and the category object then may or may not have a subcategory object, Also the data is with pagination
```json 
{
    "data": {
        "docs": [
            {
                "createdAt": "2025-08-22T06:28:19.712Z",
                "updatedAt": "2025-08-22T06:28:19.712Z",
                "name": "Trucks",
                "slug": "trucks",
                "color": "#34f0ec",
                "subcategories": {
                    "docs": [
                        {
                            "createdAt": "2025-08-22T06:30:05.033Z",
                            "updatedAt": "2025-08-22T06:30:05.033Z",
                            "name": "Mini Truck",
                            "slug": "mini-truck",
                            "parent": "68a80e033b96f92ebc7052ae",
                            "subcategories": {
                                "docs": [],
                                "hasNextPage": false
                            },
                            "id": "68a80e6d3b96f92ebc7052df"
                        }
                    ],
                    "hasNextPage": false
                },
                "id": "68a80e033b96f92ebc7052ae"
            },
            {
                "createdAt": "2025-08-22T05:06:27.565Z",
                "updatedAt": "2025-08-22T05:06:27.565Z",
                "name": "Cars",
                "slug": "cars",
                "color": "#51a2ff",
                "subcategories": {
                    "docs": [
                        {
                            "createdAt": "2025-08-22T06:25:05.125Z",
                            "updatedAt": "2025-08-22T06:25:05.125Z",
                            "name": "SUVs",
                            "slug": "suvs",
                            "parent": "68a7fad34ee733ac35d2e1cf",
                            "subcategories": {
                                "docs": [],
                                "hasNextPage": false
                            },
                            "id": "68a80d413b96f92ebc705260"
                        },
                        {
                            "createdAt": "2025-08-22T05:07:47.547Z",
                            "updatedAt": "2025-08-22T05:10:27.907Z",
                            "name": "Sedan",
                            "slug": "sedan",
                            "parent": "68a7fad34ee733ac35d2e1cf",
                            "subcategories": {
                                "docs": [],
                                "hasNextPage": false
                            },
                            "id": "68a7fb234ee733ac35d2e20b"
                        }
                    ],
                    "hasNextPage": false
                },
                "id": "68a7fad34ee733ac35d2e1cf"
            }
        ],
        "hasNextPage": false,
        "hasPrevPage": false,
        "limit": 0,
        "nextPage": null,
        "page": 1,
        "pagingCounter": 1,
        "prevPage": null,
        "totalDocs": 2,
        "totalPages": 1
    },
```

#### formattedData -> here the formattedData is an array of category objects, then each category object may have a "subcategories" property as an array of category as as the subcategory of the top level category
```json
    "formattedData": [
        {
            "createdAt": "2025-08-22T06:28:19.712Z",
            "updatedAt": "2025-08-22T06:28:19.712Z",
            "name": "Trucks",
            "slug": "trucks",
            "color": "#34f0ec",
            "subcategories": [
                {
                    "createdAt": "2025-08-22T06:30:05.033Z",
                    "updatedAt": "2025-08-22T06:30:05.033Z",
                    "name": "Mini Truck",
                    "slug": "mini-truck",
                    "parent": "68a80e033b96f92ebc7052ae",
                    "subcategories": {
                        "docs": [],
                        "hasNextPage": false
                    },
                    "id": "68a80e6d3b96f92ebc7052df"
                }
            ],
            "id": "68a80e033b96f92ebc7052ae"
        },
        {
            "createdAt": "2025-08-22T05:06:27.565Z",
            "updatedAt": "2025-08-22T05:06:27.565Z",
            "name": "Cars",
            "slug": "cars",
            "color": "#51a2ff",
            "subcategories": [
                {
                    "createdAt": "2025-08-22T06:25:05.125Z",
                    "updatedAt": "2025-08-22T06:25:05.125Z",
                    "name": "SUVs",
                    "slug": "suvs",
                    "parent": "68a7fad34ee733ac35d2e1cf",
                    "subcategories": {
                        "docs": [],
                        "hasNextPage": false
                    },
                    "id": "68a80d413b96f92ebc705260"
                },
                {
                    "createdAt": "2025-08-22T05:07:47.547Z",
                    "updatedAt": "2025-08-22T05:10:27.907Z",
                    "name": "Sedan",
                    "slug": "sedan",
                    "parent": "68a7fad34ee733ac35d2e1cf",
                    "subcategories": {
                        "docs": [],
                        "hasNextPage": false
                    },
                    "id": "68a7fb234ee733ac35d2e20b"
                }
            ],
            "id": "68a7fad34ee733ac35d2e1cf"
        }
    ]
}
```

#### in the "formattedData" definition where the subcategories of the top level is formatted in to an array of objects of the inner category / docs / subcategory we are getting an error of "Spread types may only be created from object types.ts(2698)(parameter) doc: string | Category" i.e. the parameter received by it can either be string or a category, it is a category then there is no problem, but it may get a string since we are using "depth" operator, as when "depth" = 0 then the subcategories will be simple string of ids of the categories which are subcategory to the top level category.

#### in order to correctly infer the type to it, as we are sure that at "depth" = 1 we will definitely receive a subcategories as an object type category thus we can import the Category type from payload-types (which we have generated previously using "npx payload generate:types" or "npm run generate:types") and infer the type. 


### E10 [CategoryDropdown](src/app/(app)/(home)/search-filters/category-dropdown.tsx)
```tsx
// E10.05 mark the component to "use client"; directive to avoid error like "Build Error" | "Ecmascript file had an error" | "You're importing a component that needs `useRef`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive."
"use client";

import { useRef, useState } from "react";

import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

import { Category } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  category: Category;
  isActive?: boolean; // (important symbol) ? as optional todo later
  isNavigationHovered?: boolean; // (important symbol) ? as optional todo later
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  // E10.04 next we need to define the state of the button behavior i.e. isOpen and set it false on load
  const [isOpen, setIsOpen] = useState(false);
  // E10.06 next we define dropdownRef using useRef and importing it from react
  const dropdownRef = useRef<HTMLDivElement>(null);
  // E10.16 from E11.5 import useDropdownPosition and pass the dropdownRef and bring in the getDropdownPosition
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  // E10.07 define "onMouseEnter" and "onMouseLeave" event listeners for the category dropdown button elements to display and hide the menu
  const onMouseEnter = () => {
    // E10.08 checking if the category.subcategories is set
    if (category.subcategories) {
      setIsOpen(true);
      // console.log("hi");
    }
  };

  // E10.09 simple version of arrow function
  const onMouseLeave = () => {
    setIsOpen(false);
    // console.log("bye");
  };

  // console.log(category); // gives individual top level category names iterating through formattedData

  // E10.17.4 
  const dropdownPosition = getDropdownPosition();


  return (
    <div
      // E10.10 next we bind the event listeners with the element by wrapping the <Button></Button> within a <div> having relative position, dropdownRef and the event-listeners.
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // E10.11 Now that event listeners are working lets create an indicator for the dropdown for that lets next wrap the <Button></Button> again within a div having relative and conditionally placing a the indicator content div
    >
      <div className="relative">
        <Button
          // E10.01 elevated variant
          variant="elevated"
          // E10.02 we use cn() to merge classNames with the default one i.e. dynamic
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-xl hover:bg-white hover:border-primary text-black",
            // E10.03 isActive i.e. products of the current category is displayed & isNavigationHovered will make sure when the current category is active and the button is NOT hovered then the following styles take effect
            isActive && !isNavigationHovered && "bg-white border-primary"
          )}
        >
          {category.name}
        </Button>
        {
          // E10.12 condition checking if category has subcategories and it is an array of length more than Zero
          category.subcategories && category.subcategories.length > 0 && (
            // E10.13 if true then the indicator will be contained within a self closing div having dynamic classes based on condition
            <div
              className={cn(
                "opacity-0 absolute -bottom-3 left-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black -translate-x-1/2",
                // 10.14 then if isOpen is true i.e. the category button is hovered than add class "opacity-100"
                isOpen && "opacity-100"
              )}
            />
            // E10.15 next in order to display the dropdown list of sub categories we first need to develop a hook that will be responsible for determining the position of the list to display based on the position button on the screen and screen real estate. By creating a new file "src/app/(app)/(home)/search-filters/use-dropdown-position.tsx" in E11
          )
        }
      </div>
      {/* E10.17.0 from E11.15 of "src/app/(app)/(home)/search-filters/use-dropdown-position.tsx", lets create the dropdown menu listing the sub categories */}
      <SubcategoryMenu
        // E10.17.1 category from the prop
        category={category}
        // E10.17.2 the state
        isOpen={isOpen}
        // E10.17.3 dropdownPosition from the getDropdownPosition
        position={dropdownPosition}
      />
      {/* E10.18 create "src/app/(app)/(home)/search-filters/subcategory-menu.tsx" */}
    </div>
  );
};
```

### E11 [useDropdownPosition](src/app/(app)/(home)/search-filters/use-dropdown-position.tsx) || in order to display the dropdown list of sub categories we first need to develop a hook that will be responsible for determining the position of the list to display based on the position button on the screen and screen real estate
```tsx
import { RefObject } from "react";

// E11.01
export const useDropdownPosition = (
  // E11.02 where the ref would be a RefObject of type HTMLDivElement
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  // E11.03 define the method "getDropdownPosition"
  const getDropdownPosition = () => {
    // E11.06 first of all we will check if ref.current is not present then we will simply sent top-0 left-0. i.e. if dropdownRef(i.e. the div wrapping the button) can not be detected then we don't calculate any thing and simply send top=0 left=0
    if (!ref.current) return { top: 0, left: 0 }
    
    // E11.07 when ref.current is present then we will get the rect that is bounding the current ref i.e. the dropdownRef
    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // for width of dropdown we use className (w-60 = 15rem = 240px)

    // E11.08 calculate the initial position 
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // E11.09 check if dropdown would go off the right edge of the viewport by checking if the sum of left and the dropdownWidth is larger than window inner width
    if (left + dropdownWidth > window.innerWidth) {
      // E11.10 if(above is true) then align to the right edge of the button instead of the left edge
      left = rect.right + window.scrollX - dropdownWidth; // E11.11 we are basically preventing the dropdown from overflowing, this is what most dropdown libraries have builtin but we are making this from scratch by our own.

      // E11.12 if after this we are checking if the dropdown is still off-screen i.e. if left of the dropdown is in negative, then align to the right edge of the viewport with some padding, i.e. the new left will be calculated by subtracting the dropdownWidth from the inner window width also subtract some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }
    // E11.13 check if dropdown do not go off the left edge then add a padding to get the new left
    if (left < 0) {
      left = 16; // i.e. with padding
    }
    // E11.14 return top and left
    return { top, left };
  };

  // E11.15 next we go to the category-dropdown.tsx to create a dropdown menu in the E10.17 for the current category using the position sent from here.


  // E11.04 the only thing we are going to return from this hook is this getDropdownPosition
  return { getDropdownPosition };
  // E11.05 next we are going to the "src/app/(app)/(home)/search-filters/category-dropdown.tsx" and prepare it receive the getDropdownPosition and use it to correctly render the dropdown menu.
}
```

### E12 [SubcategoryMenu](src/app/(app)/(home)/search-filters/subcategory-menu.tsx)
```tsx
import { Category } from "@/payload-types";

import Link from "next/link";

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}
//E12.00 from E10.18 of "src/app/(app)/(home)/search-filters/category-dropdown.tsx" create and export
export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  // E12.01 check if isOpen is false or if category doesn't have subcategory or if subcategories array length is less than 0 we return null
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    // E12.02 till now when we use category.subcategories.length the length part shows type error, because we are using formattedDate instead of the data which was a docs collection. We will solve it later
    return null;
  }

  // E12.03
  const backgroundColor = category.color || '#F5F5F5'; // as default color

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left
      }}
    >
      {/* E12.04 create an invisible bridge to maintain hover */}
      <div
        className="h-3 w-60 bg-transparent"
      />
      <div
        style={{backgroundColor:backgroundColor}}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] X-translate-x-[2px] X-translate-y-[2px]">
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link 
              key={subcategory.slug}
              href={subcategory.slug}
              className="w-full text-left p-2 hover:bg-black hover:text-white flex justify-between items-center underline font-medium capitalize"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
```

### commit msg || git checkout -b 05_Search_filters_&_category_nav
```git
E/05 Search-filter block design || search input designed but not logically implemented || Secondary Category navbar designed || Subcategory dropdown menu created with DropdownPosition aware logic
```

### @T3:17:00/11:16:33 CodeRabbit of Anton suggested ->
- onCLick={toggleDropdown} on top of onMouseEnter 
```tsx
const toggleDropdown = () => {
  if(category.subcategory?.docs?.length>0){
    setIsOpen(!isOpen);
  }
};
.
.
.
<Button 
  variant="elevated"
  onClick={toggleDropdown}
  className={cn(...)}
  >
  </Button>
```
- Enhanced Accessibility for dropdown menu i.e. adding keyboard support
```tsx
const dropdownPosition = getDropdownPosition);
const handleKeyDown = (e: React.KeyboardEvent) => {
  if(e.key === 'Enter' || e.key ===' ') { 
    if (category.subcategories?.docs?.length){ 
      setIsOpen(!isOpen);
      e.preventDefault();
    }
  } else if(e.key === 'Escape' && isOpen) {
    setIsOpen(false);
    e.preventDefault();
  }
}

return(
  <div
    className="relative"
    ref={dropdownRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onKeyDown={handleKeyDown}
  >
    <div className="relative">
      <Button
        variant="elevated"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn("...")}
      >
      </Button>
    </div>
  </div>
);
```
- add Error handling to async data fetching in the layout.tsx
```tsx
const Layout = async ({children}:Props) => {
  let formattedData: Category[] = [];

// adding try catch block to handle error in async data fetching
  try{
    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
      collection: "categories",
      depth: 1, 
      pagination: false,
      sort: "createdAt", 
      where: {
        parent: {
          exists: false,
        },
      },
    });

    formattedData = data.docs.map((doc)=>({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        ...(doc as Category),
        subcategories:undefined,
      }))
    }));
  }catch(error){
    console.error("(home)/layout:failed to fetch categories:",error);
    //consider implementing fallback UI or retry logic
  }
}
```