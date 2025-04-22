# Bot Battlr

Bot Battlr is a single-page React application built with Vite and Bun, designed to allow users to browse a list of bots, enlist them into a custom army, release them, or permanently discharge them. The app fetches bot data from a `json-server` backend and provides a clean, interactive, and responsive user interface. This project demonstrates React components, props, state management, event handling, and data fetching with a modern development stack.

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
- **Browse Bots**: View a grid of all available bots with details including name, class, health, damage, armor, and avatar.
- **Enlist Bots**: Click a bot card to add it to your army. Each bot can be enlisted only once and remains in the bot collection.
- **Release Bots**: Click a bot in your army to remove it, returning it to the available pool without deleting it.
- **Discharge Bots**: Permanently delete a bot from the backend and army using a red "x" button.
- **Responsive Design**: A clean, grid-based layout that works on various screen sizes.
- **Error Handling**: Robust handling of API errors to ensure a stable user experience.

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

 Project Overview
Bot Battlr is a single-page React application that allows users to:
View a list of bots (BotCollection).

Add a bot to their army (YourBotArmy), ensuring it’s enlisted only once.

Release a bot from the army.

Permanently discharge a bot (delete from backend and frontend).

(Optional advanced deliverables: Bot details view, sorting, filtering, and class limits.)

bot-battlr/
├── public/
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── BotCollection.jsx
│   │   ├── YourBotArmy.jsx
│   │   ├── BotCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── db.json
├── README.md
├── package.json
├── vite.config.js # bot-battlr
