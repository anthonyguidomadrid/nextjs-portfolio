require('dotenv').config();
const { generate } = require('@graphql-codegen/cli');

generate(
  {
    schema: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    documents: './src/**/*.graphql',
    generates: {
      './src/generated/graphql.tsx': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo',
        ],
        config: {
          withHooks: true,
        },
      },
    },
  },
  true
)
  .then(() => {
    console.log('Code generation completed!');
  })
  .catch((error) => {
    console.error('Code generation failed:', error);
    process.exit(1);
  });
