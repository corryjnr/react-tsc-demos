type Info = { id: number; name: string; age: number; email: string };

type AdminInfoList = Info & { role: string; lastLogin: Date };

export { type Info, type AdminInfoList };
