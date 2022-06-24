const searchClient = algoliasearch(
  'MG8XDJH7KN',
  'cf49bd49749772f4f7b985fa70f9097f'
);

autocomplete({
  container: '#autocomplete',
  placeholder: 'Rechercher un produit',
  getSources({ query }) {
    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'dev_alive',
                query,
                params: {
                  hitsPerPage: 3,
                  attributesToSnippet: ['title:10', 'description:35', 'categorie:10', 'img'],
                  snippetEllipsisText: '…',
                },
              },
            ],
          });
        },
        templates: {
          item({ item, components, html }) {
            return html`<div class="aa-ItemWrapper">
              <div class="aa-ItemContent">
                <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                  <img
                    src="${item.img}"
                    alt="${item.title}"
                    width="100%"
                    height="auto"
                  />
                </div>
                <div class="aa-ItemContentBody">
                  <div class="aa-ItemContentTitle">
                    ${components.Highlight({
              hit: item,
              attribute: 'title',
            })}
                  </div>
                  <div class="aa-ItemContentDescription">
                    ${components.Snippet({
              hit: item,
              attribute: 'description',
            })}
                  </div>
                </div>
                <div class="aa-ItemActions">
                  <a
                    href="../fiche-produit.html"
                    class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                    type="button"
                    title="Select"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path
                        d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>`;
          },
        },
      },
    ];
  },
});