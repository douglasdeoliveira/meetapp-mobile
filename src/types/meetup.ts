export interface Meetup {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  past: boolean;
  user: {
    id: number;
    name: string;
    email: string;
  };
  file: {
    url: string;
    path: string;
  };
}
