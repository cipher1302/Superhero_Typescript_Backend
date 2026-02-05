export interface ISuperheroAttributes {
    id:number,
    nickname:string
    real_name:string | null
    origin_description:string | null
    superpowers:string
    catch_phrase:string | null
    images: string[] | null
    created_at:Date
    updated_at:Date
}
