export interface ITitle {
  id: number;
  names: {
    ru: string;
  };
  posters: {
    medium: {
      url: string;
    };
  };
  player: {
    alternative_player: string | null;
  };
  description: string | null;
}


export interface IResponseTitle {
  list: ITitle[];
  pagination: IPagination
}

interface IPagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}