import { ipcMain } from 'electron';
import * as CommonHandler from './common';
import * as OnceHandler from './once';
import { PING } from '../../events';

// 普通监听器映射
export const IPC_COMMON_EVENT_MAP = new Map();
// 只执行一次监听器映射
export const IPC_ONCE_EVENT_MAP = new Map();
// 注册普通处理器
IPC_COMMON_EVENT_MAP.set(PING, CommonHandler.exampleIPCHandler);
// 注册单次执行处理器
IPC_ONCE_EVENT_MAP.set('ipc-once-example', OnceHandler.exampleOnceHandler);

// eslint-disable-next-line no-restricted-syntax
for (const [c, l] of IPC_COMMON_EVENT_MAP.entries()) {
  ipcMain.on(c, l);
}
// eslint-disable-next-line no-restricted-syntax
for (const [c, l] of IPC_ONCE_EVENT_MAP.entries()) {
  ipcMain.once(c, l);
}

export default ipcMain;
