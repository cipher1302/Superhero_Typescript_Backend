import { ISuperheroAttributes } from "./SuperHeroInterfaces.ts"


export type CreateSuperheroType = Omit<ISuperheroAttributes, "id" | "created_at" | "updated_at">
export type UpdateSuperheroType = Partial<Omit<ISuperheroAttributes,"id" | "created_at" | "updated_at">>