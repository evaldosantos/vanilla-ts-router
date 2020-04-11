window.onload = () => {
  const routeElements: NodeListOf<HTMLElement> = document.querySelectorAll('.route');

  // Add history push() event when boxes are clicked
  routeElements.forEach(routeElement => routeElement.addEventListener('click', pushEvent));
}

window.addEventListener("popstate", popStateEvent);

function popStateEvent(event: PopStateEvent): void {
  // Grab the history state id
  let stateId = event.state.id;
  // Visually select the clicked button/tab/box
  selectTab(stateId);
  // Load content for this tab/page
  loadContent(stateId);
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
  window.history.pushState({id}, `${id}`, `/${id}`);
}

function unselect(item: HTMLElement): void {
  item.classList.remove('selected')
}

function select(item: HTMLElement): void {
  item.classList.add('selected')
}

function selectTab(id: string): void {
  // remove selected class from all buttons
  document.querySelectorAll(".route").forEach(unselect);
  // select clicked element (visually)
  document.querySelectorAll("#" + id).forEach(select);
}

function loadContent(id: string) {
  document.querySelector("#content").innerHTML = 'Content loading for /' + id + '...';
}