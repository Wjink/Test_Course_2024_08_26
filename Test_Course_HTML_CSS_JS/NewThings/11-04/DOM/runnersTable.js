
const tableBody = document.querySelector("#table-body");
export function addRunnerToTable(runner, category){
    tableBody.innerHTML += `<tr>
					<td>1.</td>
					<td>${runner.name}</td>
					<td>${runner.surname}</td>
					<td>${runner.age}</td>
					<td>${runner.weight}kg</td>
					<td>${category}</td>
				</tr>`
}