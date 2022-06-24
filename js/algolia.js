// import algoliasearch from 'algoliasearch/lite';
// import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';

// import '@algolia/autocomplete-theme-classic';

const searchClient = algoliasearch(
  'MG8XDJH7KN',
  'cf49bd49749772f4f7b985fa70f9097f'
);

autocomplete({
  container: '#autocomplete',
  placeholder: 'rechercher un produit',
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
                },
              },
            ],
          });
        },
        // ...
      },
    ];
  },
});