import { render, cleanup } from "@testing-library/react";
import ImageUpload from '../ImageUpload';
import '@testing-library/jest-dom';

test('Image Upload is present', () => {
    const { container } = render(<ImageUpload />);
    const imageUpload = container.querySelector(".imageupload");
    expect(imageUpload).toBeInTheDocument();
})

afterEach(() => {
  cleanup();
});