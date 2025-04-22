# Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This single-page React application, built with Vite and Bun, allows users to browse a list of robots, view their details, and enlist them into a galactic army. The app fetches bot data from a `json-server` backend and provides a clean, interactive interface with sorting, filtering, and bot management features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features
### Core Deliverables
- **Browse Bots**: View profiles of all bots in a grid (`BotCollection`), with details like name, class, health, damage, and armor.
- **View Bot Specs**: Click a bot card to see its detailed specs (`BotSpecs`), including catchphrase and creation dates.
- **Enlist Bots**: Enlist a bot into your army (`YourBotArmy`) from the `BotSpecs` view. Bots are removed from `BotCollection` upon enlisting.
- **Release Bots**: Remove a bot from your army by clicking its card in `YourBotArmy`. The bot returns to `BotCollection`.
- **Discharge Bots**: Permanently delete a bot from the backend and army using a red "x" button.
- **Responsive Design**: A clean, grid-based layout that works on various screen sizes.

### Advanced Deliverables
- **Bot Specs View**: Clicking a bot card shows a detailed view (`BotSpecs`) with options to go back or enlist the bot.
- **Sort Bots**: Sort bots by health, damage, or armor using the `SortBar` component.
- **Filter Bots**: Filter bots by class (`Support`, `Medic`, `Assault`, `Defender`, `Captain`, `Witch`) using the `BotFilter` component, with support for multiple filters.
- **Class Restrictions**: Only one bot per class can be enlisted in your army.
- **Remove on Enlist**: Enlisted bots are removed from `BotCollection` and added to `YourBotArmy`.

## Technologies Used
- **Frontend**:
  - React (via Vite)
  - Axios (for API requests)
  - CSS (for styling)
- **Backend**:
  - `json-server` (RESTful API for bot data)
- **Tools**:
  - Bun (package manager and runtime)
  - Vite (build tool)
  - Node.js (for `json-server`)

## Installation
Follow these steps to set up and run the Bot Battlr application locally.

### Prerequisites
- **Bun**: Install Bun by following the instructions at [bun.sh](https://bun.sh/).
  ```bash
  curl -fsSL https://bun.sh/install | bash