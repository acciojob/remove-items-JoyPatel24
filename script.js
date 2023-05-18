//your JS code here. If required.
function removeSelectedColor() {
  // Get the colorSelect dropdown element
  let colorSelect = document.getElementById('colorSelect');
  
  // Get the selected index
  let selectedIndex = colorSelect.selectedIndex;
  
  // Remove the selected option from the dropdown
  colorSelect.options[selectedIndex].remove();
}
