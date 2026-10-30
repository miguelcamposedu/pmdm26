# ⚡ Pokémon App - Comunicación entre Componentes en Angular

Proyecto didáctico en Angular para aprender a estructurar una aplicación modular, comunicar componentes padre e hijo mediante la nueva API de **Signals (`input()` y `output()`)**, consumir servicios HTTP y abrir diálogos modales con **`@ng-bootstrap`**.

---

## 🗺️ Guía de Desarrollo Paso a Paso (Steps)

A lo largo del código fuente del proyecto se encuentran comentarios guía (`// STEP X:` o `<!-- STEP X: -->`) que marcan el orden pedagógico en el que se debe construir la solución:

### 🔹 Paso 1 (STEP 1): Configuración de HttpClient y Sistema de Rutas
* **Archivos implicados:** 
  * [`src/app/app.config.ts`](src/app/app.config.ts)
  * [`src/app/app.routes.ts`](src/app/app.routes.ts)
* **¿Qué hacemos y por qué?**
  1. En `app.config.ts`, declaramos en el array `providers` el proveedor `provideHttpClient()`. Esto habilita la inyección y uso del cliente HTTP (`HttpClient`) en los servicios de la aplicación.
  2. En `app.routes.ts`, definimos las rutas de navegación de la app. En este caso configuramos `{ path: 'pokemon-list', component: PokemonListComponent }` y la redirección por defecto de `''` hacia `/pokemon-list`.

---

### 🔹 Paso 2 (STEP 2): Generación de Componentes y Configuración del Router Outlet
* **Archivos implicados:** 
  * [`src/app/app.html`](src/app/app.html)
  * [`src/app/components/pokemon-list-component/pokemon-list-component.ts`](src/app/components/pokemon-list-component/pokemon-list-component.ts)
* **¿Qué hacemos y por qué?**
  1. Generamos los componentes principales con Angular CLI:
     ```bash
     ng g c components/pokemon-list-component
     ng g c components/pokemon-item-component
     ng g c components/pokemon-modal
     ```
  2. En la plantilla raíz `app.html`, colocamos `<router-outlet></router-outlet>`. Esto permite que los componentes se carguen y visualicen dinámicamente en el DOM según la ruta activa configurada en el enrutador.

---

### 🔹 Paso 3 (STEP 3): Creación de Interfaces de Respuesta (Modelos)
* **Archivos implicados:** 
  * [`src/app/interfaces/pokemon-list-response.ts`](src/app/interfaces/pokemon-list-response.ts)
  * [`src/app/interfaces/pokemon-detail-response.ts`](src/app/interfaces/pokemon-detail-response.ts)
* **¿Qué hacemos y por qué?**
  1. Generamos la interfaz para el listado con:
     ```bash
     ng g interface interfaces/pokemon-list-response
     ```
     Definiendo los tipos `PokemonListResponse` y `Pokemon` (`name: string`, `url: string`).
  2. Para el detalle completo de un Pokémon, generamos la interfaz tipada a partir del JSON que devuelve la PokeAPI. Para agilizarlo, podemos:
     - Utilizar la web [JSON to TS (transform.tools)](https://transform.tools/json-to-typescript).
     - O bien usar la extensión de VS Code **Quicktype for JSON** pulsando `Ctrl + Shift + P` y seleccionando *"Paste JSON as code"*.

---

### 🔹 Paso 4 (STEP 4): Creación del Servicio para Peticiones HTTP
* **Archivo implicado:** 
  * [`src/app/services/pokemon-service.ts`](src/app/services/pokemon-service.ts)
* **¿Qué hacemos y por qué?**
  1. Creamos la clase de servicio `@Service()` e inyectamos `HttpClient` mediante `inject(HttpClient)`.
  2. Declaramos el método `getAll(): Observable<PokemonListResponse>` que realiza la petición GET al listado:
     `https://pokeapi.co/api/v2/pokemon/`
  3. Declaramos el método `getOne(id: string): Observable<PokemonDetailResponse>` para obtener los datos detallados de un Pokémon individual a partir de su ID:
     `https://pokeapi.co/api/v2/pokemon/${id}`

---

### 🔹 Paso 5 (STEP 5): Componente Hijo - Recibir Datos con `input()`
* **Archivo implicado:** 
  * [`src/app/components/pokemon-item-component/pokemon-item-component.ts`](src/app/components/pokemon-item-component/pokemon-item-component.ts)
* **¿Qué hacemos y por qué?**
  * Declaramos en el componente hijo (`PokemonItemComponent`) la propiedad de entrada basada en señales (signal inputs):
    ```typescript
    pokemon = input<Pokemon>();
    ```
    Este componente se encarga de pintar la tarjeta individual en la UI con los datos del Pokémon que recibe desde el padre.

---

### 🔹 Paso 6 (STEP 6): Componente Hijo - Declarar Emisor con `output()`
* **Archivo implicado:** 
  * [`src/app/components/pokemon-item-component/pokemon-item-component.ts`](src/app/components/pokemon-item-component/pokemon-item-component.ts)
* **¿Qué hacemos y por qué?**
  * Declaramos una propiedad de salida de tipo `output`:
    ```typescript
    pokemonClicked = output<string>();
    ```
    Nos permite emitir un evento personalizado (*custom event*) para avisar al componente padre cuando se ha hecho clic en un Pokémon concreto, enviándole su identificador (`id`).

---

### 🔹 Paso 7 (STEP 7): Vista Hijo - Vincular Evento Click en el Botón
* **Archivo implicado:** 
  * [`src/app/components/pokemon-item-component/pokemon-item-component.html`](src/app/components/pokemon-item-component/pokemon-item-component.html)
* **¿Qué hacemos y por qué?**
  * Definimos un evento `(click)` sobre el botón que queremos que dispare la acción hacia el componente padre:
    ```html
    <button type="button" class="btn-solid theme-primary" (click)="emitPokemonClicked()">
      View detail
    </button>
    ```

---

### 🔹 Paso 8 (STEP 8): Componente Hijo - Manejar el Click y Emitir el Output
* **Archivo implicado:** 
  * [`src/app/components/pokemon-item-component/pokemon-item-component.ts`](src/app/components/pokemon-item-component/pokemon-item-component.ts)
* **¿Qué hacemos y por qué?**
  * Definimos el método `emitPokemonClicked()`. Este método obtiene el ID del Pokémon (extrayéndolo de la URL) y emite ese valor a través del output:
    ```typescript
    emitPokemonClicked() {
      const id = this.getPokemonId();
      this.pokemonClicked.emit(id);
    }
    ```

---

### 🔹 Paso 9 (STEP 9): Componente Padre - Pasar Input y Escuchar el Output
* **Archivo implicado:** 
  * [`src/app/components/pokemon-list-component/pokemon-list-component.html`](src/app/components/pokemon-list-component/pokemon-list-component.html)
* **¿Qué hacemos y por qué?**
  * En la vista del componente padre (`PokemonListComponent`), al renderizar cada hijo dentro del `@for`, establecemos dos bindings clave:
    1. **Input `[pokemon]="pok"`**: Le pasa al hijo el Pokémon a dibujar.
    2. **Output `(pokemonClicked)="openPokemonModal($event)"`**: Escucha el evento emitido por el hijo. La variable reservada `$event` contiene el `id` emitido.
    ```html
    <app-pokemon-item-component 
        [pokemon]="pok"
        (pokemonClicked)="openPokemonModal($event)">
    </app-pokemon-item-component>
    ```

---

### 🔹 Paso 10 (STEP 10): Componente Padre - Recibir el ID y Consultar la API
* **Archivo implicado:** 
  * [`src/app/components/pokemon-list-component/pokemon-list-component.ts`](src/app/components/pokemon-list-component/pokemon-list-component.ts)
* **¿Qué hacemos y por qué?**
  * En el componente padre creamos el método `openPokemonModal(id: string)`. Recibe el ID enviado por el hijo y realiza la petición al servicio con `pokemonService.getOne(id)` para obtener todos los detalles del Pokémon antes de abrir el modal.

---

### 🔹 Paso 11 (STEP 11): Declaración del Componente Modal
* **Archivos implicados:** 
  * [`src/app/components/pokemon-modal/pokemon-modal.ts`](src/app/components/pokemon-modal/pokemon-modal.ts)
  * [`src/app/components/pokemon-modal/pokemon-modal.html`](src/app/components/pokemon-modal/pokemon-modal.html)
* **¿Qué hacemos y por qué?**
  * Diseñamos el componente `PokemonModal` que mostrará el diálogo flotante.
  * Inyectamos `NgbActiveModal` (`activeModal = inject(NgbActiveModal)`) para controlar las acciones de cierre (`close()`) o descarte (`dismiss()`) del modal de Bootstrap.
  * Declaramos un parámetro de entrada `@Input() pokemonDetail: PokemonDetailResponse | undefined;` para almacenar el detalle que le suministre el componente que abra el modal.

---

### 🔹 Paso 12 (STEP 12): Abrir el Modal y Suministrarle los Datos
* **Archivo implicado:** 
  * [`src/app/components/pokemon-list-component/pokemon-list-component.ts`](src/app/components/pokemon-list-component/pokemon-list-component.ts)
* **¿Qué hacemos y por qué?**
  * Dentro de la suscripción a `pokemonService.getOne(id)`, abrimos el componente modal usando `NgbModal` y le asignamos a su propiedad `pokemonDetail` el objeto recibido:
    ```typescript
    const modalRef = this.modalService.open(PokemonModal);
    modalRef.componentInstance.pokemonDetail = resp;
    ```

---

## 🛠️ Comandos útiles para desarrollo

### Servidor de desarrollo
Para arrancar el servidor local de desarrollo:
```bash
ng serve
```
Abre tu navegador en `http://localhost:4200/`. La aplicación se recarga automáticamente ante cualquier cambio.

### Compilación (Build)
Para compilar el proyecto para producción:
```bash
ng build
```
Los artefactos compilados se almacenarán en el directorio `dist/`.

### Tests unitarios
Para ejecutar las pruebas unitarias:
```bash
ng test
```
