// eslint-disable-next-line import/prefer-default-export
export const exampleOnceHandler = async (
  event: Electron.IpcMainEvent,
  args: any
) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(args));
  event.reply('ipc-example', msgTemplate('pong'));
};
