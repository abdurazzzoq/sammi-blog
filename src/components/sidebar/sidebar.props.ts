import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";

export interface SidebarProps{
    sidebar: BlogsType[];
    category: GetCategories[];
}