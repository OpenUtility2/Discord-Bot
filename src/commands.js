import { SlashCommandBuilder } from 'discord.js';
import { tools } from './data/tools.js';

const toolChoices = tools.slice(0, 25).map((tool) => ({ name: tool.name, value: tool.id }));

export const commandData = [
  new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show OpenUtility bot commands.'),

  new SlashCommandBuilder()
    .setName('tools')
    .setDescription('Browse the OpenUtility tool collection.'),

  new SlashCommandBuilder()
    .setName('tool')
    .setDescription('Open a specific OpenUtility tool.')
    .addStringOption((option) =>
      option.setName('name').setDescription('The tool to open.').setRequired(true).setAutocomplete(true)
    ),

  new SlashCommandBuilder()
    .setName('status')
    .setDescription('Show OpenUtility service information.'),

  new SlashCommandBuilder()
    .setName('changelog')
    .setDescription('Show the latest OpenUtility update.'),

  new SlashCommandBuilder()
    .setName('website')
    .setDescription('Open the OpenUtility website.'),

  new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('Send an idea to the OpenUtility team.')
    .addStringOption((option) =>
      option.setName('idea').setDescription('Your suggestion.').setRequired(true).setMaxLength(1000)
    ),

  new SlashCommandBuilder()
    .setName('bug')
    .setDescription('Report a problem with OpenUtility.')
    .addStringOption((option) =>
      option.setName('description').setDescription('Describe the problem.').setRequired(true).setMaxLength(1500)
    )
].map((command) => command.toJSON());

export { toolChoices };
