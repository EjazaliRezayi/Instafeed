import { render, cleanup } from "@testing-library/react";
import Post from '../Post';
import '@testing-library/jest-dom';

test('Post renders', () => {
  const { container } = render(<Post />);
  expect(container.querySelector('.post_comments')).toBeNull();
})

test('Post input shows up', () => {
    const { container } = render(<Post />);
    const postButton = container.querySelector(".Post_button");
    expect(postButton).toBeInTheDocument();
})

test('Post follow button is present', () => {
    const { container } = render(<Post />);
    const postFollow = container.querySelector(".Post_follow");
    expect(postFollow).toBeInTheDocument();
})

test('Post picture is present', () => {
    const { container } = render(<Post />);
    const postPicture = container.querySelector(".Post_pic");
    expect(postPicture).toBeInTheDocument();
})

test('Post comments are visible if any', () => {
    const { container } = render(<Post />);
    const postComments = container.querySelector(".Post_commentbox");
    expect(postComments).toBeInTheDocument();
})

test('Post caption and username is present', () => {
    const { container } = render(<Post />);
    const postCaption = container.querySelector(".Post_text");
    expect(postCaption).toBeInTheDocument();
})

test('Post header is present', () => {
    const { container } = render(<Post />);
    const postHeader = container.querySelector(".Post_header");
    expect(postHeader).toBeInTheDocument();
})

test('Post avatar is present', () => {
    const { container } = render(<Post />);
    const postAvatar = container.querySelector(".Post_Avatar");
    expect(postAvatar).toBeInTheDocument();
})

afterEach(() => {
  cleanup();
});
