const { REST, Routes } = require('discord.js');
const commands = [
  {
    name: 'create',
    description: 'Create a new short Url',
  },
];

const rest = new REST({ version: '10' }).setToken("Token");


(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("user id"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();