import React from 'react';
import ImageListImage from './ImageListImage';
import { render } from '@testing-library/react';
import ImageType from '../../../types/ImageType';

const testImage: ImageType = {
  external_id: 'id',
  external_url: 'url',
  image_type: 'gif',
  slug: 'a-slug',
  embed_url: 'embed_url',
  title: 'test-image'
};

it('renders correctly', () => {
  const tree = render(<ImageListImage image={testImage} alt='test' />)

  expect(tree).toMatchSnapshot();
});
