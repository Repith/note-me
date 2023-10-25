
# <img src="https://github.com/Repith/note-me/blob/main/public/logo-dark.ico" width=30px height=auto alt="Logo"> NoteMe



NoteCraft is a sophisticated note-taking application designed to empower users in creating, customizing, and sharing their notes seamlessly. This versatile platform provides a special editor for crafting rich content, complete with lists, images, cover images, and icons. NoteCraft also offers robust storage, community publishing, and archiving capabilities for a comprehensive note management experience.


## Features

- specialized editor allows users to craft notes with text, lists, images, cover images, and icons, providing a dynamic canvas for expressing ideas
- publishing gives oportunity to share knowledge and insights with the wider community
- store and organize every jot with ease


## Tech Stack

**Client:** React, Next.js, TailwindCSS, shadcn/ui

**Server:** Convex

**Other:** EdgeStore

## Demo

Try here: [https://note-me-nu.vercel.app](https://note-me-nu.vercel.app)


## Installation

First use your packet manager to install dependencies (f.e. npm)

```bash 
  npm install
```
Start your live Convex database with first terminal:

```bash
npx covex dev
```

Than start second terminal, and run server:

```bash
npm run dev
```

Open your browser and by default server should run on http://localhost:3000.

Configure your **.env** file with your own keys from Covex, Clerk and EdgeStore.

```bash
# Deployment used by `npx convex dev`
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOY_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Edgestore
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

Don't let your ideas perish - note them down!


## Screenshots

![Landing](https://github.com/Repith/Repith/blob/main/public/NoteMe/landing.png)
![Note](https://github.com/Repith/Repith/blob/main/public/NoteMe/note.png)
![Functionalities](https://github.com/Repith/Repith/blob/main/public/NoteMe/utilities.png)
![Responsivness](https://github.com/Repith/Repith/blob/main/public/NoteMe/darkmode.png)


## Credits

Special thanks to [CodeWithAntonio](https://github.com/AntonioErdeljac) for this project :star: 
