export const data = {
  name: "random",
  description: "Play a random track from the playlist."
};

export async function execute(interaction, playlist, playRandom, joinChannel) {
  if (!playlist.length) {
    return interaction.reply("Ain’t got no tracks yet, kid.");
  }

  joinChannel(interaction);
  setTimeout(() => playRandom(interaction), 500);
}
