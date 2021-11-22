// handle test ipcMain
// eslint-disable-next-line import/prefer-default-export
import { PONG } from '../../../events';

export const exampleIPCHandler = async (
  event: Electron.IpcMainEvent,
  args: any
) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(args));
  event.reply(PONG, 'pong!');
};
