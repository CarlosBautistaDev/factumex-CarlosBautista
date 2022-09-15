# Prueba de Ingreso Front Developer 

## Autor `Carlos Bautista`

## Available Scripts

In the project directory, you can run:
### `npm install`

Nos ubicamos en la carpeta del proyecto e instalamos las dependencias 

### `npm run start:dev`


Inicia la aplicación en modo Dev en el puerto 3000 [http://localhost:3000](http://localhost:3000) 



### `npm run build`

Ejecutar comando para generar Build de la app y ser desplegada en servidor 


## Login

Se implementa navbar, pagina de Home y Login con Hash Router, ademas de validar la ruta Si se coloca una path inexistente y no tiene una sesión activa, redirecciona a HOME, si existe una sesión, redirecciona a Employees.

Datos de inicio de sesion:
email: factumex@gmail.com
password: 123

## Employees

Seccion de empleados, se valida la sesion de usuario, posterior se inicializa la data desde el app.js mediante un useEffect haciendo un dispatch hacia un Thunk para hacer la llamada asincrona y posteriormente al terminar la peticion, envia los datos al slice que es quien guarda la informacion en la Store.

El buscador se implementa con un useState local para almacenar los empleados y este mismo se agrega al valor del input, se le agrega un onChange con una funcion que regresa la paginacion a 0 y setea el valor del evento seleccionado a un estado local para asi que el resultado cambie al escribir.

Se pinta la tabla con un map hacia la funcion que valida si hay busqueda o no.

Se agregan boton de Prev y Next con la validacion para no pasar si no hay valores atras o adelante.

Aqui se implementa la libreria `Redux, React-Redux y Redux-toolkit` que es un poco mas reciente para el manejo del estado global.