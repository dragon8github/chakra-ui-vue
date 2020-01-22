export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export type Merge<T, V> = Omit<T, Extract<keyof T, keyof V>> & V;
