var $grillaPixeles = document.getElementById('grilla-pixeles');
var $paleta = document.getElementById('paleta');

let mouseApretado = false;

const $indicardorDeColor = document.getElementById('indicador-de-color');

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
    $paleta.appendChild(colorPaleta);
  }
}


// grilla pixeles
function crearGrilla() {
  for (var index = 0; index < 1750; index++) {
    var pixel = document.createElement('div');
    $grillaPixeles.appendChild(pixel);
  }
}

// seleccionar color
$paleta.addEventListener('click', (event) => {
  if (event.target.className === 'color-paleta') {
    cambiaIndicadorColor(event.target.style.backgroundColor);
  }
})

// cambiar indicador de color
function cambiaIndicadorColor(color) {
  $indicardorDeColor.style.background = color;
}

// Pintar
$grillaPixeles.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV') {
    chequearHayColor();
    event.target.style.backgroundColor = $indicardorDeColor.style.backgroundColor;
  }  
})

$grillaPixeles.addEventListener('mousedown', (event) => {
  mouseApretado = true;
})
$grillaPixeles.addEventListener('mouseup', (event) => {
  mouseApretado = false;
})

// pintar apretado
$grillaPixeles.addEventListener('mousemove', (event) => {
  if (mouseApretado && event.target.tagName === 'DIV') {
    event.target.style.backgroundColor = $indicardorDeColor.style.backgroundColor;
  }
})

// se sale de la grilla
$grillaPixeles.addEventListener('mouseleave', (event) => {
  mouseApretado = false;
})

// alerta no hay color
function alertaNoColor() {
  alert('Debe seleccionar un color');
  mouseApretado = false;
  return false;
}

// chequear color seleccionado
function chequearHayColor() {
  return ($indicardorDeColor.style.backgroundColor) ? true : alertaNoColor();
}

// borrar con jQuery
$('#borrar').on('click', (event) => {
  let $pixeles = $('#grilla-pixeles div');
  $pixeles.animate({
    backgroundColor: 'white'
  }, 1000);
});

//cargar superheroe
$('img.superheroe').on('click', function(event) {
  let superheroe = $(this).attr('id');  
  cargarSuperheroe(window[superheroe]);
});

// guardar
$('#guardar').on('click', (event) => guardarPixelArt());


function iniciar() {
  crearGrilla();
  crearPaleta();
}

// iniciar aplicación
iniciar();