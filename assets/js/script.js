let tab = document.querySelector('#tab tbody')
let valueA = 15
tab.innerHTML = ''

for (let valueB = 0; valueB < 11; valueB++) {
    let result = valueA * valueB
    let template = `
        <td>${valueA}</td>
        <td>X</td>
        <td>${valueB}</td>
        <td>=</td>
        <td>${result}</td>
     `
    let tr = document.createElement('tr')
    tr.innerHTML = template
    tab.append(tr)
}