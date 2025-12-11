export const data = {
  name: "skip",
  description: "Skip the current track."
};

export async function execute(interaction, skipTrack) {
  skipTrack(interaction);
}
