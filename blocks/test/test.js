export default async function decorate(block) {
    block.textContent = ""; // clear existing content

    // Create container
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.display = 'inline-block';
    container.classList.add("dropdown-container")

    // Create dropdown
    const select = document.createElement('select');
    select.style.padding = '8px';
    select.style.fontSize = '16px';
    select.style.borderRadius = '4px';
    select.style.border = '1px solid #ccc';
    select.classList.add("drowdown-select-container")

    // Example options
    const options = ['Select an option', 'Option 1', 'Option 2', 'Option 3'];
    options.forEach((optionText, index) => {
        const option = document.createElement('option');
        option.value = index === 0 ? "" : optionText.toLowerCase().replace(/\s+/g, '-');
        option.classList.add("select-option")
        option.textContent = optionText;
        select.appendChild(option);
    });

    // Handle selection change
    select.addEventListener('change', (e) => {
        console.log('Selected:', e.target.value);
        // Optionally, you can dispatch a custom event:
        // block.dispatchEvent(new CustomEvent('dropdown-change', { detail: e.target.value }));
    });

    container.appendChild(select);
    block.appendChild(container);
}
