const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ping: () => ipcRenderer.send('PING', 'ping'),
  // 向web暴露on, once API
  on(channel, func) {
    // 过滤不安全的事件
    const validChannels = ['PING', 'PONG'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  once(channel, func) {
    // 过滤不安全的事件
    const validChannels = ['PING', 'PONG'];
    if (validChannels.includes(channel)) {
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    }
  },
});
