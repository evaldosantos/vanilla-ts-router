window.onload = () => {
  const routeElements: NodeListOf<HTMLElement> = document.querySelectorAll('.route');

  // Add history push() event when boxes are clicked
  routeElements.forEach(routeElement => routeElement.addEventListener('click', pushEvent));
}

function pushEvent(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  // Get id attribute of the box or button or link clicked
  let id = target.id;
  // Visually select the clicked button/tab/box
  selectTab(id);
  // Update Title in Window's Tab
  document.title = id;
  // Load content for this tab/page
  loadContent(id);
  // Finally push state change to the address bar
  window.history.pushState({id}, `${id}`, `/page/${id}`);
}

function selectTab(id: string): void {
  console.log("select tab", id);
}

function loadContent(id: string) {
  console.log("loading content...", id);
}