import { serie } from './serie';  // Asegurémonos de importar Serie para tener su tipo
import { series } from './data';
import { promedio_series } from './data';

window.onload = () => {
    populateTable();
};

function populateTable(): void {
    const tableBody = document.querySelector('tbody');
    
    if (tableBody) {
        // Limpiamos el contenido existente
        tableBody.innerHTML = '';

        //iteramos sobre cada serie en las series capturadas en data.ts
        series.forEach((serie: serie) => {
            const row: HTMLTableRowElement = document.createElement('tr');

            const idCell: HTMLTableCellElement = document.createElement('td');
            idCell.textContent = serie.id.toString();

            const nameCell: HTMLTableCellElement = document.createElement('td');
            nameCell.textContent = serie.title;
            // Agregar propiedad visual de color azul a la letra para indicar que es un link
            nameCell.classList.add("text-primary");
            // Add inline CSS for cursor
            nameCell.style.cursor = "pointer";
            // Agregar controlador de eventos aquí:
            nameCell.addEventListener('click', () => displayShowInfo(serie));

            const channelCell: HTMLTableCellElement = document.createElement('td');
            channelCell.textContent = serie.channel;

            const seasonsCell: HTMLTableCellElement = document.createElement('td');
            seasonsCell.textContent = serie.seasons.toString();

            row.append(idCell, nameCell, channelCell, seasonsCell);
            tableBody.appendChild(row);
        });
        displayShowInfo(series[0]);
    }

    var promedioSeries = document.getElementsByClassName("promedio_series")[0] as HTMLParagraphElement;
    promedioSeries.textContent = `Seasons average: ${promedio_series}`;    
}

// Función para mostrar la información de la serie en la tarjeta:
function displayShowInfo(serie: serie): void {
    //obtener los elementos de las cards de bootstrap
    const cardTitle: HTMLElement | null = document.querySelector('.card-title');
    const cardText: HTMLElement | null = document.querySelector('.card-text');
    const cardImg: HTMLImageElement | null = document.querySelector('.card-img-top');
    const cardLink: HTMLAnchorElement | null = document.querySelector('.card-link');

    if (cardTitle && cardText && cardImg && cardLink) {
        cardTitle.textContent = serie.title;
        cardText.textContent = serie.description;  
        cardImg.src = serie.img;
        cardLink.textContent = serie.url_direction;  
    }
}
