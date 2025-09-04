# Pixel Shift 2048

A visually stunning, retro-themed implementation of the classic 2048 puzzle game with pixel art aesthetics and smooth animations.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AshishKumar4/2048)

## About The Project

Pixel Shift 2048 is a visually striking and captivating re-imagining of the classic 2048 puzzle game, infused with a 'Retro' artistic style. The core gameplay remains familiar: players use arrow keys or swipe gestures on a 4x4 grid to slide numbered tiles. When two tiles with the same number collide, they merge into a single tile with double the value. The ultimate goal is to create the '2048' tile.

The application's visual identity is rooted in early-internet aesthetics, featuring a neon-on-dark color palette, pixelated typography, and subtle glitch effects on tile merges. The UI is designed for an immersive experience, with fluid, physics-based animations for tile movements, clear visual feedback for game states (win/lose), and a flawlessly responsive layout that provides an excellent experience on both desktop and mobile devices.

### Key Features

*   **Classic 2048 Gameplay:** The addictive puzzle mechanic you know and love.
*   **Retro Pixel Art Style:** A unique aesthetic with a neon-on-dark color palette and pixelated fonts.
*   **Fluid Animations:** Smooth, physics-based tile movements powered by Framer Motion.
*   **Fully Responsive:** Flawless gameplay on any device, from large desktops to mobile phones.
*   **Dual Controls:** Play with arrow keys on desktop or intuitive swipe gestures on touch devices.
*   **Score Tracking:** Keeps track of your current score and your all-time best score.
*   **Persistent Best Score:** Your best score is saved locally in your browser.

## Technology Stack

This project is built with a modern, high-performance tech stack:

*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/pixel_shift_2048.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd pixel_shift_2048
    ```
3.  Install dependencies:
    ```sh
    bun install
    ```

### Running the Application

Start the development server:

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) to view it in the browser.

## Usage

The goal of the game is to combine tiles with the same number to eventually create the '2048' tile.

*   **On Desktop:** Use the arrow keys (`↑`, `↓`, `←`, `→`) to move the tiles.
*   **On Mobile/Touch Devices:** Swipe in the direction you want the tiles to move.

All tiles on the grid slide in the chosen direction. If two tiles with the same number collide, they merge into a new tile with their sum. After each move, a new tile (either a '2' or a '4') will appear in a random empty spot.

The game ends when the board is full and no more moves are possible, or when you successfully create the '2048' tile.

## Development Scripts

*   `bun run dev`: Starts the development server with hot-reloading.
*   `bun run build`: Creates a production-ready build of the application.
*   `bun run lint`: Lints the codebase using ESLint.
*   `bun run deploy`: Builds and deploys the application to Cloudflare Pages.

## Deployment

This project is optimized for deployment on the Cloudflare global network.

To deploy your own version, simply click the button below, or use the `wrangler` CLI after setting up your `wrangler.jsonc` file.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AshishKumar4/2048)

Alternatively, you can run the deploy script after logging into `wrangler`:

```sh
bun run deploy
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.