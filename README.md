An Angular app showcase for Code Busters interview base on usage of https://pokeapi.co/ API.

# Install
Run `npm ci`.

# Start
Run `npm start`.
The application run on localhost:4200.

# TODO
- query params sur https://pokeapi.co/api/v2/pokemon/ pour filtrer en fonction du nom, du type, ...
- informations supplémentaires sur https://pokeapi.co/api/v2/pokemon/ comme le type, la generation, ...
- stats pokemon superposé sur RadarChartComponent (avec filtre de recherche autre pokemon)
- ajouter pokemon suivant/précédent & (sous)évolution au DetailComponent
- ajouter un composant à la snacbar httpErrorInterceptor avancé (avec fermeture a automatique & mat-progress-bar du décompte fermeture automatique)
- ajouter tests
- ajouter image de remplacement en cas d'image 404
- ajouter titre de la page dans onglet (utilisation router)
- enable mode prod