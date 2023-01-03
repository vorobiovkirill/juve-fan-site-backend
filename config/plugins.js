module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-supabase-v4",
        providerOptions: {
          apiUrl: env("SUPABASE_API_URL"),
          apiKey: env("SUPABASE_API_KEY"),
          bucket: env("SUPABASE_BUCKET"),
          directory: env("SUPABASE_DIRECTORY"),
          options: {},
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  });
