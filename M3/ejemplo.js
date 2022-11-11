const moment = require('moment');
moment.locale('es'); 
console.log('Nací' + moment('18/07/1993','DD/MM/YYYY').fromNow());