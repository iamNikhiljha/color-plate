// Create main container
var mainContainer = document.createElement('div');
mainContainer.classList.add('container');
document.body.appendChild(mainContainer);

// Create heading
var heading = document.createElement('h2');
heading.textContent = 'Color Image Gallery';
mainContainer.appendChild(heading);

// Create feature image container
var featureImageContainer = document.createElement('div');
featureImageContainer.id = 'featureImageContainer';
featureImageContainer.style.width = '100px';
featureImageContainer.style.height = '100px';
featureImageContainer.style.border = '1px solid #000';
featureImageContainer.style.display = 'inline-block';
featureImageContainer.style.verticalAlign = 'top';
featureImageContainer.style.marginRight = '10px';
mainContainer.appendChild(featureImageContainer);

// Create feature image
var featureImage = document.createElement('div');
featureImage.id = 'featureImage';
featureImage.style.width = '100%';
featureImage.style.height = '100%';
featureImageContainer.appendChild(featureImage);

// Create button container
var buttonContainer = document.createElement('div');
buttonContainer.classList.add('container');
document.body.appendChild(buttonContainer);

// Create buttons
var buttonLabels = ['All', 'Red', 'Green', 'Blue'];
var buttonColors = ['all', 'red', 'green', 'blue'];

for (var i = 0; i < buttonLabels.length; i++) {
  var button = document.createElement('button');
  button.textContent = buttonLabels[i];
  button.id = buttonColors[i] + 'Btn';
  buttonContainer.appendChild(button);
}

// Create dropdown container
var dropdownContainer = document.createElement('div');
dropdownContainer.classList.add('container');
document.body.appendChild(dropdownContainer);

// Create dropdown
var dropdown = document.createElement('select');
dropdown.id = 'colorDropdown';
dropdownContainer.appendChild(dropdown);

// Create dropdown options
var dropdownOptions = ['All', 'Red', 'Green', 'Blue'];

for (var j = 0; j < dropdownOptions.length; j++) {
  var option = document.createElement('option');
  option.value = buttonColors[j];
  option.textContent = dropdownOptions[j];
  dropdown.appendChild(option);
}

// Create thumbnails container
var thumbnailsContainer = document.createElement('div');
thumbnailsContainer.classList.add('container');
document.body.appendChild(thumbnailsContainer);

// Create thumbnails
var thumbnailColors = ['red', 'green', 'blue', 'red', 'green', 'blue'];

for (var k = 0; k < thumbnailColors.length; k++) {
  var thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.style.backgroundColor = thumbnailColors[k];
  thumbnailsContainer.appendChild(thumbnail);
}

// Apply basic styling
var style = document.createElement('style');
style.textContent = `
  .container {
    margin-bottom: 20px;
  }

  .thumbnail {
    display: inline-block;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #000;
  }

  #featureImage {
    width: 100%;
    height: 100%;
    background-color: red; /* Set the default color here (e.g., 'red') */
  }

  /* Button styles */
  button {
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    margin-right: 10px;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;
document.head.appendChild(style);

// Event handler for all button
document.getElementById('allBtn').addEventListener('click', function() {
  showImages('all');
});

// Event handler for red button
document.getElementById('redBtn').addEventListener('click', function() {
  showImages('red');
});

// Event handler for green button
document.getElementById('greenBtn').addEventListener('click', function() {
  showImages('green');
});

// Event handler for blue button
document.getElementById('blueBtn').addEventListener('click', function() {
  showImages('blue');
});

// Event handler for color dropdown
document.getElementById('colorDropdown').addEventListener('change', function() {
  var selectedColor = this.value;
  showImages(selectedColor);
});

// Call the showImages function with the default color 'red'


// Function to show/hide images based on selected color
function showImages(color) {
  var thumbnails = document.getElementsByClassName('thumbnail');
  var featureImage = document.getElementById('featureImage');

  for (var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];

    if (color === 'all' || thumbnail.style.backgroundColor === color) {
      thumbnail.style.display = 'inline-block';
    } else {
      thumbnail.style.display = 'none';
    }
  }

  // Set the selected color as the background of the feature image
  featureImage.style.backgroundColor = color;
}