#Maldibot V1.1.1

**Table of Contents**

[TOCM]

------------


## Introducción

Maldibot es un bot diseñado para Discord desarrollado en **Node js**, fue elaborado para realizar casi cualquier tarea menos hacer la tuya. Esta es la v1, aunque hay comandos inestables. No se proporciona un link para unir al bot, debido a que sigue en desarrollo y se prefiere tenerlo en un ambiente controlado.  

------------
# Release V1.1.1
Se agregó el comando `prefix` que permite cambiar el prefijo con el que el bot es utilizado.

##### cambios
 - Agregado de comando `prefix`

------------

## Comandos
 #### aclaraciones
- El prefijo establecido para llamar o usar un comando es "!", si desea cambiarlo puede ejecutar el comando `!prefix <nuevo_prefijo>`.
- En toda la documentación se usará `!` para referirnos al prefijo, adaptelo al que usted use.
- Se puede obtener informacion de un comando usando la siguiente expresión `!help <command>`

#### Comandos
Los comandos estan divididos según su uso o permisos.
  
 ##### Generales
 - `!bot` : No tiene una funcion muy importante, sirve para saber si el bot se encuentra activo y no esta durmiendo.
 
 - `!help`: Muestra todos los comando, se puede escribir `!help <command name>` para obtener información de un comando en especifico.Alias `!h`,``!commands`
 
 - `!info <user>` : Obtiene la información del usuario mencionado, si no se menciona a alguien obtiene la información del autor del mensaje. La informarción mostrada es: nombre de usuario, discriminador, estado, fecha de creación de la cuenta, roles y foto de perfil. 
 
 - `!avatar <user>` : Obtiene la foto de perfil o avatar del usuario mencionado, si no se menciona a alguien obtiene el avatar del autor del mensaje. Alias `!av`.
 
 - `!temp`:  Se utiliza para enviar un mensaje temporal al chat de Discord, no a otro usuario, el mensaje es eliminado luego de 5 segundos. Alias `!t`.
 
- `!myinvocation <name>` : Crea un nombre para poder invocarte.Es divertido y más si te gusta pokemon.Alias `!myInvocation`,`!myinvoc`,`!nameinvoc"`

-`!invocacion <nombre>` : Invoca al usuario con ese nombre. Alias `!invocation`,`!super"`

 - `!msg <user> <mensaje>`:  Envia un mensaje al usuario mencionado, solo se acepta cadenas de texto, no imagenes,gifs, etc. Se puede añadir `-d` al final del mensaje para borrarlo.
 
 - `!invite`:  Genera un enlace de invitación para el grupo de Discord.Alias `!invitacion`
 
##### Música
  Los comandos de la seccion musica tambien son generales, es decir cualquier persona puede usarlo, sin embargo se optó por crear una sección aparte en la documentación. 
- `!list <music?>` : Guarda o una canción en una lista, es algo parecido a una playlist de YouTube pero en discord, si no se especifica un argumento devuelve tu lista de canciones. `!playlist`,`!mylist`

 `!play <music or url>` : Reproduce una canción a partir de un nombre o una URL de YouTube (solo acepta una URL de esta plataforma), la música es buscada en la plataforma mencionada anteriormente. Este comando está en fase de prueba (ver las seccion Nota).Alias `!p`
 
 `!leave` : Desconecta al bot del canal de voz.Alias `!salir`

##### Administración
Todos los comandos en esta seccion solo pueden ser usado por el administrador del servidor o que tenga el permiso señalado.

- `!ban <user> <razón>` : Banea al usuario mencionado, este comando solo puede ser usado por el administrador o aquel que tenga el permiso de `BAN_MEMBERS`,para usarlo se debe de mencionar al usuario e indicar la razon del baneo .El usuario rbaneado recibira un mensaje con los detalles.Alias `!banear`

- `!unban <userId>` : Desbanea a un usuario del sevidor, para este comando se necesita el permiso `BAN_MEMBERS`, al usarlo se debe de señalar el ID del usuario baneado.Alias `!desban`

- `!kick <user> <razon>` : Patea a un usario del servidor, solo hace falta mencionar al usuario e indicar una razón. Se necesita el permiso `KICK_MEMBERS`, la respuesta es un bonito mensaje embed para ambas partes.Alias `!patear`

- `!asingRol <user> <name rol>` : Asigna el rol especificado al usuario mencionado, se debe de tener el permiso `MANAGE_ROLES`.Alias `!asingrol`,`!asingRoles`

- `!rol <accion> <name rol> <color> <permissions?>`: Este comando permite manejar los roles del servidor segun la accion que se elija,Se necesita el permiso `MANAGE_ROLES`, acontinuacion se enumeran las acciones:
 ###### acciones
 - `create`: Crea un nuevo rol, se necesitan los 2 argumentos posteriores indicando el nombre y color a asignarse al rol. Ejemplo:
 `!rol create Mod  RED`
 En la seccion de color se explia como debe ser el argumento `<color>`
 
 - `install <rol>` : crea los roles predeterminados, especificaos en el archivo `dev.json`, se puede especificar una categoria en esecifico, ejemplo `!rol install DEV` o se puede instalar todo `!rol install All`. 
 
 - `clear <number>`:  elimina mensajes de acuerdo a la cantidad especificada, la cantidad debe estar en el rango de 1 a 99, estos rangos son puestos por la propia API de Discord.
 
 ###### colores
 Los colores deben ser especificados en ingles y en mayúsculas `BLUE`, que deben de estar especificadas en la documentación de [Discord js](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable), tambien se puede especificar de forma hexadecimal `#fba919`, en caso no sepa que color elegir puede usar `RANDOM`.
 
 ###### permissions
 Los permisos son opcionales al crear el rol, se puede poner 1 de la forma `!rol create Mod RED BAN_MEMBERS` o una serie de permisos de la forma `!rol create Mod RED [BAN_MEMBER,KICK_MEMBERS,MANGE_ROLE]`, los permisos deben ser escritos en mayusculas, segun la propia [documentación](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)

#### Nota 
 - Todos los comandos tiene un tiempo de espera para volver a ser usados, esto varia según el comando, esto está especificado al solicitar la información del comando con `!help <command name>` en la parte de cooldonws.
 
 - El comando `!play` se encuentra en una version inestable y puede presentar fallas.
 
 - No esiste un comando `!stop`, para detener la musica se tiene que desconectar al bot del canal de voz con el comando `!leave` 

------------
### Condiciones de uso
El bot registra todos los mensajes enviados en una base de datos, para luego ser procesados, esto sera de ayuda para desarrollar un mejor bot con IA (inteligencia Artificial) para futuras versiones. La idea es que **Maldibot** sea un integrante mas de tu servidor de Discord y que pueda interactuar con los integrantes, comportandose de la mejor forma dentro del grupo.
Si deseas usar a **Maldibot** tal y como esta, estaras de acuerdo y conforme a esta condición. En caso de que quieras hacer pruebas y/o modificar fucionalidades se recomienda comentar la linea de código o establecer una variable de entorno llamada `ENVIROMENT_TYPE` con el valor `Dev` , esto para no afectar la integridad de los datos almacenados.
La informacion recopilada del mensaje es:
 - ID del gremio.
 - Nombre del gremio.
 - ID del Autor del mensaje.
 - Contenido del mensaje.
 - URL (en caso exista)
 
Los datos almacenados no son compartidos ni vendidos a terceros, se quedan en la BD de **Maldibot** para su posterior procesamiento, la única persona que accede a tal informacion es el propietario a esta cuenta de **Github** y tal vez en un futuro un equipo. No se considera equipo a los contribuyentes (no oficializados) a este código.

------------


### Dependencias
Este proyeco es open source incluyendo las dependencias utilizadas.
 - [discordjs](https://github.com/discordjs/discord.js)  
  - [@discordjs](https://github.com/discordjs/opus#readme)
 - [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
 - [opusscript](https://www.npmjs.com/package/opusscript)
 - [mongoose](https://mongoosejs.com/docs/api.html)
 - [ytdl-core](https://www.npmjs.com/package/ytdl-core) 

------------


### Contribuir
Para contribuir clone el repositorio y cree una nueva rama, asegurese de que la funcion o problema no haya sido sugerido/reportado. Finalmente mande la solicitud.