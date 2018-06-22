export interface IBaseService<T, K> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  create(dto: K): Promise<T>;
}
