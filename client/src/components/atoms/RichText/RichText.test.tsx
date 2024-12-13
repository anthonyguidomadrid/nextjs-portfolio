import { screen } from '@testing-library/react';
import { RichText } from './RichText';
import { getBySplittedText, render } from '~/utils/test-utils';

describe('RichText', () => {
  it('renders headings correctly', () => {
    const content = '### Heading Text ###';
    render(<RichText content={content} />);

    const heading = screen.getByText('Heading Text');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H4');
  });

  it('renders paragraphs correctly', () => {
    const content = 'This is a simple paragraph.';
    render(<RichText content={content} />);

    const paragraph = screen.getByText('This is a simple paragraph.');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  it('renders multiple paragraphs separated by two newlines', () => {
    const content = 'First paragraph.\n\nSecond paragraph.';
    render(<RichText content={content} />);

    const firstParagraph = screen.getByText('First paragraph.');
    const secondParagraph = screen.getByText('Second paragraph.');

    expect(firstParagraph).toBeVisible();
    expect(secondParagraph).toBeVisible();
  });

  it('renders line breaks within paragraphs', () => {
    const content = 'First line.\nSecond line.';
    render(<RichText content={content} />);

    expect(getBySplittedText('First line.Second line.')).toBeInTheDocument();
    expect(getBySplittedText('First line.Second line.').innerHTML).toContain(
      '<br>'
    );
  });

  it('renders a mix of headings and paragraphs', () => {
    const content =
      '### Heading ###\n\nThis is a paragraph.\nAnother line in the same paragraph.';
    render(<RichText content={content} />);

    const heading = screen.getByText('Heading');

    expect(heading).toBeVisible();
    expect(
      getBySplittedText(
        'This is a paragraph.Another line in the same paragraph.'
      )
    ).toBeInTheDocument();
    expect(
      getBySplittedText(
        'This is a paragraph.Another line in the same paragraph.'
      ).innerHTML
    ).toContain('<br>');
  });

  it('handles empty content gracefully', () => {
    const content = '';
    render(<RichText content={content} />);

    const container = screen.queryByText(/./);
    expect(container).toBeNull();
  });
});
