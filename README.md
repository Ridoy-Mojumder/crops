# Basecome Crops Dashboard

A modern, high-performance project management dashboard built with Next.js 16, React 19, and Tailwind CSS 4. This project features a premium UI design with custom SVG iconography and a highly optimized project table using TanStack Table.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **pnpm** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/Ridoy-Mojumder/crops.git
cd crops
```

### 2. Install Dependencies

Use **pnpm** for managing dependencies to ensure consistency and speed.

```bash
pnpm install
```

### 3. Run the Development Server

Start the local server to view the application.

```bash
pnpm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Table Logic**: [TanStack Table v8](https://tanstack.com/table/v8)
- **Icons**: Custom SVG Components
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components.
    - `src/components/svg`: Custom SVG icon components.
    - `src/components/ui`: Shadcn UI base components.
- `src/config`: Application configuration (menus, users, etc.).
- `public`: Static assets, including local avatars and high-quality icons.

## 🎨 Design Guidelines

- **Typography**: Inter Display (Font weight: 500/Medium)
- **Colors**:
    - Primary Green: `#009862`
    - Primary Gray: `#4E5564`
    - Dark Text: `#2A303B`
- **Iconography**: 16x16px (Sidebar) and 12x12px (Table Headers) custom SVGs.
