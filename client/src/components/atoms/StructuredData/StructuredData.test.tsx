import React from 'react';
import { render } from '~/utils/test-utils';
import { StructuredData } from './StructuredData';

describe('StructuredData', () => {
  it('renders a JSON-LD script tag with the provided id', () => {
    const { container } = render(
      <StructuredData id='ld-test' data={{ '@type': 'WebSite' }} />
    );

    const script = container.querySelector(
      'script#ld-test[type="application/ld+json"]'
    );
    expect(script).not.toBeNull();
  });

  it('embeds valid JSON that round-trips via JSON.parse', () => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About',
    };

    const { container } = render(<StructuredData id='ld-json' data={data} />);

    const script = container.querySelector(
      'script#ld-json[type="application/ld+json"]'
    );
    expect(script?.textContent).toBeTruthy();

    const parsed = script?.textContent ? JSON.parse(script.textContent) : null;
    expect(parsed).toMatchObject(data);
  });

  it('escapes "<" in the embedded JSON for safety', () => {
    const data = {
      name: 'x<y',
    };

    const { container } = render(
      <StructuredData id='ld-escape' data={data} />
    );

    const script = container.querySelector(
      'script#ld-escape[type="application/ld+json"]'
    );
    expect(script?.textContent).toContain('\\u003c');
    expect(script?.textContent).not.toContain('<');

    const parsed = script?.textContent ? JSON.parse(script.textContent) : null;
    expect(parsed).toMatchObject({ name: 'x<y' });
  });

  it('supports arrays of JSON-LD objects', () => {
    const data = [
      { '@type': 'Person', name: 'A' },
      { '@type': 'WebSite', name: 'B' },
    ];

    const { container } = render(
      <StructuredData id='ld-array' data={data} />
    );

    const script = container.querySelector(
      'script#ld-array[type="application/ld+json"]'
    );
    const parsed = script?.textContent ? JSON.parse(script.textContent) : null;

    expect(parsed).toHaveLength(2);
    expect(parsed[0]).toMatchObject({ '@type': 'Person', name: 'A' });
    expect(parsed[1]).toMatchObject({ '@type': 'WebSite', name: 'B' });
  });
});
