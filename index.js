const DiscordRPC = require("discord-rpc");

const ClientId = '441388720780738561';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("Sony Vegas Booted");
  console.log(" - ");
  console.log("   ");
  console.log(" - ");
  console.log("-- Coded By Mystery MM / Mystery#0666  -- Discord link: discord.gg/uT84Bjv ");
  rpc.setActivity({
    details: `Working On:`,
    state: 'Hekker Meme.veg',
    largeImageKey: 'vegas',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
