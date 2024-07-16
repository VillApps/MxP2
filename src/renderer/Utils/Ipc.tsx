import { v4 as uuidv4 } from 'uuid';

const ipc: any = {};

ipc.q = async (fn: string, opts?: any) => {
  const uuid = uuidv4();
  window.electron.ipcRenderer.sendMessage(uuid, fn, opts || null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res: any = await new Promise((resolve, reject) => {
    window.electron.ipcRenderer.once(uuid, (msqlRes) => {
      resolve(msqlRes);
    });
  });
  return res;
};
export default ipc;
