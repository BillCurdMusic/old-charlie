export const data = {
  name: "stop",
  description: "Stop the music completely."
};

export async function execute(interaction, stopMusic) {
  stopMusic(interaction);
}
