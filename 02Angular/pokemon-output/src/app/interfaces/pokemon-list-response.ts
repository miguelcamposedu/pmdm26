// STEP3: generar la inteface de respuesta de la petición
// que vamos a implementar: ng g interface interfaces/pokemon-list-interface

export interface PokemonListResponse {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}