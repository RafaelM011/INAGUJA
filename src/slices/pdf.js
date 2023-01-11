import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePdf =(orderData) => {
const {datos_generales, datos_proveedor, datos_contrato, datos_tabla} = orderData;
const {proceso, fecha, tipo, numero, descripcion, modalidad} = datos_generales;
const {razon, rnc, nombre, domicilio, telefono} = datos_proveedor;
const {anticipo, forma_de_pago, plazo, monto, moneda} = datos_contrato;

const tabla = datos_tabla.map(dato => {
    const {item, codigo, descripcion, cantidad, unidad, precio, itbis} = dato;
    return [
        {text:item, margin:[0,2.5,0,2.5]},
        {text:codigo, margin:[0,2.5,0,2.5]},
        {text:descripcion, alignment:'left', margin:[0,2.5,0,2.5]},
        {text:cantidad, margin:[0,2.5,0,2.5]},
        {text:unidad, margin:[0,2.5,0,2.5]},
        {text:precio, margin:[0,2.5,0,2.5]},
        {text:itbis, margin:[0,2.5,0,2.5]},
    ]
})
tabla.unshift(
    [
        {text:"Item", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"Código", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"Descripción", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"Cantidad", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"Unidad", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"Precio", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
        {text:"ITBIS", bold:true, color: "#fff", fillColor:'#1155cc', margin:[0,2.5,0,2.5]},
    ]
)

const docDefinition = {
    header: function(currentPage, pageCount){
        return {
            text: [
            'Pagina ', 
            {text: currentPage.toString(), bold:true},
            ' de ', 
            {text: pageCount, bold: true }
            ],
            alignment: 'right',
            margin: [0,20,20,0]
        }
    },
    content: [
        // https://inaguja.gob.do/images/Logos/Logo.png
        {image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABuCAYAAADRXOEbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0FGNzU4QUExOTI4MTFFQjg0NkJBRUNDM0RBQjA3NkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0FGNzU4QUIxOTI4MTFFQjg0NkJBRUNDM0RBQjA3NkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QUY3NThBODE5MjgxMUVCODQ2QkFFQ0MzREFCMDc2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QUY3NThBOTE5MjgxMUVCODQ2QkFFQ0MzREFCMDc2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhagfvgAAC0OSURBVHja7J0JfBRF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',width:270, alignment:'left'},
        {columns: [
            {width: '*', text: '' },
            {width: 'auto',
                table: {
                    headerRows: 0,
                    widths: [230],
                    body:[
                        [{text: 'No. EXPEDIENTE', border: [true,true,true,false], fillColor: '#1155cc', bold: true, color: '#fff'}],
                        [{text: proceso, border: [true,false,true,true], bold: true}]
                    ]
                },
                alignment: 'center'        
            }
        ]},
        {text: [{text: 'Fecha de emisión: ', bold:true}, fecha + '\n\n'], alignment: 'right', margin: [0,0,40,0]},
        {text: 'INDUSTRIA NACIONAL DE LA AGUJA', bold: true, alignment:'center'},
        {text: tipo + '\n\n', bold: true, alignment:'center'},
        {text: 'Unidad operativa de Compras y Contrataciones\n\n', alignment:'center'},
        {text: ['No. Orden: ', {text: numero + "\n\n",bold:true}]},
        {text: ['Descripción: ', {text: descripcion + "\n\n",bold:true}]},
        {text: ['Modalidad de compras: ', {text: modalidad + "\n\n",bold:true}]},
        {table: {
            widths:['*'], 
            body: [[{text:"Datos del Proveedor", bold:true, color: "#fff", fillColor:'#1155cc', border: [false]}]] 
        }},
        {text: ['\nRazón social: ', {text: razon + '\n\n', bold:true}]},
        {text: ['RNC: ' , {text: rnc + '\n\n', bold:true}]},
        {text: ['Nombre Comercial: ', {text: nombre + '\n\n', bold:true}]},
        {text: ['RDomicilio Comercial: ', {text: domicilio + '\n\n', bold:true}]},
        {text: ['Telefono: ', {text: telefono + '\n\n', bold:true}]},
        {table: {
            widths:['*'], 
            body: [[{text:"Datos Generales del Contrato", bold:true, color: "#fff", fillColor:'#1155cc', border: [false]}]] 
        }},
        {text: ['\nAnticipo: ', {text: anticipo + '\n\n', bold:true}]},
        {text: ['Forma de pago: ', {text: forma_de_pago + '\n\n', bold:true}]},
        {text: ['Plazo de pago con recepción conforme: ', {text: plazo + '\n\n', bold:true}]},
        {text: ['Monto Total: ', {text: monto + '\n\n', bold:true}]},
        {text: ['Moneda: ', {text: moneda + '\n\n', bold:true}]},
        {table: {
            widths:['*'], 
            body: [[{text:"Detalle", bold:true, color: "#fff", fillColor:'#1155cc', border: [false]}]] 
        }},
        {text:"\n"},
        {table: {
            widths:['auto','auto','*','auto','auto','auto','auto'], 
            body: tabla,
            },
            alignment: 'center' 
        },
        {text: "\n\n\n"},
        {table: {
            widths: ['*','auto'],
            body: [
                [{text:'Subtotal RD$', bold:true, alignment:'right', margin:[0,2.5,0,2.5]}, {text:'10,000.00', bold:true, alignment:'left', margin:[0,2.5,10,2.5]}],
                [{text:'Total descuento RD$', bold:true, alignment:'right', margin:[0,2.5,0,2.5]}, {text:'0.00', alignment:'left', margin:[0,2.5,10,2.5]}],
                [{text:'Total ITBIS RD$', bold:true, alignment:'right', margin:[0,2.5,0,2.5]}, {text:'18,000.00', alignment:'left', margin:[0,2.5,10,2.5]}],
                [{text:'Total otros impuestos RD$', bold:true, alignment:'right', margin:[0,2.5,0,2.5]}, {text:'165,000.00', alignment:'left', margin:[0,2.5,10,2.5]}],
                [{text:'Total RD$', bold:true, alignment:'right', margin:[0,2.5,0,2.5]}, {text:'118,000.00', bold:true, alignment:'left', margin:[0,2.5,10,2.5]}],
            ]
        }}
    ],
    footer: [
        {
            table: {
                widths:['*'], 
                body: [[{text:"FIRMAS RESPONSABLES AUTORIZADOS", bold:true, color: "#fff", fillColor:'#000', border: [false]}]] 
            },
            margin: [20,0]
        },
        {text:"\n\n\n"},
        {
            table: {
                widths:['*',50,'*'], 
                body: [
                    [{text: 'FIRMA', bold:true, border: [false,true,false,false], alignment:'center'},{text: '',border: [false]},{text: 'FIRMA', bold:true, border: [false,true,false,false], alignment:'center'}]
                ] 
            },
            margin: [20,0]
        },
        {text:"\n\n\n"},
        {
            table: {
                widths:['*',50,'*'], 
                body: [
                    [{text: 'Nombre y Apellido', bold:true, border: [false,true,false,false], alignment:'center'},{text: '',border: [false]},{text: 'Nombre y Apellido', bold:true, border: [false,true,false,false], alignment:'center'}]
                ] 
            },
            margin: [20,0]
        },
        {text: '\n' + proceso, alignment:'center', fontSize: 10}
    ],
    images: {
        logo: './Logo.png'
    },
    pageMargins: [20,40,20,190]
}

pdfMake.createPdf(docDefinition).download();
}