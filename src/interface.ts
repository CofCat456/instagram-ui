export interface Post {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

export interface Story {
  id: number;
  name: string;
  avatar: string;
}

export interface Friend {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
}

export default {};
