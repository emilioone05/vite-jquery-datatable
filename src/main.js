import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';

// Importas el nuevo archivo JSON complejo
import datosEscuelas from './datos_escuelas.json'; 

$(document).ready(function () {
    $('#myTable').DataTable({ 
        data: datosEscuelas,
        columns: [
            // Datos directos
            { data: 'amie', title: 'Código AMIE' },
            { data: 'institucion', title: 'Institución' },
            
            // Usamos el PUNTO para entrar a los objetos anidados
            { data: 'ubicacion.provincia', title: 'Provincia' },
            { data: 'ubicacion.canton', title: 'Cantón' },
            { data: 'detalles.sostenimiento', title: 'Sostenimiento' },
            { data: 'estadisticas.estudiantes', title: 'Total Estudiantes' }
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        }
    });
});