import { Userconfig } from './userconfig';

export class ListuserConfig {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<Userconfig>;
}
