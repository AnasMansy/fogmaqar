let data = [];

// Fetch data from the JSON file
fetch('company_data.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
    });

const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredResults = data.filter(item => 
        item.management.toLowerCase().includes(query) ||
        item.office.toLowerCase().includes(query) ||
        item.employee.toLowerCase().includes(query)
    );

    resultsContainer.innerHTML = '';
    filteredResults.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.building} - ${item.management} - ${item.office} - ${item.employee}`;
        resultsContainer.appendChild(li);
    });
});

function searchToggle(obj, evt){
    const container = obj.closest('.search-wrapper');
    if(!container.classList.contains('active')){
          container.classList.add('active');
          evt.preventDefault();
    } else if(container.classList.contains('active') && obj.closest('.input-holder') === null){
          container.classList.remove('active');
          container.querySelector('.search-input').value = '';
          container.querySelector('.search-input').focus();
          evt.preventDefault();
    }
}
