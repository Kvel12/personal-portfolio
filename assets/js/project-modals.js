/**
 * Project Modals JS
 * Handles the functionality for project portfolio modals and lightbox galleries
 */

$(document).ready(function() {
  // Inicializar VenoBox para lightbox de imágenes
  $('.lightbox').venobox({
    titleattr: 'data-title',
    numeratio: true,
    infinigall: true,
    spinner: 'wandering-cubes',
    spinColor: '#f0bb62',
    closeBackground: '#1b1e22',
    closeColor: '#fff',
    bgcolor: '#1b1e22',
    overlayColor: 'rgba(0,0,0,0.85)',
    numerationBackground: '#1b1e22',
    numerationColor: '#fff',
    arrowsColor: '#f0bb62'
  });
  
  // Modal open function
  $('.open-modal').on('click', function(e) {
    e.preventDefault();
    var projectId = $(this).data('project');
    $('#modal-' + projectId).modal('show');
    return false;
  });
  
  // Close modal when clicking X
  $('.modal .close').on('click', function() {
    $(this).closest('.modal').modal('hide');
  });
  
  // Cerrar modal con escape
  $(document).keyup(function(e) {
    if (e.key === "Escape") { 
      $('.modal').modal('hide');
    }
  });
  
  console.log("Project modals script loaded successfully!");
});