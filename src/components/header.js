import { content } from "../index.js";

const renderHeader = () => {
    const header = document.createElement("header");
    header.innerHTML= `
    <nav class ="navbar">
        <h1 class="title">Weather App</h1>
        <div>
            <input type="text" id="searchBar" placeholder="Search...">
            <button id="searchBtn">Search</button>
        </div>
    </nav>
    `;
    content.appendChild(header);

}

export { renderHeader };