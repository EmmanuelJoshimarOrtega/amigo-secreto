# **Amigo Secreto**

Esta es la actividad del curso de Alura 'Chellenge amigo secreto'

## Primera version 
Se integran el readme y el repositorio base, en la inicializacion del nuevo repositorio ([git init] => [git add .] => [git commit -m "mensaje"] => [git remote add origin "http de github"] => [git branch -M main] => [git push -u origin main]) el repositorio tuvo un problema que no conocia.

<img width="561" height="197" alt="Image" src="https://github.com/user-attachments/assets/0600f24e-c345-4f28-896d-e855ae4a760c" />

En esta parte [git branch -M main] => (&#x1F536;) [git push -u origin main]) 


E investigando encontre que lo mejor seria cambiarlo a esto [git branch -M main] => (&#x1F537;) [ git push -f -u origin main])

<img width="568" height="366" alt="Image" src="https://github.com/user-attachments/assets/56a749f8-eca8-4b24-8ce9-b1459edcf00e" />

Lo que hace basicamente es forzar la actualizacion de la carpeta al repositorio


## Segunada version

Se cre la lista y la funcion de agregar nombres de los amigos, asi como caracteristicas extras como arrojar una alerta cuando ya se agrego el mismo nombre anteriormente y limpiar la cajita despues de agregar un nombre.


<img width="281" height="74" alt="Image" src="https://github.com/user-attachments/assets/59c2606c-d508-45dc-b0f1-d2ba1b885059" /> 


Array para la lista.


<img width="470" height="62" alt="Image" src="https://github.com/user-attachments/assets/fcd66260-313f-46dc-989c-fd69c4f4855b" /> 


Funcion para agregar nombres a partir del input amigo.


<img width="691" height="206" alt="Image" src="https://github.com/user-attachments/assets/09583999-5c1b-458f-8f94-d4d7b98c3bfc" /> 


Cuerpo de la funcion.


<img width="427" height="51" alt="Image" src="https://github.com/user-attachments/assets/35478d9e-36f7-4a20-b1d0-06c9d7f6d574" /> 


Parte agregada de la funcion que impide repetir nombres.


<img width="407" height="110" alt="Image" src="https://github.com/user-attachments/assets/cbb10631-45ba-4c6e-857c-2bfb44c1b141" /> 


Funcion que nos limpia la caja.


<img width="1654" height="756" alt="Image" src="https://github.com/user-attachments/assets/7c38c287-0596-42e9-a6be-807c7f00a97a" /> 


Muestra de 4 nombres añadidos.


<img width="807" height="408" alt="Image" src="https://github.com/user-attachments/assets/dbf0b820-7944-4be4-8af2-17f13c316c67" /> Mensaje en alert si no se ingresa un nombre y se clickea el boton añadir


<img width="703" height="209" alt="Image" src="https://github.com/user-attachments/assets/42c1f6f6-c33b-4a5f-a65d-c28ee1a60b5e" /> Mensaje si duplican algun nombre
