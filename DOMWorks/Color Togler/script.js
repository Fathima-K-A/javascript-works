function handleClick(event){
    let color=event.target.value;  //d or s

    let rootElement=document.querySelector("#root")

    rootElement.removeAttribute("class")

    rootElement.setAttribute("class",`bg-${color}`)
}