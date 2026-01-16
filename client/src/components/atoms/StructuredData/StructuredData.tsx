import React from 'react';

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

function safeJsonStringify(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export const StructuredData: React.FC<{ id: string; data: JsonLd }> = ({
  id,
  data,
}) => {
  return (
    <script
      id={id}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(data) }}
    />
  );
};
