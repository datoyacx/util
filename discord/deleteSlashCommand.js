/* Install this first
npm: npm install @discordjs/rest discord-api-types
yarn: yarn add @discordjs/rest discord-api-types

source: https://discordjs.guide/interactions/registering-slash-commands.html
*/

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');

// Load .env file
dotenv.config();

// Place your client and guild ids here
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
const token = process.env.DISCORD_TOKEN;

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			// Routes.applicationCommands(clientId) // global command
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: [] },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
