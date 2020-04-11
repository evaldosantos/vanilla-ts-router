window.onload = () => {
  const routeElements: NodeListOf<HTMLElement> = document.querySelectorAll('.route');

  // Add history push() event when boxes are clicked
  routeElements.forEach(routeElement => routeElement.addEventListener('click', pushEvent));
}

function pushEvent(event) {  
  console.log(event);
}
