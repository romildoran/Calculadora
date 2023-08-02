# Calculadora en JavaScript - Documentación

Este proyecto es una calculadora implementada en JavaScript que permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación, división, cálculo de raíz cuadrada y potencia, entre otras. Además, se utiliza el objeto `Math` de JavaScript para realizar algunas operaciones matemáticas más avanzadas.

## Funciones principales

### 1. `mostrarResultado(resultado)`

Esta función se encarga de mostrar el resultado de las operaciones en la pantalla de la calculadora. Recibe como parámetro el resultado de la operación y lo asigna al elemento de la página con el id `resultado`, que muestra el resultado al usuario.

### 2. Operaciones matemáticas básicas

- `suma()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, realiza la suma y muestra el resultado llamando a la función `mostrarResultado()`.

- `resta()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, realiza la resta y muestra el resultado llamando a la función `mostrarResultado()`.

- `multiplicacion()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, realiza la multiplicación y muestra el resultado llamando a la función `mostrarResultado()`.

- `division()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, realiza la división y muestra el resultado llamando a la función `mostrarResultado()`.

### 3. Operaciones matemáticas avanzadas

- `raiz()`: Obtiene el valor ingresado por el usuario en el campo `campo1`, calcula la raíz cuadrada y muestra el resultado llamando a la función `mostrarResultado()`.

- `potencia()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, calcula la potencia y muestra el resultado llamando a la función `mostrarResultado()`.

- `absoluto()`: Obtiene el valor ingresado por el usuario en el campo `campo1`, calcula el valor absoluto y muestra el resultado llamando a la función `mostrarResultado()`.

- `aleatorio()`: Obtiene los valores ingresados por el usuario en los campos `campo1` y `campo2`, genera un número aleatorio entre esos valores y muestra el resultado llamando a la función `mostrarResultado()`.

### 4. Funciones adicionales

- `redondeo()`: Obtiene el resultado actual de la calculadora, realiza el redondeo al número entero más cercano y muestra el resultado llamando a la función `mostrarResultado()`.

- `techo()`: Obtiene el resultado actual de la calculadora, realiza el redondeo hacia arriba y muestra el resultado llamando a la función `mostrarResultado()`.

- `piso()`: Obtiene el resultado actual de la calculadora, realiza el redondeo hacia abajo y muestra el resultado llamando a la función `mostrarResultado()`.

- `refreshPage()`: Esta función se utiliza para reiniciar la página, lo que borra los valores ingresados y el resultado mostrado en la calculadora.

## Archivos

- `app.js`: Contiene todas las funciones de la calculadora implementadas en JavaScript.

- `index.html`: Es la página HTML que muestra la interfaz de la calculadora. Contiene los campos de entrada, los botones de operaciones y el campo de resultado.

- `style.css`: Es una hoja de estilos CSS que define el aspecto visual de la calculadora, como el tamaño de los botones y campos de entrada.

## Uso

Para utilizar la calculadora, simplemente abre el archivo `index.html` en tu navegador web. Verás la interfaz de la calculadora, donde puedes ingresar dos números en los campos de entrada `campo1` y `campo2`. Luego, selecciona una operación matemática haciendo clic en el botón correspondiente. El resultado de la operación se mostrará en el campo de resultado `resultado`.

Puedes realizar diferentes operaciones matemáticas y usar las funciones adicionales para obtener resultados más precisos o realizar cálculos específicos.

## Nota

Este proyecto fue desarrollado como parte del curso "JavaScript Total" en Udemy. El código y la documentación son proporcionados con fines educativos y de aprendizaje. Siéntete libre de modificar y mejorar el código según tus necesidades o para practicar tus habilidades en JavaScript. ¡Disfruta aprendiendo y desarrollando!