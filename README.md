# OpenUtility Bot

The official OpenUtility Discord bot for the OpenUtility community.

## Features

- `/help`
- `/tools`
- `/tool`
- `/status`
- `/changelog`
- `/website`
- `/suggest`
- `/bug`
- Tool autocomplete
- Suggestion and bug-report channel routing
- OpenUtility-branded embeds

## Requirements

Node.js 24.17.0+ and a Discord application/bot token.

## Setup

1. Create a Discord application in the Discord Developer Portal.
2. Create the bot user and copy its token.
3. Invite the bot to your server with the `bot` and `applications.commands` scopes.
4. Copy `.env.example` to `.env`.
5. Fill in `DISCORD_TOKEN`, `CLIENT_ID`, and `GUILD_ID`.
6. Optionally add `SUGGESTIONS_CHANNEL_ID` and `BUGS_CHANNEL_ID`.
7. Install dependencies:

```bash
npm install
```

8. Register the slash commands in your server:

```bash
npm run deploy
```

9. Start the bot:

```bash
npm start
```

## Security

Never commit `.env` or your Discord bot token. The repository includes `.gitignore` for this.

## Hosting

GitHub is used for source code and version control. It is **not** a 24/7 Node.js host. Run this project on a VPS or a platform that provides a persistent Node.js service.
