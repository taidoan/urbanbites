import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardMeta from "./CardMeta";
import Card from "./index"
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import s from './styles.module.scss';

describe('Card', () => {
  test('applies classname to Card element', () => {
    const className = 'custom-classname';
    const { container } = render(<Card className={className}>Card Content</Card>);

    expect(container.firstChild).toHaveClass(className)
  })
})

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

describe('CardMeta component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<CardMeta>Test Content</CardMeta>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<CardMeta>Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.meta);
    expect(container.firstChild).toHaveClass(s.metaJustifyFlexStart);
  });

  it('applies custom classes', () => {
    const customClass = 'custom-class';
    const { container } = render(<CardMeta classes={customClass}>Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies top border class when border is "top"', () => {
    const { container } = render(<CardMeta border="top">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaBorderTop);
  });

  it('applies bottom border class when border is "bottom"', () => {
    const { container } = render(<CardMeta border="bottom">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaBorderBottom);
  });

  it('applies correct justify class for "space-between"', () => {
    const { container } = render(<CardMeta justify="space-between">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaJustifySpaceBetween);
  });

  it('applies correct justify class for "center"', () => {
    const { container } = render(<CardMeta justify="center">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaJustifyCenter);
  });

  it('applies correct justify class for "right"', () => {
    const { container } = render(<CardMeta justify="right">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaJustifyFlexEnd);
  });

  it('applies correct justify class for "left"', () => {
    const { container } = render(<CardMeta justify="left">Test Content</CardMeta>);
    expect(container.firstChild).toHaveClass(s.metaJustifyFlexStart);
  });
});