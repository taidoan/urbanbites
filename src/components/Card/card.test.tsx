import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import s from './styles.module.scss';

describe('CardTitle', () => {
  test('renders title with default class', () => {
    const { getByText } = render(<CardTitle title="Test Title" />);
    const titleElement = getByText('Test Title');
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(s.title);
  });

  test('renders title with additional classNames', () => {
    const additionalClass = 'custom-class';
    const { getByText } = render(<CardTitle title="Test Title" classes={additionalClass} />);
    const titleElement = getByText('Test Title');
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(s.title);
    expect(titleElement).toHaveClass(additionalClass);
  });

  test('renders title with small variant', () => {
    const { getByText } = render(<CardTitle title="Test Title" size="small" />);
    const titleElement = getByText('Test Title');
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(s.title);
    expect(titleElement).toHaveClass(s.titleSmall);
  });

  test('renders title with large size', () => {
    const { getByText } = render(<CardTitle title="Test Title" size="large" />);
    const titleElement = getByText('Test Title');
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(s.title);
    expect(titleElement).not.toHaveClass(s.titleSmall);
  });
});