interface UserFavoriteType {
  id: number;
  external_id?: string;
  slug?: string;
  title: string;
  external_url: string;
  embed_url: string;
  image_type: string;
  created_at: Date;
}

export default UserFavoriteType;
