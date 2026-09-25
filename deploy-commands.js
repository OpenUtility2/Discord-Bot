import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import { commandData } from './src/commands.js';

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;
if (!DISCORD_TOKEN || !CLIENT_ID || !GUILD_ID) {
  throw new Error('DISCORD_TOKEN, CLIENT_ID, and GUILD_ID are required in .env');
}

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

console.log(`Registering ${commandData.length} guild commands...`);
await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commandData });
console.log('Guild commands registered successfully.');
