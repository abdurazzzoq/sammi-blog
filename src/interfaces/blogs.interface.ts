export interface BlogsType {
  excerpt: string;
  id: string;
  slug: string;
  title: string;
  createdAt: Date;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
  description:{
    text: string;
    html: string;
  }
  image:{
    url: string;
   }
}

