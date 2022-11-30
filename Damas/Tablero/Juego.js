const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
 console.log(document.getElementById('sidebar'))
});

// Drap anda Drop


const fila = document.getElementById('fila');
const fila1 = document.getElementById('7');

Sortable.create(fila,fila1,  {
	animation: 150,
	chosenClass: "seleccionado",
	// ghostClass: "fantasma"
	dragClass: "drag",

	onEnd: () => {
		console.log('Se inserto un elemento');
	},
	group: "lista-personas",
	store: {
		// Guardamos el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},

		// Obtenemos el orden de la lista
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		}
	}
});