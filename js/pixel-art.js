var grillaPixeles = document.getElementById('grilla-pixeles');
var paleta = document.getElementById('paleta');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cambiaIndicadorColor(colorActual)

  })
);

// crear grilla
function crearPaleta() {
  for (var index = 0; index < nombreColores.length; index++) {
    var color = nombreColores[index];
    var colorPaleta = document.createElement('div');
    colorPaleta.style.backgroundColor = color;
    colorPaleta.className = 'color-paleta';
    paleta.appendChild(colorPaleta);
  }
}


// grilla pixeles
function crearGrilla() {
  for (var index = 0; index < 1750; index++) {
    var pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

// seleccionar color
paleta.addEventListener('click', (event) => {
  if (event.target.className === 'color-paleta') {
    cambiaIndicadorColor(event.target.style.backgroundColor);
  }
})

// cambiar indicador de color
function cambiaIndicadorColor(color) {
  const indicardorDeColor = document.getElementById('indicador-de-color');
  indicardorDeColor.style.background = color;
}

// Pintar
grillaPixeles.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV') {
    const indicardorDeColor = document.getElementById('indicador-de-color');
    event.target.style.backgroundColor = indicardorDeColor.style.backgroundColor;
  }  
})


function iniciar() {
  crearGrilla();
  crearPaleta();
}

// iniciar aplicación
iniciar();