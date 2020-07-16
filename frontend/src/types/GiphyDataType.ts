export default interface GiphyData {
  type: string;
  id: string;
  slug: string;
  url: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    }
  }
}