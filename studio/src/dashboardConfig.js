export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62462f7af1450334e84ae3fe",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9cs969vw",
                  apiId: "1f0685e3-e5a6-49e5-9a9c-532a5e8d8e01",
                },
                {
                  buildHookId: "62462f7a8b723a3607873842",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-e48dmixt",
                  apiId: "fd1850db-c45f-438f-a15b-f2694eba6ae7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/figart/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-e48dmixt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
