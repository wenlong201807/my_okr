export interface User {
    id: string;
    tableName: string;
    phone: string;
    sex: number;
}
export interface UserListResponse {
    code: number;
    data: Array<User>;
    msg:string
}
export interface UserAddResponse {
    code: number;
    data: User
}